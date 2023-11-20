// hotel registration --- store in an object
var test = {
  hotelname: "Marriot",
  rooms: 3000,
  booked: 2024,
  display: function(){
    return this.hotelname;}
};


console.log(test.hotelname);
console.log(test.booked);
test.booked = 144;
console.log(test.booked);
console.log(test.display);

var guestgroup = [];

function reservation() {
  // get the values from the form and put it in an object
  var guest = {
    name: $('#name').val(),
    numberOfGuest: $('#num').val(),
    checkin: $('#checkin').val(),
    RoomType: $('#room').val(),
  };

  guestgroup.push(guest);
  console.log(guest);
}

function displayList() {
  $("#guestlist").html("");
  $("#guestlist").append("<table>");
  for(var i in guestgroup) {
    $('#guestlist').append("<tr><td>" + guestgroup[i].name +  "</td>");
    $('#guestlist').append("<td>" + guestgroup[i].numberOfGuest + "</td>");
    $('#guestlist').append("<td>" + guestgroup[i].checkin + "</td>");
  }
  $("#guestlist").append("</table>");
  
}

// Register the event handler
$('#submit').click(reservation);
$('#lists').click(displayList);