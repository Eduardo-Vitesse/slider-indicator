const acordeon = document.querySelectorAll(".card");
const sliders = document.querySelectorAll(".swiper-slide");

function renderNumberOne() {
  // Adiciona a class no slider
  sliders[0].classList.add("show");
  sliders[1].classList.remove("show");
  sliders[2].classList.remove("show");
  // Adiciona a class na descrição
  acordeon[0].children[1].classList.add("show");
  acordeon[1].children[1].classList.remove("show");
  acordeon[2].children[1].classList.remove("show");
}

function renderNumberTwo() {
  // Adiciona a class no slider
  sliders[0].classList.remove("show");
  sliders[1].classList.add("show");
  sliders[2].classList.remove("show");
  // Adiciona a class na descrição
  acordeon[0].children[1].classList.remove("show");
  acordeon[1].children[1].classList.add("show");
  acordeon[2].children[1].classList.remove("show");
}

function renderNumberThree() {
  // Adiciona a class no slider
  sliders[0].classList.remove("show");
  sliders[1].classList.remove("show");
  sliders[2].classList.add("show");
  // Adiciona a class na descrição
  acordeon[0].children[1].classList.remove("show");
  acordeon[1].children[1].classList.remove("show");
  acordeon[2].children[1].classList.add("show");
}

acordeon.forEach((acc) => {
  acc.addEventListener("click", () => {
    if (acc.children[1].id === "desc01") {
      renderNumberOne();
    } else if (acc.children[1].id === "desc02") {
      renderNumberTwo();
    } else if (acc.children[1].id === "desc03") {
      renderNumberThree();
    }
  });
});

var count = 1;
setInterval(() => {
  if (count === 1) {
    renderNumberOne();
  } else if (count === 2) {
    renderNumberTwo();
  } else if (count === 3) {
    renderNumberThree();
  } else if (count > 3) {
    count = 0;
  }
  count += 1;
}, 5000);
