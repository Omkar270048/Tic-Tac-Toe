

function play(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var box = w/ 4
    var change = "X"
    var next = 0
    
    
    $(function(){
    
    function game(){
    
    //reset
    $("#reset").click(function(){
    for(re = 1; re <= 9; re++){
       $("#b" + re.toString()).html("");
    }   });
    
    
    //game working
    if($("#b1").html() ==  "O" && $("#b2").html() == "O" && $("#b3").html() == "O"){
        alert("O win"); next = 1}
        
    else if($("#b1").html() ==  "X" && $("#b2").html() == "X" && $("#b3").html() == "X"){
        alert("X win");}
        
    else if($("#b4").html() ==  "O" && $("#b5").html() == "O" && $("#b6").html() == "O"){
        alert("O win");}
        
    else if($("#b4").html() ==  "X" && $("#b5").html() == "X" && $("#b6").html() == "X"){
        alert("X win");}    
    
    else if($("#b7").html() ==  "O" && $("#b8").html() == "O" && $("#b9").html() == "O"){
        alert("O win");}
        
    else if($("#b7").html() ==  "X" && $("#b8").html() == "X" && $("#b9").html() == "X"){
        alert("X win");}
        
        
    else if($("#b1").html() ==  "O" && $("#b5").html() == "O" && $("#b9").html() == "O"){
        alert("O win");}
        
    else if($("#b1").html() ==  "X" && $("#b5").html() == "X" && $("#b9").html() == "X"){
        alert("X win");}
        
    else if($("#b3").html() ==  "O" && $("#b5").html() == "O" && $("#b7").html() == "O"){
        alert("O win");}
        
    else if($("#b3").html() ==  "X" && $("#b5").html() == "X" && $("#b7").html() == "X"){
        alert("X win");}
    
    else if($("#b1").html() ==  "O" && $("#b4").html() == "O" && $("#b7").html() == "O"){
        alert("O win"); }
        
    else if($("#b1").html() ==  "X" && $("#b4").html() == "X" && $("#b7").html() == "X"){
        alert("X win"); }
        
    else if($("#b2").html() ==  "O" && $("#b5").html() == "O" && $("#b8").html() == "O"){
        alert("O win"); }
        
    else if($("#b2").html() ==  "X" && $("#b5").html() == "X" && $("#b8").html() == "X"){
        alert("X win"); }
    
    else if($("#b3").html() ==  "O" && $("#b6").html() == "O" && $("#b9").html() == "O"){
        alert("O win");}
        
    else if($("#b3").html() ==  "X" && $("#b6").html() == "X" && $("#b9").html() == "X"){
        alert("X win");}
    
    else if($("#b1").html() != "" &&
    $("#b2").html() != "" && $("#b3").html() != "" && $("#b4").html() != "" && $("#b5").html() != "" && $("#b6").html() != "" && $("#b7").html() != "" && $("#b8").html() != "" && $("#b9").html() != ""){
        alert("Game is draw");
    }
    
    //________________
    if(change == "X"){
          change = "O"
      }
      else{
      change = "X"}
    
    }
    //.............
    
        $("#main").css({"width": w-50, "position":"relative", "top":"30px", "left": w*0.05});
        
      $(".box").css({"width": box, "height": box});
     
     // clicks........ 
    $("#b1").click(function(){
    if($("#b1").html() == ""){
      $("#b1").html(change);
      game()}
     
      
    });
    
    $("#b2").click(function(){
      if($("#b2").html() == ""){
      $("#b2").html(change);
     game() }
     
    });
    
    $("#b3").click(function(){
      if($("#b3").html() == ""){
      $("#b3").html(change);
      game()} 
    
    });
    
    $("#b4").click(function(){
      if($("#b4").html() == ""){
      $("#b4").html(change);game()}
      
    });
    
       
    $("#b5").click(function(){
      if($("#b5").html() == ""){
      $("#b5").html(change);
      game()}
     
    });
    
    $("#b6").click(function(){
      if($("#b6").html() == ""){
      $("#b6").html(change);
      game()}
     
    });
    
    $("#b7").click(function(){
      if($("#b7").html() == ""){
      $("#b7").html(change);
      game()}
      
    });
    
    $("#b8").click(function(){
      if($("#b8").html() == ""){
      $("#b8").html(change);
      game()}
      
    });
    
    $("#b9").click(function(){
      if($("#b9").html() == ""){
      $("#b9").html(change);
      game()}
     
    }); 
    
    });
    }
    
    
    play()
    
    