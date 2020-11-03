
email = localStorage.getItem("resEmail")
name = localStorage.getItem("resName")
dates = localStorage.getItem("resDates")
$('#resConf').html(`Congratulations ${name} Your reservation has been confirmed for ${dates} under ${email}`)
