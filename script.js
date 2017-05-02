$(document).ready(function(){
  
  //when button is click run code
$("#button").click(function(){
  
  // declare variable inside a function , global variable is not call objects
 var searchTerm = $("#searchbox").val();   
 var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
  
           $.ajax({
            type : "GET",
            url  : url,
            async : false,
            dataType : "json",
            success : function(data){
             /*show the title,description, and link sources base on objects api 
              console.log(data[1][0]);
              console.log(data[2][0]);
              console.log(data[3][0]);
              */
             // delete previous contents after search
             $("#output").html(" ");
             // for show output in the list
             for (var i=0; i < data[1].length; i ++){
             $("#output").append("<h3>" + data[1][i] + "</h3>" + "<p>"+ data[2][i] + "<br>" +data[3][i] + "</a></p>");
             
            }
           },
               //if anything error will show error messege
              error: function(errorMessage){
              alert("error");
             }
    
         });
 
    }); 
      // put those all codes ouside from previous button function 
      $("#searchbox").keypress(function(e){
         
        if(e.which == 13){
       $("#button").click();
        }
         
       });
      // clear all the previous info search
      $("#button2").click(function(){
        $("#searchbox").val(" ");
        $("#output").remove();
      });

});