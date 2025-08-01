const emojis = [
    '❤️',
    '❤️',
    '🦋',
    '🏀',
    '🏀',
    '🦋',
    '💎',
    '💎',
    '🎂',
    '🎂',
    '🍔',
    '🍔',
    '🌻',
    '🌻',
    '🌞',
    '🌞'
];
let openCards = [];

let shuffleEmojis = emojis.sort(()=>(Math.random()> 0.5 ? 2 : -1))

for(let contador = 0; contador < emojis.length; contador++)
{
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmojis[contador];
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box)
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add('boxOpen');
        openCards.push(this);
    }
    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }

    console.log(openCards);
}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add('boxMatch')
        openCards[1].classList.add('boxMatch')
    }else{
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen')
    }

    openCards = [];

    if(document.querySelectorAll('boxMatch').lenght === emojis.length){
        alert('Você venceu!!!')
    }
}    
