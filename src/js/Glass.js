import '../css/glass.css';

(() => {
  const glassList = document.querySelectorAll('.glass');
  const count = 10;
  const offset = 5;

  glassList.forEach(glass => {
    let elem = document.createElement('div');
    const compensation = glass.clientWidth / count + offset;
    console.log(compensation);

    elem.classList.add('glass-elem');
    elem.style.width = `${compensation}px`;
    for (let i = 0; i < count; i++) {
      // for (let i = count - 1; i >= 0; i--) {
      const clone = elem.cloneNode(true);
      clone.style.left = `${compensation * i - offset * i}px`;
      //   clone.style.left = `${compensation * i}px`;
      glass.insertAdjacentElement('beforeend', clone);
    }
    setTimeout(() => {
      glass.classList.add('active');
    }, 500);
  });
})();
