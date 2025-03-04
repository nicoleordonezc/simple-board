import {findDataByForm} from "./formSignIn.js";

const form_login = document.querySelector("#form_login");
const dialog_login = document.querySelector("#dialog_login");
const dialog_loginClose = document.querySelector("#dialog_loginClose");

form_login.addEventListener("submit", findDataByForm) // Al dar click al boton de formularion se ejecuta la funcion findDataByForm
dialog_loginClose.addEventListener("click", (e) => dialog_login.close() ) // Al dar click a icono x del dialogo lo cierra 