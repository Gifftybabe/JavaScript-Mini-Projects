function loveCal() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const error = document.getElementById('error');
    const answer = document.getElementsByClassName('heading');
    const message = document.getElementsByClassName('message');

    error.style.visibility = 'hidden';

    if (firstName.value === "" || lastName.value === "") {
        error.style.visibility = 'visible';
        error.innerText = "Name cannot be empty";
        error.style.color = "orange";
    } else if (firstName.value.length < 3 || lastName.value.length < 3) {
        error.style.visibility = 'visible';
        error.innerText = "Name must be at least 3 characters.";
        error.style.color = "orange";
    } else {
        var love = Math.ceil(Math.random() * 100) + 1;
        answer[0].innerText = love + "%";
        answer[0].style.visibility = 'visible';

        if (love < 40) {
            message[0].innerText = `${firstName.value} and ${lastName.value}, it's not looking great...`;
        } else if (love >= 40 && love <= 60) {
            message[0].innerText = `${firstName.value} and ${lastName.value}, you have a moderate chance of success!`;
        } else {
            message[0].innerText = `${firstName.value} and ${lastName.value}, congratulations for being a wonderful couple!`;
        }
    }
}
