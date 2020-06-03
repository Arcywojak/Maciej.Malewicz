const canvas = document.getElementById("canvas"),
      speedInputX = document.getElementById("speedX"),
      speedInputY = document.getElementById("speedY"),
      numberOfDots = document.getElementById("nrDots"),     
      deviceWidth = window.innerWidth,
      deviceHeight = window.innerHeight;
      middleX = deviceWidth/2,
      middleY = deviceHeight/2,
      ctx = canvas.getContext("2d");

const resizeCanvas = () => {
    canvas.width = deviceWidth;
    canvas.height = deviceHeight;
}

const generateRandomDots = (radius) => {
    const dots = [];

    let direction;

    const dotsNumber = !isNaN(Number(numberOfDots.value)) ? Number(numberOfDots.value) : 5000

    for(let i=0; i<dotsNumber; i++){

        direction = i % 2 == 0 ? 1 : -1;

        const positionInTime = Math.round(Math.random()*10000 + 1);

        const dot = {
            "radius":radius,
            "positionInTime": positionInTime,
            "distanceFromCentre": Math.abs(Math.round(Math.random()*deviceWidth)+1),
            "direction": direction
        }

        dots.push(dot);
    }

    return dots;
}

const draw = () => {

    let arrayOfDots = generateRandomDots(1)

    let counter = 1;

    setInterval( () => {

        if(Number(numberOfDots.value) !== arrayOfDots.length &&
         !isNaN(Number(numberOfDots.value) ) 
         && Number(numberOfDots.value) > 0){
           
            arrayOfDots = generateRandomDots(1);
        }
       
        ctx.clearRect(0, 0, canvas.width, canvas.height)


        for(let i=0; i<arrayOfDots.length; i++){
        
            ctx.beginPath();

            ctx.fillStyle = "#fefefe";

            ctx.arc(
                    arrayOfDots[i].distanceFromCentre * Math.sin(
                        2*
                        Math.PI*
                        (arrayOfDots[i].positionInTime + counter)/
                        speedInputX.value*
                        arrayOfDots[i].direction
                        ) + middleX, // x Pos
                    arrayOfDots[i].distanceFromCentre * Math.cos(
                        2*
                        Math.PI*
                        (arrayOfDots[i].positionInTime + counter)/
                        speedInputY.value*
                        arrayOfDots[i].direction
                        ) + middleY, // y pos 
                    arrayOfDots[i].radius,
                    0,
                    2*Math.PI, false
                )
    
            ctx.fill()
        }
        
        counter++;

    },2)

     

}



resizeCanvas();
draw();

document.addEventListener("resize", () => {
    resizeCanvas();
    draw();
})



