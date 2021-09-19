class UserController {
    constructor(formid) {

        this.form = document.getElementById(formid);
        this.onSubmit();
    }

    onSubmit() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.getValues();
        })
    }

    message(user) {
        console.log(user);
    }

    validation(element) {
        if (["email", "password"].indexOf(element.name) > -1 && !element.value) {
            element.classList.remove("success")
            element.classList.add("error")
            return false;
        } else {
            element.classList.remove("error")
            element.classList.add("success")

        }
        window.location = './home.html'

    }

    getValues() {
        let user = {};
        let isvalid = true;


        [...this.form.elements].forEach((element, index) => {
            isvalid = this.validation(element);

            if (element.name) {
                user[element.name] = element.value;
            }
        })
        if (!isvalid) {
            return false;
        }
        let object = new User(user.email, user.password);

        this.message(object);
    }
}