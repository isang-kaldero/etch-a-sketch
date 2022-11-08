$(function() { //onload
    const GRID_MIN = 8;
    const PAD = $('.pad');
    const PAD_W = PAD.width();
    const PAD_H = PAD.height();

    let grid = GRID_MIN;
    let box_w = 0;
    let box_h = 0;
    let total_box = 0;

    //calculate the width and height of each box
    box_w = PAD_W / grid;
    box_h = PAD_H / grid;
    total_box = grid * grid;

    //populate the boxes inside the pad area    
    for(ctr=1; ctr <= total_box; ctr++) {
        PAD.append(`<div class="box" style="width:${box_w}px;height:${box_h}px;"></div>`);
    }

    /*$("document").on("mousedown", ".pad", function(event) {
        $(this).addClass("active");
    });*/
    $("document").on("mousedown", ".pad",function(event){
        $(this).on("mouseover", ".box", function(e){
            $(this).addClass("active");            
        });        
    })
    .on("mouseup", function(e){
        //$(this).children().unbind("mouseover");
        //$(this).children().off("mouseover");
        console.log($(this).children()); 
        $(this).off("mousedown, mouseover");
    }).
    on("mouseout", function(){
        //$(this).off("mousedown, mouseover");
        console.log("mouseout");
    });
    
});