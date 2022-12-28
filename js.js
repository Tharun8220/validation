const form = document.getElementById("form");
      const username = document.getElementById("username");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const password2 = document.getElementById("password2");

      //Show input error messages
      function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-control error";
        const small = formControl.querySelector("small");
        small.innerText = message;
      }

      //show success colour
      function showSucces(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
      }

      //check email is valid
      function checkEmail(input) {
        const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value.trim())) {
          showSucces(input);
        } else {
          showError(input, "Email Is Not Invalid");
        }
      }

      //checkRequired fields
      function checkRequired(inputArr) {
        inputArr.forEach(function (input) {
          if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} Is Required`);
          } else {
            showSucces(input);
          }
        });
      }

      //check input Length
      function checkLength(input, min, max) {
        if (input.value.length < min) {
          showError(
            input,
            `${getFieldName(input)} Must Be At Least ${min} Characters`
          );
        } else if (input.value.length > max) {
          showError(
            input,
            `${getFieldName(input)} Must Be LesS Than ${max} Characters`
          );
        } else {
          showSucces(input);
        }
      }

      //get FieldName
      function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
      }

      // check passwords match
      function checkPasswordMatch(input1, input2) {
        if (input1.value !== input2.value) {
          showError(input2, "Passwords Does Not Match - Please Enter A Correct Password");
        }
      }

      //Event Listeners
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        checkRequired([username, email, password, password2]);
        checkLength(username, 4, 18);
        checkLength(password, 5, 20);
        checkEmail(email);
        checkPasswordMatch(password, password2);
      });





     