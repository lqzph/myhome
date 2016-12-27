$(function () {
    var w=$("a[href=111]").width;
   $("a[href=111]").css({
       color:"#D82545",
       fontSize:"20px"
   })
    $(".icon").click(function(){
        $(".nav").slideToggle(200)
    })

    $("form").validate({
        rules:{
            user:{
                required:true,
            },
            email:{
                email:true,
            },
            title:{
                required:true,
            },
            mei:{
                required:true,
            }

        }

    })

})
