const innInput = document.getElementById('innInput')
const innCheck = document.getElementById('innCheck')
const innResult = document.querySelector('.innResult')

const regExp = /^\d{4}-\d{4}-\d{4}$/

innCheck.addEventListener('click',() => {
    if (regExp.test(innInput.value)){
        innResult.innerHTML = 'CORRECTLY'
        innResult.style.color = 'green'
    } else {
        innResult.innerHTML = 'WRONG'
        innResult.style.color = 'red'
    }
})

const bigBlock = document.getElementById('bigBlock');
const smallBlock = document.getElementById('smallBlock');

function moveSmallBlock(position) {
    smallBlock.style.left = position + 'px';
    if (position < bigBlock.offsetWidth - smallBlock.offsetWidth) {
        setTimeout(() => {
            moveSmallBlock(position + 1);
        }, 20);
    }
}

moveSmallBlock(0);