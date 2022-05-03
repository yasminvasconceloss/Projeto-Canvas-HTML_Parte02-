var dx=200, dy, r, vx=10
var canvas = document.querySelector('canvas')
var c = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth


/////////////////////////Desafio 1 - Não ultrapassar a tela///////////////////////////////////////////

function animate (){                        //Criação função animate
    requestAnimationFrame(animate)

    c.clearRect(0,0,innerWidth,innerHeight)
    
    c.fillStyle = 'rgba(113,103,253,1)'         //escolhe a cor 
    c.fillRect (dx,200,200,200)

    if((dx+200) > innerWidth){
        vx=-vx
    }
    else if (dx<0) vx=-vx
    dx = dx+vx
 }
 animate()                  //chamou função para executar o script 


 //////////////////////// Desafio 2 - Movimentação Vertical ///////////////////////////////////////


function animate (){                        //Criação função animate
    requestAnimationFrame(animate)

    c.clearRect(0,0,innerWidth,innerHeight)
    
    c.fillStyle = 'rgba(113,103,253,1)'         
    c.fillRect (200,dx,200,200)    /* Mudei o dx de posição */

    if((dx+200) > innerHeight){ /* Ao invés de WOtdht colo9quei Height */
        vx=-vx
    }
    else if (dx<0) vx=-vx
    dx = dx+vx
 }
 animate()                 



