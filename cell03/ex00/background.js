const button = document.querySelector('button');
const bgE1 = document.querySelector('section');

button.addEventListener('click',() =>{
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    bgE1.style.backgroundColor = color;
    console.log(color)
})
let a_click = 0;
function hello(){
    a_click++
    if(a_click <= 3){
        let button = document.getElementById("hii");
        button.style.width = (300 + a_click*40) + "px";
        button.style.height = (100 + a_click*40) + "px";
        button.style.fontSize = (40 + a_click*2) + "px";
    }
}