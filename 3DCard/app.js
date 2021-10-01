//Movement Animation to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title =document.querySelector(".title");
const note = document.querySelector('.note');
const details =document.querySelector('.details button');
const asc =document.querySelector(".asc img");
const detalii = document.querySelector('.info h3')

//Moving animation event

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX ) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY ) /25 ;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';

    title.style.transform = 'translateZ(50px)';
    detalii.style.transform = 'translateZ(40px)';
    note.style.transform = 'translateZ(5px)';
    details.style.transform = 'translateZ(10px)';
    asc.style.transform = 'translateZ(150px)';

})

container.addEventListener('mouseleave',(e) => {
    card.style.transform =`rotateY(0deg) rotateX(0deg)`;
    card.style.transition = "all 1s ease";
    
    title.style.transform = 'translateZ(0px)';
    note.style.transform = 'translateZ(0px)';
    details.style.transform = 'translateZ(0px)';
    asc.style.transform = 'translateZ(0px)';
})


