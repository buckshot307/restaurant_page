function component() {
    const header = document.createElement('header');

    

    const h1 = document.createElement('h1');

    h1.innerHTML = 'Best Burgers In Town!';
    h1.classList.add('hello');

    return h1;
}

export default component();