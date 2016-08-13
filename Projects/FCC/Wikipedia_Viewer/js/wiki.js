
// function to remove any li(s) currently on screen. e.g. reset
function reset() {
    $("ol").empty();
  }

// function get wiki JSON & display
function getWiki() {
  var keyword = $("input").val();

 $.getJSON("https://en.wikipedia.org/w/api.php?  action=opensearch&datatype=json&limit=10&search="+keyword+"&callback=?"  , function(data) {
      for (var i = 0; i < data[1].length; i++)
        $("ol").append("<div class='well'><li><div><a href=" + data[3][i] + " target='_blank'>"+data[1][i]+"</a></div><div>"+data[2][i]+"</div></li></div>");
  });
}

$("i").on("click", function(){
  reset();
  getWiki();
});

$("input").keypress(function(event) {
  if(event.which === 13) {
    reset();
    getWiki();
  }
});
