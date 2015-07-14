     var songs = [];

      songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
      songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
      songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
      songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
      songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
      
      var songElement=document.getElementById("songinfo");
      songs.push("Waking Light - by Beck on the album Morning Phase");
      songs.unshift("Washed By The Water - by NEEDTOBREATHE on the album The Heat");
      for (var i = 0; i < songs.length; i++) {
        songs[i] = songs[i].replace(">", "-");
        songs[i] = songs[i].replace(/[*@(!]/g, "");
        songElement.innerHTML += songs[i] + "<br>";
      }
      