const modalOpenBtn = document.querySelector('.main-part__test-drive-btn');
const modalCloseBtn = document.querySelector('.top-part__close-btn');
const modalWindow = document.querySelector('.modal-bg');
const form = document.querySelector('.modal__form');
const submitBtn = form.querySelector('button');
const nameInput = form.querySelector('#name');
const surnameInput = form.querySelector('#surname');
const phoneInput = form.querySelector('#phone');

let modalBg = document.querySelector('.modal-bg');
let formData;
let carNameArea = document.querySelector('.heading__car-model');
let hiddenInput = document.getElementById('hidden-input');
let carName = document.querySelector('.main-part__car-name');
let fullNamePattern = /^[0-9~!@#$%^:;&*()_=+/.<>, ]*$/;
let phonePattern = /^[A-Za-zА-Яа-яЁё~!@#$%^:;&*_=/.<>, ]*$/;

// -----------------------------form-------------------------

nameInput.addEventListener('input', function(){
    if(fullNamePattern.test(nameInput.value[nameInput.value.length-1])){
        nameInput.value = nameInput.value.slice(0, -1);
    }
})

surnameInput.addEventListener('input', function(){
    if(fullNamePattern.test(surnameInput.value[surnameInput.value.length-1])){
        surnameInput.value = surnameInput.value.slice(0, -1);
    }
})

phoneInput.addEventListener('input', function(){
    if(phonePattern.test(phoneInput.value[phoneInput.value.length-1])){
        phoneInput.value = phoneInput.value.slice(0, -1);
    }
})

modalOpenBtn.addEventListener('click', function(){
    modalWindow.style.display = 'flex';
    let car = carName.textContent;
    car = car.trim();
    carNameArea.textContent = car;
    hiddenInput.value = car;
})

modalCloseBtn.addEventListener('click', function(){
    modalWindow.style.display = 'none';
})

window.addEventListener('click', function(e){
    if (e.target == modalBg){
        modalBg.style.display = 'none';
    }
})

submitBtn.addEventListener('click', function(e){
    let isValid = true;
    formData = new FormData(form);
    console.log(formData);
    const testDriveInfo = Object.fromEntries(formData.entries());
    console.log(testDriveInfo);

    for (let user_info in testDriveInfo){
        if (testDriveInfo[user_info] == ''){
            isValid = false;
        }
        console.log(testDriveInfo[user_info]);
    }

    if (isValid == true){
        localStorage.setItem ('Тест-драйв ' + testDriveInfo.name + ' ' + testDriveInfo.surname + ' на '  + testDriveInfo.car, JSON.stringify(testDriveInfo));
        alert('Вы успешно записались, мы вас ждём!');
    }

    e.preventDefault();
})
