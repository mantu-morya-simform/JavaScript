let formDetailConfig = [
  {
    type: "text",
    placeholder: "Name",
    lable: "User Name",
    name: "userName",
    id: "name__id",
    class: "name__class",
    required: true,
  },
  {
    type: "email",
    placeholder: "Email Address",
    lable: "Email",
    name: "email",
    id: "email__id",
    class: "email__class",
    required: true,
  },
  {
    type: "text",
    placeholder: "Country",
    lable: "Country",
    name: "country",
    id: "country__id",
    class: "country__class",
    required: true,
  },
  {
    type: "password",
    placeholder: "Password",
    lable: "Password",
    name: "password",
    id: "password__id",
    class: "password__class",
    required: true,
  },
];

let errorMsgConfig = {
  userName: "UserName is Required",
  userNameLengthGrator: "UserName Length Must be grator then 8",
  userNameLengthLess: "UserName Length Must be smaller then 15",
  email: "Valid Email is Required",
  invalidEmail: "Invalid email format. Example: name@example.com",
  country: "Country Name is Required",
  password: "Valid Password is Required",
  invalidPassword:
    "Password must be at least 8 characters long with uppercase, lowercase, number & special character.",
};

const formElement = document.querySelector("#form");

formDetailConfig.map((field) => {
  formElement.innerHTML += `<div class="form__data__wraper">
        <label for="${field.name}" >${field.lable}</label>
        <input
          type="${field.type}"
          name="${field.name}"
          id="${field.id}"
          class="${field.class}"
          placeholder="${field.placeholder}"
        />
      </div>
      <p class="error" id="${field.id}-error"></p>
      `;
});

let createAccountBtnElement = document.querySelector(".create__account");

const clearForm = (inputElement, errElement) => {
  formDetailConfig.forEach((field) => {
    let inputElement = document.getElementById(field.id);
    inputElement.value = "";
  });
};

const validateName = (inputElement, errElement) => {
  console.log(errorMsgConfig["userNameLengthLess"]);

  let userName = inputElement.value.trim("");
  if (userName.length < 8) {
    errElement.textContent = "UserName Length Must be grator then 8";
    return false;
  }
  if (userName.length > 15) {
    errElement.textContent = "UserName Length Must be smaller then 15";
    return false;
  }

  return true;
};

const validateEmail = (inputElement, errElement) => {
  let userEmail = inputElement.value;
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(userEmail)) {
    errElement.textContent = "Invalid email format. Example: name@example.com";
    return false;
  }
  return true;
};

const validateCountry = (inputElement, errElement) => {
  let userCountry = inputElement.value.trim("");
  if (!userCountry || userCountry.length === 0 || userCountry.length < 4) {
    errElement.textContent = "Country Name is Required";
    return false;
  }

  return true;
};

const validatePassword = (inputElement, errElement) => {
  let userPassword = inputElement.value;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(userPassword)) {
    errElement.textContent =
      "Password must be at least 8 characters long with uppercase, lowercase, number & special character.";
    return false;
  }
  return true;
};

const formSubmit = (e) => {
  let error = false;
  let data = {};

  formDetailConfig.forEach((field) => {
    let inputElement = document.getElementById(field.id);
    let errElement = document.getElementById(`${field.id}-error`);

    errElement.textContent = "";

    if (field.required && inputElement.value.trim("") == 0) {
      errElement.textContent = errorMsgConfig[field.name];
      error = true;
    }

    if (field.name === "userName") {
      const nameValidate = validateName(inputElement, errElement);
      if (!nameValidate) {
        error = true;
      }
    }

    if (field.name === "email") {
      const mailValidate = validateEmail(inputElement, errElement);
      if (!mailValidate) {
        error = true;
      }
    }

    if (field.name && field.name === "country") {
      const countryValidate = validateCountry(inputElement, errElement);
      if (!countryValidate) {
        error = true;
      }
    }

    if (field.name && field.name === "password") {
      const passwordValidate = validatePassword(inputElement, errElement);
      if (!passwordValidate) {
        error = true;
      }
    }

    data[field.name] = inputElement.value;
  });

  if (error) return;
  clearForm();

  let allFormData = JSON.parse(localStorage.getItem("formData")) || [];
  allFormData.push(data);
  localStorage.setItem("formData", JSON.stringify(allFormData));

  console.log(allFormData);

  alert("Form Submit Sucessfully");
};

createAccountBtnElement.addEventListener("click", formSubmit);
