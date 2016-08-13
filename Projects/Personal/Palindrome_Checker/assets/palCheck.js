// check if entered word is a function
function checkPal(a, b) {
  if (a === b) {
    $("#myDiv").html("<span>" + a + " is a palindrome</span>");
  } else {
    $("#myDiv").html("<span>" + a + " is not a palindrome</span>");
  }
}

// get and set variables
function main() {
  var word = $("#palText").val().toLowerCase();
  var revWord = word.split("").reverse().join("");
  checkPal(word, revWord);
}


// check for palindrome when clicked
$("#palButton").click(function() {
  main();
});

// check for palindrome when enter key is pressed
$("#palText").keypress(function(event){
  if(event.keyCode === 13) {
    main();
  }
});
