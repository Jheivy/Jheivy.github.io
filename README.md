# jheivy.github.io

Personal portfolio and CV of **Javier Herrero Pérez**, Data Scientist & AI Researcher. Live at **https://jheivy.github.io**.

## Structure

- `index.html`: the whole site, one page. English text lives in the HTML.
- `assets/js/script.js`: Spanish translations and the ES/EN switch (`?lang=es` also works).
- `assets/css/style.css`: styles.
- `Javier_Herrero_Pérez_CV.tex` and `Javier_Herrero_Pérez_CV_ES.tex`: CV in English and Spanish. The compiled PDFs live in `out/` and are linked from the site.

## Building the CV

```bash
latexmk -pdf -outdir=out "Javier_Herrero_Pérez_CV.tex"
latexmk -pdf -outdir=out "Javier_Herrero_Pérez_CV_ES.tex"
```

Only the PDF in `out/` is committed; LaTeX by-products are ignored.

## Credits

Originally based on the [vCard personal portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) template by codewithsadee (MIT License, see `LICENSE`).
