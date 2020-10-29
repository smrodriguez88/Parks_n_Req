$(document).ready(function () {
    
    // let modal = $("#modal4");
    
    // if (modal.hasClass("visible") === true) {
    //     modal.removeClass("visible").addClass("invisible");
    //   } else if (modal.hasClass("invisible") === true) {
    //     modal.removeClass("invisible").addClass("visible");
    //   }
      
    function reservationModal(){
        let button = $('#resBtn');

        button.on("click", function(event){
            event.preventDefault();

            $('#modal4').modal.show();
        })
    }
});

