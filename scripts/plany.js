

$(".plan-kolo").on("click", function (params) {

    let curentSRC = $(this).data("url")
    $("#full-screen-panel").addClass("full-screen-panel-active")
    $("#fuul-screen-panel-image")[0].src = curentSRC; 
   $("#full-image-title").text("");
    
    Seting.curentZoom = $("#fuul-screen-panel-image")[0];
    Seting.zoom = new Zoom(Seting.curentZoom,{
        rotate: false
    })

    $("#fuul-screen-panel-image").css("width", "100%")
          

    

    $(".zoom-exit").addClass("zoom-exit-active");
    
})

