document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('img').classList.add('blur');
        item.querySelector('.overlay').classList.add('visible');
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('img').classList.remove('blur');
        item.querySelector('.overlay').classList.remove('visible');
    });
});
