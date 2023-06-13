(function () {
  'use strict';

  var form = document.querySelector('.needs-validation');
  var emailInput = document.getElementById('emailInput');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
    } else {
      const container = document.querySelector('.container');
      const successContainer = document.querySelector('.success');

      container.classList.add('hide');
      successContainer.classList.remove('hide');

      var email = emailInput.value;

      localStorage.setItem('email', email);

      document.getElementById('userEmail').textContent = email;
    }
  });
})();
