// import imagen from '../assets/img/webpack-logo.png';
export function saludar() {
    const h1 = document.createElement("H1");
    h1.textContent = "Hola Oscar E."
    document.body.appendChild(h1);
}

export const imgentrada = document.createElement("IMG");
imgentrada.src = imagen;