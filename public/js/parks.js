$(document).ready(function () {
    
  //modal code for the parks page from on click events
      
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

    function accessibilityModal(){
      let button = $('#accInfoBtn');

      button.on("click", function(event){
          event.preventDefault();

          $('#modal5').modal.show();
      })
  }

  //saving the park code in local storage to be used on parks.html info

  $('area').click(function(){
    console.log($(this).attr("data-parkcode"));
    localStorage.setItem("parkCode", $(this).attr("data-parkcode"));
  }) 

});

//function to fill parks.html with data for park chosen by the user on the image map

$(document).ready(function(){
  parkCode = localStorage.getItem("parkCode")
  console.log(`This is ${parkCode} from localStorage`)
  test = $.ajax({
    method: "GET",
    url: `/api/park/${parkCode}`
  }).then(function(result) {
    console.log(result[0])
    localStorage.setItem('parkName', result[0].fullName)
    console.log(`${result[0].images[0].url}`)
    $('#parkName').html(result[0].fullName)
    $('#monday').html(result[0].standardHours.monday)
    $('#tuesday').html(result[0].standardHours.tuesday)
    $('#wednesday').html(result[0].standardHours.wednesday)
    $('#thursday').html(result[0].standardHours.thursday)
    $('#friday').html(result[0].standardHours.friday)
    $('#saturday').html(result[0].standardHours.saturday)
    $('#sunday').html(result[0].standardHours.sunday)
    $('#contact').html(`<li> Phone Number:  <a href="tel:${result[0].phoneNumber}">${result[0].phoneNumber}</a> </li> <li> Email: <a href="mailto:${result[0].email}">${result[0].email}</a> </li>`)
    $('#address').html(`<li> <a href="http://maps.google.com/?q=${result[0].line1} ${result[0].city} ${result[0].stateCode}" target="_blank">${result[0].line1}, ${result[0].city}, ${result[0].stateCode}</a> </li>`)
    $('#parkInfo').html(result[0].description)
    $('#passPrice').html(`<li> Day Pass Cost: $ ${result[0].passCost} </li>`)
    $('#jumboImg').css({'background' : `linear-gradient(rgba(18, 18, 19, 0.50), rgba(18, 18, 19, 0.25)), url("${result[0].images[0].url}")`, 'background-size' : `cover`})
    
    if (result[0].cost){
      $('#dayPass').html(`<li> Entrance Fee: $ ${result[0].cost} </li>`);
    } else {
      $('#dayPass').html(`<li> Entrance Fee: FREE </li>`);
    }
  });

  test2 = $.ajax({
    method: "GET",
    url: `/api/camp/${parkCode}`
  }).then(function(result) {

    if (result[0]){
      $('#campInfo').text(result[0].description)
      $('#regulationsInfo').text(result[0].regulations)
      //ACCESSIBILITY
      $('#wheelchairAccess').text(result[0].wheelchairAccess)
      $('#internetInfo').text(result[0].internetInfo)
      $('#cellPhoneInfo').text(result[0].cellPhoneInfo)
      $('#fireStovePolicy').text(result[0].fireStovePolicy)
      $('#rvAllowed').text(result[0].rvAllowed)
      $('#rvInfo').text(result[0].rvInfo)
      $('#rvMaxLength').text(result[0].rvMaxLength)
      $('#additionalInfo').text(result[0].additionalInfo)
      $('#trailerMaxLength').text(result[0].trailerMaxLength)
      $('#adaInfo').text(result[0].adaInfo)
      $('#trailerAllowed').text(result[0].trailerAllowed)
      $('#accessRoads').text(result[0].accessRoads)
      $('#classifications').text(result[0].classifications)
      //AMENITIES
      $('#trashRecyclingCollection').text(result[0].trashRecyclingCollection)
      $('#toilets').text(result[0].toilets)
      $('#internetConnectivity').text(result[0].internetConnectivity)
      $('#Showers').text(result[0].Showers)
      $('#cellPhoneReception').text(result[0].cellPhoneReception)
      $('#laundry').text(result[0].laundry)
      $('#amphitheater').text(result[0].amphitheater)
      $('#dumpStation').text(result[0].dumpStation)
      $('#campStore').text(result[0].campStore)
      $('#staffOrVolunteerHostOnsite').text(result[0].staffOrVolunteerHostOnsite)
      $('#potableWater').text(result[0].potableWater)
      $('#iceAvailableForSale').text(result[0].iceAvailableForSale)
      $('#firewoodForSale').text(result[0].firewoodForSale)
      $('#foodStorageLockers').text(result[0].foodStorageLockers)
    } else {
      $('#campInfo').text("This park has no associated campgrounds")
      $('#regulationsInfo').text("N/A")
      $('#amenitiesInfo').text("N/A")
      $('#accessibilityInfo').text("N/A")
      $('#resBtn').hide()
    }
  })

  //saving res info into database

  $('#makeRes').click(function(req, res) {
    arrivalDate = `${$('#arrivalMonth').val()}/${$('#arrivalDay').val()}/${$('#arrivalYear').val()}`
    departureDate = `${$('#departureMonth').val()}/${$('#departureDay').val()}/${$('#departureYear').val()}`
    body = {
      startDate: arrivalDate,
      endDate: departureDate,
      parkCode: localStorage.getItem('parkCode'),
      firstName: $('#inputFirstName').val(),
      lastName: $('#inputLastName').val(),
      phone: eval($('#inputPhone').val()),
      email: $('#inputEmail').val(),
      vehicleMake: $('#inputVehicleMake').val(),
      vehicleModel: $('#inputVehicleMod').val(),
      vehicleYear: eval($('#inputVehicleYear').val()),
      totalOccupants: $('#inputOcc').val(),
      pet: $('#inputPet').val()
    }
    
    $.post("/api/reservations/new", body)
  })
  
    
  
});