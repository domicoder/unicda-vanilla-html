import {
    openModal,
    closeModal,
    closeModalOutside,
} from './components/modal.js';
import { scrollToElementById } from './utils/document.js';

// [*start] Modal chat - services
document.addEventListener('DOMContentLoaded', () => {
    const btnChatServices = document.getElementById('btn-chat-services');
    btnChatServices.addEventListener('click', () =>
        openModal('modal-services')
    );
    const spanClose = document.getElementsByClassName(
        'close-modal-services'
    )[0];
    spanClose.addEventListener('click', () => closeModal('modal-services'));

    const btnGetStarted = document.getElementById('btn-get-started');
    btnGetStarted.addEventListener(
        'click',
        () => (window.location = 'auth.html')
    );

    const btnServices = document.getElementById('btn-services');
    btnServices.addEventListener('click', () => openModal('modal-services'));

    const btnMoreAbout = document.getElementById('btn-more-about');
    btnMoreAbout.addEventListener('click', () =>
        scrollToElementById('content-section')
    );

    closeModalOutside('modal-services');
});
// [*end] Modal chat - services
