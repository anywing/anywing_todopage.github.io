const clock = document.querySelector('#clock');

function nowTime(){
    const now = new Date();

    const mon = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();

    clock.innerHTML = `${mon}월 ${day}일 <br> ${hour}시 ${min}분`;
}

nowTime();
setInterval(nowTime, 1000);