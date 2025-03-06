import { loadStudent, transformInputFormulary, showRowsTable, save } from "./formStudent.js";

const add__student = document.querySelector("#add__student");
const dialog__add_student = document.querySelector("#dialog__add_student");
const dialog__close = document.querySelector("#dialog_close");
const form__student = document.querySelector("#form__student");
const table__student = document.querySelector("#table__student");

showRowsTable(loadStudent());


add__student.addEventListener("click", ()=>{
    dialog__add_student.showModal();
});

dialog__close.addEventListener("click", ()=>{
    dialog__add_student.close();
});

form__student.addEventListener("submit", (e)=>{
    e.preventDefault();
    const data = transformInputFormulary(e);
    const response = save(data);
    console.log(response);
    form__student.reset();
})