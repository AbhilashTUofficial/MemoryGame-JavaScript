document.addEventListener('DOMContentLoaded',()=>{
const cardArray=[
    {
        name:"assistant",
        img:"Img/assistant.jpg"
    },
    {
        name:"drive",
        img:"Img/drive.jpg"
    },
    {
        name:"gmail",
        img:"Img/gmail.jpg"
    },
    {
        name:"music",
        img:"Img/music.jpg"
    },
    {
        name:"photos",
        img:"Img/photos.jpg"
    },
    {
        name:"drive",
        img:"Img/drive.jpg"
    },
    {
        name:"gmail",
        img:"Img/gmail.jpg"
    },
    {
        name:"music",
        img:"Img/music.jpg"
    },
    {
        name:"photos",
        img:"Img/photos.jpg"
    },   
]

cardArray.sort(()=>0.5-Math.random())

const grid=document.querySelector('.grid');
var cardsChosen=[];
var cardsChosenId=[];
var cardsWon=[];
const resultDisplay=document.querySelector('.score-board > span');
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        var card=document.createElement('img');
        card.setAttribute('src','Img/google.jpg');
        card.setAttribute('data-id',i);
         card.addEventListener('click',flipcard)
        grid.appendChild(card);
    }
    
}

function checkForMatch(){
    var cards=document.querySelectorAll('img');
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if(cardsChosen[0]===cardsChosen[1]){
        cards[optionOneId].setAttribute('src','Img/white.jpg');
        cards[optionTwoId].setAttribute('src','Img/white.jpg');
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src','Img/google.jpg');
        cards[optionTwoId].setAttribute('src','Img/google.jpg');
    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent=cardsWon.length;
    if(cardsWon.length=== 4){
        resultDisplay.textContent='You Won';
    }
}

function flipcard(){
    var cardId=this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length===2){
        setTimeout(checkForMatch,500);
    }
}

createBoard();

});