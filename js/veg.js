function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function santaText(text) {
    return `🎅 ${text}, ${text}, ${text} 👋`;
}

function dashText(text) {
    return '-'.repeat(text.length);
}

function formatList(selector, textFormatFunc) {
    const parentDOM = document.querySelector(selector);
    const allLiDOM = parentDOM.querySelectorAll('li');

    for (let i = 0; i < allLiDOM.length; i++) {
        const liDOM = allLiDOM[i];
        liDOM.innerText = textFormatFunc(liDOM.innerText);
    }
}

formatList('.veg', capitalize);
formatList('.fun', santaText);
formatList('.dash', dashText);

// const vegDOM = document.querySelector('.veg');
// const vegLiDOM = vegDOM.querySelectorAll('li');

// for (let i = 0; i < vegLiDOM.length; i++) {
//     const liDOM = vegLiDOM[i];
//     liDOM.innerText = capitalize(liDOM.innerText);
// }

// const funDOM = document.querySelector('.fun');
// const funLiDOM = funDOM.querySelectorAll('li');

// for (let i = 0; i < funLiDOM.length; i++) {
//     const liDOM = funLiDOM[i];
//     liDOM.innerText = formatText(liDOM.innerText);
// }

// const dashDOM = document.querySelector('.dash');
// const dashLiDOM = dashDOM.querySelectorAll('li');

// for (let i = 0; i < dashLiDOM.length; i++) {
//     const liDOM = dashLiDOM[i];
//     liDOM.innerText = dashText(liDOM.innerText);
// }
