let minusBtn = document.querySelector('.input__minus');
let userInput = document.querySelector('.input__number');
let plusBtn = document.querySelector('.input__plus');

let cartModalCheckoutContainer = document.querySelector('.cart-modal__checkout-container');
let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', () => {
    userInputNumber--;

    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
});

plusBtn.addEventListener('click', () => {
    console.log('holaa');
});

const addToCartButton = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartButton.addEventListener('click', () => {
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    if (lastValue != 0) {
        drawProductInmodal();
    }
});

const cartModal = document.querySelector('.cart-modal');
let cartIconBtn = document.querySelector('.header__cart');

cartIconBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');

    if (lastValue != 0) {
        drawProductInmodal();
    } else {
        cartModalCheckoutContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }
});

const deleteProduct = () => {
    const deleteCartModalBtn = document.querySelector('.cart-modal_delete');

    deleteCartModalBtn.style.cursor = 'pointer';

    deleteCartModalBtn.addEventListener('click', () => {
        // lastValue = userInputNumber = userInput.value = cartNotification.innerText = 0;
        cartModalCheckoutContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
        cartNotification.style.display = 'none';
    });
};

const previousGalleryBtn = document.querySelector('.gallery__previous');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imageGalleryContainer = document.querySelector('.gallery__image-container');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', () => {
    imgIndex != 4 ? changeNextImage(imageGalleryContainer) : (imgIndex = 1);
});

previousGalleryBtn.addEventListener('click', () => {
    imgIndex != 1 ? changePreviousImage(imageGalleryContainer) : (imgIndex = 4);
});

const changeNextImage = (container) => {
    imgIndex++;
    container.style.backgroundImage = `url('/img/image-product-${imgIndex}.jpg')`;
};

const changePreviousImage = (container) => {
    imgIndex--;
    container.style.backgroundImage = `url('/img/image-product-${imgIndex}.jpg')`;
};

const modalGallery = document.querySelector('.modal-gallery__background');
const modalGalleryClose = document.querySelector('.modal-gallery__close');

imageGalleryContainer.addEventListener('click', (mediaqueryList) => {
    mediaqueryList = window.matchMedia('(min-width: 1115px)');
    if (mediaqueryList.matches) {
        console.log('Estas en 1115px');
        modalGallery.style.display = 'flex';
    }
});
modalGalleryClose.addEventListener('click', () => {
    modalGallery.style.display = 'none';
});

let thumbnails = document.querySelectorAll('.gallery__thumbnail');
thumbnails = [...thumbnails];

thumbnails.forEach((t) => {
    t.addEventListener('click', (event) => {
        let id = event.target.id;
        imageGalleryContainer.style.backgroundImage = `url('/img/image-product-${id}.jpg')`;
    });
});

let thumbnailsModal = document.querySelectorAll('.modal-gallery__thumbnail');
thumbnailsModal = [...thumbnailsModal];

let galleryImageContainerModal = document.querySelector('.modal-gallery__image-container');
thumbnailsModal.forEach((t) => {
    t.addEventListener('click', (event) => {
        let id = event.target.id.slice(-1);
        galleryImageContainerModal.style.backgroundImage = `url('/img/image-product-${id}.jpg')`;
    });
});

let nextGalleryModalBtn = document.querySelector('.modal-gallery__next');
let previousGalleryModalBtn = document.querySelector('.modal-gallery__previous');

nextGalleryModalBtn.addEventListener('click', () => {
    imgIndex != 4 ? changeNextImage(galleryImageContainerModal) : (imgIndex = 1);
});

previousGalleryModalBtn.addEventListener('click', () => {
    imgIndex != 1 ? changePreviousImage(galleryImageContainerModal) : (imgIndex = 4);
});

const headerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
headerMenu.addEventListener('click', () => {
    modalNavbar.style.display = 'block';
});

const modalNavbarCloseIcon = document.querySelector('.modal-navbar__close-icon');

modalNavbarCloseIcon.addEventListener('click', () => {
    modalNavbar.style.display = 'none';
});

const drawProductInmodal = () => {
    cartModalCheckoutContainer.innerHTML = `
    <div class="cart-modal__details-container">
          <img class="cart-modal__image" src="/img/image-product-1-thumbnail.jpg" alt="">
          <div>
            <p class="cart-modal__product">Autumn Limited Edition..</p>
            <p class="cart-modal__price"><span>sssss</span></p>
          </div>
          <img class="cart-modal_delete" src="/img/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout">
          Checkout
        </button>
    `;

    deleteProduct();
    updatePriceModal();
};
let updatePriceModal = () => {
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue * 125}.00</span>`;
};

