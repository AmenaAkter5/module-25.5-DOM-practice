// 2. access h2 : shoes

const shoes = document.getElementById('shoe');
shoes.style.color = 'red';

// access h2 : backpack

const backpack = document.getElementById('back');
backpack.style.color = 'red';






// 3. backpack area : background color change

const backpackArea = document.getElementById('backpack');
backpackArea.style.backgroundColor = 'lightblue';







// 4. access card class : border radius- 30px

// access by ID

// card-1
const card1Border = document.getElementById('card-1');
card1Border.style.borderRadius = '30px';

// card-2
const card2Border = document.getElementById('card-2');
card2Border.style.borderRadius = '30px';

// card-3
const card3Border = document.getElementById('card-3');
card3Border.style.borderRadius = '30px';

// card-4
const card4Border = document.getElementById('card-4');
card4Border.style.borderRadius = '30px';

// card-5
const card5Border = document.getElementById('card-5');
card5Border.style.borderRadius = '30px';

// card-6
const card6Border = document.getElementById('card-6');
card6Border.style.borderRadius = '30px';








// 5. add click handler on submit button

function clickHandling() {
    console.log('button is clicked');
}








// 6. buy now button remove by clicking

// id দিয়ে access করতে হলো

// btn-1
document.getElementById('buy-btn-1').addEventListener('click', function () {
    document.getElementById('buy-btn-1').style.display = 'none';
})

// btn-2
document.getElementById('buy-btn-2').addEventListener('click', function () {
    document.getElementById('buy-btn-2').style.display = 'none';
})

// btn-3
document.getElementById('buy-btn-3').addEventListener('click', function () {
    document.getElementById('buy-btn-3').style.display = 'none';
})

// btn-4
document.getElementById('buy-btn-4').addEventListener('click', function () {
    document.getElementById('buy-btn-4').style.display = 'none';
})

// btn-5
document.getElementById('buy-btn-5').addEventListener('click', function () {
    document.getElementById('buy-btn-5').style.display = 'none';
})

// btn-6
document.getElementById('buy-btn-6').addEventListener('click', function () {
    document.getElementById('buy-btn-6').style.display = 'none';
})








// 7. submit button disabled until write email on input box

// email input match

document.getElementById('email-input').addEventListener('keyup', function () {

    // email input
    const emailInput = document.getElementById('email-input');

    // submit button
    const submitBtn = document.getElementById('submit-button');

    // condition
    if (emailInput.value == 'email') {
        submitBtn.removeAttribute('disabled');
    }
    else {
        submitBtn.setAttribute('disabled', true);
    }
})








// 8. Change Red Bag image

document.getElementById('red-bag').addEventListener('mouseenter', function () {
    document.getElementById('red-bag').src = 'images/bags/bag-4.jpg';
})







// 9. Change Background color by double clicking

document.getElementById('subscribe').addEventListener('dblclick', function () {
    document.getElementById('subscribe').style.backgroundColor = '#5dade2';
})




