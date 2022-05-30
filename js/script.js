$(document).ready(function (){
    $('a[rel="modal:open"]').click(function(event) {
        $(this).modal({
            fadeDuration: 250
        });
        return false;
    });

    $('.js-step1').on('click', function(){
        $('.modal-l__change-tw').addClass('open');
        $(this).parent().addClass('none');
        $('.modal-l__step-item_tw').addClass('active');
    });

    $('.js-step1').on('click', function(){
        $('.modal-l__change-tw').addClass('open');
        $(this).parent().addClass('none');
        $('.modal-l__step-item_tw').addClass('active');
    });
    $('.js-step2').on('click', function(){
        $('.modal-l__change-th').addClass('open');
        $(this).parent().addClass('none');
        $('.modal-l__step-item_th').addClass('active');
    });
    $('.js-step3').on('click', function(){
        $('.modal-l__change-fr').addClass('open');
        $(this).parent().addClass('none');
        $('.modal-l__step-item_fr').addClass('active');
    });


    $('.js-toggler').on('click', function(event){
        event.preventDefault();
        $('.header').toggleClass('open');
        $('body').toggleClass('opn');
    });

    $('.header__menu ul li a').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 2000);
        e.preventDefault();
    });


    $('.header__menu ul li a').on('click', function(event){
        event.preventDefault();
        $('.header').removeClass('open');
        $('body').removeClass('opn');
    });



    $('.js-banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $('.js-reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });

    /* validation*/

    var validSrc = '<span></span>';
    var invalidSrc = "<span></span>";

    $(document).ready(function() {
        initMasks();
        initListeners();
    });

    function initMasks() {
        $('input[name="phone-number"]').mask("+7 (000) 000-00-00");
        //$('input[name="kpp"]').mask("000000-000000000");
        //$('input[name="inn"]').mask("0000000-0000000000000000");
    }

    function initListeners() {
        $("#phone").on("blur", validatePhone);
        $("#phone2").on("blur", validatePhone2);
        $("#phone3").on("blur", validatePhone3);
        $("#phone4").on("blur", validatePhone4);
        //$("#email").on("blur", validateEmail);
        $("#name").on("blur", validateName);
        $("#name2").on("blur", validateName2);
        $("#name3").on("blur", validateName3);
        $("#name4").on("blur", validateName4);
        //$(".inn").on("blur", validateInn);

        $(".submitBtn").on("click", validateForm);
        $(".submitBtn2").on("click", validateForm2);
        $(".submitBtn3").on("click", validateForm3);
        $(".submitBtn4").on("click", validateForm4);
    }



    function validatePhone() {
        var isValid = false;
        var length = $("#phone").val().length;
        if (length == 18) {
            $(".phoneValidationImg").html( '').parent().parent().removeClass('er');
            $("#phone").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validatePhone2() {
        var isValid = false;
        var length = $("#phone2").val().length;
        if (length == 18) {
            $(".phoneValidationImg2").html( '').parent().parent().removeClass('er');
            $("#phone2").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg2").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validatePhone3() {
        var isValid = false;
        var length = $("#phone3").val().length;
        if (length == 18) {
            $(".phoneValidationImg3").html( '').parent().parent().removeClass('er');
            $("#phone3").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg3").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validatePhone4() {
        var isValid = false;
        var length = $("#phone4").val().length;
        if (length == 18) {
            $(".phoneValidationImg4").html( '').parent().parent().removeClass('er');
            $("#phone4").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg4").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }




    function validateName() {
        var isValid = false;
        var length = $("#name").val().length;
        if (length > 1) {
            $(".nameValidationImg").html( '').parent().parent().removeClass('er');
            $("#name").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validateName2() {
        var isValid = false;
        var length = $("#name2").val().length;
        if (length > 1) {
            $(".nameValidationImg2").html( '').parent().parent().removeClass('er');
            $("#name2").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg2").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validateName3() {
        var isValid = false;
        var length = $("#name3").val().length;
        if (length > 1) {
            $(".nameValidationImg3").html( '').parent().parent().removeClass('er');
            $("#name3").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg3").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validateName4() {
        var isValid = false;
        var length = $("#name4").val().length;
        if (length > 1) {
            $(".nameValidationImg4").html( '').parent().parent().removeClass('er');
            $("#name4").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg4").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    /*function validateEmail() {
        var emailAddress = $("#email").val().trim().toLowerCase();
        var pattern = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        var validEmail = pattern.test(emailAddress);
        var reason = "";
        if (!validEmail) {
            reason = "Improper format";
        } else {
            if (emailAddress.includes("@hotmail")) {
                validEmail = false;
                reason = "Hotmail not accepted";
            } else if (emailAddress.includes("@gmail")) {
                validEmail = false;
                reason = "Gmail not accepted";
            } else if (emailAddress.includes("@yahoo")) {
                validEmail = false;
                reason = "Yahoo not accepted";
            }
        }
        if (validEmail) {
            $(".emailValidationImg").html( '').parent().parent().removeClass('er');
            $("#email").removeClass("invalid");
        } else {
            $(".emailValidationImg").html('Email введен неверно').parent().parent().addClass('er');
        }
        return validEmail;
    }*/

    function validateForm() {
        /* Flashing border is probably overkill, just showing multiple ways to draw attention to required fields */
        var formIsValid = true;

        if (!validatePhone()) {
            $("#phone").addClass("invalid");
            formIsValid = false;
        } else {
            $("#phone").removeClass("invalid");
        }




        if (!validateName()) {
            $("#name").addClass("invalid");
            formIsValid = false;
        } else {
            $("#name").removeClass("invalid");
        }


    }

    function validateForm2() {
        /* Flashing border is probably overkill, just showing multiple ways to draw attention to required fields */
        var formIsValid2 = true;


        if (!validatePhone2()) {
            $("#phone2").addClass("invalid");
            formIsValid2 = false;
        } else {
            $("#phone2").removeClass("invalid");
        }

        if (!validateName2()) {
            $("#name2").addClass("invalid");
            formIsValid2 = false;
        } else {
            $("#name2").removeClass("invalid");
        }

    }

    function validateForm3() {
        /* Flashing border is probably overkill, just showing multiple ways to draw attention to required fields */
        var formIsValid3 = true;

        if (!validatePhone3()) {
            $("#phone3").addClass("invalid");
            formIsValid3 = false;
        } else {
            $("#phone3").removeClass("invalid");
        }


        if (!validateName3()) {
            $("#name3").addClass("invalid");
            formIsValid3 = false;
        } else {
            $("#name3").removeClass("invalid");
        }
    }

    function validateForm4() {
        /* Flashing border is probably overkill, just showing multiple ways to draw attention to required fields */
        var formIsValid4 = true;

        if (!validatePhone4()) {
            $("#phone4").addClass("invalid");
            formIsValid4 = false;
        } else {
            $("#phone4").removeClass("invalid");
        }


        if (!validateName4()) {
            $("#name4").addClass("invalid");
            formIsValid4 = false;
        } else {
            $("#name4").removeClass("invalid");
        }
    }


    $(function() {

        //BEGIN
        $(".accordion__title").on("click", function(e) {

            e.preventDefault();
            var $this = $(this);

            if (!$this.hasClass("accordion-active")) {
                $(".accordion__content").slideUp(400);
                $(".accordion__title").removeClass("accordion-active");
                $(".accordion__item").removeClass("accordion-active");
                $('.accordion__arrow').removeClass('accordion__rotate');
            }

            $this.toggleClass("accordion-active");
            $this.parent().parent().toggleClass("accordion-active");
            $this.next().slideToggle();
            $('.accordion__arrow',this).toggleClass('accordion__rotate');
        });
        //END

    });


    $(window).scroll(startCounter);

    function startCounter() {
        let scrollY = (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight;
        let divPos = document.querySelector('#counter-container').offsetTop;

        if (scrollY > divPos) {
            $(window).off("scroll", startCounter);

            $('.numb__nn').each(function() {
                var $this = $(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.text().replace(/,/g, '')
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function() {
                        $this.text(commaSeparateNumber(Math.floor(this.Counter)));
                    },
                    complete: function() {
                        $this.text(commaSeparateNumber(this.Counter));
                        //alert('finished');
                    }
                });
            });

            function commaSeparateNumber(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
            }
        }
    }
});
