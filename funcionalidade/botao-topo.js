(function(){
    
    window.onscroll = scroll;

    function scroll(){
        var button = document.querySelector("#button-top");

        if(document.documentElement.scrollTop > 60){
            button.style.display = "block";
        }else{
            button.style.display = "none";
        }
        button.addEventListener("click",function(){
            document.documentElement.scrollTop = 0;
        });
            
 
    }

})();