const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }

    
  ];

const buttonEdit = document.querySelector('.profile__edit')
const formElement = document.querySelector('#formCard');

const buttonAdd = document.querySelector('.profile__add')
const popupClose = document.querySelectorAll('.popup__close')
const popupEditProfile = document.querySelector('#profileEdit') 
const popupAddPhoto = document.querySelector('#addPhoto');
const popupPreview = document.querySelector('#previewPhoto');
const userNameValue = document.querySelector('.profile__title');
const userDescriptionValue = document.querySelector('.profile__subtitle');
const profilePopupInputName = document.querySelector('.popup__input_user_name');
const profilePopupInputDescription = document.querySelector('.popup__input_user_description');
const popupForm = document.querySelector('.popup__form');
const cardList = document.querySelector('.card__list');

function closePopupButton() {
    const popupOpened = document.querySelector('.popup_opened');
    popupOpened.classList.toggle('popup_opened')
}
function createCard(data) { 
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);
    cardElement.querySelector('.card__img').src = data.link;
    cardElement.querySelector('.card__img').alt = ` ${data.name}`;
    cardElement.querySelector('.card__title').textContent = data.name;
    const likeButton = cardElement.querySelector('.card__like');
    const cardDelete = cardElement.querySelector('.card__trash');
    const cardImg = cardElement.querySelector('.card__img');

    function switchLikeStatus(evt) {
      evt.target.classList.toggle('card__like_active');
    }
    function deleteCardElement () {
      cardElement.remove();  
    }
    cardDelete.addEventListener('click', () => {
      deleteCardElement();
    })
    likeButton.addEventListener('click', switchLikeStatus);
    cardImg.addEventListener('click', (event) => {
      console.log(event.target.src)
      popupPreview.classList.add('popup_opened');
      const popupImg = popupPreview.querySelector('img');
      const imgName = popupPreview.querySelector('figcaption')
      popupImg.src = event.target.src;
      imgName.textContent = event.target.alt;
    })
    return cardList.prepend(cardElement);
}

function clearInputs(formInputs) {
    formInputs.forEach(item => {
        item.value = '';
    })
}

buttonEdit.addEventListener('click', function(event) {
    popupEditProfile.classList.add('popup_opened')
    profilePopupInputName.value = userNameValue.textContent;
    profilePopupInputDescription.value = userDescriptionValue.textContent;
})

buttonAdd.addEventListener('click', function() {
    popupAddPhoto.classList.add('popup_opened');
})

popupClose.forEach(elem => {
    elem.addEventListener('click', function (event) {
        event.stopPropagation();
        closePopupButton()
    })
})

popupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    userNameValue.textContent = profilePopupInputName.value;
    userDescriptionValue.textContent = profilePopupInputDescription.value;
    closePopupButton()
})

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const addCardInput = formElement.querySelectorAll('input');
    const data = {};
    addCardInput.forEach(item => {
        data[item.name] = item.value;
    })
    
    createCard(data);
    closePopupButton();
    clearInputs(addCardInput);
})

for (let card of initialCards) {
    createCard (card)
}



