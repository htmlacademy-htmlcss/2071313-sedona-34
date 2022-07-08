const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const search = document.querySelector('.search');

const toggleModal = () => {
    overlay.classList.toggle('hidden')
    modal.classList.toggle('hidden')
}

const onSearchButtonClick = (evt) => {
    evt.preventDefault();
    toggleModal();
}

const onOverlayClick = (evt) => {
    toggleModal();
}

search.addEventListener('click', onSearchButtonClick)
overlay.addEventListener('click', onOverlayClick)


