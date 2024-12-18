let images = [
    "dieWhite1.png",
    "dieWhite2.png",
    "dieWhite3.png",
    "dieWhite4.png",
    "dieWhite5.png",
    "dieWhite6.png",
];
const jeu = document.querySelector(".jeu");
function changenumber() {
    let i = Math.floor(Math.random() * images.length);
    let newimage = images[i];
    jeu.style.backgroundImage = `url(${newimage})`;
    console.log(i + 1);
}
changenumber();
