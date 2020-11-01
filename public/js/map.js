//imagemap init

$('map').imageMapResize();

//tooltip init

        $(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//modal init

    $('area').click(function(event) {
        event.preventDefault();
        $(".modal-body").html($(this).attr("title"));  
        
        console.log($(this).attr("title"))
    })