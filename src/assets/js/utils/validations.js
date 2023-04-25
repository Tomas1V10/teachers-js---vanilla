//Encargado para utilizar validaciones con jss

export function validateForm(fieldConfigurations) {
    let isValid = true;

    fieldConfigurations.forEach((fieldConfig) => {

        fieldConfig.validations.forEach((validationConfig) => {

            const currentFieldIsValid = validateField(fieldConfig.input, validationConfig);
            isValid = isValid && currentFieldIsValid;

        });

    });

    return isValid;

}


function validateField(input, validateConfig) {
    const { errorId, errorMessage, validationFunction } = validateConfig;
    const fieldIsValid = validationFunction(input.value);

    if (!fieldIsValid) {
        input.classList.add('is-invalid');
        const errorMessageElement = createErrorMessageElement(errorId, errorMessage);
        input.insertAdjacentElement('afterend', errorMessageElement);
    } else {
        input.classList.add('is-valid');
    }
    return fieldIsValid;
}


function createErrorMessageElement(errorId, errorMessage) {
    const errorMessageElement = document.createElement('div');
    errorMessageElement.classList.add('invalid-feedback');
    errorMessageElement.setAttribute('id', errorId);
    errorMessageElement.textContent = errorMessage;
    return errorMessageElement;

}

function removeErrorMessageElements() {

}

function removeInputErrorMessage() {

}