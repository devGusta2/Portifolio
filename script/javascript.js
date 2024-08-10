

//menu
var header=document.getElementById('header');
var navBar=document.getElementById('navBar');
var conteudo=document.querySelector('content');
var showMenu=false;

function ativaMenu(){
    showMenu=!showMenu
    if(showMenu==true){
        
        navBar.style.marginLeft='-0vh';
    }else{
        navBar.style.marginLeft='-100vh';
    }
}

//js Responsivo
window.addEventListener('resize',widhtScreen);
function widhtScreen(){

    console.log(window.innerWidth);
    if(window.innerWidth<768){
        document.querySelector('.fa-brands.fa-linkedin.fa-5x').classList.add('fa-brands', 'fa-linkedin', 'fa-4x');

    }
}

//Funcionamento do mostrador dos anos
// year=2022;
// document.getElementById('yearValue').innerHTML=year;
//0%
//100%
//195%

// function verifyChange(){
//     const elemento =document.querySelector('.titleInfo').innerHTML="";
//     if(year==2019){
//         console.log(year)
//         const elemento=document.querySelector('.titleInfo');
//         var textAdigitar="Curso em Desenvolvimento de Jogos e Curso Básico em POO";
//         const interval=20;
//         function typeText(elemento , textAdigitar, interval){   
//             const char= textAdigitar.split("").reverse();
//             const typer=setInterval(() => {
//                     if(!char.length){
//                         return clearInterval(typer);
//                     }
//                     const next= char.pop();
//                     elemento.innerHTML+=next;
//             }, interval);
//         }
//         typeText(elemento , textAdigitar, interval);
//     }else if(year==2022){
//         console.log(year)
//         const elemento=document.querySelector('.titleInfo');
//         var textAdigitar="Curso em Desenvolvimento de Sistemas";
//         const interval=20;
//         function typeText(elemento , textAdigitar, interval){   
//             const char= textAdigitar.split("").reverse();
//             const typer=setInterval(() => {
//                     if(!char.length){
//                         return clearInterval(typer);
//                     }
//                     const next= char.pop();
//                     elemento.innerHTML+=next;
//             }, interval);
//         }
//         typeText(elemento , textAdigitar, interval);
//     }else if(year==2023){
//         const elemento=document.querySelector('.titleInfo');
//         var textAdigitar="Curso em Análise e Desenvolvimento de Sistemas";
//         const interval=20;
//         function typeText(elemento , textAdigitar, interval){   
//             const char= textAdigitar.split("").reverse();
//             const typer=setInterval(() => {
//                     if(!char.length){
//                         return clearInterval(typer);
//                     }
//                     const next= char.pop();
//                     elemento.innerHTML+=next;
//             }, interval);
//         }
//         typeText(elemento , textAdigitar, interval);
//     }
// }

// setInterval(()=>{
//     if (year==2019){
//         document.getElementById('line1').style.width='0%';
//         document.getElementById('line2').style.width='0%';
//         //bolinhas
//         document.getElementById('ball1').style.opacity='1';
//         document.getElementById('ball2').style.opacity='0';
//         document.getElementById('ball3').style.opacity='0';
//         //titulos
//         document.getElementById('y2').style.opacity='0';
//         document.getElementById('y3').style.opacity='0';
//         //conjutos
//         document.getElementById('cntj1').style.marginLeft='0%';
//         //text
//         // document.querySelector('.titleInfo').innerHTML='<p><h2>Curso básico de POO <br><br> Criação de jogos 2D</h2></p><br><br>';
//         //document.querySelector('subInfo').innerHtml= document.querySelector('.subInfo').innerHTML="<h4>Plataforma: </h4><span>Fundação Bradesco</span>";
//    }else if(year==2022){

//         document.getElementById('line1').style.width='100%';
//         document.getElementById('line2').style.width='0%';
//         //bolinhas
//         document.getElementById('ball2').style.opacity='1';
//         document.getElementById('ball1').style.opacity='1';
//         document.getElementById('ball3').style.opacity='0';
//         //titulos
//         document.getElementById('y2').style.opacity='1';
//         document.getElementById('y3').style.opacity='0';
//         //conjunto
//         document.getElementById('cntj1').style.marginLeft='-100%';
//         //text  

//         //digitação
         
//         //document.querySelector('.titleInfo').innerHTML="<h2>Curso em Desenvolvimento<br> de Sistemas</h2>";
//        // document.querySelector('subInfo').innerHtml= document.querySelector('.subInfo').innerHTML="<h4>Local:</h4>";
//    }else if(year==2023){
//         document.getElementById('line1').style.width='100%';
//         document.getElementById('line2').style.width='100%';
//         //bolinhas
//         document.getElementById('ball2').style.opacity='1';
//         document.getElementById('ball3').style.opacity='1';
//         //titulos
//         document.getElementById('y2').style.opacity='1';
//         document.getElementById('y3').style.opacity='1';
//         document.getElementById('cntj1').style.marginLeft='-195%';

//         //document.querySelector('.titleInfo').innerHTML="<h2>Curso em Desenvolvimento<br> de Sistemas</h2>";
//         //document.querySelector('.subInfo').innerHTML="<h4>Local:</h4><span>Fatec Ferraz de Vasconcelos</span><br><h4>Início:</h4><span>08/2023</span><br><h4>Conclusão:</h4><span>12/2026</span>";
//    }
// }, 100);


function rightArrow(){
   
   if(year==2019){
        year=2022;
        document.getElementById('yearValue').innerHTML=year;
   }else if(year==2023){
    //verifica se ja está no limite dos anos
        year=2023;
        document.getElementById('yearValue').innerHTML=year;
    }else{
        year++;
        document.getElementById('yearValue').innerHTML=year;
    }

    //verifica se foi clicado em um dos botões
    verifyChange();
}


function leftArrow(){
   
    //verifica se ja está no limite dos anos
    if(year==2022){
        year=2019;
        document.getElementById('yearValue').innerHTML=year;
    }else if(year==2019){
        year=2019;
        document.getElementById('yearValue').innerHTML=year;
    }else{
        year--;
        document.getElementById('yearValue').innerHTML=year;
    }

    //verifica se foi clicado em um dos botões
    verifyChange();

}
//infos

let info=[
    ['Curso em Análise e desenvolvimento de sistemas',  'Course in Systems Analysis and Development',],
    ['Local:',  'Place:'],
    ['Fatec Ferraz de Vasconcelos',  'Fatec Ferraz de Vasconcelos'],
    ['Início:',  'beginning:'],
    ['08/2023',  '08/2023'],
    ['Conclusão:',  'Conclusion:'],
    ['08/2026',  '08/2026'],
];















// function indicaP(){
//     const scroll =document.documentElement.scrollTop;
//     var altura = document.documentElement.scrollHeight-
//     document.documentElement.clientHeight;
//     var rolagem=(scroll/altura)*100;

//     document.getElementById('ball1').style.opacity="1";


//     if(rolagem > 50){
//             document.getElementById('line1').style.height="48%";
//             document.getElementById('ball2').style.opacity="1";
//         if (rolagem > 70){
//             document.getElementById('line2').style.height="48%";
//             document.getElementById('ball3').style.opacity="1";
//         }else{
//             document.getElementById('line2').style.height="0%";
//             document.getElementById('ball3').style.opacity="0";
//             document.getElementById('ball2').style.transitionDelay="0";
//         }
//     }else{
//         document.getElementById('line1').style.height="0%";
//         document.getElementById('ball2').style.opacity="0";
    
//     }
// };

// window.onscroll= function(){
//     indicaP();
// };






// function indicaProgresso() {
//     const scroll =document.documentElement.scrollTop;
//     var altura = document.documentElement.scrollHeight-
//     document.documentElement.clientHeight;

 

//     var rolagem=(scroll/altura)*100;
//     var idLine=1;
//     if(rolagem>55){
//        document.getElementById('line'+idLine).style.height="48%";
//        if(rolagem>65){
//             idLine+=1;
//             document.getElementById('line'+idLine).style.height="48%"
//        }else{
        
//             document.getElementById('line'+idLine).style.height="0%"
//             idLine-=1;
//        }
//     }else{
//         document.getElementById('line'+idLine).style.height="0%";
//     }

    
    
// }

// window.onscroll=function(){
//     indicaProgresso();
// };




function exbModal(e){

    elemnt = document.querySelector('.info'+e);

    window.alert(document.querySelector('.info').innerText);
    

}



