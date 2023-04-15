'use strict'


let sound = document.getElementById("sound");
const playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
];
for (let i = 0; i < playList.length; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = playList[i].author + `   ---   ` + playList[i].song;
    sound.appendChild(newItem);
}



const circles = document.querySelectorAll('.traffic__light_item');
const switch_btn = document.getElementById('switch_btn');

// const circles = document.querySelectorAll('traffic__light_item');
// const switch_btn = document.getElementById('switch_btn');

let colorIndex = 0;
const colors = ['red', 'yellow', 'green'];

function changeColor() {
    for (let i = 0; i < circles.length; i++) {
        circles[i].classList.remove(colors[colorIndex]);
        circles[i].classList.add('gray');
    }
    colorIndex = (colorIndex + 1) % colors.length;
    circles[colorIndex].classList.remove('gray');
    circles[colorIndex].classList.add(colors[colorIndex]);
}
switch_btn.addEventListener('click', changeColor);

