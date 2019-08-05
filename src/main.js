let muro = document.getElementById("muro");
let logIn = document.getElementById("logIn");
let menu = document.getElementById("navigation")
let registro = document.getElementById("registroCorreo")
logIn.style.display = "block";
registro.style.display = "none"
muro.style.display = "none";
menu.style.display = "none"


const mostrarMuroFb = () => {
  menu.style.display = "block";
  muro.style.display = "block";
  logIn.style.display = "none";
  registro.style.display = "none";
//window.guanataco.printPosts();
}
document.getElementById("Facebook").addEventListener("click", window.guanataco.loginFacebook);
document.getElementById("publicar").addEventListener("click", window.guanataco.posts);

const mostrarMuroGoogle = () => {
  menu.style.display = "block"
  muro.style.display = "block";
  logIn.style.display = "none";
  registro.style.display = "none";

  // window.guanataco.printPosts();
}
document.getElementById("google").addEventListener("click", window.guanataco.loginGoogle);
document.getElementById("publicar").addEventListener("click", window.guanataco.posts);

const mostrarMuroRegistro = () => {
  menu.style.display = "block"
  muro.style.display = "block";
  logIn.style.display = "none";
  registro.style.display = "none";
  login();
}
document.getElementById("botonIngresar").addEventListener("click", mostrarMuroRegistro);

/*
const mostrarMuro = () => {
  menu.style.display="block"
  muro.style.display = "block";
  logIn.style.display = "none";
  registro.style.display = "none"
};
*/
const regresarLogin = () => {
  logIn.style.display = "block";
  menu.style.display = "none";
  muro.style.display = "none";
  registro.style.display = "none";
  logout();
};

document.getElementById("cerrarSesion").addEventListener("click", regresarLogin);

const formularioRegistro = () => {
  registro.style.display = "block"
  menu.style.display = "none"
  logIn.style.display = "none";
  muro.style.display = "none";

};

document.getElementById("botonRegistrar").addEventListener("click", formularioRegistro);

const registroExitoso = () => {
  //alert("Te has registrado con exito")
  registro.style.display = "block"
  menu.style.display = "none"
  logIn.style.display = "none";
  muro.style.display = "none";
  register();

};

document.getElementById("register").addEventListener("click", registroExitoso);

const regresarInicio = () => {
  logIn.style.display = "block";
  menu.style.display = "none";
  muro.style.display = "none";
  registro.style.display = "none";
  };

document.getElementById("regresarInicio").addEventListener("click", regresarInicio);
