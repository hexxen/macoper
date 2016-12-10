$(document).foundation()
{
	var rdy = false;

	$('.autoplay').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		adaptiveHeight: false
	});

	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: true,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '.info',
		scrollOverflow: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : false,
		paddingTop: '0em',
		paddingBottom: '0px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		//events
		onLeave: function(index, nextIndex, direction){

			if(index > nextIndex){
				$(".bg").velocity({
    				top: "+=25%"
					},{
					duration: 400
				});
			}else{
				$(".bg").velocity({
    				top: "-=25%"
					},{
					duration: 400
				});
			}

			if (index==1) {
				$(".circle").velocity({
    				scale: 0
					},{
					duration: 0
				});

				$('.logocontainer').velocity({
					translateZ: 0, 
					top: "5%"
				},{
					duration: 400
				});
			
			}
			else if (nextIndex==1){				
				$('.logocontainer').velocity({
					translateZ: 0, 
					top: "46%"
					},{
					duration: 400
				});
			};
			
			if(index==2){
				$(".circle").velocity({
    				scale: 0
					},{
					duration: 400
				});

				$(".tasfialogo").velocity({opacity: 0},{duration:300});

				detailsclose();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

				
				$('#imgone').velocity({
					translateZ: 0, 
					left: "-10%",
					right: "100%",
					opacity: 0
				},{
					duration: 200,
					easing: "easeOutCubic"
				}); 



				$('#imgtwo').velocity({
					translateZ: 0, 
					left: "-10%",
					right: "100%",
					opacity: 0
				},{
					duration: 200,
					easing: "easeOutCubic",
					delay: 50
				});



				$('#imgthree').velocity({
					translateZ: 0, 
					left: "-10%",
					right: "100%",
					opacity: 05				},{
					duration: 200,
					easing: "easeOutCubic",
					delay: 100
				}); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////


				$('#imgfour').velocity({
					translateZ: 0, 
					left: "70%",
					right: "15%",
					opacity: 0
				},{
					duration: 200,
					easing: "easeOutCubic"
				}); 



				$('#imgfive').velocity({
					translateZ: 0, 
					left: "80%",
					right: "5%",
					opacity: 0
				},{
					duration: 200,
					easing: "easeOutCubic",
					delay: 50
				});



				$('#imgsix').velocity({
					translateZ: 0, 
					left: "70%",
					right: "15%",
					opacity: 0
				},{
					duration: 600,
					easing: "easeOutCubic",
					delay: 100
				}); 


				rdy=false;


			};

		},
		afterLoad: function(anchorLink, index){
			if (index==1) {
				$(".circle").velocity({
    				scale: 0
					},{
					duration: 0
				});
			};

			if (index==2) {
				console.log("section 2: left = "+$('#imgone').css("left"));

				revealtasfia();
			};

		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	
	function revealtasfia(){


				$(".circle").velocity({
    				scale: 1
					},{
					duration: 400
				});

				$(".tasfialogo").velocity({opacity: 1},{duration:400,delay:400});

				setTimeout(function(){
///////////////////////////////////////////////////////////////////////////////////////////////////////////

				
				$('#imgone').velocity({
					translateZ: 0, 
					left: "10%",
					right: "75%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic"
				}); 

				setTimeout(function(){
					$('#imgone').find('.text').velocity("transition.slideUpIn",700);
					console.log("done:      left = "+$('#imgone').css("left"));
				},700);




				$('#imgtwo').velocity({
					translateZ: 0, 
					left: "5%",
					right: "80%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic",
					delay: 200
				});

				setTimeout(function(){
					$('#imgtwo').find('.text').velocity("transition.slideUpIn",700);
				},700);
				



				$('#imgthree').velocity({
					translateZ: 0, 
					left: "10%",
					right: "75%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic",
					delay: 600
				}); 

				setTimeout(function(){
					$('#imgthree').find('.text').velocity("transition.slideUpIn",700);
				},700);



///////////////////////////////////////////////////////////////////////////////////////////////////////////



				$('#imgfour').velocity({
					translateZ: 0, 
					left: "70%",
					right: "15%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic"
				}); 

				setTimeout(function(){
					$('#imgfour').find('.text').velocity("transition.slideUpIn",700);
				},700);




				$('#imgfive').velocity({
					translateZ: 0, 
					left: "80%",
					right: "5%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic",
					delay: 200
				});

				setTimeout(function(){
					$('#imgfive').find('.text').velocity("transition.slideUpIn",700);
				},700);
				



				$('#imgsix').velocity({
					translateZ: 0, 
					left: "70%",
					right: "15%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic",
					delay: 600
				}); 

				setTimeout(function(){
					$('#imgsix').find('.text').velocity("transition.slideUpIn",700);
				},700);

				rdy=true;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
				},500);
	};





	infos		=	document.querySelectorAll(".info");
	thumbnails	=	document.querySelectorAll(".imgwrap");
	
	activeid = -1;
	//detailsopen = false;


	for (var i = 0;  i<thumbnails.length; i++) {
		console.log(i);
		$(thumbnails[i]).on('mouseenter',{i:i},revelo);
		$(thumbnails[i]).on('mouseleave',{i:i},evanesco);
		$(thumbnails[i]).on('click',{i:i},detailsopen);
	};






	function revelo(index){
		if(rdy && !detailsopen){
			var x=index.data.i;
			console.log("mouseenter  "+x);
			//$(infos[x]).css("opacity",1);
			//$(infos[x]).velocity({opacity: 1},{duration:100});
			$(".tasfialogo").velocity("stop");
			$(".tasfialogo").velocity({opacity: 0},{duration:100});
			$(thumbnails[x]).velocity({
    			scale: 1.3
			},{
				duration: 200
			});
			$(infos[x]).velocity("transition.expandIn",600);			
		};
	};

	function evanesco(index){
		if(rdy && !detailsopen){
			var x=index.data.i;
			console.log("mouseenter  "+x);
			//$(infos[x]).velocity({opacity: 0},{duration:100});
			$(infos[x]).velocity("transition.shrinkOut",200);
			$(".tasfialogo").velocity({opacity: 1},{duration:200,delay:600});
			$(thumbnails[x]).velocity({
    			scale: 1
			},{
				duration: 200
			});
		};
	};






	function detailsopen(index){//////////////////////////////////////////////////////////////////////

		detailsopen = true;

		$('.goback').on('click',detailsclose);

		if(rdy){

			if(activeid!=index.data.i){
				if (activeid >= 0) {
					$(infos[activeid]).velocity("transition.shrinkOut",200);
				};
				
			//	$(infos[index.data.i]).velocity("transition.expandIn",600);
				activeid = index.data.i;
			};

			if(activeid==index.data.i){
				$(".circle").velocity({ scale: 2 },{ duration: 400});

				for (var i = thumbnails.length - 1; i >= 0; i--) {
					if(i!=activeid){
						$(thumbnails[i]).velocity("transition.shrinkOut",200);
					}
					else{
						
					};
				};

				$(".tasfialogo").velocity({opacity: 0},{duration:100});
				
				if ($(window).width() < 500){
					detailsopenmobile();
				}else{
					detailsopenfull();
				}
			
				$(".goback").velocity({opacity: 1},{duration:100});
			};

		};
	};

	function detailsopenfull() {	

		console.log('id is: 		'+$(infos[activeid]).attr('id'));	
		console.log('active id is: 	'+activeid);

		

		switch( $(infos[activeid]).attr('id') ){
			case '1':
			case '2':
			case '3':

				$(infos[activeid]).velocity({
					left: 	"50%",
					right: 	"10%",
					top: 	"20%",
					bottom: "5%",
					opacity: 1
				},{
					duration: 400
				});

				$(thumbnails[activeid]).velocity({
					left: 	"10%",
					right: 	"60%",
					top: 	"30%",
					bottom: "30%",
				},{
					duration: 400
				});

				break;

			case '4':
			case '5':
			case '6':

				$(infos[activeid]).velocity({
					left: 	"10%",
					right: 	"50%",
					top: 	"20%",
					bottom: "5%",
					opacity: 1
				},{
					duration: 400
				});

				$(thumbnails[activeid]).velocity({
					left: 	"60%",
					right: 	"10%",
					top: 	"30%",
					bottom: "30%",
				},{
					duration: 400
				});

				break;

			default:
				console.log(' detailsopenfull(): 	.info.id out of range');
		};

	};

	function detailsopenmobile() {
		
		$(infos[activeid]).velocity({
			left: 	"5%",
			right: 	"5%",
			top: 	"45%",
			bottom: "5%",
			opacity: 1
		},{
			duration: 400
		});

		$(thumbnails[activeid]).velocity({
			left: 	"10%",
			right: 	"10%",
			top: 	"5%",
			bottom: "65%",
		},{
			duration: 400
		});

	};

	function detailsclose(){
		//$(infos[activeid]).velocity("transition.shrinkOut",200);
		//$(".info").velocity({ scale: 1 },{ duration: 400});


		$(infos[activeid]).velocity("reverse");
		$(thumbnails[activeid]).velocity("reverse");

		$(".tasfialogo").velocity({opacity: 1},{duration:200,delay:600});

		for (var i = thumbnails.length - 1; i >= 0; i--) {
			if(i!=activeid){
				$(thumbnails[i]).velocity("transition.expandIn",200);
			}
		};


		$(".goback").velocity({opacity: 0},{duration:100});
		$('.goback').off('click',detailsclose);

		detailsopen = false;
	}



/*
	$(window).scroll(function(e){
		if (active===2) {
			sectiontwo();
		};		
	});

	function sectiontwo(){
	  var scrolled = $(window).scrollTop();
	  $('.one').css('background-position','center ' + -(scrolled*0.35)+'px');
	  $('.two').css('background-position','center ' + -(scrolled*0.35)+'px');
	}

	var sectiontwo = function(){
		var sections 
	}

*/

	

}