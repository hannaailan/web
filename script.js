
let imageElement = document.getElementById('image');
let nameElement = document.getElementById('name');
let images = [ 'pics/vegetables.png', 'pics/rice.png', 'pics/bottle-of-water.jpg.png'];
let names = [ 'vegetables', 'rice', 'bottle-of-water'];
let currentIndex=0;
    
function btn(){
    currentIndex = (currentIndex+1)%images.length
    imageElement.src=images[currentIndex];
    nameElement.textContent=names[currentIndex];
}
