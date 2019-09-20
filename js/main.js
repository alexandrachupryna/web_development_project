window.addEventListener('load',function(){
    window._ = new Glider(document.querySelector('.glider'), {
        slidesToShow: 1, 
        slidesToScroll: 1,
        itemWidth: 360,
        draggable: true,
        scrollLock: false,
        dots: '#dots',
        rewind: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 'auto',
                    itemWidth: 450,
                    slidesToShow: 'auto',
                    exactWidth: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToScroll: 'auto',
                    itemWidth: 450,
                    slidesToShow: 'auto',
                    exactWidth: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    itemWidth: 300,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
                    scrollLock: true
                }
            }
        ]
    });
  });


window.onload=function(){
    const inputSearch = document.getElementById("search-input");
    const searchBtn = document.getElementById("search_button");
    searchBtn.addEventListener("click", expandSearch);

    function expandSearch() {
        inputSearch.classList.toggle("search_visible");
    };

    const menuBtn = document.querySelector("i#menu_button");
    const navigation = document.querySelector("nav");
    const navigation_list = document.querySelector("ul.nav_list");
    const list_item = navigation_list.querySelectorAll("li");
    
    menuBtn.addEventListener("click", expandMenu);

    function expandMenu() {
        navigation.classList.toggle("menu_visible");
        navigation_list.classList.toggle("list_visible");
        for(let link of list_item) {
            link.classList.toggle("li_visible");
        }
    };

    const services_blocks = document.querySelectorAll("div.services_item");

    for(let block of services_blocks) {
        const header = block.querySelector("h3");
        const button_block = block.querySelector("button");
        button_block.head = header.innerHTML;
        button_block.addEventListener("click", displayInConsole);
    }

    function displayInConsole() {
        console.log(this.head);
    }

    const form = document.querySelector("form#contact_form");
    const name = form.querySelector("input#input_name");
    const email = form.querySelector("input#input_email");
    const message = form.querySelector("textarea#message");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if(isEmailValid(email.value)) {
            console.log("Name: " + name.value);
            console.log("Email: " + email.value);
            console.log("Message: " + message.value);
            alert("Your message has been sent.");
        } else {
            email.classList.add("red_input");
            email.value = "The field is required";
            return false;
        }
        

    });

    function isEmailValid(email_name) {
        var re = /\S+@\S+\.\S+/;
        return email_name && re.test(email_name);
    }

}





//searchBtn.addEventListener("click", expandSearch);