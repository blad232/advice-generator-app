const numero = document.getElementById("advice-id");
const consejo = document.getElementById("advice");
const boton = document.getElementById("boton");

let randonautica = 71;

function setch() {

    fetch(`https://api.adviceslip.com/advice/${randonautica}`)
        .then((res) => res.json())
        .then((data) => {
            numero.innerText = data.slip.id;
            consejo.innerText = `“${data.slip.advice}”`;
        });
}
setch();


boton.addEventListener("click", () => {
    boton.classList.add("animate");
    setTimeout(() => {
        boton.classList.remove("animate");
        randonautica = Math.floor(Math.random() * (222 - 1) + 1);
        setch();

    }
        , 1700);

})