// Constants for query selector
const studentId = document.getElementById('myStudentId');
const customNumber = document.getElementById('customNumber');
const custColorBtn = document.querySelector('.custColor'); 
const randColorBtn = document.querySelector('.randColor'); 
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');


// function to change bg color from user input and add student id
function changeCustomColor() {
    const myInput = parseInt(customNumber.value);
    if (myInput < 0 || myInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (myInput >= 0 && myInput < 20) {
        document.body.style.backgroundColor = 'green';
    } else if (myInput >= 20 && myInput < 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (myInput >= 40 && myInput < 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (myInput >= 60 && myInput < 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (myInput >= 80 && myInput < 100){
        document.body.style.backgroundColor = 'yellow';
    }
    studentId.textContent = "Student ID: 200555884";
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    customNumber.value = randomNum;
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    const myImages = ['img1.jpg', 'img2.jpg', 'img3.jpg','img4.jpg','img5.jpg']; 
    for (let imageName of myImages) {
        // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
        const option = document.createElement('option');
        option.value = imageName;
        option.textContent = imageName;
        imageSelect.appendChild(option);
    }
}
addList(); // calling function

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `./img/${selectedImage}`;
}

// event listeners for on click event of buttons and select
custColorBtn.addEventListener('click', changeCustomColor);
randColorBtn.addEventListener('click', changeRandomColor);
// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);



