let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");

let canvas = document.querySelector('#canvas_plot');
let context = canvas.getContext("2d");

canvas.width = 696;
canvas.height = 862;

main();


async function main(){
    const img = await loadImage("./contents/bottle.png");
    context.drawImage(img, 0, 0, 296, 862, 200, 0, 296, 862)

    context.strokeStyle = "#8C001A";
    context.font = '16px Lato 700'

    context.beginPath();
    context.arc(355,478,16,0,2*Math.PI);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(427,617,16,0,2*Math.PI);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(272,727,16,0,2*Math.PI);
    context.stroke();
    context.closePath();

    btn1.addEventListener("click", function(){
        context.beginPath();
        context.strokeStyle = "#8C001A";
        context.moveTo(355, 478);
        context.lineTo(483, 351);

        context.moveTo(483, 351);
        context.lineTo(605, 351);
        context.stroke();

        context.fillText('Chablis Wine', 477, 345)
        context.closePath();
    });
    btn2.addEventListener("click", function(){
        context.beginPath();
        context.strokeStyle = "#8C001A";
        context.moveTo(427, 617);
        context.lineTo(555, 490);

        context.moveTo(555, 490);
        context.lineTo(677, 490);
        context.stroke();

        context.closePath();
    });
    btn3.addEventListener("click", function(){
        context.beginPath();
        context.strokeStyle = "#8C001A";
        context.moveTo(272, 727);
        context.lineTo(140, 600);

        context.moveTo(140, 600);
        context.lineTo(18, 600);
        context.stroke();
        context.closePath();
    });

}

function loadImage(src) {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = src;
        image.onload = () => resolve(image);
    });
}

