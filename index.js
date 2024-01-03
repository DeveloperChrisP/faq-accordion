    var parragraphsArray = document.querySelectorAll("p");

    for(var i=0; i<4; i++){
    document.querySelectorAll("h2")[i].addEventListener("click",clickFunction);
    document.querySelectorAll(".FAQinfo>img")[i].addEventListener("click",clickFunction);
     

    };
    function clickFunction () {
            console.log(this.classList.value);

            var allPs = document.querySelectorAll("p");

                  
        
            switch (this.classList.value) {
            case "1":
                
                parragraphsArray[0].classList.toggle("visible");
                parragraphsArray[1].classList.add("visible");
                parragraphsArray[2].classList.add("visible");
                parragraphsArray[3].classList.add("visible");
                document.querySelectorAll(".FAQinfo>img")[0].setAttribute("src","./assets/images/icon-minus.svg");
                document.querySelectorAll(".FAQinfo>img")[1].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[2].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[3].setAttribute("src","./assets/images/icon-plus.svg");
                
                break;
            case "2":
                parragraphsArray[1].classList.toggle("visible");
                parragraphsArray[0].classList.add("visible");
                parragraphsArray[2].classList.add("visible");
                parragraphsArray[3].classList.add("visible");
                document.querySelectorAll(".FAQinfo>img")[1].setAttribute("src","./assets/images/icon-minus.svg");
                document.querySelectorAll(".FAQinfo>img")[0].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[2].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[3].setAttribute("src","./assets/images/icon-plus.svg");
                break;
            case "3":
                parragraphsArray[2].classList.toggle("visible");
                parragraphsArray[1].classList.add("visible");
                parragraphsArray[0].classList.add("visible");
                parragraphsArray[3].classList.add("visible");
                document.querySelectorAll(".FAQinfo>img")[2].setAttribute("src","./assets/images/icon-minus.svg");
                document.querySelectorAll(".FAQinfo>img")[0].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[1].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[3].setAttribute("src","./assets/images/icon-plus.svg");
                break;
            case "4":
                parragraphsArray[3].classList.toggle("visible");
                parragraphsArray[1].classList.add("visible");
                parragraphsArray[2].classList.add("visible");
                parragraphsArray[0].classList.add("visible");
                document.querySelectorAll(".FAQinfo>img")[3].setAttribute("src","./assets/images/icon-minus.svg");
                document.querySelectorAll(".FAQinfo>img")[0].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[2].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[1].setAttribute("src","./assets/images/icon-plus.svg");
                break;
                   
            default:
                document.querySelectorAll(".FAQinfo>img")[0].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[1].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[2].setAttribute("src","./assets/images/icon-plus.svg");
                document.querySelectorAll(".FAQinfo>img")[3].setAttribute("src","./assets/images/icon-plus.svg");
                break;
        };
        if (document.querySelectorAll("p")[0].classList.value==="visible") {
            document.querySelectorAll(".FAQinfo>img")[0].setAttribute("src","./assets/images/icon-plus.svg");
        }
        if(document.querySelectorAll("p")[1].classList.value==="visible"){
            document.querySelectorAll(".FAQinfo>img")[1].setAttribute("src","./assets/images/icon-plus.svg");
        };
        if(document.querySelectorAll("p")[2].classList.value==="visible"){
            document.querySelectorAll(".FAQinfo>img")[2].setAttribute("src","./assets/images/icon-plus.svg");
        }
        if(document.querySelectorAll("p")[3].classList.value==="visible"){
            document.querySelectorAll(".FAQinfo>img")[3].setAttribute("src","./assets/images/icon-plus.svg");
        }
    }       

    
