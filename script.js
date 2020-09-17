$(document).ready (function(){
    // To get Todays Date and display it
    $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    
    // when save button is clicked it will save input with the hour
    $(".saveBtn").on("click", function() {
      console.log(this);
      var input = $(this).siblings(".description").val();
      var hour = $(this).parent().attr("id");
      localStorage.setItem(hour, input);
    })
    
      
    
    // to load anything saved in the local storage by hour 
    
        $("#timeblock1 .description").val(localStorage.getItem("timeblock1"));
        $("#timeblock2 .description").val(localStorage.getItem("timeblock2"));
        $("#timeblock3 .description").val(localStorage.getItem("timeblock3"));
        $("#timeblock4 .description").val(localStorage.getItem("timeblock4"));
        $("#timeblock5 .description").val(localStorage.getItem("timeblock5"));
        $("#timeblock6 .description").val(localStorage.getItem("timeblock6"));
        $("#timeblock7 .description").val(localStorage.getItem("timeblock7"));
        $("#timeblock8 .description").val(localStorage.getItem("timeblock8"));
        $("#timeblock9 .description").val(localStorage.getItem("timeblock9"));
        $("#timeblock10 .description").val(localStorage.getItem("timeblock10"));
    
        function hourCounter() {
          var presentHour = moment().hour();
          $(".time-block").each(function () {
            var timeHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log (timeHour, presentHour)
    
            if (timeHour === presentHour) {
              $(this).addClass("present");
              $(this).removeClass("past");
              $(this).removeClass("future");
            }else if (timeHour < presentHour) {
              $(this).addClass("past");
              $(this).removeClass("present");
              $(this).removeClass("future");
          }else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");  
        }
      })
    }
    hourCounter();
    
    
    
    })
    
    