'use strict';

// English lives in the HTML (works without JS and for search engines).
// Spanish lives here; English is read from the page on load so both stay in sync.

const es = {
  "title": "Javier Herrero Pérez, científico de datos",
  "tagline": "Científico de datos en Whizdom.ai, físico de formación.",
  "location": "Salamanca, España",
  "lede": "Físico reconvertido en científico de datos. Trabajo en Whizdom.ai y estoy terminando el Máster en Ciencia de Datos de la Universidad de Valencia.",
  "cv": "CV (PDF)",

  "proj.title": "Proyectos",
  "l.code": "Código en GitHub",
  "l.report": "Informe (PDF)",
  "l.slides": "Presentación (PDF)",

  "p.nlp.meta": "may 2026, máster, equipo de 7",
  "p.nlp.t": "Clickbait en la prensa española",
  "p.nlp.d": "Compara cada titular con el texto de su noticia en nueve medios españoles, con embeddings y modelos de temas. Un agente con LangChain extrae titulares nuevos y los etiqueta por su cuenta.",

  "p.cal.meta": "mar 2026, máster, equipo de 2",
  "p.cal.d": "Estima las calorías de un plato a partir de una foto. Un modelo de visión y lenguaje identifica los alimentos y sus cantidades, los nutrientes salen de la base de datos del USDA y lo consumido en el día se compara con el objetivo del usuario.",

  "p.lal.meta": "feb 2026, máster",
  "p.lal.t": "¿Sube la formación laboral los ingresos?",
  "p.lal.d": "Análisis causal de los datos de Lalonde. La comparación directa sugiere que el programa reduce los ingresos porque los grupos no son comparables; el propensity score y el trimming corrigen el solapamiento antes de estimar el efecto.",
  "p.lal.r": "Efecto estimado: unos +2.200 USD en los ingresos de 1978",

  "p.tel.meta": "ene 2026, proyecto individual",
  "p.tel.t": "Abandono de clientes de telecomunicaciones",
  "p.tel.d": "Clasificador de abandono que usa como variables las anomalías de facturación, sacadas de los residuos de una regresión. Un ensemble por votación con umbral ajustado permite al negocio elegir entre precisión y recall.",

  "p.por.meta": "ene 2026, máster",
  "p.por.t": "Optimización de carteras con AutoARIMA",
  "p.por.d": "Predicciones a un paso para cinco activos, sin sesgo de anticipación, que alimentan carteras de media-varianza y de utilidad logarítmica.",
  "p.por.r": "Máxima nota de la asignatura",

  "p.aed.meta": "oct – dic 2025, máster, proyecto en grupo",
  "p.aed.t": "Brecha de género en el mercado laboral español",
  "p.aed.d": "Análisis exploratorio de la actividad y el paro en España por sexo y grupo de edad desde 2006, con gráficos animados que muestran cómo cambia la brecha con el tiempo.",

  "exp.title": "Experiencia",
  "exp.w.when": "ago 2026 – hoy",
  "exp.w.org": "Whizdom.ai, en remoto",
  "exp.w.summary": "Investigación y desarrollo de modelos de machine learning para un producto de analítica de iGaming, desde la preparación de los datos hasta producción.",
  "exp.a.when": "jul – ago 2024",
  "exp.a.role": "Prácticas en ciencia de datos",
  "exp.a.org": "AIR Institute, España",
  "exp.a.summary": "Machine learning aplicado sobre datos de sensores ambientales y transcripciones de entrevistas: clasificación, NLP y explicabilidad de modelos.",

  "edu.title": "Formación",
  "edu.msc.when": "sept 2025 – hoy",
  "edu.msc": "Máster en Ciencia de Datos",
  "edu.msc.org": "Universidad de Valencia, nota media 8,86/10, TFM en curso",
  "edu.bsc": "Grado en Física",
  "edu.bsc.org": "Universidad de Salamanca, nota media 7,25/10",

  "skills.title": "Herramientas",
  "skills.prog": "Programación",
  "skills.ml": "Modelado",
  "skills.ml.d": "scikit-learn, LightGBM, XGBoost, SHAP, análisis de supervivencia, inferencia causal",
  "skills.dl": "Deep learning, NLP",
  "skills.data": "Datos y MLOps",
  "skills.lang": "Idiomas",
  "skills.lang.d": "Español (nativo), inglés (B1+, nivel profesional)",

  "footer": "Actualizado en noviembre de 2026."
};

const CV = {
  en: "./out/Javier_Herrero_Pérez_CV.pdf",
  es: "./out/Javier_Herrero_Pérez_CV_ES.pdf"
};

const nodes = document.querySelectorAll('[data-i18n]');
const labels = document.querySelectorAll('[data-i18n-label]');
const en = { title: document.title };
nodes.forEach(el => { en[el.dataset.i18n] = el.innerHTML; });
labels.forEach(el => { en[el.dataset.i18nLabel] = el.getAttribute('aria-label'); });
const dict = { en, es };

function setLang(lang, remember) {
  const t = dict[lang] || en;
  nodes.forEach(el => {
    const value = t[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  labels.forEach(el => {
    const value = t[el.dataset.i18nLabel];
    if (value !== undefined) { el.setAttribute('aria-label', value); el.title = value; }
  });
  document.title = t.title;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-cv]').forEach(a => { a.href = CV[lang]; });
  document.querySelectorAll('[data-lang]').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  if (remember) {
    try { localStorage.setItem('lang', lang); } catch (e) { /* storage unavailable */ }
  }
}

function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved;
  } catch (e) { /* storage unavailable */ }
  return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
}

document.querySelectorAll('[data-lang]').forEach(b => {
  b.addEventListener('click', () => setLang(b.dataset.lang, true));
});

setLang(initialLang());
