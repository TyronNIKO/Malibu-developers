import axios from 'axios';
// Submit btn going to modal content and clear the input after
function workTogheterInit() {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const closeModalBtn = modal.querySelector('.close-btn');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');

    function openModal() {
        modal.style.display = 'flex';
    }
    function closeModal() {
        modal.style.display = 'none';
    }

    closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        axios
            .post('https://portfolio-js.b.goit.study/api/requests', {
                email: emailInput.value,
                comment: commentInput.value,
            })
            .then(function (response) {
                successMessage.style.display = 'block';
                openModal();

                emailInput.value = '';
                commentInput.value = '';
            })
            .catch(function (error) {
                errorMessage.style.display = 'block';
            });
    });

    // Input border color changing and adding appropriate message

    const errorMessage2 = emailInput.nextElementSibling;
    const successMessage2 = errorMessage2.nextElementSibling;

    errorMessage2.style.display = 'none';
    successMessage2.style.display = 'none';

    emailInput.addEventListener('blur', function () {
        if (emailInput.value !== '') {
            if (emailInput.validity.valid) {
                emailInput.classList.add('input-valid');
                emailInput.classList.remove('input-error');
                errorMessage2.style.display = 'none';
                successMessage2.style.display = 'block';
            } else {
                emailInput.classList.add('input-error');
                emailInput.classList.remove('input-valid');
                errorMessage2.style.display = 'block';
                successMessage2.style.display = 'none';
            }
        } else {
            errorMessage2.style.display = 'none';
            successMessage2.style.display = 'none';
            emailInput.classList.remove('input-error');
            emailInput.classList.remove('input-valid');
        }
    });
}
workTogheterInit();
