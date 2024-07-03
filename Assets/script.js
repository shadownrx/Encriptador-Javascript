const d = document;
const textarea = d.getElementById("miTextarea");
const muneco = d.querySelector(".result__img");
const carga = d.querySelector("#carga");
const resultTitle = d.getElementById("result__title");
const resultText = d.getElementById("result__text");
const copiarBtn = d.getElementById("copiarBtn");
const themeToggleBtn = d.getElementById("themeToggleBtn");

// Función para encriptar un mensaje
function encriptarMensaje(mensaje) {
  const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"],
  ];

  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;
    for (let j = 0; j < llaves.length; j++) {
      if (letra === llaves[j][0]) {
        encriptada = llaves[j][1];
        break;
      }
    }
    mensajeEncriptado += encriptada;
  }
  return mensajeEncriptado;
}

// Función para desencriptar un mensaje
function desencriptarMensaje(mensaje) {
  const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"],
  ];

  let mensajeDesencriptado = mensaje;

  for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
  }

  return mensajeDesencriptado;
}

// Evento cuando se presiona el botón Encriptar
d.getElementById("encriptarBtn").addEventListener("click", function (event) {
  event.preventDefault();
  let mensaje = textarea.value.toLowerCase();
  let mensajeEncriptado = encriptarMensaje(mensaje);
  resultText.textContent = mensajeEncriptado;
  resultTitle.textContent = "Mensaje encriptado:";
  mostrarResultado();
});

// Evento cuando se presiona el botón Desencriptar
d.getElementById("desencriptarBtn").addEventListener("click", function (event) {
  event.preventDefault();
  let mensaje = textarea.value.toLowerCase();
  let mensajeDesencriptado = desencriptarMensaje(mensaje);
  resultText.textContent = mensajeDesencriptado;
  resultTitle.textContent = "Mensaje desencriptado:";
  mostrarResultado();
});

// Evento cuando se presiona el botón Copiar
copiarBtn.addEventListener("click", function () {
  let textoCopiado = resultText.textContent;
  navigator.clipboard.writeText(textoCopiado).then(function () {
    resultTitle.textContent = "Texto copiado!";
  });
});

// Evento para cambiar entre Modo Oscuro y Modo Claro
themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "Modo Claro";
  } else {
    themeToggleBtn.textContent = "Modo Oscuro";
  }
});

// Función para mostrar el resultado en la interfaz
function mostrarResultado() {
  carga.classList.add("hidden");
  muneco.classList.add("hidden");
  resultTitle.classList.remove("hidden");
  resultText.classList.remove("hidden");
  copiarBtn.classList.remove("hidden");
}
