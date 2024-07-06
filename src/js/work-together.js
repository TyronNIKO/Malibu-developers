// import axios from 'axios';
// document.addEventListener('DOMContentLoaded', function () {
//   const modal = document.getElementById('modal');
//   const closeModalBtn = document.querySelector('.close');
//   const form = document.getElementById('contact-form');

//   form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const data = {
//       email: formData.get('email'),
//       comment: formData.get('comment'),
//     };

//     axios
//       .post(' http://localhost:5175/api/getKey', data)
//       .then(response => {
//         if (response.status === 200) {
//           openModal();
//         } else {
//           alert('111');
//         }
//       })
//       .catch(error => {
//         alert('111');
//       });
//   });

//   closeModalBtn.addEventListener('click', function () {
//     closeModal();
//   });

//   window.addEventListener('click', function (event) {
//     if (event.target == modal) {
//       closeModal();
//     }
//   });

//   function openModal() {
//     modal.style.display = 'block';
//   }

//   function closeModal() {
//     modal.style.display = 'none';
//   }
// });
document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const errorMessage = emailInput.nextElementSibling;
  const successMessage = errorMessage.nextElementSibling;

  errorMessage.style.display = 'none';
  successMessage.style.display = 'none';

  emailInput.addEventListener('blur', function () {
    if (emailInput.value !== '') {
      if (emailInput.validity.valid) {
        emailInput.classList.add('input-valid');
        emailInput.classList.remove('input-error');
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
      } else {
        emailInput.classList.add('input-error');
        emailInput.classList.remove('input-valid');
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
      }
    } else {
      errorMessage.style.display = 'none';
      successMessage.style.display = 'none';
      emailInput.classList.remove('input-error');
      emailInput.classList.remove('input-valid');
    }
  });
});
