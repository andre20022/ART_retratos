(function(){

   var button = document.querySelector(".botao-historia");
   var close = document.querySelector(".botao-modal-close");
   var modal = document.querySelector(".modal-historia");

    button.addEventListener("click",function(){

          modal.style.display = "block";

    });
    close.addEventListener("click",function(){

          modal.style.display = "none";

    });

})();