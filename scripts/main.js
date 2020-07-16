/* Menu Show */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle','nav-menu');

/* Active and remove menu */
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    //Active Link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Remove mobile menu
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// Scroll to reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px' ,
    duration: '1000',
    reset: 'true'
})

//Reveal Home
sr.reveal('.home_title',{});
sr.reveal('.button', {delay: 100});
sr.reveal('.home_img', { delay: 200 });

//Reveal About
// sr.reveal('.about_img', {});
sr.reveal('.about_subtitle', { delay: 100 });
sr.reveal('.about_text', { delay: 200 });


//Skills Reveal
sr.reveal('.skills_subtitle', {});
sr.reveal('.skills_text', {delay: 100});
sr.reveal('.skills_data', {interval: 100});
sr.reveal('.skills_img', {interval: 200 });

//Work Reveal
sr.reveal('.work_img', {interval: 100});
sr.reveal('.work_text', {delay: 200});
sr.reveal('.work_description', {delay: 200});

// //Reveal Contact
// sr.reveal('.contact_input', { interval: 100 });

//Footer test
sr.reveal('.footer', { interval: 100 });

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 0, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav-list a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav-list ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}











