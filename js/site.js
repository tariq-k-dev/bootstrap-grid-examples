const readMoreBtn = document.querySelector('#readMoreBtn');

readMoreBtn.addEventListener('click', e => {
  e.preventDefault();

  if (readMoreBtn.innerText === 'Read More') {
    readMoreBtn.innerText = 'Read Less';
    const readableContent = document.querySelector('#expandable-content');
    readableContent.style.height = 'fit-content';
  } else {
    readMoreBtn.innerText = 'Read More';
    const readableContent = document.querySelector('#expandable-content');
    readableContent.style.height = 'calc(50% - 0.25rem)';
  }
});
