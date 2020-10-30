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

    $(function() {
        var dateFormat = "mm/dd/yy",
          from = $( "#from" )
            .datepicker({
              defaultDate: "+1w",
              changeMonth: true,
              numberOfMonths: 3
            })
            .on( "change", function() {
              to.datepicker( "option", "minDate", getDate( this ) );
            }),
          to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3
          })
          .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
          });
     
        function getDate( element ) {
          var date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch( error ) {
            date = null;
          }
     
          return date;
        }
      } );


});

