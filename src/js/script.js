let isColor1 = true;
const color1 = '#365c77'; 
const color2 = '#6A5ACD'; 

function mudarCor() {
    document.body.style.backgroundColor = isColor1 ? color1 : color2;
    isColor1 = !isColor1;
}

let imgs_problema =['src/img/praia-poluida.jpg','src/img/praia-poluida2.jpg','src/img/praia-poluida3.jpg'];
let index =0;
let time =3000;

function slideShow(){
    document.getElementById('img-problema').src=imgs_problema[index];
    index++;

        if(index == imgs_problema.length){
          index =0;
        }
        setTimeout('slideShow()',time);
}
slideShow();

let imgs_tecnologia =['src/img/tecnologia1.jpg','src/img/R.png','src/img/tecnologia3.jpg'];

function slideShow2(){
    document.getElementById('img-tec').src=imgs_tecnologia[index];
    index++;

        if(index == imgs_tecnologia.length){
          index =0;
        }
        setTimeout('slideShow2()',time);
}
slideShow2();
