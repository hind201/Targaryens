function myFunction(){
        var x = document.getElementById("myNav");
        if (x.className === "navbar__item") {
          x.className += " responsive";
          // x.style.display="block";
        } else {
            x.className = "navbar__item";
        }
      }


