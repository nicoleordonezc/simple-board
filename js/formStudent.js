export const loadStudent = ()=>{
    const DB = (localStorage.getItem("student")) ? JSON.parse(localStorage.getItem("student")) : [];
    return DB
}

export const save = (data)=>{
    const DB = loadStudent();
    DB.push(data);
    showRowsTable([data]);
    localStorage.setItem("student", JSON.stringify(DB));
    return {status: 201, message:`El estudiente ${data.name} fue registrado exitosamente.`}
}

export const transformInputFormulary = (e)=>{
    const data = Object.fromEntries(new FormData(e.target));
    data.phone = Number(data.phone);
    data.enroll_number = Number(data.enroll_number);
    data.date_of_admission = new Date().toISOString();
    return data
}

export const showRowsTable = (DB)=>{
    for (let i = 0; i < DB.length;i++ ){
        const tr = document.createElement("tr")
        const tdImage = document.createElement("td");
        const imgStudent = document. createElement("img");
        imgStudent.src = "../storage/img/pexels-photo-2379004 1.svg"
        imgStudent.alt = "student";
        tdImage.append(imgStudent);
        const tdName = document.createElement("td");
        tdName.textContent= DB[i].name;
        const tdEmail = document.createElement("td");
        tdEmail.textContent= DB[i].email;
        const tdPhone = document.createElement("td");
        tdPhone.textContent= DB[i].phone;
        const tdEnroll_number = document.createElement("td");
        tdEnroll_number.textContent= DB[i].enroll__number;
        const tdDate_of_admission = document.createElement("td");
        tdDate_of_admission.textContent= DB[i].date_of_admission;
        tr.append(tdImage, tdName, tdEmail, tdPhone, tdEnroll_number, tdDate_of_admission);
        table__student.append(tr);
    }
}