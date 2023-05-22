$(function () {

  $("#rateYo").rateYo({
    starWidth: "36px",
    normalFill: "#D7D1C7",
    ratedFill: "#FFB648",
    rating: 4.5,
    halfStar: true,
    // readOnly: true,
    onSet: function (rating, rateYoInstance) {
      alert("Rating is set to: " + rating);
    }
  });

});
