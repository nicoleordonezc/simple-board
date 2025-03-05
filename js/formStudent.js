export const loadStudent = ()=>{
    const DB = (localStorage.getItem("students")) ? JSON.parse(localStorage.getItem("students")) : [];
    return DB
}

export const transformInputFormulary = (e)=>{
    const data = Object.fromEntries(FormData(e.target));
    data.phone = Number(data.phone);
    data.enroll_number = Number(data.enroll_number);
    data.date_of_admission = new Date().toISOString();
    return data
}

export const showRowsTable(DB) = ()=>{
    for (let i = 0; i < DB.lenght;i++ ){
        const tr = document.createElement("tr");
        const tdImage = document.createElement("td");
        const imgStudent = document.createElement("img");
        imgStudent.src = "#";
        imgStudent.alt = "student";
        tdImage.append(imgStudent);
        const tdName = document.createElement("td");
        tdName.textContent= DB[i].name;
        const tdEmail = document.createElement("td");
        tdEmail.textContent= DB[i].email;
        const tdPhone = document.createElement("td");
        tdPhone.textContent= DB[i].phone;
        const tdEnroll_number = document.createElement("td");
        tdEnroll_number.textContent= DB[i].enroll_number;
        tr.append()
    }
}

export const save = (data)=>{
    const DB = loadStudent();
    DB.push(data);

}