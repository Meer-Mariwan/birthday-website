
  // variables
   const welcomeBtn = document.querySelector("button.btn");
   const welcomePage = document.querySelector("#welcome");
   const mainPage = document.querySelector("#mainPage");
   const stars = document.querySelector("#stars");
   const moon = document.querySelector("#moon");
   const wish = document.querySelector("#wish");

   console.log('%cI Knew Would Come Here', 'color:red; font-size:50px; text-align:center;')
   console.log('%cAnd Yes It\'s Responsive', 'color:red; font-size:30px; margin-left:100px;')


  // welcome page gone
   welcomeBtn.addEventListener('click', () =>{
    welcomePage.style.display = 'none';
    mainPage.style.display = 'inline';
   });

  // parallax
    window.addEventListener("scroll", function(){
       let value = window.scrollY;
       stars.style.left = value * 0.25 + 'px';
       moon.style.left = value * .4 + 'px';
       wish.style.marginRight = value * 4 +'px'
    });
  

  // scroll reveal

   const sr = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:2000,
    reset: true
   });

    sr.reveal(`#welcome`,{
        
    });

