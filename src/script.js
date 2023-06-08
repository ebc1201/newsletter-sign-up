// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          const successForm = document.querySelector('form');
          const container = document.querySelector('.container');
          const success = document.querySelector('.success');

          successForm.addEventListener('submit', (event) => {
            event.preventDefault();
            container.classList.add('hide');
            success.classList.remove('hide');
          });
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
