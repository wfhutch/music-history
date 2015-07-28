     // var songs = [];

     //  songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
     //  songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
     //  songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
     //  songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
     //  songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
      
     //  var songElement=document.getElementById("content");
     //  songs.push("Waking Light - by Beck on the album Morning Phase");
     //  songs.unshift("Washed By The Water - by NEEDTOBREATHE on the album The Heat");
     //  songs.push("There's No Way Out Of Here - By David Gilmour on the album David Gilmour")
     //  songs.pop("There's No Way Out Of Here - By David Gilmour on the album David Gilmour")
     //  for (var i = 0; i < songs.length; i++) {
     //    songs[i] = songs[i].replace(">", "-");
     //    songs[i] = songs[i].replace(/[*@(!]/g, "");
     //    songElement.innerHTML += '<section class="songs">' + songs[i] + '<section>';
     //  }


$(document).ready(function() {
  
   $.ajax({
     url: "songs.json"
   }).done(function(data) {
   
   var contentEl = $("#content");

   for (var i = 0; i < data.songs.length; i++) {
     var songData = "";
     var currentSong = data.songs[i];
     songData += "<div class='songs'>";
     songData += "<h2>" + currentSong.name + "</h2>";
     songData += "</div>"
     songData += "<div class='songs'>";
     songData += "by " + currentSong.artist;
     songData += " on the album " + currentSong.album;    
     contentEl.append(songData);
     $("#content").append("<button type='button' id='deleteButton'>Delete</button>");


   }

    $("#deleteButton").click("this.songData", function() {
        alert("goodbye");
    })

   })

   $("#content").append("<button type='button' id='moreButton'>More</button>");

   $("#moreButton").on("click", function() {
      // alert("hello");

    $.ajax({
     url: "songs2.json"
   }).done(function(data) {
   
   var contentEl2 = $("#content");

   for (var i = 0; i < data.songs.length; i++) {
     var songData2 = "";
     var currentSong2 = data.songs[i];
     songData2 += "<div class='songs'>";
     songData2 += "<h2>" + currentSong2.name + "</h2>";
     songData2 += "</div>"
     songData2 += "<div class='songs'>";
     songData2 += "by " + currentSong2.artist;
     songData2 += " on the album " + currentSong2.album;    
     contentEl2.append(songData2);
     $("#content").append("<button id='deleteButton'>Delete</button>");
   }
   $("#content").append("<div id='moreDiv'><button id='moreButton' class='btn btn-success'>More</button>");

   })    
      
   })
});




  
      