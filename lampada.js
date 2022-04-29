const botao = document.getElementById('ON-OFF');
const lampadaimg = document.getElementById('lampadaimg');
const h1 = document.getElementById('titulo');
const main = document.getElementsByTagName('main')[0];
const button = document.getElementsByTagName('button')[0];
const footer = document.getElementsByTagName('footer')[0];

lampadaimg.addEventListener('mouseover', mudaimg );
lampadaimg.addEventListener('mouseleave', mudaimg);
lampadaimg.addEventListener('dblclick', lampquebrada);

botao.addEventListener('click', principal);


function principal(){
    mudaimg();
}

function mudaimg(){
    
    if(!lampestaquebr()){
        if(h1.classList.contains('modo-escuro')) {
            lampadaimg.src = './img/ligada.png';
        }else{
            lampadaimg.src = './img/desligada.png';
        }
        trocaaparencia();
        mudatexto();
    }   
}

function trocaaparencia(){
    h1.classList.toggle('modo-escuro');
    button.classList.toggle('modo-escuro');
    main.classList.toggle('modo-escuro');
    footer.classList.toggle('modo-escuro');
}

function mudatexto() {
    const ligado = "Lâmpada";
    const desligado = "Lâmpada";

    if(h1.classList.contains('modo-escuro')) {
        button.innerHTML = 'ON';
        h1.innerHTML = ligado + " Desligada";
        return;
    }
    button.innerHTML = 'OFF';
        h1.innerHTML = ligado + " Ligada";
}

function lampquebrada(){
    lampadaimg.src = './img/quebrada.png';
    
}

function lampestaquebr(){
    return lampadaimg.src.indexOf('quebrada') > - 1
}


