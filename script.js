
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
		    	$('#forgot-password-modal').addClass('forgot-password-appear');
		    }
		    );

		    $('button.nav__buttons').on('click', (function() {
		    	$('.modal').removeClass('modal-appear');
		    	$('button.demo').removeClass('view-demo');
		    	$(this).next().addClass('modal-appear');
		    })
		    );

		    $('.demos').on('click', (function() {
		    	$(this).addClass('display-none');
		    	$(this).next().removeClass('display-none');

		    })
		    );

		    $('.forgot-password').on('click', (function() {
		    	$('.forgot-password-modal').addClass('modal-appear');

		    })
		    );
		  
		    $('button.demo').on('click', (function() {
		    	$('button.demo').removeClass('view-demo');
		    	// $('#demo').prop('checked', true); 
		    	$('aside.demo-start').addClass('modal-appear');
		    })
		    );

		    $('.close-window').on('click', (function() {
		    	$('button.demo').addClass('view-demo');
		    })
		    );

		});
