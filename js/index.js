document.addEventListener("DOMContentLoaded", (event) => {
    let joinForm = document.getElementById("join-form");

    joinForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let emailField = document.getElementById("email");

        const regex = /^[\+a-zA-Z0–9._-]+[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;

        regex.test(emailField.value)
            ? alert('Welcome to the team!')
            : alert('Email is invalid');
    });
});
