const inputBox = document.querySelectorAll('input');

addEventListener('load', bgChange);

const bgList = ["./img/bg1.png", "./img/bg2.png", "./img/bg3.png", "./img/bg4.png"];

function bgChange(){
    const bgNum = Math.floor((Math.random()) * bgList.length);
    document.body.style.background = `url("${bgList[bgNum]}") no-repeat center`;
    document.body.style.backgroundSize = "cover";
    if(bgNum == 0){
        inputBox.forEach((input) => {input.style.borderColor = "skyblue";})
    }
}