const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    'image12.jpg',
    'image13.jpg',
    'image14.jpg',
    'image15.jpg',
    'image16.jpg',
    'image17.jpg',
    'image18.jpg',
    'image19.jpg',
    'image20.jpg',
    'image21.jpg',
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    const div = document.querySelector('#image');
    div.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000);

changeBackgroundImage();
