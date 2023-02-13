function textDisplay () {
    count += 1;
    switch (count) {
        case 1:
            text.textContent = "I know it took a while but I wanted to do something original";
            text.style.textAlign = 'center';
            break;
        case 2:
            text.textContent = "If you still don't know what this is about";
            text.style.textAlign = 'center';
            break;
        case 3:
            text.textContent = "Then this will be even better";
            text.style.textAlign = 'center';
            break;
        case 4:
            text.textContent = "Beibi, I love you so much. You make me feel calm and happy.";
            text.style.textAlign = 'center';
            break;
        case 5:
            text.textContent = "You make me feel like I have a purpose: to make you happy.";
            text.style.textAlign = 'center';
            break;
        case 6:
            text.textContent = "This empowers me to be ambitious.";
            text.style.textAlign = 'center';
            break;
        case 7:
            text.textContent = "To wake up and do better so that I can give you your best life.";
            text.style.textAlign = 'center';
            break;
        case 8:
            text.textContent = "I wanted you to know that all I do is for you.";
            text.style.textAlign = 'center';
            break;
        case 9:
            text.textContent = "I love you a lot, and that will never stop.";
            text.style.textAlign = 'center';
            break;
        case 10:
            text.textContent = "Now be prepared for what comes next.";
            text.style.textAlign = 'center';
            break;
        case 11:
            text.textContent = "A big important question lies ahead.";
            text.style.textAlign = 'center';
            break;
        case 12:
            text.textContent = "I really hope, Beibi, that you say yes.";
            text.style.textAlign = 'center';
            break;
        case 13:
            letter();
            break;
    }
}

function letter () {
    const letter = document.querySelector('.container');
    letter.innerHTML = "<div class='letter'></div>";
}

let count = 0;

const text = document.querySelector('.text');

const btn = document.querySelector('.next');
btn.addEventListener('click', textDisplay);