const quotes = [
  {
    quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    person: 'Nelson Mandela'
  },
  {
    quote:'The way to get started is to quit talking and begin doing.',
    person: 'Walt Disney'
  },
  {
    quote:'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking. ',
    person: 'Steve Jobs'
  },
  {
    quote:'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    person: 'Mother Teresa'
  },
  {
    quote:'When you reach the end of your rope, tie a knot in it and hang on.',
    person: 'Franklin Roosevelt'
  },
  {
    quote:'Always remember that you are absolutely unique. Just like everyone else.',
    person: 'Margaret Mead'
  },
  {
    quote:'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. ',
    person: 'Helen Keller'
  },
  {
    quote:'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    person: 'Ralph Waldo Emerson'
  },
  {
    quote:'You will face many defeats in life, but never let yourself be defeated.',
    person: 'Maya Angelou'
  },
  {
    quote:'In the end, it\'s not the years in your life that count. It\'s the life in your years.',
    person: 'Abraham Lincoln'
  },
  {
    quote:'Never let the fear of striking out keep you from playing the game.',
    person: 'Babe Ruth'
  },
  {
    quote:'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    person: 'Winston S. Churchill'
  },
  {
    quote:'Success usually comes to those who are too busy to be looking for it.',
    person: 'Henry David Thoreau'
  },
  {
    quote:' Try not to become a man of success. Rather become a man of value. ',
    person: 'Albert Einstein'
  },
  {
    quote:'You miss 100% of the shots you don\'t take.',
    person: 'Michael Ismael'
  },
  {
    quote:`You've gotta dance like there's nobody watching
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.`, 
    person: 'William W. Purkey'
  },
  {
    quote:'It is better to be hated for what you are than to be loved for what you are not.',
    person: 'Andre Gide'
  }
]
const backgroundImg = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];

const font = ['Open Sans', 'Alegreya Sans SC','Poppins', 'Roboto']
const fallback = 'sans-serif';

function randomNum(num){
  return Math.floor(Math.random() * num);
}
function randomFont(){
  return  font[randomNum(font.length)];
}
function randomQuote(){
 return quotes[randomNum(quotes.length)];
}
function randomImg(){
  return backgroundImg[randomNum(backgroundImg.length)];
}
function display(){
  let output = randomQuote();
  let bg = randomImg();
  let fontFam = randomFont();
  let text = document.querySelector('#quote');
  let person = document.querySelector('#person');
  text.innerHTML = output.quote;
  person.innerHTML = '- ' + output.person;
  text.style.fontFamily = `${fontFam}, ${fallback}`
  document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('img/${bg}')`;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', display);
