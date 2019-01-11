// Make sure we wait to attach our handlers until the DOM is fully loaded.
function getBurgers() {
  // $.ajax("/burger/", {
  //   type: "GET"
  // }).then(
  //   function (data) {
  //     console.log(data);
  //   }
  // );
  // Make a request for a user with a given ID
  axios.get('/burger/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getBurgers();
console.log("hi");


$(function () {
$(".change-devoured").on("click", function (event) {
  var id = $(this).data("id");
  var newDevoured = $(this).data("newdevoured");

  var newDevouredState = {
        devoured: newDevoured
  };

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevouredState
  }).then(
    function () {
      console.log("changed Devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(document).on('submit', '.create-form', function (event) {
  // code
  event.preventDefault();
  var newBurger = {
    name: $("#ca").val().trim(),
    // devoured: $("[name=devoured]:checked").val().trim()
  };
  console.log(newBurger);
  axios.post('/burger', {
    name: newBurger.name,
    devoured: false
  })
    .then(function (response) {
      console.log(response);
      console.log("RELOADEDDDDDDDDf");
      location.reload();
      
    })
    .catch(function (error) {
      console.log(error);
    });

});
});

// $(".create-form").on("submit", function (event) {
//   // Make sure to preventDefault on a submit event.
//   // event.preventDefault();
//   event.preventDefault();

//   var newBurger = {
//     name: $("#ca").val().trim(),
//     // devoured: $("[name=devoured]:checked").val().trim()
//   };
//   console.log(newBurger);
//   // Send the POST request.
//   // $.ajax("/api/burgers", {
//   //   type: "POST",
//   //   data: newBurger
//   // }).then(
//   //   function () {
//   //     console.log("created new burger");
//   //     // Reload the page to get the updated list
//   //     location.reload();
//   //   }
//   // );


// });

// $(".delete-burger").on("click", function (event) {
//   var id = $(this).data("id");

//   // Send the DELETE request.
//   $.ajax("/api/burgers/" + id, {
//     type: "DELETE"
//   }).then(
//     function () {
//       console.log("deleted the haburger", id);
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });

