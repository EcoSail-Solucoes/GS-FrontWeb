let isColor1 = true;
const color1 = '#AFEEEE'; 
const color2 = '#6A5ACD'; 

function mudarCor() {
    document.body.style.backgroundColor = isColor1 ? color1 : color2;
    isColor1 = !isColor1;
}