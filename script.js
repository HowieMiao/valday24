// script.js

document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');

    currentScale = 1;
    messagePos = 0;
    
    // Redirect to a new page on Yes button click
    yesButton.addEventListener('click', function () {
        // Replace 'newPage.html' with the actual URL you want to redirect to
        window.location.href = 'exit.html';
    });

    // Move the no button randomly on hover
    noButton.addEventListener('mouseover', function () {
        const maxX = 900;
        const maxY = 450;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        currentScale += 0.5;
        yesButton.style.transform = `scale(${currentScale})`;

        this.style.position = 'absolute';
        this.style.left = randomX + 'px';
        this.style.top = randomY + 'px';

        switch (messagePos) {
            case 0:
                yesButton.innerHTML = "Yes!";
                noButton.innerHTML = "no";
                break;
            case 1:
                yesButton.innerHTML = "YES!";
                noButton.innerHTML = "Nice Try";
                break;
            case 2:
                yesButton.innerHTML = "YES I WILL!";
                noButton.innerHTML = "Any Doggers?";
                break;
            case 3:
                yesButton.innerHTML = "YES YES YES";
                noButton.innerHTML = "Not Happening";
                break;
            case 4:
                yesButton.innerHTML = "YES A MILLION TIMES YES";
                noButton.innerHTML = "Zero Chance";
                break;
            // Add more cases as needed
            default:
                yesButton.innerHTML = "YES YOU ARE MY ONE AND ONLY CHOICE";
                noButton.innerHTML = "Oh Cwap";
                break;
        }

        messagePos += 1
    });
});
