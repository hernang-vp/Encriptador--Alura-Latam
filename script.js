const paraEncriptar = document.querySelector(".textToEncryp")
const encriptado = document.querySelector(".text-Encryp")
const munieco = document.querySelector(".sectionRight")
const regla = document.querySelector(".sectionRight-rule")
const seccion = document.querySelector("#sectionR")

/* INICIA EL BOTÓN DE "sectionRight" DE MODO INVISIBLE */
const mostrarCopy = document.querySelector('.btn-copy')
mostrarCopy.style.visibility = "hidden";

/* MUESTRA LA IMAGEN DEL MUÑECO SOLO SI EL VIEWPORT ES >= 900px
////// Y SOLAMENTE SI EL 'TEXTAREA' IZQ. ESTÁ VACÍO */ //////
function ifMediaQuery () {
    var mediaQueryList = window.matchMedia("(min-width: 900px)")
    if(mediaQueryList.matches) {
        munieco.style.backgroundImage = "url(./imagenes/Muñeco.png)";
      };
    mediaQueryList.addListener(function (EventoMediaQueryList) {        
        if (mediaQueryList.matches) {
            munieco.style.backgroundImage = "url(./imagenes/Muñeco.png)";
        } else {
            munieco.style.backgroundImage = "none";
        }
        }
    );
    }
////////////////////////////////////////////////////////////

function btnEncriptar() {
    if (paraEncriptar.value == "") {
        encriptado.value = "Ningún mensaje fue encontrado"
        ifMediaQuery ()
        regla.style.display = "block";
        mostrarCopy.style.visibility = 'hidden';
    } else {
        const textoEncriptado = encriptar(paraEncriptar.value);
        encriptado.value = textoEncriptado;
        paraEncriptar.value = "";
        regla.style.display = "none";
        munieco.style.backgroundImage = "none";
        mostrarCopy.style.visibility = 'visible';
    }
}

function btnDesencriptar() {
    if (paraEncriptar.value == "") {
        encriptado.value = "Ningún mensaje fue encontrado"
        ifMediaQuery ()
        regla.style.display = "block";
        mostrarCopy.style.visibility = 'hidden';
    } else {
        const textoDesncriptado = desencriptar(paraEncriptar.value);
        encriptado.value = textoDesncriptado;
        paraEncriptar.value = "";
        regla.style.display = "none";
        munieco.style.backgroundImage = "none";
        mostrarCopy.style.visibility = 'visible';
    }
}

function encriptar(stringEncrpiptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrpiptada = stringEncrpiptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncrpiptada.includes(matrizCodigo[i][0])) {
            stringEncrpiptada = stringEncrpiptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncrpiptada;
}

function desencriptar(stringEncrpiptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrpiptada = stringEncrpiptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncrpiptada.includes(matrizCodigo[i][0])) {
            stringEncrpiptada = stringEncrpiptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringEncrpiptada;
}

function copiar() {
    encriptado.select();
    navigator.clipboard.writeText(encriptado.value);
    alert("Texto copiado");
}