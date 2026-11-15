'use strict';

// English lives in the HTML (works without JS and for search engines).
// Spanish lives here; English is read from the page on load so both stay in sync.

const es = {
  "title": "Javier Herrero Pérez, científico de datos",
  "tagline": "Científico de datos en Whizdom.ai, físico de formación.",
  "location": "Salamanca, España",
  "cv": "CV (PDF)",

  "about.title": "Sobre mí",
  "about.p1": "Estudié Física en la Universidad de Salamanca y me pasé a la ciencia de datos porque quería seguir haciendo lo que más me gustaba de ella: entender cómo funciona un sistema antes de fiarme de un resultado. Estoy terminando el Máster en Ciencia de Datos de la Universidad de Valencia.",
  "about.p2": "Desde agosto de 2026 trabajo en Whizdom.ai en modelos de abandono y supervivencia para plataformas de juego online. Buena parte del trabajo es comprobar que los datos significan lo que creemos que significan, y después construir modelos sencillos que aguanten en producción. También me interesan los modelos de lenguaje y los agentes.",

  "exp.title": "Experiencia",
  "exp.w.when": "ago 2026 – hoy",
  "exp.w.org": "Whizdom.ai, en remoto",
  "exp.w.summary": "Investigación y desarrollo de predicción de abandono para operadores de iGaming, desde los datos en bruto hasta producción.",
  "exp.w.1": "Construí un modelo de abandono con LightGBM calibrado y un modelo de supervivencia de Cox para horizontes de 7, 14 y 30 días. En un backtest de 11 meses mejora el AUC en más de 0,2 respecto al score que había en producción.",
  "exp.w.2": "Audité las variables de producción y encontré fugas de información y errores de definición en la recencia, la antigüedad y los días activos antes de que llegaran al modelo.",
  "exp.w.3": "Monté un pipeline reproducible que va de los datos en bruto a las puntuaciones diarias de cada jugador con un solo comando, con DuckDB, ClickHouse, MLflow, Feast y Docker.",
  "exp.a.when": "jul – ago 2024",
  "exp.a.role": "Prácticas en ciencia de datos",
  "exp.a.1": "Clasifiqué el riesgo laboral a partir de sensores ambientales con un Random Forest (F1 macro de 0,99) y expliqué sus decisiones con SHAP.",
  "exp.a.2": "Extraje variables de tono y emoción de grabaciones de entrevistas con Whisper y pysentimiento para apoyar la preselección de candidatos.",

  "proj.title": "Proyectos",
  "proj.telco.t": "Abandono de clientes de telecomunicaciones",
  "proj.telco.d": "Clasificador de abandono que usa como variables las anomalías de facturación sacadas de los residuos de una regresión, con un ensemble por votación y un umbral de decisión ajustado. AUC de 0,85.",
  "proj.nlp.t": "Clickbait en la prensa española",
  "proj.nlp.d": "Comparamos titulares con el cuerpo de la noticia en nueve medios españoles usando embeddings y modelos de temas, y construimos un agente con LangChain que extrae y etiqueta titulares nuevos. Equipo de siete personas.",
  "proj.cal.d": "Estima las calorías de un plato a partir de una foto. Un modelo de visión y lenguaje identifica los alimentos y las cantidades, y los nutrientes salen de la base de datos del USDA. Equipo de dos personas.",
  "proj.air.t": "Riesgo laboral a partir de la calidad del aire",
  "proj.air.d": "Clasificación del riesgo en seis clases a partir de datos de sensores, con variables de exposición ponderadas en el tiempo y SMOTE para un desbalance de 27 a 1. F1 macro de 0,99.",
  "proj.lal.t": "Formación laboral e ingresos",
  "proj.lal.d": "Análisis causal de los datos de Lalonde sobre un programa de formación: propensity score, trimming para mejorar el solapamiento y regresión ajustada, revisando cada supuesto de identificación.",
  "proj.lal.s": "Inferencia causal, propensity score",
  "proj.port.t": "Optimización de carteras con AutoARIMA",
  "proj.port.d": "Predicciones a un paso, sin sesgo de anticipación, que alimentan carteras de media-varianza y de utilidad logarítmica. Obtuvo la máxima nota de la asignatura.",
  "proj.sent.t": "Sentimiento en entrevistas de trabajo",
  "proj.sent.d": "Puntuaciones de emoción para 1.502 fragmentos de entrevistas transcritas, combinadas con un modelo exponencial de sentimiento y un análisis del vocabulario de cada persona.",
  "proj.aed.t": "Brecha de género en el mercado laboral español",
  "proj.aed.d": "Análisis exploratorio de la actividad y el paro en España por sexo y grupo de edad, con gráficos animados. Proyecto en grupo.",

  "skills.title": "Herramientas",
  "skills.prog": "Programación",
  "skills.ml": "Modelado",
  "skills.ml.d": "scikit-learn, LightGBM, XGBoost, SHAP, Optuna, análisis de supervivencia, inferencia causal",
  "skills.dl": "Deep learning",
  "skills.data": "Datos",
  "skills.lang": "Idiomas",
  "skills.lang.d": "Español (nativo), inglés (B1+, nivel profesional)",

  "edu.title": "Formación",
  "edu.msc": "Máster en Ciencia de Datos",
  "edu.msc.org": "Universidad de Valencia, nota media 8,86/10",
  "edu.bsc": "Grado en Física",
  "edu.bsc.org": "Universidad de Salamanca, nota media 7,25/10",

  "footer": "Actualizado en noviembre de 2026."
};

const CV = {
  en: "./out/Javier_Herrero_Pérez_CV.pdf",
  es: "./out/Javier_Herrero_Pérez_CV_ES.pdf"
};

const nodes = document.querySelectorAll('[data-i18n]');
const en = { title: document.title };
nodes.forEach(el => { en[el.dataset.i18n] = el.innerHTML; });
const dict = { en, es };

function setLang(lang, remember) {
  const t = dict[lang] || en;
  nodes.forEach(el => {
    const value = t[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
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
