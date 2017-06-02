(function() {
  window.onload = function() {

    var incrementButton = document.querySelector("#increment");
    var decrementButton = document.querySelector("#decrement");
    var counter = document.querySelector("#counter");
    incrementButton.addEventListener("click", function() {
      console.log("+ button clicked");
      var newCounterValue = parseInt(counter.innerHTML) + 1;
      if(newCounterValue >= 10){
          counter.style.color = "red";
        }
      counter.innerHTML = newCounterValue;
    })
    decrementButton.addEventListener("click", function(){
        console.log("- button clicked");

        //calculate the new value for our counter
        var newCounterValue = parseInt(counter.innerHTML) - 1;

        //if the counter drops below 10, change the text color to black
        if(newCounterValue < 10){
          counter.style.color = "black";
        }

        //only update the counter value on the screen if the counter is > 0
        if(counter.innerHTML > 0){
           counter.innerHTML = newCounterValue;
        }
      })
  }

})();
