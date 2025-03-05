import { findAllStudent } from "./students.js";
import {findAllCourse} from "./course.js"
import {findAllPayments} from "./payments.js"
import {findAllUsers} from "./users.js"

const students = document.querySelector ("#students > strong");
const course = document.querySelector("#course > strong");
const payments = document.querySelector("#payments > strong");
const users = document.querySelector("#users > strong");

students.innerHTML = findAllStudent();
course.innerHTML = findAllCourse();
users.innerHTML = findAllUsers ();

const money = JSON.parse(findAllPayments());
payment.dataset.format = money.format;
payments.innerHTML = findAllPayments();

