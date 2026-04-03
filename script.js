const images = [
"images/sales-forecast-comparison.png",
"images/future-monthly-forecast.png",
"images/correlation-heatmap.png",
"images/profit-vs-discount.png"
];

let index = 0;

function nextSlide() {

index++;

if(index >= images.length){
index = 0;
}

document.getElementById("slider-image").src = images[index];

}

function prevSlide() {

index--;

if(index < 0){
index = images.length - 1;
}

document.getElementById("slider-image").src = images[index];

}