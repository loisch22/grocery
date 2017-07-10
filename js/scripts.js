$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4"];

    items.forEach(function(item) {
     var finalList = $("input#" + item).val();
   $(".groceryList").append("<li>" + finalList + "</li>");
    });
  });
});


//   items.sort(function(a, b) {return a-b});
// });
