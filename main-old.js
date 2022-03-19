"use strict";

$(()=>{

    let box = $("#box");
    let pixelMovedCount = $("#pixelMovedCount");

    let initialX = 0;
    let finalX = 0;

    box.on("mousedown", (e)=>{
        // console.log(e.offsetX, e.offsetY);
        let oX = e.offsetX;
        initialX = e.clientX;

        $("body").on("mousemove", (e)=>
        {
            box.css("margin-left", (e.clientX - oX) + "px");
            document.scrollingElement.scrollLeft = (e.clientX - oX);
            // pixelMovedCount.text(e.clientX - initialX);
            pixelMovedCount.text(box.css("margin-left"));

        });
    });
    
    box.on("mouseup", (e)=>{
        // console.log(e.clientX, e.clientY);
        finalX = e.clientX;

        pixelMovedCount.text(box.css("margin-left"));
        box.css("margin-left", "0px");

        // console.log("Pixels Moved", finalX - initialX);

        $("body").off("mousemove");
    })
})