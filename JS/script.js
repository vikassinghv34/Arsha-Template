// $(function() {
//     var scrolls=0;
//     $(document).scroll(function() {
//         scrolls=$(this).scrollTop();
//         if(scrolls < 210) {
//             $("#head").removeClass().addClass("active");
//         } else {
//             //remove the background property so it comes transparent again (defined in your css)
//            $("#head").removeClass("active").addClass("header");
//         }
//     });
// });

window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        document.getElementById("header").style.backgroundColor="rgba(55,81,126,.9)";
    }
    else{
        document.getElementById("header").style.backgroundColor="transparent";
    }
}