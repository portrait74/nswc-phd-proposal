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
- `latex/main.tex` - Combined working LaTeX proposal draft
- `latex/volume1_technical.tex` - Volume I technical proposal draft
- `latex/volume2_cost.tex` - Volume II cost proposal draft
- `latex/sections/` - Section-level LaTeX source files
- `latex/sections-v2/` - Volume II cost proposal section files
- `latex/references.bib` - Bibliography file

## Build

From the `latex/` directory:

```bash
pdflatex volume1_technical.tex
bibtex volume1_technical
pdflatex volume1_technical.tex
pdflatex volume1_technical.tex
```

To build Volume II:

```bash
pdflatex volume2_cost.tex
```

The current machine may need a LaTeX distribution such as TeX Live or MiKTeX installed before PDF compilation.
