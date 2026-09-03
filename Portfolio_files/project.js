

     const darkModePlay =
      document.querySelector("#darkModePlay");


    darkModePlay.addEventListener("click", () => {

      /* Toggle dark mode */

      document.body.classList.toggle("dark-mode");


      /* Change icon */

      if (
        document.body.classList.contains("dark-mode")
      ) {

        darkModePlay.innerHTML =
          '<i class="fa-solid fa-sun"></i>';

      } else {

        darkModePlay.innerHTML =
          '<i class="fa-solid fa-moon"></i>';

      }

    });