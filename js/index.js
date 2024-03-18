// Datos estudiante
let inputNombresEst = document.querySelector("#nombre_estudiante");
let campoEstud = document.querySelector(".campo_estudiante");
let fechaGeneracion = new Date().toLocaleString("en-US");
let campoFechaGenera = document.querySelector(".fecha_generacion");
let inputColegio = document.querySelector("#nombre_colegio");
let campoColegio = document.querySelector(".campo_colegio");
let inputCiudad = document.querySelector("#ciudad");
let campoCiudad = document.querySelector(".campo_ciudad");
let inputCurso = document.querySelector("#curso");
let campoCurso = document.querySelector(".campo_curso");
let inputJornada = document.querySelector("#jornada");
let campoJornada = document.querySelector(".campo_jornada");

// Notas Estudiante
let inputNotaMatema = document.querySelector("#matematicasNota");
let campoNotaMatema = document.querySelector(".prueba1 > .nota-prueba");
let inputNotaLecturaC = document.querySelector("#lecturaNota");
let campoNotaLecturaC = document.querySelector(".prueba2 > .nota-prueba");
let inputNotaSociales = document.querySelector("#socialesNota");
let campoNotaSociales = document.querySelector(".prueba3 > .nota-prueba");
let inputNotaCiencias = document.querySelector("#cienciasNota");
let campoNotaCiencias = document.querySelector(".prueba4 > .nota-prueba");
let inputNotaIngles = document.querySelector("#inglesNota");
let campoNotaIngles = document.querySelector(".prueba5 > .nota-prueba");

// puntaje global
let inputResCorrectas = document.querySelector("#res_acertadas");
let campoPuntajeGlobal = document.querySelector(
  ".puntaje_global > .puntaje_total"
);

// puntaje decil
let campoDecil = document.querySelector(".puntaje_decil > .puntaje_total");



// boton comprobar
let btnComprobar = document.querySelector("#btnComprobar");

// barra de notas(grafico de notas)
let graficoNota = [...document.querySelectorAll(".grafico-nota > span")];


// texto resultado prueba
let textNivel = [...document.querySelectorAll(".texto_nivel")];
let textResultado = [...document.querySelectorAll(".texto_resultado")];
let textEspecifico = [...document.querySelectorAll(".texto_especifico")];



// Datos estudiante
inputNombresEst.addEventListener("input", () => {
  campoEstud.textContent = inputNombresEst.value;

  document.title = inputNombresEst.value;
});

campoFechaGenera.textContent = fechaGeneracion;

inputColegio.addEventListener("input", () => {
  campoColegio.textContent = inputColegio.value;
});

inputCiudad.addEventListener("input", () => {
  campoCiudad.textContent = inputCiudad.value;
});

inputCurso.addEventListener("input", () => {
  campoCurso.textContent = inputCurso.value;
});

inputJornada.addEventListener("input", () => {
  campoJornada.textContent = inputJornada.value;
});

//** Puntaje global

inputResCorrectas.addEventListener("input", () => {
  campoPuntajeGlobal.textContent = inputResCorrectas.value * 2;
});
//notas alumno
inputNotaMatema.addEventListener("input", ()=>{
  campoNotaMatema.textContent = inputNotaMatema.value;
  let width = inputNotaMatema.value * 10;
  graficoNota[0].style.width = width + "%";
});
inputNotaLecturaC.addEventListener("input", () => {
  campoNotaLecturaC.textContent = inputNotaLecturaC.value;

  let width = inputNotaLecturaC.value * 10;
  graficoNota[1].style.width = width + "%";
});
inputNotaSociales.addEventListener("input", () => {
  campoNotaSociales.textContent = inputNotaSociales.value;

  let width = inputNotaSociales.value * 10;
  graficoNota[2].style.width = width + "%";
});
inputNotaCiencias.addEventListener("input", () => {
  campoNotaCiencias.textContent = inputNotaCiencias.value;

  let width = inputNotaCiencias.value * 10;
  graficoNota[3].style.width = width + "%";
});
inputNotaIngles.addEventListener("input", () => {
  campoNotaIngles.textContent = inputNotaIngles.value;

  let width = inputNotaIngles.value * 10;
  graficoNota[4].style.width = width + "%";
});

//** Puntaje decil
btnComprobar.addEventListener("click", () => {
  let notasAcumulado =
    parseFloat(campoNotaIngles.textContent) +
    parseFloat(campoNotaCiencias.textContent) +
    parseFloat(campoNotaSociales.textContent) +
    parseFloat(campoNotaLecturaC.textContent) +
    parseFloat(campoNotaMatema.textContent);

  if (isNaN(Math.round(notasAcumulado / 5))) {
    campoDecil.textContent = 0;
  }

  campoDecil.textContent = Math.round(notasAcumulado / 5);
  let result = campoDecil.textContent

  if(result >= 0 && result <= 2.5){
      textNivel[0].textContent = `Nivel 1 Insuficiente de 0% a 25%`
      textResultado[0].textContent = `El estudiante que se ubica en este nivel probablemente puede leer información puntual
      (un dato, por ejemplo) relacionada con situaciones cotidianas y presentada en tablas o gráficas con escala explícita,
      cuadrícula o, por lo menos, líneas horizontales; pero puede tener dificultades al comparar distintos conjuntos de datos,
      involucrar diferentes variables o analizar situaciones alejadas de su vida diaria.`
      textEspecifico[0].textContent = `No aplica ningún descriptor`

    }else if(result >=2.6 && result <= 5.0){
      textNivel[0].textContent = `Nivel 2 Mínimo de 26% a 50%`
      textResultado[0].textContent = `Además de lo descrito en el nivel anterior, el estudiante que se ubica en este nivel es
      capaz de hacer comparaciones y establecer relaciones entre los datos presentados, e identificar y extraer información local
      y global de manera directa. Lo anterior en contextos familiares o personales que involucran gráficas con escala explícita,
      cuadrícula o, por lo menos, líneas horizontales u otros formatos con poca información.`
      textEspecifico[0].textContent = `Para clasificar en este nivel, el estudiante:
      • Compara datos de dos variables presentadas en una misma gráfica sin necesidad de hacer operaciones aritméticas.
      • Identifica valores o puntos representativos en diferentes tipos de registro a partir del significado que tienen en la situación.
      • Compara la probabilidad de eventos simples (casos favorables/casos posibles), cuando los casos posibles son los mismos en ambos eventos y en contextos similares a los presentados en el aula.
      • Toma decisiones sobre la veracidad o falsedad de una afirmación cuando esta se puede explicar verbalizando la lectura directa que se hace de la información.
      • Cambia gráficas de barras a tablas de doble entrada.
      • Reconoce e interpreta según el contexto el significado de promedio simple, moda, mayor, menor, máximo y mínimo.`

    }else if(result >=5.1 && result <= 7.5){
      textNivel[0].textContent = `Nivel 3 Sastifactorio de 51% a 75%`
      textResultado[0].textContent = `Además de lo descrito en los niveles anteriores, el estudiante que se ubica en este nivel selecciona
      información, señala errores y hace distintos tipos de transformaciones y manipulaciones aritméticas y algebraicas sencillas; esto para
      enfrentarse a problemas que involucran el uso de conceptos de proporcionalidad, factores de conversión, áreas y desarrollos planos, en
      contextos laborales u ocupacionales, matemáticos o científicos, y comunitarios o sociales.`
      textEspecifico[0].textContent = `Para clasificar en este nivel, el estudiante:
      • Selecciona la gráfica (que puede ser de doble entrada correspondiente a la información de una tabla, o a partir de verbalizaciones (características de crecimiento o decrecimiento deseadas), teniendo en cuenta para la selección la escala, el tipo de variable y el tipo de gráfica.
      • Compara información gráfica que requiere algunas manipulaciones aritméticas.
      • Señala información representada en formatos no convencionales (mapas o infografías).
      • Reconoce errores ocurridos al realizar una trasformación entre diferentes tipos de registro.
      • Reconoce desarrollos planos de una forma tridimensional y viceversa.
      • Compara la probabilidad de eventos simples en diversos contextos (casos favorables/casos posibles), incluso cuando los casos posibles de cada evento son diferentes.
      • Selecciona información necesaria para resolver problemas que involucran operaciones aritméticas.
      • Selecciona información necesaria para resolver problemas que involucran características medibles de figuras geométricas elementales (triángulos, cuadriláteros y circunferencias).
      • Cambia la escala cuando la trasformación no es convencional.
      • Justifica afirmaciones utilizando planteamientos y operaciones aritméticas o haciendo uso directo de un concepto, es decir, a partir de un único argumento.
      • Identifica información relevante cuando el tipo de registro contiene información de más de tres categorías.
      • Hace manipulaciones algebraicas sencillas (aritmética de términos semejantes).`
    }else if(result >=7.6 && result <= 10){
      textNivel[0].textContent = `Nivel 4 Avanzado de 75% a 100%`
      textResultado[0].textContent = `Además de lo descrito en los niveles anteriores, el estudiante que se ubica en este nivel
      resuelve problemas y justifica la veracidad o falsedad de afirmaciones que requieren el uso de conceptos de probabilidad,
      propiedades algebraicas, relaciones trigonométricas y características de funciones reales. Lo anterior, en contextos principalmente
      matemáticos o científicos abstractos.`
     textEspecifico[0].textContent = `Para clasificar en este nivel, el estudiante:
     • Resuelve problemas que requieren interpretar información de eventos dependientes.
     • Realiza transformaciones de subconjuntos de información que pueden requerir el uso de
     operaciones complejas (cálculos de porcentajes).
     • Resuelve problemas que requieren construir una representación auxiliar (gráficas y
     fórmulas) como paso intermedio para su solución.
     • Modela usando lenguaje algebraico información dada en lenguaje natural, tablas o
     representaciones geométricas.
     • Manipula expresiones algebraicas o aritméticas haciendo uso de las propiedades de las
     operaciones.
     • Modela fenómenos variacionales no explícitos haciendo uso de lenguaje simbólico o
     gráficas.
     • Reconoce en diferentes formatos el espacio muestral de un experimento aleatorio.
     • Resuelve problemas de conteo que requieren el uso de permutaciones.
     • Justifica si hay falta de información en una situación problema para tomar una decisión.
     • Toma decisiones sobre la veracidad o falsedad de una afirmación cuando requiere el uso
     de varias propiedades o conceptualizaciones formales.`
  }
});