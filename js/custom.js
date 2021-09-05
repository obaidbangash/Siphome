$(document).ready(function() {

    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })

    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
    });

    //  js for banner Animations
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/[a-zA-z]{*}/g, "<p class='letter'>$&</p>");
    var i = 0;
    var txt = textWrapper.innerHTML
    var speed = 60;

    document.getElementsByClassName("ml2")[0].innerHTML = ""

    var wCount = 0;
    txt = txt.trim()

    function typeWriter() {
        if (i < txt.length) {
            document.getElementsByClassName("ml2")[0].innerHTML += txt.charAt(i);
            i++;
            if (txt.charAt(i) === " ") {
                wCount++;
            }
            if (wCount === 2) {
                document.getElementsByClassName("ml2")[0].innerHTML += `<br/>`
            }


            setTimeout(typeWriter, speed);
        } else {
            document.getElementsByClassName("ml2")[0].innerHTML = `Imagine your<br>home smart enough<span> to take care</span> of itself.`
        }
    }
    typeWriter()


})