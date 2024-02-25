import { User } from '../components/User/User.js';
import { users } from './database.js';

class Form {
    constructor() {
        this.section = this.section();
        this.container = this.container();
        this.formBlockWrapper = this.formBlockWrapper();
        this.formBlock = this.formBlock();
        this.formBlockBtn = this.formBlockBtn();
        this.formTitle = this.formTitle('InTube');
        this.formWrapper = this.formWrapper();
        this.formLogin = this.formLogin();
        this.formRegistration = this.formRegistration();
    }

    Button(title, onClickCallback) {
        const button = document.createElement('button');
        button.append(title);
        button.addEventListener('click', onClickCallback);

        return button;
    }

    section() {
        const section = document.createElement('section');
        section.classList.add('section');

        return section;
    }

    container() {
        const container = document.createElement('div');
        container.classList.add('container');

        return container;
    }

    formBlockWrapper() {
        const formBlockWrapper = document.createElement('div');
        formBlockWrapper.classList.add('form-block-wrapper');

        return formBlockWrapper;
    }

    formBlock() {
        const formBlock = document.createElement('div');
        formBlock.classList.add('form-block');

        return formBlock;
    }

    formBlockBtn() {
        const formBlockBtn = document.createElement('div');
        formBlockBtn.classList.add('form-block-btn');

        const signInBtn = this.Button('sign in', () => {
            sliderForm(this.formWrapper, '0px', signInBtn, signUpBtn);
        });
        signInBtn.classList.add('form-block-item-btn', 'active');

        const signUpBtn = this.Button('sign up', () => {
            sliderForm(this.formWrapper, '-350px', signUpBtn, signInBtn);
        });
        signUpBtn.classList.add('form-block-item-btn');

        formBlockBtn.append(signInBtn, signUpBtn);

        return formBlockBtn;
    }

    formTitle(title) {
        const h2 = document.createElement('h2');
        h2.classList.add('form-title');
        h2.append(title);

        return h2;
    }

    formWrapper() {
        const formWrapper = document.createElement('div');
        formWrapper.classList.add('form-wrapper');

        return formWrapper;
    }

    formLogin() {
        const form = document.createElement('form');
        form.classList.add('form');

        const inputEmail = document.createElement('input');
        inputEmail.classList.add('form-input');
        inputEmail.type = 'email';
        inputEmail.name = 'Email';
        inputEmail.required = true;
        inputEmail.placeholder = 'Login/Email';

        const inputPassword = document.createElement('input');
        inputPassword.classList.add('form-input', 'login-password');
        inputPassword.type = 'password';
        inputPassword.name = 'Password';
        inputPassword.required = true;
        inputPassword.placeholder = 'Password';

        const link = document.createElement('a');
        link.classList.add('form-link');
        link.href = '#';
        link.innerText = 'Forgot your password?';

        const loginBtn = this.Button('Login', () => {
            dataVerification(inputEmail, inputPassword);
        });
        loginBtn.classList.add('form-btn');
        loginBtn.type = 'submit';

        form.append(inputEmail, inputPassword, loginBtn, link);

        return form;
    }

    formRegistration() {
        const form = document.createElement('form');
        form.classList.add('form');

        const inputName = document.createElement('input');
        inputName.classList.add('form-input');
        inputName.type = 'text';
        inputName.name = 'Name';
        inputName.required = true;
        inputName.placeholder = 'Username';

        const inputEmail = document.createElement('input');
        inputEmail.classList.add('form-input');
        inputEmail.type = 'email';
        inputEmail.name = 'Email';
        inputEmail.required = true;
        inputEmail.placeholder = 'Login/Email';

        const inputPassword = document.createElement('input');
        inputPassword.classList.add('form-input');
        inputPassword.type = 'password';
        inputPassword.name = 'Password';
        inputPassword.required = true;
        inputPassword.placeholder = 'Password';

        const inputPasswordDouble = document.createElement('input');
        inputPasswordDouble.classList.add('form-input');
        inputPasswordDouble.type = 'password';
        inputPasswordDouble.name = 'Password';
        inputPasswordDouble.required = true;
        inputPasswordDouble.placeholder = 'Confirm the password';

        const registrationBtn = this.Button('Sign up', () => {
            userRegistration(
                inputName,
                inputEmail,
                inputPassword,
                inputPasswordDouble
            );
        });
        registrationBtn.classList.add('form-btn');

        form.append(
            inputName,
            inputEmail,
            inputPassword,
            inputPasswordDouble,
            registrationBtn
        );

        return form;
    }
}

export const NewInstanceForm = new Form();

function sliderForm(wrapper, position, buttonAdd, buttonRemove) {
    wrapper.style.left = position;
    buttonAdd.classList.add('active');
    buttonRemove.classList.remove('active');
}

function dataVerification(inputEmail, inputPassword) {
    const guest = {
        email: inputEmail.value,
        password: inputPassword.value,
    };
    inputEmail.value = '';
    inputPassword.value = '';

    let email = false;
    let password = false;

    for (const user of users) {
        if (user.email === guest.email && user.password === guest.password) {
            email = true;
            password = true;
            break;
        } else if (
            user.email === guest.email &&
            user.password !== guest.password
        ) {
            email = true;
            password = false;
            break;
        } else if (user.email !== guest.email) {
            email = false;
        }
    }

    if (email && password) {
        window.location.href = '/home.html';
    } else if (email === false) {
        inputEmail.classList.add('error');

        inputEmail.addEventListener('input', () => {
            inputEmail.classList.remove('error');
        });
    } else if (email === true && password === false) {
        inputPassword.classList.add('error');

        inputPassword.addEventListener('input', () => {
            inputEmail.classList.remove('error');
        });
    }
}

function userRegistration(
    inputName,
    inputEmail,
    inputPassword,
    inputPasswordDouble
) {
    const user = new User(
        inputName.value,
        inputEmail.value,
        inputPassword.value
    );
    console.log(user);
}
