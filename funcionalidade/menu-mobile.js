(function(){

      var open_mobile = document.querySelector(".botao-mobile");
      var close_mobile = document.querySelector(".botao-mobile-close");
      var menu_content = document.querySelector(".contedor-menu");

       open_mobile.addEventListener("click",function(){
                   
                menu_content.style.display = "block";
                close_mobile.style.display = "block";
                open_mobile.style.display = "none";
       });

       close_mobile.addEventListener("click",function(){
                   
                menu_content.style.display = "none";
                close_mobile.style.display = "none";
                open_mobile.style.display = "block";
       });


})();