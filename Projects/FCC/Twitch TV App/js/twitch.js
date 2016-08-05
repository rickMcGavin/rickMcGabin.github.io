
// Variables
var twitchPlayers = ["freecodecamp","zrozilacx", "brunofin", "comster404", "sjow", "hutch", "MattachewOwns", "nl_kripp", "SandyRavage", "EatMyDiction1"];
var urlStream = "https://api.twitch.tv/kraken/streams/";
var urlChannel = "https://api.twitch.tv/kraken/channels/";
var name = "";

function getTwitchData(name) {
  $.ajax({
     url: urlStream + name,
     dataType:'jsonp',
     data: {format: "json"},
     success:function(data) {
       if (data.stream === null) {
         buildOfflineCards(name);
      } else if (data.status === 422) {
        build422Cards(data.message);
      } else {
        if (data.stream !== null){
          buildOnlineCards(name);
        }
      }
    }
  });
}


function buildOfflineCards(name) {
  $.ajax({
    url: urlChannel + name,
    dataType: 'jsonp',
    data: {format: "json"},
    success:function(data) {
      $(".offline-card-container").append("<div class='card offline'><div class='row'><div class='col-md-4 col-xs-6'><a href="+data.url+" class='thumbnail offline' target='_none'><img src="+data.logo+"></a></div><div class='col-md-4 col-xs-6 user'>"+name+"</div><div class='col-md-4 col-xs-6 user'>User Offline</div></div>");
    }
  });
}

function build422Cards(message) {
  $(".unknown-card-container").append("<div class='card unknown'><div class='row'><div class='col-md-4 col-xs-6'><a href='https://en.wikipedia.org/wiki/HTTP_404' class='thumbnail unknown' target='_none'><img src='https://www.worldremit.com/images/interim/unknown-user.png' alt='404'></a></div><div class='col-md-4 col-xs-6 user'>"+message+"</div><div class='col-md-4 col-xs-6 user'>User Not Found</div></div>");
}


function buildOnlineCards(name) {
  $.ajax({
    url: urlChannel + name,
    dataType: 'jsonp',
    data: {format: "json"},
    success:function(data) {
      $(".online-card-container").append("<div class='card online'><div class='row'><div class='col-md-4 col-xs-6'><a href="+data.url+" class='thumbnail online' target='_none'><img src="+data.logo+"></a></div><div class='col-md-4 col-xs-6 user'>"+name+"</div><div class='col-md-4 col-xs-6 user'>"+data.game+"</div></div>");
    }
  });
}


function init() {
  for (var i = 0; i < twitchPlayers.length; i++) {
    getTwitchData(twitchPlayers[i]);
  }
}

// On clicks for tabs
$("#all").on("click", function() {
  $("#all").addClass("active");
  $("#online, #offline").removeClass("active");
  $(".unknown, .online, .offline").removeClass("hidden");
});

$("#online").on("click", function() {
  $("#all, #offline").removeClass("active");
  $("#online").addClass("active");
  $(".unknown, .online, .offline").removeClass("hidden");
  $(".offline, .unknown").addClass("hidden");
});

$("#offline").on("click", function() {
  $("#all, #online").removeClass("active");
  $("#offline").addClass("active");
  $(".unknown, .online, .offline").removeClass("hidden");
  $(".unknown, .online").addClass("hidden");
});
init();
