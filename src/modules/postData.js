const errorMessage = document.querySelector('.errorMessage');

export const API_ENDPOINT = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IhVi0ZViID8bfZYjMMLD/scores';

export const postData = async (user, score) => {
  try {
    const res = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ user, score }),
    });
    const data = await res.json();
    return data.result;
  } catch (error) {
    errorMessage.textContent = 'Failed to submit data: ';
    throw error;
  }
};

export const getData = async () => {
  try {
    const res = await fetch(API_ENDPOINT);
    const data = await res.json();
    return data.result;
  } catch (error) {
    errorMessage.textContent = 'Failed to submit data: ';
    throw error;
  }
};

// eslint-disable-next-line import/prefer-default-export