
$(document).ready(function() {
  
   $.ajax({
     url: "songs.json"
   }).done(function(data) {
   
     var contentEl = $("#content");

     for (var i = 0; i < data.songs.length; i++) {
       var songData = "";
       var currentSong = data.songs[i];
       songData += "<section class='song-div'>";
       songData += "<div class='songs'>";
       songData += "<h2>" + currentSong.name + "</h2>";
       songData += "<p class='song-info'>";
       songData += "by " + currentSong.artist;
       songData += " on the album " + currentSong.album + "</p>";
       songData += "</div>";
       songData += "<button type='button' class='deleteButton'>Delete</button>";
       songData += "</section>";
       contentEl.append(songData);
     }

     $("body").on("click", ".deleteButton", function(e) {
        $(this).closest(".song-div").remove();
     });

   })

   $("#content").append("<button type='button' class='moreButton'>More Songs</button>");

   $(".moreButton").on("click", function() {
      // alert("hello");
    $.ajax({
     url: "songs2.json"
    }).done(function(data) {
   
     var contentEl2 = $("#content");

     for (var i = 0; i < data.songs.length; i++) {
       var songData2 = "";
       var currentSong2 = data.songs[i];
       songData2 += "<section class='song-div'>";
       songData2 += "<div class='songs'>";
       songData2 += "<h2>" + currentSong2.name + "</h2>";
       songData2 += "<p class='song-info'>";
       songData2 += "by " + currentSong2.artist;
       songData2 += " on the album " + currentSong2.album + "</p>";
       songData2 += "</div>";
       songData2 += "<button type='button' class='deleteButton'>Delete</button>";
       songData2 += "</section>";
       contentEl2.append(songData2);

     }

     $("body").on("click", ".deleteButton", function(e) {
        $(this).closest(".song-div").remove();
     });

    }) 

    $(".moreButton").css("display", "none");  
   })
});




  
      