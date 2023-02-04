const buttonAdd = document.querySelector('.profile__edit')
const buttonDelete = document.querySelector('.popup__close')
const buttonAppend = document.querySelector('.profile__add')
const popupElement = document.querySelector('.popup')

buttonAdd.addEventListener('click', function(event) {
    return popupElement.classList.add('popup_opened')
    })
    buttonDelete.addEventListener('click', function (event) {
    return popupElement.classList.remove('popup_opened')
    })

    buttonAppend.addEventListener('click', function(event) {
        return popupElement.classList.add('popup_opened')
        })
        buttonDelete.addEventListener('click', function (event) {
        return popupElement.classList.remove('popup_opened')
        })


        const buttonLike = document.querySelectorAll('.card__like')
        const btn = document.querySelector('#btn');
        btn.addEventListener('click', () => {
            return buttonLike.classList.toggle('card__like_active')
            })
            