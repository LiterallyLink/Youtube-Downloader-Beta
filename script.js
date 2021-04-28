// button variable and input variable

let convertBtn = document.querySelector('.convert-button');
let URLinput = document.querySelector('.URL-input');

// adding a listener function to activate when the button is clicked
convertBtn.addEventListener('click', () => {
    // logging the url inputted
    console.log(`URL: ${URLinput.value}`);
    //parsing the URL value to the sendURL() function below
    sendURL(URLinput.value);
});

// sending the url to the href location using the local host
function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}
