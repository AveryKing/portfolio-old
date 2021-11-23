$(function(){

    let defaultView = true
    $("#logo").fadeIn(2000)

    setTimeout(() => {
        $("#logoImg").animate({width: 250, marginTop:"-=100"},1500)

    },2500);

    setTimeout(()=> {
        $(".firstLine").fadeIn(100).css("display","block")
    }, 3500)

    setTimeout(()=> {
        $(".secondLine").fadeIn(100).css("display","block")
    }, 5600)

    setTimeout(()=> {
        $("#introButtons").fadeIn(3500).css("display","block")
    }, 8000)

    $("#aboutButton").click(() => {
        if(defaultView) {
            $("#type").fadeOut(100);
            $("#introButtons").animate({marginTop:"-=80"}, { duration: 500, queue: false })
            $("#logoImg").animate({width:180, marginTop:"-=50"}, { duration: 400, queue: false })
            $("#about").fadeIn(1000)
            typewriter.type();
            defaultView = false;
        }

    })
});