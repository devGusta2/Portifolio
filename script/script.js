//Funcionamento do mostrador dos anos
year=2022;
document.getElementById('yearValue').innerHTML=year;
//0%
//100%
//195%

setInterval(()=>{
    if (year==2019){
        document.getElementById('line1').style.width='0%';
        document.getElementById('line2').style.width='0%';
        //bolinhas
        document.getElementById('ball1').style.opacity='1';
        document.getElementById('ball2').style.opacity='0';
        document.getElementById('ball3').style.opacity='0';
        //titulos
        document.getElementById('y2').style.opacity='0';
        document.getElementById('y3').style.opacity='0';
        //conjutos
        document.getElementById('cntj1').style.marginLeft='0%';
        //text
        document.querySelector('.titleInfo').innerHTML='<h2>Curso básico de POO <br><br> Criação de jogos 2D</h2>';
        document.querySelector('subInfo').innerHtml= document.querySelector('.subInfo').innerHTML="<h4>Plataforma: </h4><span>Fundação Bradesco</span>";
   }else if(year==2022){
        document.getElementById('line1').style.width='100%';
        document.getElementById('line2').style.width='0%';
        //bolinhas
        document.getElementById('ball2').style.opacity='1';
        document.getElementById('ball1').style.opacity='1';
        document.getElementById('ball3').style.opacity='0';
        //titulos
        document.getElementById('y2').style.opacity='1';
        document.getElementById('y3').style.opacity='0';
        //conjunto
        document.getElementById('cntj1').style.marginLeft='-100%';
        //text  
        document.querySelector('.titleInfo').innerHTML="<h2>Curso em Desenvolvimento<br> de Sistemas</h2>";
        document.querySelector('subInfo').innerHtml= document.querySelector('.subInfo').innerHTML="<h4>Local:</h4><span>Etec de Guaianases</span><br><h4>Início:</h4><span>08/2022</span><br><h4>Conclusão:</h4><span>12/2023</span>";
   }else if(year==2023){
        document.getElementById('line1').style.width='100%';
        document.getElementById('line2').style.width='100%';
        //bolinhas
        document.getElementById('ball2').style.opacity='1';
        document.getElementById('ball3').style.opacity='1';
        //titulos
        document.getElementById('y2').style.opacity='1';
        document.getElementById('y3').style.opacity='1';
        document.getElementById('cntj1').style.marginLeft='-195%';

        document.querySelector('.titleInfo').innerHTML="<h2>Curso em Desenvolvimento<br> de Sistemas</h2>";
        document.querySelector('.subInfo').innerHTML="<h4>Local:</h4><span>Fatec Ferraz de Vasconcelos</span><br><h4>Início:</h4><span>08/2023</span><br><h4>Conclusão:</h4><span>12/2026</span>";
   }
}, 100);


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