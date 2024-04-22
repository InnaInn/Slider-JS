let images = [{
    url: "./images/room1.jpg",
    city: "Rostov-on-Don <br> LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    link: "Rostov-on-Don, LCD admiral"
}, {
    url: "./images/room2.jpg",
    city: "Sochi <br> Thieves",
    area: "105 m2",
    time: "4 months",
    link: "Sochi Thieves"
}, {
    url: "./images/room3.jpg",
    city: "Rostov-on-Don <br> Patriotic",
    area: "93 m2",
    time: "3 months",
    link: "Rostov-on-Don Patriotic"
}];

function initSlider() {
    if (!images || !images.length) return;

    let gallery = document.querySelector('.gallery');
    let infoBlock = document.querySelector('.completedInformation')
    let arrows = document.querySelector('.arrow');
    let dots = document.querySelector('.dots');
    let navigation = document.querySelector('.completedNavigation');


    initImages();
    initArrows();
    initInfo();
    initDots();
    initNavigation();


    function initImages() {
        images.forEach((image, index) => {
            let imagesBlock = `<img  alt="photo of the apartment" class="completedImg n${index} ${index === 0 ? "active" : ""}" src="${image.url}" data-index="${index}">`
            gallery.innerHTML += imagesBlock;
        });
    }

    function initInfo() {
        images.forEach((image, index) => {
            let infoDiv = `<div class="info n${index} ${index === 0 ? "active" : ""}">
          <div class="item">
            <h3 class="title completedSubtitle">City:</h3>
            <p>${images[index].city}</p>
          </div>
          <div class="item">
              <h3 class="title completedSubtitle">apartment area:</h3>
              <p>${images[index].area}</p>
          </div>
          <div class="item">
              <h3 class="title completedSubtitle">Repair time:</h3>
              <p>${images[index].time}</p>
          </div>
          <div class="item">
              <h3 class="title completedSubtitle">Repair Cost:</h3>
              <p>Upon request</p> 
          </div>
        </div>`;
            infoBlock.innerHTML += infoDiv;
        })
    }

    function initArrows() {
        arrows.querySelectorAll(".buttonArrow").forEach(arrow => {
            arrow.addEventListener("click", function () {
                let curNumber = +gallery.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="dotsItem n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
            dots.innerHTML += dot;
        });

        dots.querySelectorAll(".dotsItem").forEach(dot => {
            dot.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            })
        })
    }

    function initNavigation() {
        images.forEach((image, index) => {
            let link = `<div class="navigationItem n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].link}</div>`;
            navigation.innerHTML += link;
        });

        navigation.querySelectorAll(".navigationItem").forEach(link => {
            link.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            })
        })
    }

    function moveSlider(num) {
        gallery.querySelector(".active").classList.remove("active");
        gallery.querySelector(".n" + num).classList.add("active");
        infoBlock.querySelector(".active").classList.remove("active");
        infoBlock.querySelector(".n" + num).classList.add("active");
        dots.querySelector(".active").classList.remove("active");
        dots.querySelector(".n" + num).classList.add("active");
        navigation.querySelector(".active").classList.remove("active");
        navigation.querySelector(".n" + num).classList.add("active");

    }
}
document.addEventListener("DOMContentLoaded", initSlider);