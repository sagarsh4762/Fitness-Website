// const images = [...document.querySelectorAll('.image')];

// //popup

// const popup = document.querySelector('.popup');
// const closebtn = document.querySelector('.close-btn');
// const imageName = document.querySelector('.image-name');
// const largeImage = document.querySelector('.large-image');
// const imageIndex = document.querySelector('.index');
// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');

// let index = 0;
// images.forEach((item,i) => {
//     item.addEventListener('click',() => {
//         popup.classList.toggle('active');
//         updateImage(i);
//         popup.classList.toggle('active');
//     })
// })

// const updateImage = (i) => {
//     let path = `images/image${i+1}.jpg`
//     largeImage.src = path;
//     imageName.innerHTML = path;
//     imageIndex.innerHTML = `0${i+1}`;
//     index = i;
// }

// closebtn.addEventListener('click',() => {
//     popup.classList.toggle('active');
// })


// const images = document.querySelectorAll(".image");
// const popup = document.querySelector(".popup");
// const largeImage = document.querySelector(".large-image");
// const imageIndex = document.querySelector('.index');
// const closeButton = document.querySelector(".close-btn");
// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');

// images.forEach(image => {
//   image.addEventListener("click", e => {
   
//     popup.classList.add("popup-active");
   
//     largeImage.src = e.target.src;
   
    
//   });
// });



// closeButton.addEventListener("click", () => {
//   popup.classList.remove("popup-active");
// });

// leftArrow.addEventListener("click", () => {
//     popup.classList.remove("popup-active");
//   });

const images = document.querySelectorAll(".image");
const popup = document.querySelector(".popup");
const largeImage = document.querySelector(".large-image");
const closeButton = document.querySelector(".close-btn");
const backButton = document.querySelector(".left-arrow");
const nextButton = document.querySelector(".right-arrow");
const imagesContainer = document.querySelector(".gallery");
let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", e => {
    currentIndex = index;
    popup.classList.add("popup-active");
    largeImage.src = e.target.src;
    imagesContainer.classList.add("blur");
    
  });
});

closeButton.addEventListener("click", () => {
  popup.classList.remove("popup-active");
  imagesContainer.classList.remove("blur");
});

backButton.addEventListener("click", () => {
  currentIndex = (currentIndex + images.length - 1) % images.length;
  largeImage.src = images[currentIndex].src;
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  largeImage.src = images[currentIndex].src;
});
