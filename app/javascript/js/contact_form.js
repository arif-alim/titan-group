window.contactFromCallback = function (alert, message) {
  var contact_form = $( "#contact-form" );
  var messageAlert = "alert-" + alert;
  var messageText = message;
  var alertBox = "<div class=\"alert " + messageAlert + " alert-dismissable\">" + messageText + "</div>";

  if ( messageAlert && messageText ) {
    contact_form.find( ".messages" ).html( alertBox );
    if ( alert !== "error" ) {
      contact_form[ 0 ].reset();
    }
  }
}