import { openModal, closeModal } from './components/modal.js';
import { formatDateto12HourFormat } from './components/date.js';
import { isStringEmpty } from './utils/string.js';

let modalTitle = '';
let missingRequiredFields = true;

// Utils
var sanitizeHTML = function (str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
};

// Main code here
const handleSubmitErrors = (event) => {
    let valid = true;

    // Validate Name
    const nameInput = document.getElementById('Name');
    const nameError = document.getElementById('name-error');
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'inline';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validate Email
    const emailInput = document.getElementById('Email');
    const emailError = document.getElementById('email-error');
    if (emailInput.value.trim() === '') {
        emailError.style.display = 'inline';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate Message
    const messageInput = document.getElementById('Message');
    const messageError = document.getElementById('message-error');
    if (messageInput.value.trim() === '') {
        messageError.style.display = 'inline';
        valid = false;
    } else {
        messageError.style.display = 'none';
    }

    // If any field is invalid, prevent form submission
    if (!valid) {
        event.preventDefault();
    }
};

function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('und-form-id');
    const formData = new FormData(form);
    const data = {
        name: formData.get('Name'),
        email: formData.get('Email'),
        message: formData.get('Message'),
    };

    // Simulate server-side processing and generating mock data
    const mockResponse = {
        id: generateUUID(),
        name: data.name,
        email: data.email,
        message: data.message,
        receivedAt: new Date().toISOString(),
    };

    console.log('isStringEmpty(data.name)', isStringEmpty(data.name));
    console.log('isStringEmpty(data.email)', isStringEmpty(data.email));
    console.log('isStringEmpty(data.message)', isStringEmpty(data.message));

    if (
        !isStringEmpty(data.name) &&
        !isStringEmpty(data.email) &&
        !isStringEmpty(data.message)
    ) {
        missingRequiredFields = false;
    }

    modalTitle = missingRequiredFields ? 'Error!' : 'Mensaje enviado';

    if (!missingRequiredFields) {
        const draft = `
          Hola ${
              mockResponse.name
          }, gracias por ponerte en contacto con nosotros.\n
          Mensaje enviado el día ${formatDateto12HourFormat(
              mockResponse.receivedAt
          )}.
        `;
        document.getElementById('info-content').textContent =
            sanitizeHTML(draft);

        document.getElementById('modal-title').textContent =
            sanitizeHTML(modalTitle);
    }
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            const r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const btnSubmit = document.getElementById('und-button-form-contact');
    btnSubmit.addEventListener('click', (event) => {
        handleSubmit(event);
        handleSubmitErrors(event);

        if (missingRequiredFields) {
            console.log('Missing required fields', missingRequiredFields);
            console.log('modalTitle', modalTitle);
            return;
        }

        openModal('modal-info');
    });

    const spanClose = document.getElementsByClassName('close-modal-info')[0];
    spanClose.addEventListener('click', () => {
        closeModal('modal-info');
    });
});
