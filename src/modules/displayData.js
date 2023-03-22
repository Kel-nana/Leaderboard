import { getData } from './postData.js';

const errorMessage = document.querySelector('.errorMessage');

export const displayOnUI = (data) => {
  const displayList = document.querySelector('.displayScore');
  displayList.innerHTML = '';
  data.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.textContent = ` ${user} : ${score} `;
    displayList.appendChild(li);
  });
};

export const refresh = async () => {
  try {
    const data = await getData();
    displayOnUI(data);
  } catch (error) {
    errorMessage.textContent = 'Failed to submit data: ';
    throw error;
  }
};
