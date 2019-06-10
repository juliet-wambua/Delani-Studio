$(document).ready(function(){
  $("#hide1").click(function(){
    $("#design").toggle();
   });
  });

  $(document).ready(function(){
    $("#hide2").click(function(){
      $("#development").toggle();
    });
  });

  $(document).ready(function(){
    $("#hide3").click(function(){
      $("#product").toggle();
    });
  });

  $(document).ready(function(){
    $(".btn").click(function(){
      alert();
    });
  });
  $("#submittion").submit(function(event){
       var name = $("input#name").val();
       var email =$("input#email").val();
       var message=$("input#message").val();
       if(name && email && message != " " ){
           alert("Thank you for your submitting your details. We will get back to you soon.");
       }
       else{
           alert("Kindly fill in your details in the inputs provided");
       }
       event.preventDefault();
      });

    $(".portfolio").hover(function(){
  $(this).css("background","pale-white");
  }, function(){
  $(this).css("none");
});
