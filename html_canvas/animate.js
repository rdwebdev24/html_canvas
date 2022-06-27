
let canvas = document.querySelector('canvas')


canvas.width = window.innerWidth
canvas.height = window.innerHeight
var c = canvas.getContext('2d')




function animate() {
     requestAnimationFrame(animate)
     c.clearRect(0, 0, innerWidth, innerHeight)
     for (i = 0; i < circle_array.length; i++) {
          circle_array[i].update();
     }
}

window.requestAnimationFrame(animate)



var mouse = {
     x: undefined,
     y: undefined
}

var color_array = [
     '#ffaa33',
     '#ggffaaa',
     '#00ff00',
     '#4411aa',
     '#ff1100'
]



var max_radius = 60
var min_radius = 5
window.addEventListener('mousemove',
     function (event) {
          mouse.x = event.x
          mouse.y = event.y
          console.log(mouse)
     })


window.addEventListener('resize', function () {
     canvas.width = window.innerWidth
     canvas.height = window.innerHeight
     init();
})


var circle_array = []
function init() {
     circle_array = []
     for (i = 0; i < 2000; i++) {
          var x = Math.random() * (innerWidth - radius * 2) + radius
          var y = Math.random() * (innerHeight - radius * 2) + radius
          var dx = Math.floor((Math.random() * 5))
          var dy = Math.floor((Math.random() * 5))
          var radius = (Math.random() * 3) + 1
          circle_array.push(new Circles(x, y, dx, dy, radius))

     }

}


function Circles(x, y, dx, dy, radius) {
     this.x = x
     this.y = y
     this.dx = dx
     this.dy = dy
     this.radius = radius
     this.minRadius = radius
     this.color = color_array[Math.floor(Math.random() * color_array.length)]

     this.draw = function () {
          c.beginPath()
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
          // c.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
          c.strokeStyle = 'black'
          // c.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
          c.fillStyle = this.color
          c.fill()
          c.stroke()
     }

     this.update = function () {

          if (this.x + radius > innerWidth || this.x - radius < 0) {
               this.dx = -this.dx
          }
          if (this.y + radius > innerHeight || this.y - radius < 0) {
               this.dy = -this.dy
          }
          this.x += this.dx
          this.y += this.dy

          if (mouse.x - this.x < 50 && mouse.x - this.x > -50
               && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
               if (this.radius < max_radius) {

                    this.radius += 2
               }
          }
          else if (this.radius > this.minRadius) {
               this.radius -= 1
          }

          this.draw();

     }

}

var circle_array = []
for (i = 0; i < 2000; i++) {
     var x = Math.random() * (innerWidth - radius * 2) + radius
     var y = Math.random() * (innerHeight - radius * 2) + radius
     var dx = Math.floor((Math.random() * 5))
     var dy = Math.floor((Math.random() * 5))
     var radius = (Math.random() * 3) + 1
     circle_array.push(new Circles(x, y, dx, dy, radius))

}
