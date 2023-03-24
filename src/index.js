import './style.css';
import { postData } from './modules/postData.js';
import { refresh } from './modules/displayData.js';

const errorMessage = document.querySelector('.errorMessage');
const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { user, score } = form.elements;
  try {
    await postData(user.value, score.value);
    form.reset();
  } catch (error) {
    errorMessage.textContent = 'Failed to submit data: ';
    throw error;
  }
});

const refreshBtn = document.querySelector('.refreshbtn');
refreshBtn.addEventListener('click', () => {
  refresh();
});
