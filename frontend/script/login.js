$(document).ready(function(){

    $("#icon-click").click(function(){
        $("#icon").toggleClass("fa-eye-slash");
        
        var input = $("#pass");
        if(input.attr("type")==="password"){
            input.attr("type","text");
        }
        else{
            input.attr("type","password");
        }
    
    });
});