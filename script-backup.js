$(function() {

	function detectmobile() { 

	    if( navigator.userAgent.match(/Android/i)
	    || navigator.userAgent.match(/webOS/i)
	    || navigator.userAgent.match(/iPhone/i)
	    || navigator.userAgent.match(/iPad/i)
	    || navigator.userAgent.match(/iPod/i)
	    || navigator.userAgent.match(/BlackBerry/i)
	    || navigator.userAgent.match(/Windows Phone/i)
	    ){

	        $('main').addClass('mobile');
	    }
	}

	$('.turtle').addClass('turtle-move');
	$('.draft').addClass('draft-move');

	setTimeout(function() {
     $('.turtle').addClass('turtle-move2');
    }, 450);

	setTimeout(function() {
     $('.draft').addClass('draft-move2');
    }, 450);

	setTimeout(function() {
     $('.welcome-pitch').addClass('welcome-pitch-move');
 	}, 100);		    

    setTimeout(function() {
     $('.turtle').addClass('turtle-move3');
    }, 1500);

	setTimeout(function() {
     $('.draft').addClass('draft-move3');
    }, 1500);

    setTimeout(function() {
     $('.welcome-pitch').addClass('welcome-pitch-move2');
 	}, 1700);	

	setTimeout(function() {   // this is only necessary for compatability with IE 
     $('.turtle').addClass('turtle-move4');
    }, 1850);

    setTimeout(function() {   // this is only necessary for compatability with IE 
     $('.demo').addClass('view-demo');
    }, 1850);

    $('.forgot-password').click(function() {
    	$('#home').prop('checked', true);
    	$('#forgot-password-modal').addClass('forgot-password-appear');
		// $(window).click(function(event) {
		//     if (event.target !== '#forgot-password-modal') {
		//         ('#forgot-password-modal').removeClass('forgot-password-appear');
		//         $('#home').prop('checked', true);
		//     }
		// });
    });

    $('#forgot-password-modal .close-modal').on('click', (function() {
    	$('#forgot-password-modal').removeClass('forgot-password-appear');

    })
    );

    $('#demo+span').on('click',function() {
    	$('aside.demo-start').removeClass('display-none');
    	$('button.demo').removeClass('view-demo');
    });

    $('input[type=radio][name=nav]').change(function() {
    	$('#forgot-password-modal').removeClass('forgot-password-appear');
    	$('button.demo').removeClass('view-demo');

	    if($('#demo').is(':checked')) { 
	    	$('aside.demo-start').removeClass('display-none');
	    };
    });

    $('button.demo').on('click', (function() {
    	$('button.demo').removeClass('view-demo');
    	// $('#demo').prop('checked', true); 
    	$('aside.demo-start').removeClass('display-none');
    }
    ));

    $('input[type=radio][name=nav]').change(function() {
    	$('#forgot-password-modal').removeClass('forgot-password-appear');
    });

    $('button.demo-next').on('click', (function() {
    	$(this).next('.demos').removeClass('display-none');
    }));

});
