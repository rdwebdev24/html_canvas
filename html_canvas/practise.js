

//             PRACTISE             //
/*******/
/*******************/
/**********************************/

// CROWN WITH LINES
// var  c = canvas.getContext('2d')
// c.beginPath()
// c.moveTo(200 , 450)
// c.lineTo(200,500)
// c.lineTo(600,500)
// c.lineTo(600,450)
// c.lineTo(200,450)
// c.lineTo(100,150)
// c.lineTo(300,300)
// c.lineTo(400,150)
// c.lineTo(500,300)
// c.lineTo(650,150)
// c.lineTo(600,450)
// c.stroke()

// STAR WITH LINES
// var  c = canvas.getContext('2d')
// c.beginPath()
// c.moveTo(400, 50)
// c.lineTo(200,500)
// c.lineTo(700,200)
// c.lineTo(100,200)
// c.lineTo(650,500)
// c.lineTo(400,50)
// c.strokeStyle = 'blue'
// c.stroke()



//  BOX CAKE
// var  c = canvas.getContext('2d')
// c.fillStyle = 'pink'
// c.fillRect(320,50,30,40)
// c.fillStyle = 'red'
// c.fillRect(355,50,20,40)
// c.fillStyle = 'pink'
// c.fillRect(380,50,30,40)

// c.fillRect(300,100,50,60)
// c.fillStyle = 'red'
// c.fillRect(355,100,20,60)
// c.fillStyle = 'pink'
// c.fillRect(380,100,50,60)

// c.fillStyle = 'pink'
// c.fillRect(270,170,80,60)
// c.fillStyle = 'red'
// c.fillRect(355,170,20,60)
// c.fillStyle = 'pink'
// c.fillRect(380,170,80,60)

// c.fillStyle = 'pink'
// c.fillRect(230,240,120,60)
// c.fillStyle = 'red'
// c.fillRect(355,240,20,60)
// c.fillStyle = 'pink'
// c.fillRect(380,240,120,60)



//********** looping circles **********/
// function start() {
//      var c = canvas.getContext('2d')
//      for (i = 0; i <= 1000; i++) {
//           c.beginPath()
//           let x = Math.random() * window.innerWidth
//           let y = Math.random() * window.innerHeight
//           c.arc(x, y, 50, 0, Math.PI * 2, false)
//           c.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
//           c.stroke()
//      }
//      window.requestAnimationFrame(start)
// }
// window.requestAnimationFrame(start)

/*********** looping lines ************/
// function start(){
// for (i = 0; i <= 1; i++) {
//      var c = canvas.getContext('2d')
//      let d = Math.random() * window.innerWidth
//      let g = Math.random() * window.innerHeight  // passing a tons of objetc and mwwthod within c to access them
//      c.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
//      c.fillRect(d, g, 50, 50)
// }

// window.requestAnimationFrame(start)
// }

// window.requestAnimationFrame(start)


//********** looping circles and lines **********/
// function start() {
//      for (i = 0; i <= 1000; i++) {
//           var c = canvas.getContext('2d')
//           let x = Math.random() * window.innerWidth
//           let y = Math.random() * window.innerHeight
//           c.beginPath()
//           c.moveTo(600, 300)
//           c.lineTo(x, y)
//           c.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
//           c.stroke()

//           c.beginPath()
//           let a = Math.random() * window.innerWidth
//           let b = Math.random() * window.innerHeight
//           c.arc(a, b, 50, 0, Math.PI * 2, false)
//           c.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
//           c.stroke()

//           var c = canvas.getContext('2d')
//                let d = Math.random() * window.innerWidth
//                let g = Math.random() * window.innerHeight  // passing a tons of objetc and mwwthod within c to access them
//                c.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
//                c.fillRect(d, g, 50, 50)
//      }
//      window.requestAnimationFrame(start)
// }
// window.requestAnimationFrame(start)





// let canvas = document.querySelector('canvas')
// canvas.width = 900
// canvas.height = 600
// let c = canvas.getContext('2d')

// // crearing ball


// // add enent listner
// let keys = { ArrowDown: false, ArrowUp: false }

// window.addEventListener('keydown', keydown)
// window.addEventListener('keyup', keyup)


// function keydown(e) {
//      keys[e.key] = true
// }

// function keyup(e) {
//      keys[e.key] = false
// }

// var player = { y: 500, speed:5 }
// c.clearRect(0, 0, innerHeight, innerWidth)

// function start() {
//      c.fillRect(0, player.y, 15, 70)
//      c.stroke()

//      if (keys.ArrowUp) {
//           c.clearRect(0, 0, innerHeight, innerWidth)
//           c.fillRect(0, player.y, 15, 70)
//           console.log(player.y)
//           if(player.y >0){
//           player.y-=player.speed
//           }
//           c.stroke()
//           console.log('lll')
//      }
//      if (keys.ArrowDown) {
//           c.clearRect(0, 0, innerHeight, innerWidth)
//           c.fillRect(0, player.y, 15, 70)
//           if(player.y < 530){
//                player.y+=player.speed
//                }
//           c.stroke()
//           console.log(player.y)
//      }

//      window.requestAnimationFrame(start)
// }

// window.requestAnimationFrame(start)




// pong game incomplete : 

let canvas = document.querySelector('canvas')
canvas.width = 1000
canvas.height = 600

var radius = 15
let c = canvas.getContext('2d')
var x = Math.floor(1 + (1000 - 1) * Math.random())
var y = Math.floor(1 + (600 - 1) * Math.random())
speed = { dx: 0.6, dy: 0.6 }
var player_score = 0
var player2_score = 0
let keys = { w: false, x: false , o:false,m:false }
var player = { px:0,px2:985,py: 500, py2:400,speed: 8 ,wid:15,hei:100}


// add enent listner
window.addEventListener('keydown', keydown)
window.addEventListener('keyup', keyup)


function keydown(e) {
     keys[e.key] = true
     console.log(keys)

}

function keyup(e) {
     keys[e.key] = false
     console.log(keys)

}


function start() {

     for (i = 0; i <= 10; i++) {
          c.clearRect(0, 0, 1000, 600)
          c.beginPath();
          c.arc(x, y, radius, 0, Math.PI * 2, false)
          c.fillStyle = 'white'
          c.fill()
          c.stroke()
          c.fillRect(player.px, player.py, player.wid, player.hei)
          c.stroke()
          c.fillRect(player.px2, player.py2, player.wid, player.hei)
          c.stroke()


          if (x + radius >= 1000 || x - radius <= 0 ) {
               speed.dx = -speed.dx;
          }
          if (y + radius >= 600 || y - radius <= 0) {
               speed.dy = -speed.dy;
          }
          x += speed.dx
          y += speed.dy

     }

     if (keys.w) {
          c.fillRect(player.px, player.py, player.wid, player.hei)
          if (player.py > 0) {
               player.py -= player.speed
               console.log(player.x)
          }
          c.stroke()
     }
     if (keys.x) {
          c.fillRect(player.px, player.py, player.wid, player.hei)
          if (player.py < 500) {
               player.py += player.speed
          }
          c.stroke()
     }
     if (keys.o) {
          c.fillRect(player.px2, player.py2, player.wid, player.hei)
          if (player.py2 > 0) {
               player.py2 -= player.speed

          }
          c.stroke()
     }
     if (keys.m) {
          c.fillRect(player.px2, player.py2, player.wid, player.hei)
          if (player.py2 < 500) {
               player.py2 += player.speed
          }
          c.stroke()
     }

     window.requestAnimationFrame(start)
}
window.requestAnimationFrame(start)







//  lines animations // 

// let canvas = document.querySelector('canvas')
// canvas.width = 1500
// canvas.height = 670
// var c = canvas.getContext('2d')




// var x = Math.random() * innerWidth
// var y = Math.random() * innerHeight
// var dx = Math.random() * 20
// var dy = Math.random() * 20
// var lw = 0.1
// c.beginPath();
// c.moveTo(x, y);
// c.lineTo(x, y);
// // c.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
// c.strokeStyle = `red`
// c.stroke();



// function start() {

//      // c.clearRect(0, 0, window.innerWidth, window.innerHeight)
//      c.beginPath();
//      c.moveTo(canvas.width / 2, canvas.height / 2);
//      // c.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
// c.strokeStyle = `red`
//      c.lineWidth = lw
//      if(lw > 1.5){
//           lw = 0.1
//      }
//           lw = lw + 0.01
//      c.lineTo(x, y);
//      if (x <= 0 || x >= canvas.width) {
//           dx = -dx
//      }
//      if (y <= 0 || y >= canvas.height) {
//           dy = -dy
//      }
//      x -= dx
//      y -= dy
//      c.stroke();
//      window.requestAnimationFrame(start)
// }

// window.requestAnimationFrame(start)





// let canvas = document.querySelector('canvas')
// canvas.width = 1500
// canvas.height = 670
// var c = canvas.getContext('2d')

// var color_array = [
//      '#ffaa33',
//      '#ggffaaa',
//      '#00ff00',
//      '#4411aa',
//      '#ff1100'
// ]



// c.fillStyle = 'black'
// c.fillRect(x, y, bw, bh)
// c.stroke()



// var box_array = []
// box_array = []
//      for (i = 0; i < 1000; i++) {
//           var bw = Math.random()*50
//           var bh = Math.random()*50
//           var dx = Math.random() * 10
//           var dy = Math.random() * 10
//           var x = Math.random() * innerWidth -bw
//           var y = Math.random() * innerHeight -bh
//           box_array.push(new boxes(x, y, bw, bh , dx,dy))

//      }


// function start() {
//      c.clearRect(0, 0, innerWidth, innerHeight)
//      // update();
//      for (i = 0; i < box_array.length; i++) {
//           box_array[i].update();
//      }
//      window.requestAnimationFrame(start)
// }


// window.requestAnimationFrame(start)



// function boxes(x, y,bw, bh,dx,dy) {
//      this.x = x,
//           this.y = y,
//           this.bw = bw,
//           this.bh = bh,
//           this.dx = dx,
//           this.dy = dy,
//           this.color = color_array[Math.floor(Math.random() * color_array.length)]

//           this.draw = function () {
//                // c.fillStyle = 'black'
//                c.fillStyle = this.color
//                // c.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
//                c.fillRect(this.x, this.y, this.bw, this.bh)
//                c.stroke()
//           }
//           this.update = function(){

//                if (this.x <= 0 || this.x + this.bw >= canvas.width) {
//                     this.dx = -this.dx
//                }
//                if (this.y <= 0 || this.y + this.bh >= canvas.height) {
//                     this.dy = -this.dy
//                }
          
//                this.x += this.dx
//                this.y += this.dy
          
//                this.draw();
//           }
// }







