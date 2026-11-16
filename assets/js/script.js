'use strict';

// English lives in the HTML (works without JS and for search engines).
// Spanish lives here; English is read from the page on load so both stay in sync.

const es = {
  "title": "Javier Herrero Pérez, científico de datos",
  "tagline": "Científico de datos en Whizdom.ai, físico de formación.",
  "location": "Salamanca, España",
  "lede": "Construyo modelos de abandono y supervivencia para plataformas de juego online, y antes trabajé en NLP, inferencia causal y predicción de series durante el Máster en Ciencia de Datos. Debajo están mis proyectos, del más reciente al más antiguo.",
  "cv": "CV (PDF)",

  "proj.title": "Proyectos",
  "l.code": "Código",
  "l.report": "Informe",
  "l.slides": "Presentación",
  "p.private": "Código confidencial",

  "p.wz.meta": "ago 2026 – hoy, trabajo en Whizdom.ai",
  "p.wz.t": "Abandono y supervivencia de jugadores en producción",
  "p.wz.d": "Predice qué jugadores de una plataforma de juego online van a dejar de jugar y cuándo. Audité los datos de producción, definí el abandono a partir de ellos y construí un LightGBM calibrado y un modelo de supervivencia de Cox que puntúan a cada jugador cada día.",

  "p.nlp.meta": "may 2026, máster, equipo de 7",
  "p.nlp.t": "Clickbait en la prensa española",
  "p.nlp.d": "Compara cada titular con el texto de su noticia, con embeddings y modelos de temas. Un agente con LangChain extrae titulares nuevos y los etiqueta por su cuenta.",

  "p.cal.meta": "mar 2026, máster, equipo de 2",
  "p.cal.d": "Estima las calorías de un plato a partir de una foto. El modelo identifica los alimentos y sus cantidades, los nutrientes salen de la base de datos del USDA y lo consumido en el día se compara con el objetivo del usuario.",

  "p.lal.meta": "feb 2026, máster",
  "p.lal.t": "¿Sube la formación laboral los ingresos?",
  "p.lal.d": "Análisis causal de los datos de Lalonde. La comparación directa sugiere que el programa reduce los ingresos porque los grupos no son comparables; el propensity score y el trimming corrigen el solapamiento antes de estimar el efecto.",

  "p.tel.meta": "ene 2026, proyecto individual",
  "p.tel.t": "Abandono de clientes de telecomunicaciones",
  "p.tel.d": "Clasificador de abandono que usa como variables las anomalías de facturación, sacadas de los residuos de una regresión. Un ensemble por votación permite al negocio elegir entre precisión y recall.",

  "p.por.meta": "ene 2026, máster",
  "p.por.t": "Optimización de carteras con AutoARIMA",
  "p.por.d": "Predicciones a un paso para cinco activos, sin sesgo de anticipación, que alimentan carteras de media-varianza y de utilidad logarítmica.",

  "p.aed.meta": "oct – dic 2025, máster, proyecto en grupo",
  "p.aed.t": "Brecha de género en el mercado laboral español",
  "p.aed.d": "Análisis exploratorio de la actividad y el paro en España, con gráficos animados que muestran cómo cambia la brecha entre hombres y mujeres con el tiempo.",

  "p.air.meta": "jul – ago 2024, prácticas en AIR Institute",
  "p.air.t": "Riesgo laboral a partir de la calidad del aire",
  "p.air.d": "Clasifica el riesgo de un espacio de trabajo a partir de sensores de CO₂, temperatura y humedad, con variables de exposición ponderadas en el tiempo y SMOTE para un desbalance de 27 a 1.",

  "p.sen.meta": "jul – ago 2024, prácticas en AIR Institute",
  "p.sen.t": "Sentimiento en entrevistas de trabajo",
  "p.sen.d": "Puntuaciones de emoción para entrevistas transcritas, un modelo exponencial de cuánto pesa cada emoción en el sentimiento y un análisis del vocabulario de cada persona.",

  "p.wz.n1": "+0,2 AUC",
  "p.tel.n1": "0,85 AUC",
  "p.air.n1": "0,99 F1",
  "p.wz.n": "sobre el score de abandono que había en producción",
  "p.nlp.n1": "9 medios",
  "p.nlp.n": "de prensa española comparados",
  "p.cal.n1": "Foto → kcal",
  "p.cal.n": "con un modelo de visión y lenguaje",
  "p.lal.n1": "+2.200 USD",
  "p.lal.n": "de efecto estimado en los ingresos de 1978",
  "p.tel.n": "con un umbral de decisión ajustado",
  "p.por.n1": "Máxima nota",
  "p.por.n": "de la asignatura",
  "p.aed.n1": "Desde 2006",
  "p.aed.n": "de datos laborales por sexo y edad",
  "p.air.n": "macro, en seis niveles de riesgo",
  "p.sen.n1": "1.502",
  "p.sen.n": "fragmentos de entrevistas analizados",
  "exp.title": "Experiencia",
  "exp.w.when": "ago 2026 – hoy",
  "exp.w.org": "Whizdom.ai, en remoto",
  "exp.w.1": "Modelos de abandono y supervivencia para operadores de iGaming, desde los datos en bruto hasta las puntuaciones diarias en producción.",
  "exp.w.2": "Encontré fugas de información y errores de definición en variables clave de producción antes de que llegaran al modelo.",
  "exp.a.when": "jul – ago 2024",
  "exp.a.role": "Prácticas en ciencia de datos",
  "exp.a.summary": "Dos proyectos aplicados, riesgo laboral y sentimiento en entrevistas, ambos en la lista de arriba.",

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
