// encargado de la interacción y configuración del formulario

/**
 * Este objeto contiene las referencias a los elementos clave del formulario
 */
export const formElements = {
    form: document.getElementById('teacherForm'),
    fields: {
        name: document.getElementById('txtName'),
        description: document.getElementById('txtDescription'),
        email: document.getElementById('txtEmail'),
        birthDate: document.getElementById('txtBirthDate'),
    }
};

export const fieldConfigurations = [
    {
        input: formElements.fields.name,
        validations: [
            {
                errorId: `${formElements.fields.name.id}Required`,
                errorMessage: 'El Nombre es obligatorio',
                validationFunction: (value) => {
                    return value.trim() !== '';
                }
            }
        ]

    },

    {
        input: formElements.fields.description,
        validations: [
            {
                errorId: `${formElements.fields.description.id}Required`,
                errorMessage: 'La descripción es obligatoria',
                validationFunction: (value) => {
                    return value.trim() !== '';
                }
            }
        ]

    }
];

export function getFormData() {
    /**
     * const formData = new FormData(formElements.form);
     * return Object.fromEntries(formData.entries());
     */

    const teacher = {
        id: new Date().getTime(),
        name: formElements.fields.name.value,
        description: formElements.fields.description.value,
        email: formElements.fields.email.value,
        birthDate: formElements.fields.birthDate.value,
    };
    return teacher;
}

export function resetForm() {
    formElements.form.reset();
}