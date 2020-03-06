const answerButton = document.getElementById('answer');
const nextButton = document.getElementById('next');
const addButton = document.getElementById('add');
const editButton = document.getElementById('edit');
const deleteButton = document.getElementById('delete');
// const SaveButton = document.getElementById('Submit')
const form = document.querySelector('form');
const cardContainer = document.querySelector('.card-container');

form.setAttribute('hidden', '');

answerButton.addEventListener('click', event => {});

nextButton.addEventListener('click', event => {});

addButton.addEventListener('click', event => {
  form.removeAttribute('hidden');
});

editButton.addEventListener('click', event => {});

deleteButton.addEventListener('click', event => {});

// SaveButton.addEventListener('click', event =>{
//   onclick=doFunction(getCards);
// });

form.addEventListener('submit', e => {
  e.preventDefault();
  let values = {};
  for (let i = 0; i < form.elements.length; i++) {
    const el = form.elements[i];
    if (el.type !== 'text') {
      continue;
    } else if (!el.value) {
      console.log('invalid');
      return;
    }
    values = {
      ...values,
      [el.name]: el.value
    };
  }

  const card = values;
  saveCard(card);
  form.setAttribute('hidden', '');
  console.log(getCards());
});

function createCard(data) {
  const div = document.createElement('div');
  const span = document.createElement('span');
  div.className = 'card';
  div.innerText = data.question;
  span.innerText = data.answer;

  div.addEventListener('click', () => {
    span.classList.toggle('hide')
  })

  div.appendChild(span);
  cardContainer.appendChild(div);
}

function getCards() {
  const cards = localStorage.getItem('cards');
  return !!cards ? JSON.parse(cards) : [];
}

function saveCard(card) {
  const cards = getCards();
  const updated = [...cards, card];
  localStorage.setItem('cards', JSON.stringify(updated));
}

const cardDataArray = getCards();

cardDataArray.forEach(data => createCard(data));
