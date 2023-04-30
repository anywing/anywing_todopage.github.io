const login = document.querySelector('#login');
const userInput = document.querySelector('#login input');
const hello = document.querySelector('#hello');
const nameChange = document.querySelector('#user_change');

const USERNAME = "username";

function hidden(hiddenSwicth){
    if(hiddenSwicth == "on"){
        login.classList.remove('hidden');
        hello.classList.add('hidden');
        nameChange.classList.add('hidden');
    }
    else{
        login.classList.add('hidden');
        hello.classList.remove('hidden');
        nameChange.classList.remove('hidden');
    }
}

function loginHandle(e) {
    e.preventDefault();
    const userName = userInput.value;
    localStorage.setItem(USERNAME, userName);
    helloUser(userName);
    hidden("off");
}

function helloUser(userName){
    hello.innerHTML = `${userName}님 안녕하세요! <br> 오늘의 할일을 확인하시겠어요?`
}

function changeName(){
    hidden("on");
}

login.addEventListener('submit', loginHandle);
nameChange.addEventListener('click', changeName);

const savedName = localStorage.getItem(USERNAME);
if(savedName){
    helloUser(savedName);
    hidden("off");
}
