
const add__student = document.querySelector("#add__student");
const dialog__add_student = document.querySelector("#dialog__add_student");
const dialog__close = document.querySelector("#dialog_close");


add__student.addEventListener("click", ()=>{
    dialog__add_student.showModal();
});

dialog__close.addEventListener("click", ()=>{
    dialog__add_student.close();
});