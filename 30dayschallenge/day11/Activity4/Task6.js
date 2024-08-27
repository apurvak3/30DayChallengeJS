//Use the fetch Api to get data from public Api and log the response data to the console using promise.

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('response data', data);
        })
        .catch(error => {
            console.log('response', error);
        });
}