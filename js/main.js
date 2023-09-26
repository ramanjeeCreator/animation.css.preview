console.log('Raman is now live');

let changeIt = document.querySelector('h1');

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    document.querySelector('button').style.transform = 'translate(1vw, 1vw)';
    setTimeout(() => {
        document.querySelector('button').style.transform = 'none';
    }, 100);

    let addClass = document.querySelector('select').value;
    console.log(addClass);
    // changeIt.removeAttribute('class');
    changeIt.setAttribute('class', `animate__animated`);
    setTimeout(() => {
        changeIt.classList.add(addClass);
    }, 100);
    setTimeout(() => {
        changeIt.removeAttribute('class');
    }, 1400)
});