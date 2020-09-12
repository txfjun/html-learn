const message = "This is a function for displaying word using javascript."
let index = 0;





setInterval(displayword, 100);

function displayword() {

    // console.log(message.slice(0, index));

    // document.body.innerText = message.slice(0, index);
    document.querySelector('.word').innerHTML = message.slice(0, index);
    index = index + 1;

    if (index > message.length) {
        index = 0;

    }

}