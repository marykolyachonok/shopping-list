/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const items = document.querySelector('items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemsText = sendInput.value;

        const newMessage = document.createElement('div');
        newMessage.classList.add('element')
        newMessage.textContent = itemsText;
        newMessage.addEventListener('click', function() {
            newMessage.classList.toggle('done');
        })
        if (itemsText != '') {
            items.append(newMessage)
        }
        sendInput.value = '';
    }
})