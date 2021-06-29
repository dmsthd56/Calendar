console.log("hello, vanilla.");

let days = new Date();
let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

const day = days.getDay();//요일 출력
const date = days.getDate();//날짜를 출력

document.getElementById("dateF").innerText = week[day];//오늘 요일 출력
document.getElementById("dateL").innerText = date;//오늘 날짜 출력

function renderCalender(){
    const year = days.getFullYear();
    const now_month = days.getMonth();//월을 출력

    const prevLast = new Date(year, now_month, 0);
    const thisLast = new Date(year, now_month + 1, 0);

    const pDate = prevLast.getDate();//저번달 마지막 날짜
    const pday = prevLast.getDay();//저번달 마지막 요일

    const tDate = thisLast.getDate();//이번달 마지막 날짜
    const tday = thisLast.getDay();//이번달 마지막 요일

    const prevDates = [];
    const thisDates = [...Array(tDate + 1).keys()].slice(1);
    const nextDates =[];

    if(pday !== 6){
        for(let i=0; i<pday+1; i++){
            prevDates.unshift(pDate - i);
        }
    }
    for(let f=1; f< 7-tday; f++){
        nextDates.push(f);
    }

    const dates = prevDates.concat(thisDates, nextDates);//dates 합치기
    const findex = dates.indexOf(1);
    const lindex = dates.lastIndexOf(tDate);

    dates.forEach((d, i) => {
        const condition = i >= findex && i < lindex + 1 ? 'this' : 'other';

        dates[i] = `<div class="${condition}">${d}</div>`
    });
    document.getElementById("dateForm").innerHTML = dates.join('');

}
renderCalender();

function prevM(){//왼쪽 버튼
    days.setMonth(days.getMonth()-1);
    renderCalender();
}
function nextM(){//오른쪽 버튼
    days.setMonth(days.getMonth()+1);
    renderCalender();
}
