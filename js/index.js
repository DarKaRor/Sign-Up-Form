const Select = (query) => document.querySelector(query);


let form = Select('.form');
let firstName,
    lastName,
    email,
    password

let inputs;
let values = [];

const getInputs = () =>{
    firstName = Select('#firstName');
    lastName = Select('#lastName');
    email = Select('#email');
    password = Select('#password');
    inputs = [firstName, lastName, email, password];
}

getInputs();

let containerClass = "form__container";

const testReg = (val, reg) => reg.test(val);

const turnError = (element) => {
    console.log(element.parentNode);
    let container = element.parentNode;
    container.classList.add(containerClass + "--error");
    if (container.querySelectorAll(".form__errorIcon").length <= 0) container.innerHTML += "<div class='form__errorIcon'></div>";
}

const isEmail = (val) => testReg(val,/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const turnNormal = () => {
    let errorClass = containerClass + "--error";
    document.querySelectorAll("." + errorClass).forEach(e => e.classList.remove(errorClass));
    document.querySelectorAll(".form__errorIcon").forEach(e => e.remove());
}

form.addEventListener('submit', function (e) {

    e.preventDefault();
    getInputs();
    turnNormal();

    inputs.forEach((input, i) => {
        values[i] = input.value ? input.value : '';
        input.setAttribute('value', values[i]);

        if (!input.value) turnError(input);
    });

    if(!isEmail(email.value)) turnError(email);

});