var ele = document.getElementsByTagName('p')
var paragraph = document.querySelectorAll('p');
console.log(paragraph)



let evenP = document.querySelectorAll('p:first-child');


for(let i=0;i<evenP.length;i++){
    evenP[i].style.color = "red";
}   

function show(){
    alert("Hello")
}

let btn = document.getElementById('fontBtn');

var pow = 5;
btn.onclick = function(){
    let dynText = document.getElementById('dynamic-text');
    dynText.style.fontSize = (pow*4)+"px";
    pow++;
}

// ele.innerHTML = '<b>Hello, BP202</b>'