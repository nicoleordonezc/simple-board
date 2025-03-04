const dialog_message = document.querySelector("#dialog_message");

export const dialogMessage = (response)=>{ // segun la respuesta de la validacion muestra el mensaje de erors o redirecion si los datos del formulario son los mismos que en el json
    if(response.status != 200){
        dialog_login.showModal();
        dialog_message.innerHTML = response.message;
    }else{
        location.href = "views/example.html"
    }
}