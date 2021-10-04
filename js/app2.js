let caja=document.getElementById('caja');
let body=document.querySelector('body');
let laser=document.getElementById('laser');
let explosion=document.getElementById('explosion');
let live=document.querySelector('i');
let lives=5;
let time=document.getElementById('time');
let seconds=60;
setInterval(()=>{
  seconds--;
  time.innerHTML=seconds;
  if (seconds==0){
    alert ('You Win!');
    location.reload();
  }
},1000);
document.addEventListener('mousemove',function(event){
  caja.style.left=event.clientX+'px';
});
document.addEventListener('click', function(){
  let bala=document.createElement('div');
  bala.classList.add('bala');
  bala.style.bottom=70+'px';
  bala.style.left=(caja.getBoundingClientRect().left+40)+'px';

  body.append(bala);
  laser.play();
});

setInterval(()=>{
  let balas=document.querySelectorAll('.bala');
  balas.forEach(element => {
    element.style.top=(element.getBoundingClientRect().top-20)+'px';
    
    if (element.getBoundingClientRect().top<=0){
      element.remove();
    }
    // //detectar colision
    let enemys=document.querySelectorAll('.enemigo');
    enemys.forEach(enemy => {
     
      if (element.getBoundingClientRect().top<=enemy.getBoundingClientRect().top+50){
        if (element.getBoundingClientRect().left>=enemy.getBoundingClientRect().left && (element.getBoundingClientRect().left<=enemy.getBoundingClientRect().left+80)){
          enemy.style.backgroundImage='url("../img/explosion.png")';
          explosion.play();
          setTimeout(() => {
            enemy.remove();
          }, 100);
         
        }
      }
    });
  });
},100);
let aparecer=0
setInterval(()=>{
  aparecer++;
  if (aparecer%10==0){
  let enemigo=document.createElement('div');
  enemigo.classList.add('enemigo');
 
  body.append(enemigo);
  enemigo.style.left=(Math.random()*window.innerWidth-100)+'px';
}
  let enemigos=document.querySelectorAll('.enemigo');
  enemigos.forEach(element => {
    element.style.top=(element.getBoundingClientRect().top+10)+'px';
    if (element.getBoundingClientRect().top>caja.getBoundingClientRect().top){
      lives--;
      live.textContent=lives;
      if (lives==0){
        alert('Game Over');
        location.reload();
      }
      element.remove();
    }
  });
},100);

document.addEventListener('keydown',function(event){
  if(event.key=='Enter'){
    alert('pausa');
  }
 })