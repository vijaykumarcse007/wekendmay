const API_ENDPOINT_1 = 'https://dummyjson.com/products';
const API_ENDPOINT_2 = 'https://dummyjson.com/todos';
const API_ENDPOINT_3 = 'https://dummyjson.com/posts';


    // Define the API endpoints


// Define the functions that return promises
const promiseAPI1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(API_ENDPOINT_1)
        .then((response) => response.json())
        .then((data) => {
          // Show the data on the UI
          console.log('API 1 data:',data);
          // Resolve the promise
          resolve(true);
        });
    }, 1000);
  });
};

const promiseAPI2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(API_ENDPOINT_2)
        .then((response) => response.json())
        .then((data) => {
          // Show the data on the UI
          console.log('API 2 data:', data);
          // Resolve the promise
          resolve(true);
        });
    }, 2000);
  });
};

const promiseAPI3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(API_ENDPOINT_3)
        .then((response) => response.json())
        .then((data) => {
          // Show the data on the UI
          console.log('API 3 data:', data);
          // Resolve the promise
          resolve(true);
        });
    }, 3000);
  });
};

// Get a reference to the button element
const myButton = document.getElementById('myButton');

// Add an event listener for the button click
myButton.addEventListener('click', async () => {
  try {
    // Call the promise functions in sequence using async/await
    await promiseAPI1();
    await promiseAPI2();
    await promiseAPI3();
  } catch (error) {
    console.error(error);
  }
});
