$(document).ready(function(){
  $(".hide1").click(function(){
     $(".design").show();
      $(".hide1").hide();
    });
   $(".design").click(function(){
      $(".hide1").show();
     $(".design").hide();
     });
   });
$(document).ready(function(){
 $(".hide2").click(function(){
    $(".development").show();
     $(".hide2").hide();
   });
  $(".development").click(function(){
     $(".hide2").show();
    $(".development").hide();
    });
  });

  $(document).ready(function(){
    $(".hide3").click(function(){
       $(".product").show();
        $(".hide3").hide();
      });
     $(".product").click(function(){
        $(".hide3").show();
       $(".product").hide();
       });
     });


  $(document).ready(function(){
    $(".btn").click(function(){
      alert();
    });
  });
  $(document).ready(function(){
    $(".01").mouseenter(function(){
      $(".image-1").show();
    });
    $(".01").mouseleave(function(){
      $(".image-1").hide();
    });
    $(".02").mouseenter(function(){
      $(".image-2").show();
    });
    $(".02").mouseleave(function(){
      $(".image-2").hide();
    });
    $(".03").mouseenter(function(){
      $(".image-3").show();
    });
    $(".03").mouseleave(function(){
      $(".image-3").hide();
    });
    $(".04").mouseenter(function(){
      $(".image-4").show();
    });
    $(".04").mouseleave(function(){
      $(".image-4").hide();
    });
    $(".05").mouseenter(function(){
      $(".image-5").show();
    });
    $(".05").mouseleave(function(){
      $(".image-5").hide();
    });
    $(".06").mouseenter(function(){
      $(".image-6").show();
    });
    $(".06").mouseleave(function(){
      $(".image-6").hide();
    });
    $(".07").mouseenter(function(){
      $(".image-7").show();
    });
    $(".07").mouseleave(function(){
      $(".image-7").hide();
    });
    $(".08").mouseenter(function(){
      $(".image-8").show();
    });
    $(".08").mouseleave(function(){
      $(".image-8").hide();
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

