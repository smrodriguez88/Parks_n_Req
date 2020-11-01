$(document).ready(function () {
    
    // let modal = $("#modal4");
    
    // if (modal.hasClass("visible") === true) {
    //     modal.removeClass("visible").addClass("invisible");
    //   } else if (modal.hasClass("invisible") === true) {
    //     modal.removeClass("invisible").addClass("visible");
    //   }
      
    function activitiesModal(){
        let button = $('#activitiesBtn');

        button.on("click", function(event){
            event.preventDefault();

            $('#modal1').modal.show();
        })
    }
    
    function activitiesModal(){
        let button = $('#amenitiesBtn');

        button.on("click", function(event){
            event.preventDefault();

            $('#modal2').modal.show();
        })
    }

    function regulationsModal(){
        let button = $('#regulationsBtn');

        button.on("click", function(event){
            event.preventDefault();

            $('#modal3').modal.show();
        })
    }

    function reservationModal(){
        let button = $('#resBtn');

        button.on("click", function(event){
            event.preventDefault();

            $('#modal4').modal.show();
        })
    }

  $('area').click(function(){
    console.log($(this).attr("data-parkcode"));
    localStorage.setItem("parkCode", $(this).attr("data-parkcode"));
  }) 

});

$(document).ready(function(){
  parkCode = localStorage.getItem("parkCode")
  console.log(`This is ${parkCode} from localStorage`)
  test = $.ajax({
    method: "GET",
    "crossDomain": true,
    url: `http://127.0.0.1:8080/api/park/${parkCode}`
  }).then(function(result) {
    console.log(result)
    
    $('#parkName').html()
    // $('#opHours').
    // $('#contact').
    // $('#address').
    // $('#parkInfo').
    // $('#campInfo').
    // $('#dayPass').
    // $('#passPrice').
    // $('#amenitiesInfo').
    // $('#regulationsInfo').
  });
});