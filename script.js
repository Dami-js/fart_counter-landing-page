var navBtn = document.getElementById('nav-btn')
var logo = document.getElementById('logo')
const toggleSwitch = () => {
  var element = document.body;
  element.classList.toggle('dark-mode')
}

const toggleCards = () => {
  var card1 = document.getElementById('card1')
  var card2 = document.getElementById('card2')
  var card3 = document.getElementById('card3')
  var card4 = document.getElementById('card4')
  var card5 = document.getElementById('card5')
  var card6 = document.getElementById('card6')
  card1.classList.add('card-dark')
  card2.classList.add('card-dark')
  card3.classList.add('card-dark')
  card4.classList.add('card-dark')
  card5.classList.add('card-dark')
  card6.classList.add('card-dark')
  logo.classList.add('card-dark')
}
   
navBtn.addEventListener('click', toggleSwitch)
navBtn.addEventListener('click', toggleCards)