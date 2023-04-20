// Se encarga de la interacción de js con html
import { formElements, getFormData } from './form';
import {createTeacher, readTeachers } from './repository';
export function listeners() {
    window.addEventListener('load', () => {
        listenFormSubmitEvent();
        listTeachers();
    });
}

function listenFormSubmitEvent() {
    formElements.form.addEventListener('submit', (event) => {
        event.preventDefault();
        createTeacher(getFormData());
        listTeachers();
    });
}


export function listTeachers() {
    const arrayteachers = readTeachers();
    const tbody = document.querySelector('#tblTeachers tbody');
    tbody.innerHTML = '';

    arrayteachers.forEach( (teacher, index) => { 
        // creo la fila 
        const row = document.createElement('tr');

        // creo las columnas 
        const colId = document.createElement('td');
        colId.textContent = index

        const colName = document.createElement('td');
        colName.textContent = teacher.name;

        const colDescription = document.createElement('td');
        colDescription.textContent = teacher.Description;

        const colEmail = document.createElement('td');
        colEmail.textContent = teacher.email;

        const colBirthDate = document.createElement('td');
        colBirthDate.textContent = teacher.birthDate

        const colButtons = document.createElement('td');
        
        // agrego las columnas a la fila 
        row.appendChild(colId);
        row.appendChild(colName);
        row.appendChild(colDescription);
        row.appendChild(colEmail);
        row.appendChild(colBirthDate);
        row.appendChild(colButtons);

        // agrego la fila al tbody
        tbody.appendChild(row);

    });
        
}