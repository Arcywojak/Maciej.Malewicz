// PREVENT SCROLLING DURING RELOAD
if(window.location.hash){
    window.location.hash = ""
}
/////////////////////////////////


/****************** FIRST SECTION ANIMATION ***********************/

const canvas = document.getElementById("canvas"),
      speedInputX = document.getElementById("speedX"),
      speedInputY = document.getElementById("speedY"),
      numberOfDots = document.getElementById("nrDots"),
      dotsRadius = document.getElementById("radius")    
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

    let radiusOfDots = dotsRadius.value;

    let arrayOfDots = generateRandomDots(radiusOfDots)

    let counter = 1;

    setInterval( () => {

        if(Number(numberOfDots.value) !== arrayOfDots.length &&
         !isNaN(Number(numberOfDots.value) ) 
         && Number(numberOfDots.value) > 0){
           
            arrayOfDots = generateRandomDots(radiusOfDots);
        }

        if(radiusOfDots !== dotsRadius.value){
            radiusOfDots = dotsRadius.value;

            arrayOfDots = generateRandomDots(radiusOfDots)
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

/******************END OF FIRST SECTION ANIMATION ***********************/

/** HIDE/SHOW FIRST SECTION */

toggleCanvasOptions = (show) => {
    const canvasOptions = document.querySelector(".canvas-options");

    if(show){
        canvasOptions.classList.remove("hidden-right");
    } else {
        canvasOptions.classList.add("hidden-right");
    }
}

const activateCanvasOptions = document.querySelector(".activate-canvas-options");

activateCanvasOptions.addEventListener("click", () => {toggleCanvasOptions(true);})

const hideOptions = document.querySelector(".hide-options");

hideOptions.addEventListener("click", () => {toggleCanvasOptions(false);})

/**END OF HIDE/SHOW FIRST SECTION */

/*SHOW INFO ABOUT PROJECT */

const questionMarks = document.querySelectorAll(".question-mark");

questionMarks.forEach(qm => {

    const aboutProjectInfo = document.querySelectorAll(".about-project");
    console.log(aboutProjectInfo)

    qm.addEventListener("click", (e) => {
        
    switch(e.target.id){
        case "qm0":
            aboutProjectInfo[0].classList.remove("hidden-left"); 
            break;
        case "qm1":
            aboutProjectInfo[1].classList.remove("hidden-left"); 
            break;
        case "qm2":
            aboutProjectInfo[2].classList.remove("hidden-left"); 
            break;
        case "qm3":
            aboutProjectInfo[3].classList.remove("hidden-left"); 
            break;
    }    
    
    })
})


