let imageArray = [
    "img/gallery_img1.jpg",
    "img/gallery_img2.jpg",
    "img/gallery_img3.jpg",
    "img/gallery_img4.jpg"
];
let imageCount = imageArray.length;
function image(num) {
    if (num == 1) {
        if (number < imageCount-1) {
            number++;
            document.getElementsById('images').src = imageArray[number];
            document.getElementById('num_img').innerHTML = number + 1 + '' + imageCount;
        }
    }
}