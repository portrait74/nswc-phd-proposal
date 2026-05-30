const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const pdfkitRoot =
  process.env.PDFKIT_ROOT || path.join(process.env.TEMP || ".", "openclaw-pdfkit");
const PDFDocument = require(path.join(pdfkitRoot, "node_modules", "pdfkit"));

const inputPath = path.join(repoRoot, "docs", "NSWC_PHD-26-S-0001_BAA_ko.md");
const outputPath = path.join(repoRoot, "docs", "NSWC_PHD-26-S-0001_BAA_ko.pdf");
const regularFont = "C:\\Windows\\Fonts\\NotoSansKR-VF.ttf";
const fallbackFont = "C:\\Windows\\Fonts\\malgun.ttf";
const fontPath = fs.existsSync(regularFont) ? regularFont : fallbackFont;

function cleanInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1 ($2)");
}

function writeParagraph(doc, text, options = {}) {
  const {
    size = 10.5,
    font = "regular",
    indent = 0,
    spacingAfter = 6,
    color = "black",
  } = options;
  doc.font(font).fontSize(size).fillColor(color);
  doc.text(cleanInline(text), {
    indent,
    width: doc.page.width - doc.page.margins.left - doc.page.margins.right - indent,
    align: "left",
    lineGap: 2,
  });
  doc.moveDown(spacingAfter / 12);
}

function main() {
  const markdown = fs.readFileSync(inputPath, "utf8").replace(/\r\n/g, "\n");
  const doc = new PDFDocument({
    size: "LETTER",
    margins: { top: 54, bottom: 54, left: 54, right: 54 },
    info: {
      Title: "NSWC PHD-26-S-0001 BAA Korean Translation",
      Author: "CSULB MAE Proposal Working Draft",
      Subject: "Korean working translation",
    },
    bufferPages: true,
  });

  doc.registerFont("regular", fontPath);
  doc.registerFont("bold", fontPath);
  doc.pipe(fs.createWriteStream(outputPath));

  const lines = markdown.split("\n");
  let paragraph = [];

  function flushParagraph() {
    if (paragraph.length === 0) return;
    writeParagraph(doc, paragraph.join(" "));
    paragraph = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph();
      writeParagraph(doc, line.replace(/^>\s*/, ""), {
        size: 9.5,
        indent: 12,
        color: "#555555",
        spacingAfter: 8,
      });
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      const level = heading[1].length;
      const text = heading[2];
      const size = level === 1 ? 18 : level === 2 ? 15 : level === 3 ? 12.5 : 11;
      const gap = level === 1 ? 12 : 8;
      doc.moveDown(level === 1 ? 0.4 : 0.2);
      writeParagraph(doc, text, { size, font: "bold", spacingAfter: gap });
      continue;
    }

    if (/^- /.test(line)) {
      flushParagraph();
      writeParagraph(doc, "• " + line.replace(/^- /, ""), {
        size: 10.2,
        indent: 14,
        spacingAfter: 4,
      });
      continue;
    }

    paragraph.push(line);
  }
  flushParagraph();

  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i += 1) {
    doc.switchToPage(i);
    doc.font("regular").fontSize(8).fillColor("#666666");
    doc.text(`NSWC PHD-26-S-0001 BAA Korean Working Translation | Page ${i + 1}`, 54, 740, {
      align: "center",
      width: 504,
    });
  }

  doc.end();
  console.log(outputPath);
}

main();
