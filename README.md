# NSWC PHD-26-S-0001 Proposal Draft

Working proposal draft for the NSWC PHD-26-S-0001 Broad Agency Announcement.

## Topic

Topic 2: Hypersonic & Suborbital Research and Validation

## Working Title

Reinforcement Learning-Augmented Multi-Model Predictive Guidance for Hypersonic Glide Vehicles

## Proposing Institution

California State University, Long Beach  
Department of Mechanical and Aerospace Engineering

## Structure

- `baa-summary.md` - BAA notes and opportunity summary
- `proposal-outline.md` - Working concept outline
- `latex/main.tex` - Main LaTeX proposal draft
- `latex/sections/` - Section-level LaTeX source files
- `latex/references.bib` - Bibliography file

## Build

From the `latex/` directory:

```bash
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

The current machine may need a LaTeX distribution such as TeX Live or MiKTeX installed before PDF compilation.
