// =========================
// FORMULÁRIO DE LOGIN
// =========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Login realizado com sucesso!");

    });

}


// =========================
// FORMULÁRIO DE CONTATO
// =========================

const forms = document.querySelectorAll("form");

forms.forEach(function (form) {

    if (form.id !== "loginForm") {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Mensagem enviada com sucesso!");

            form.reset();

        });

    }

});