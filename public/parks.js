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
});

