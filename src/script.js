const form = document.querySelector('form');
const container = document.querySelector('.container');
const success = document.querySelector('.success');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  container.classList.add('hide');
  success.classList.remove('hide');
});

(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
