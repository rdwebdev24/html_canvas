let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth - 4
canvas.height = window.innerHeight - 4


let c = canvas.getContext('2d')
c.beginPath()

var x = 750
var y = 200
var dx = 10
var dy = 5
var radius = 50
var gravity = 3
var friction = 0.89

c.arc(x, y, 50, 0, Math.PI * 2, false)
c.fillStyle = 'red'
c.strokeStyle = 'red'
c.fill()
c.stroke()


var btn = document.getElementById('button')
btn.addEventListener('click', apply)
var btn2 = document.getElementById('button2')
btn2.addEventListener('click', apply2)
function apply() {
     if(btn.value == 'ok'){
          console.log("fff")
          function start() {
               c.clearRect(0, 0, canvas.width, canvas.height)
              
               c.beginPath()
               c.fillStyle = 'black'
               c.stroke()
          
               c.beginPath()
               c.arc(x, y, radius, 0, Math.PI * 2, false)
               c.fillStyle = 'red'
               c.strokeStyle = 'red'
               c.fill()
               c.stroke()
           
               if (y + radius >= canvas.height || y - radius <= 0) {
                    dy = -dy*friction
               }
               else {
                    dy += gravity
               }
               y += dy
          
               window.requestAnimationFrame(start)
          }
          
          window.requestAnimationFrame(start)
     }
    
}



function apply2() {
 if(btn2.value == 'start'){
     function start() {
          c.clearRect(0, 0, canvas.width, canvas.height)
         
          c.beginPath()
          c.fillStyle = 'black'
          c.stroke()
     
          c.beginPath()
          c.arc(x, y, radius, 0, Math.PI * 2, false)
          c.fillStyle = 'red'
          c.strokeStyle = 'red'
          c.fill()
          c.stroke()
      
          if (y + radius >= canvas.height || y - radius <= 0) {
               dy = -dy
          }
          else {
               dy += gravity
          }
          y += dy
     
          window.requestAnimationFrame(start)
     }
     
     window.requestAnimationFrame(start)
}
}
