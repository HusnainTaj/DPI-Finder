"use strict";

document.addEventListener('pointerlockchange', ()=>
{
  if (document.pointerLockElement === document.body) 
  {
    // console.log('The pointer lock status is now locked');
    document.addEventListener("mousemove", PLMouseMove, false);
  }
  else 
  {
    // console.log('The pointer lock status is now unlocked');  
    document.removeEventListener("mousemove", PLMouseMove, false);
  }
}, false);

document.addEventListener("mouseup", ()=>
{
    if(document.pointerLockElement)
    {
        // $("#pixelMovedCount").text(Math.abs(x))
        // let dpi = Math.abs(x) / $("#distance").val()
        // $("#resultantDpi").text(dpi)

        document.exitPointerLock();
        x=0;
        y=0;
    }
});

let x = 0;
let y = 0;

function PLMouseMove(e)
{
    x+=e.movementX;
    y+=e.movementY;
    // console.log(e.movementX);
    $("#pixelMovedCount").text(Math.abs(x))
    let dpi = Math.abs(x) / $("#distance").val()
    $("#resultantDpi").text(dpi)
}

$(()=>{

    let box = $("#box");
    let pixelMovedCount = $("#pixelMovedCount");

    box.on("mousedown", (e)=>{
        document.body.requestPointerLock();
    });
})