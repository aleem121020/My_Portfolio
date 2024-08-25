
	var menuIcon=document.querySelector('#menu-icon');
	var navbar=document.querySelector('.navbar');

	menuIcon.onclick= () => {
		menuIcon.classList.toggle('bx-x');
		navbar.classList.toggle('active');
	}

	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');



	var nav_a=document.querySelector('.navbar').querySelectorAll('a');

	nav_a.forEach(element => {
		element.addEventListener("click",function(){
			nav_a.forEach(nav=>nav.classList.remove("active"))
			this.classList.add("active");

			menuIcon.classList.remove('bx-x');
			navbar.classList.remove('active');
		})
	});



	ScrollReveal({ 
		reset: true,
		distance:'80px',
		duration:2000,
		delay:200
	});

	ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
	ScrollReveal().reveal('.home-img, .services-content, .projects-box, .blog-content, .contact form', { origin: 'bottom' });
	ScrollReveal().reveal('.home-content h1, .about-img, .social-media, .btn, .contact_icon', { origin: 'right' });
	ScrollReveal().reveal('.home-content p,  .about-content', { origin: 'left' });




