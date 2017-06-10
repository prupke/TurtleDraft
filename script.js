
		$(function() {

			var modalActive=false;	

			// function detectmobile() { 

			//     if( navigator.userAgent.match(/Android/i)
			//     || navigator.userAgent.match(/webOS/i)
			//     || navigator.userAgent.match(/iPhone/i)
			//     || navigator.userAgent.match(/iPad/i)
			//     || navigator.userAgent.match(/iPod/i)
			//     || navigator.userAgent.match(/BlackBerry/i)
			//     || navigator.userAgent.match(/Windows Phone/i)
			//     ){

			//         $('main').addClass('mobile');
			//     }
			// }

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

		    setTimeout(function() {   
		    	if(modalActive===false) {
		     		$('.demo').addClass('view-demo');
		    		// $('.demo-button-wrapper').addClass('display-none');

		     	}
		    }, 1850);

		    $('button.nav__buttons').on('click', (function() {
		    	var modalActive=true;
		    	$('.demo-button-wrapper').addClass('display-none');
		    	$('.modal').removeClass('modal-appear');
		    	// $('button.demo').removeClass('view-demo');

		    	$(this).next().addClass('modal-appear');
		    }));

		    $('.demo-next').on('click', (function() {    
		    	$('.demos').addClass('display-none');
		    	$(this).closest('.demos').next().removeClass('display-none')
		    	// $(this).next().closest('.demos').removeClass('display-none');
		    }));

		    $('.demo-prev').on('click', (function() {
		    	$('.demos').addClass('display-none');
		    	$(this).closest('.demos').prev().removeClass('display-none')
		    	// $(this).next().closest('.demos').removeClass('display-none');
		    }));

		    $('.forgot-password').on('click', (function() {
		    	$('.forgot-password-modal').addClass('modal-appear');
		    	var modalActive=true;

		    }));

		    $('.sign-up-button').on('click', (function() {
		    	$('.demos').addClass('display-none');
		    	$('.sign-up-modal').addClass('modal-appear');
		    	var modalActive=true;

		    }));
		  
		    $('button.demo').on('click', (function() {
		    	$('aside.demo-start').addClass('modal-appear');
		    	// $('aside.demo-start').removeClass('display-none');
		    	$('.demos').addClass('display-none');
		    	$('.demo-page1').removeClass('display-none');
		    	$('.demo-button-wrapper').addClass('display-none');

		    }));

		    $('.close-window').on('click', (function() {
		    	$('.demo-button-wrapper').removeClass('display-none');

		    	$('button.demo').addClass('view-demo');
		    	var modalActive=false;
		    }));

		    $('.demo-button').on('click', (function() {
		    	$('.demos').addClass('display-none');
		    	$('.demo-page1').removeClass('display-none');

		    }));

		});
