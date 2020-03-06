const answerButton = document.getElementById('answer');
const nextButton = document.getElementById('next');
const addButton = document.getElementById('add');
const editButton = document.getElementById('edit');
const deleteButton = document.getElementById('delete');
const form = document.querySelector('form');
form.setAttribute('hidden', '');

answerButton.addEventListener('click', event => {});

nextButton.addEventListener('click', event => {});

addButton.addEventListener('click', event => {
  form.removeAttribute('hidden');
});

editButton.addEventListener('click', event => {});

deleteButton.addEventListener('click', event => {});

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
  console.log(values);
  form.setAttribute('hidden', '');
});

function getCards() {
  const cards = localStorage.getItem('cards');
  return !!cards ? JSON.parse(cards) : [];
}

function saveCard(card) {
  const cards = getCards();
  const updated = [...cards, card];
  localStorage.setItem('cards', JSON.stringify(updated));
}
