const canvas = document.getElementById("canvas"),
      deviceWidth = window.innerWidth,
      deviceHeight = window.innerHeight;

      const middleX = deviceWidth/2;
      const middleY = deviceHeight/2;
      // we need to minus half of height/width of the element to get the middle

const resizeCanvas = () => {
    canvas.width = deviceWidth;
    canvas.height = deviceHeight;
}

const generateRandomDots = (radius) => {
    const dots = [];

    for(let i=0; i<100; i++){

        const dot = {
            "radius":radius,
            "x": Math.round(Math.random()*deviceWidth)+1,
            "y": Math.round(Math.random()*deviceHeight)+1
        }

        dots.push(dot);
    }

    return dots;
}

const ctx = canvas.getContext("2d");

const draw = () => {

    const arrayOfDots = generateRandomDots(3)

    for(let i=0; i<arrayOfDots.length; i++){
        
        ctx.beginPath();
        ctx.arc(
                arrayOfDots[i].x, 
                arrayOfDots[i].y,
                arrayOfDots[i].radius,
                0,
                2*Math.PI, false
            )

        ctx.fill()
    }

    let rotateRate = 20;
    

alert("ZROBIC OBRACANIE")
      

}



resizeCanvas();
draw();

document.addEventListener("resize", () => {
    resizeCanvas();
    draw();
})



