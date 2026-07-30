// Change the password here
const PASSWORD = "100";

const passwordInput = document.getElementById("pw");
const unlockButton = document.querySelector("button");
const lockScreen = document.getElementById("lock");
const message = document.getElementById("msg");
const error = document.getElementById("err");

// Unlock when Enter is pressed
passwordInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        unlock();
    }
});

unlockButton.addEventListener("click", unlock);

function unlock() {

    if (passwordInput.value === PASSWORD) {

        lockScreen.style.opacity = "0";

        setTimeout(() => {

            lockScreen.style.display = "none";
            message.style.display = "block";

            typeWriter();

        }, 500);

    } else {

        error.innerText = "Wrong password.";

        passwordInput.style.border = "2px solid #ff5c5c";

        setTimeout(() => {
            passwordInput.style.border = "none";
        }, 500);
    }
}

function typeWriter() {

    const original = message.innerHTML;

    message.innerHTML = "";

    let i = 0;

    const speed = 8;

    function type() {

        if (i < original.length) {

            message.innerHTML += original.charAt(i);

            i++;

            setTimeout(type, speed);

        }

    }

    type();
}
