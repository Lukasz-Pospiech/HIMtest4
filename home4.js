window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const get = id => document.getElementById(id);


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

window.addEventListener("load", function() {


    const burger = get('containerHamburger');
    burger.addEventListener("touchstart", function(event) {
      if (event.changedTouches[0]) {
          burger.classList.toggle("change");
      }
  }, false);

    let menuState = "closed";
    const menuItems = document.querySelectorAll(".menuItems");
    const menuDiv = get('menuDiv');
    burger.addEventListener("touchstart", function(event) {
        if (event.changedTouches[0]) {
            if (menuState === "closed") {
                menuDiv.classList.remove("closeMenu");
                menuDiv.classList.add("openMenu");

                menuState = "open";
            }
            else if (menuState === "open") {
                menuDiv.classList.remove("openMenu");
                menuDiv.classList.add("closeMenu");
     
                menuState = "closed";
            }
        }
    }, false);


    // const photos1 = document.querySelectorAll('.photo1');
    // for (let i = 0, j = 0; i < photos1.length; i++, j -= 100) {
    //     photos1[i].style.left = `${j}%`;
    // }
    // let currentPhoto1 = 0;
    // photos1[currentPhoto1].classList.add('active1'); 
    // setInterval(showNextPhoto1, 4000); 
    // function showNextPhoto1() {
    //     photos1[currentPhoto1].classList.remove('active1'); 
    //     currentPhoto1 = (currentPhoto1 + 1) % photos1.length;
    //     photos1[currentPhoto1].classList.add('active1'); 
    //   }


    //   const navIcon = get("navIconDiv");
    //   let menuState = "closed";
    //   navIcon.addEventListener("touchstart", function(event) {
    //       if (event.changedTouches[0]) {
    //           if (menuState === "closed") {
    //               get('menuDiv').classList.remove("closeMenu");
    //               get('menuDiv').classList.add("openMenu");
    //               menuState = "open";
    //           }
    //           else if (menuState === "open") {
    //               get('menuDiv').classList.remove("openMenu");
    //               get('menuDiv').classList.add("closeMenu");
    //               menuState = "closed";
    //               setTimeout(hideDarkContainer, 600);
    //               function hideDarkContainer() {
    //               }
    //           }
    //       }
    //   }, false);


    //   function myFunction(x) {
    //     x.classList.toggle("change");
    //   }

    //   function myFunction2() {
    //     console.log("hello");
    //   }

    
     







});


