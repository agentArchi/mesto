const buttonEdit = document.querySelector('.profile__edit')
const buttonDelete = document.querySelector('.popup__close')
const buttonAdd = document.querySelector('.profile__add')
const popupElement = document.querySelector('.popup')
const buttonLike = document.querySelectorAll('.card__like');
const btn = document.querySelector('#btn');
const userNameValue = document.querySelector('.profile__title');
const userDescriptionValue = document.querySelector('.profile__subtitle');
const profilePopupInputName = document.querySelector('.popup__input_user_name');
const profilePopupInputDescription = document.querySelector('.popup__input_user_description');
const profilePopupButtonSave = document.querySelector('.popup__button');

function closePopupButton() {
    popupElement.classList.remove('popup_opened')
}
buttonEdit.addEventListener('click', function(event) {
    popupElement.classList.add('popup_opened')
    profilePopupInputName.value = userNameValue.innerHTML;
    profilePopupInputDescription.value = userDescriptionValue.innerHTML;
})

buttonDelete.addEventListener('click', function (event) {
    closePopupButton()
})

profilePopupButtonSave.addEventListener('click', function(event) {
    event.preventDefault();
    userNameValue.innerHTML = profilePopupInputName.value;
    userDescriptionValue.innerHTML = profilePopupInputDescription.value;
    closePopupButton()
})         