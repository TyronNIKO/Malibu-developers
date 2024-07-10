import axios from 'axios';
// Submit btn going to modal content and clear the input after
function workTogheterInit() {
    const formData = JSON.parse(
        localStorage.getItem('feedback-form-state')
    ) ?? {
        email: '',
        comment: '',
    };

    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const closeModalBtn = modal.querySelector('.close-btn');
    const form = document.getElementById('contact-form');
    const emailInput = form.email;
    const commentInput = form.comment;
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');

    emailInput.value = formData.email;
    commentInput.value = formData.comment;

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
    form.addEventListener('input', e => {
        formData[e.target.name] = e.target.value.trim();
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        axios
            .post('https://portfolio-js.b.goit.study/api/requests', formData)
            .then(() => {
                successMessage.style.display = 'block';
                openModal();
            })
            .catch(() => {
                errorMessage.style.display = 'block';
            });
        localStorage.clear();
        event.target.reset();
        formData.email = '';
        formData.comment = '';
    });

    // Input border color changing and adding appropriate message

    const errorMessage2 = emailInput.nextElementSibling;
    const successMessage2 = errorMessage2.nextElementSibling;

    errorMessage2.style.display = 'none';
    successMessage2.style.display = 'none';

    emailInput.addEventListener('blur', function () {
        if (emailInput.value.trim()) {
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
