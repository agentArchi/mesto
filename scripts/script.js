const buttonEdit = document.querySelector('.profile__edit')
const buttonDelete = document.querySelector('.popup__close')
const popupElement = document.querySelector('.popup')
const userNameValue = document.querySelector('.profile__title');
const userDescriptionValue = document.querySelector('.profile__subtitle');
const profilePopupInputName = document.querySelector('.popup__input_user_name');
const profilePopupInputDescription = document.querySelector('.popup__input_user_description');
const popupForm = document.querySelector('.popup__form');

function closePopupButton() {
    popupElement.classList.remove('popup_opened')
}
buttonEdit.addEventListener('click', function(event) {
    popupElement.classList.add('popup_opened')
    profilePopupInputName.value = userNameValue.textContent;
    profilePopupInputDescription.value = userDescriptionValue.textContent;
})

buttonDelete.addEventListener('click', function (event) {
    closePopupButton()
})

popupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    userNameValue.textContent = profilePopupInputName.value;
    userDescriptionValue.textContent = profilePopupInputDescription.value;
    closePopupButton()
})