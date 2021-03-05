// if(document.getElementById('about_content') != null) {
// 	let degree = 0;
// 	let operation_token = 'forward';
// 	let rotateAboutContent = () => {
// 		let about_content = document.getElementById('about_content');
// 		if(degree == 360) {
// 			operation_token = 'backward';
// 		} else if (degree == -360) {
// 			operation_token = 'forward';
// 		}
// 		about_content.setAttribute('style','transform: rotateX(0deg) rotateY('+ (operation_token == 'forward' ? degree = degree + 10 : degree = degree - 10 ) +'deg) rotateZ(0deg);');
// 		setTimeout(function(){
// 			rotateAboutContent();		
// 		}, 100);
// 	}
// 	// rotateAboutContent();
// }

var stop_floating = true;
(function(){
	if(document.getElementById('floating_boll') != null) {
		document.getElementById('floating_boll').style.top = '0px';
		document.getElementById('floating_boll').style.left = '0px';
		let vertical_operation = 'bottom';
		let horizontal_operation = 'right';
		var floatBoll = () => {
			let floating_boll = document.getElementById('floating_boll');
			let moving_position = '';
			let screen_height = $(document.getElementById('dummy_height_identifier')).height();
			let screen_width = $(document.getElementById('dummy_height_identifier')).width();
			let boll_left = parseInt(floating_boll.style.left);
			let boll_top = parseInt(floating_boll.style.top);
			const max_vertical = screen_height - 150;
			const max_horizontal = screen_width - 150;
			
			if(parseInt(floating_boll.style.top) <= 0) {
				vertical_operation = 'bottom';
			} else if(parseInt(floating_boll.style.top) >= max_vertical) {
				vertical_operation = 'top';
			}
			if(parseInt(floating_boll.style.left) <= 0) {
				horizontal_operation = 'right';
			} else if(parseInt(floating_boll.style.left) >= max_horizontal) {
				horizontal_operation = 'left';
			}
			floating_boll.style.top  =	(vertical_operation == 'bottom' ? boll_top = boll_top + 1 : boll_top = boll_top - 10) + 'px' ; 
			floating_boll.style.left  =	(horizontal_operation == 'right' ? boll_left = boll_left + 1 : boll_left = boll_left - 10) + 'px'; 
			if(stop_floating == false) {
				return false;
			}
			setTimeout(function(){
				floatBoll();
			}, 100);
		}
		floatBoll();
	}

	document.getElementById('floating_boll').onmousemove = stopFloating = () => {
		stop_floating = false;
	};

	document.getElementById('floating_boll').onmouseleave = resumeFloating = () => {
		stop_floating = true;
		floatBoll();
	}
})();

(function(){
	setInterval(function(){
		document.getElementById('right_card').appendChild(document.getElementById('middle_card').children[0]);
		document.getElementById('middle_card').appendChild(document.getElementById('left_card').children[0]);
		document.getElementById('left_card').appendChild(document.getElementById('right_card').children[0]);
	},3000);
})();


var boll_last_position = [0 , 0];
let moveNavigationBoll = (ev) => {
	document.getElementsByTagName("body")[0].scrollTop = '0px' ;
	let movable_boll = document.getElementById('floating_boll');
	let max_bottom = parseInt($(document.getElementById('dummy_height_identifier')).height()) - (parseInt($(movable_boll).height()) + 5); 
	let max_right = parseInt($(document.getElementById('dummy_height_identifier')).width()) - (parseInt($(movable_boll).width()) + 5);
	// movable_boll.style.display = 'none';
	setTimeout(function(){
		movable_boll.style.visibility = 'hidden';
		movable_boll.style.top = (mouseY - 100) + 'px';
		movable_boll.style.left = (mouseX - 100) + 'px';
	},500);
	console.log(movable_boll.style.left);	
	console.log(movable_boll.style.top);	
	// if(parseInt(movable_boll.style.top) > 5 && boll_last_position[0] > mouseY) {
	// 	movable_boll.style.top = (mouseY - 100) + 'px';
	// 	boll_last_position[0] = mouseY;
	// 	// if(parseInt($(movable_boll).height()) >  100) {
	// 	// 	movable_boll.style.height = (parseInt($(movable_boll).height()) - 1) + 'px';
	// 	// 	movable_boll.style.width = (parseInt($(movable_boll).width()) - 1) + 'px';
	// 	// }
	// }

	// if (parseInt(movable_boll.style.top) < max_bottom && boll_last_position[0] < mouseY) {
	// 	movable_boll.style.top = (mouseY - 100) + 'px';
	// 	// if(parseInt($(movable_boll).height()) < 150) {
	// 	// 	movable_boll.style.height = (parseInt($(movable_boll).height()) + 1) + 'px';
	// 	// 	movable_boll.style.width = (parseInt($(movable_boll).width()) + 1) + 'px';
	// 	// }
	// 	boll_last_position[0] = mouseY;
	// }

	// if(parseInt(movable_boll.style.left) > 5 && boll_last_position[1] > mouseX) {
	// 	movable_boll.style.left = (mouseX - 100) + 'px';
	// 	boll_last_position[1] = mouseX;
	// }

	// if (parseInt(movable_boll.style.left) < max_right && boll_last_position[1] < mouseX) {
	// 	movable_boll.style.left = (mouseX - 100) + 'px';
	// 	boll_last_position[1] = mouseX;
	// }

	stop_floating = false;
	if(document.getElementById('home_body') != null) {
		if(document.getElementById('about_menu_circle').offsetLeft < mouseX && document.getElementById('work_menu_circle').offsetLeft > mouseX && mouseY < 200) {
			
			document.getElementById('selected_about_token').style.display = 'block';
			document.getElementById('selected_work_token').style.display = 'none';
			document.getElementById('selected_product_token').style.display = 'none';
			document.getElementById('selected_audience_token').style.display = 'none';
			document.getElementById('selected_contact_token').style.display = 'none';
		
		} else if(document.getElementById('work_menu_circle').offsetLeft < mouseX && document.getElementById('product_menu_circle').offsetLeft > mouseX && mouseY < 200) {
		
			document.getElementById('selected_about_token').style.display = 'none';
			document.getElementById('selected_work_token').style.display = 'block';
			document.getElementById('selected_product_token').style.display = 'none';
			document.getElementById('selected_audience_token').style.display = 'none';
			document.getElementById('selected_contact_token').style.display = 'none';

		} else if(document.getElementById('product_menu_circle').offsetLeft < mouseX && mouseY < 200) {
		
			document.getElementById('selected_about_token').style.display = 'none';
			document.getElementById('selected_work_token').style.display = 'none';
			document.getElementById('selected_product_token').style.display = 'block';
			document.getElementById('selected_audience_token').style.display = 'none';
			document.getElementById('selected_contact_token').style.display = 'none';
		
		} else if(document.getElementById('audience_menu_circle').offsetLeft < mouseX && document.getElementById('work_menu_circle').offsetLeft > mouseX && mouseY  > (document.getElementsByClassName('middle_content_heading')[0].clientHeight  + 300) ) {
		
			document.getElementById('selected_about_token').style.display = 'none';
			document.getElementById('selected_work_token').style.display = 'none';
			document.getElementById('selected_product_token').style.display = 'none';
			document.getElementById('selected_audience_token').style.display = 'block';
			document.getElementById('selected_contact_token').style.display = 'none';
		
		} else if(document.getElementById('contact_menu_circle').offsetLeft < mouseX && mouseY  > (document.getElementsByClassName('middle_content_heading')[0].clientHeight + 300) && mouseY  < document.getElementById('audience_menu_circle').offsetTop + 100 ) {
		
			document.getElementById('selected_about_token').style.display = 'none';
			document.getElementById('selected_work_token').style.display = 'none';
			document.getElementById('selected_product_token').style.display = 'none';
			document.getElementById('selected_audience_token').style.display = 'none';
			document.getElementById('selected_contact_token').style.display = 'block';
		
		} else {
			
			document.getElementById('selected_about_token').style.display = 'none';
			document.getElementById('selected_work_token').style.display = 'none';
			document.getElementById('selected_product_token').style.display = 'none';
			document.getElementById('selected_audience_token').style.display = 'none';
			document.getElementById('selected_contact_token').style.display = 'none';
		}
	}

	if(document.getElementById('product_body') != null) {
		productSectionRouting();
	}

	if (document.getElementById('interactive_ads_body') != null || document.getElementById('interactive_video_body') != null || document.getElementById('interactive_pages_body') != null) {
		if(document.getElementById('selected_back_token') != null) {
			interactivePagesRoutes();
		}
	}

	if(document.getElementById('audience_page_body') != null || document.getElementById('work_page_body') != null || document.getElementById('contact_page_body') != null || document.getElementById('about_page_body') != null) {
		if(document.getElementById('selected_back_token') != null) {
			backButtonAction();
		}	
	}
}

let selectMenuCircle = () => {
	let moving_boll = document.getElementById('floating_boll');
	setTimeout(function(){
		moving_boll.style.visibility = 'visible';
	},500);
	setTimeout(function (){
		if (document.getElementById('home_body') != null) {
			if(document.getElementById('selected_contact_token').style.display == 'block') {
				moving_boll.style.display = 'none';
				window.location.href = "contact.html";
			} else if(document.getElementById('selected_audience_token').style.display == 'block') {
				moving_boll.style.display = 'none';
				window.location.href = "audience.html";
			} else if(document.getElementById('selected_about_token').style.display == 'block') {
				moving_boll.style.display = 'none';
				window.location.href = "about.html";
			} else if(document.getElementById('selected_work_token').style.display == 'block') {
				moving_boll.style.display = 'none';
				window.location.href = "work.html";
			} else if(document.getElementById('selected_product_token').style.display == 'block') {
				moving_boll.style.display = 'none';
				window.location.href = "product.html";
			}
		}

		if (document.getElementById('product_body') != null) {
			if(document.getElementById('selected_ads_token').style.display == 'block') {
				moving_boll.style.display = 'none';
				window.location.href = "interactive_ads.html";	
			}
			if(document.getElementById('selected_video_token').style.display == 'block') {
				moving_boll.style.display = 'none';
				window.location.href = "interactive_video.html";	
			}
			if(document.getElementById('selected_lpage_token').style.display == 'block') {
				moving_boll.style.display = 'none';
				window.location.href = "interactive_pages.html";	
			}
			if(document.getElementById('selected_back_token').style.display == 'block') {
				moving_boll.style.display = 'none';
				window.location.href = "index.html";	
			}
		}

		if (document.getElementById('interactive_ads_body') != null || document.getElementById('interactive_video_body') != null || document.getElementById('interactive_pages_body') != null) {
			if (document.getElementById('selected_back_token') != null) {
				if(document.getElementById('selected_back_token').style.display == 'block') {
					moving_boll.style.display = 'none';
					window.location.href = "product.html";	
				}
			}
		}


		if (document.getElementById('about_page_body') != null || document.getElementById('contact_page_body') != null || document.getElementById('work_page_body') != null || document.getElementById('audience_page_body') != null) {
			if (document.getElementById('selected_back_token') != null) {
				if(document.getElementById('selected_back_token').style.display == 'block') {
					moving_boll.style.display = 'none';
					window.location.href = "index.html";	
				}
			}
		}

		// if (document.getElementById('interactive_pages_body') != null) {
		// 	if(document.getElementById('interactive_pages_back').style.background == 'red') {
		// 		moving_boll.style.display = 'none';
		// 		window.location.href = "product.html";	
		// 	}
		// }

		// if (document.getElementById('interactive_video_body') != null) {
		// 	if(document.getElementById('interactive_video_back').style.background == 'red') {
		// 		moving_boll.style.display = 'none';
		// 		window.location.href = "product.html";	
		// 	}
		// }

	},1500);
}

var mouseX = 0;
var mouseY = 0;
let getMousePosition = (ev) => {
	mouseX = ev.touches[0].clientX;
	mouseY = ev.touches[0].clientY;
}

let productSectionRouting = () => {
	console.log(parseInt(mouseY));
	console.log(parseInt(mouseY) +' > '+ 100 +' && '+ parseInt(mouseY) +' < '+ 200);
	console.log(parseInt(mouseY) > 300 && parseInt(mouseY) < 500);
	console.log(parseInt(mouseY) > 500 && parseInt(mouseY) < 700);
	if(parseInt(mouseY) > 200 && parseInt(mouseY) < 380) {
		document.getElementById('selected_ads_token').style.display = 'block';
		document.getElementById('selected_video_token').style.display = 'none';
		document.getElementById('selected_lpage_token').style.display = 'none';
		document.getElementById('selected_back_token').style.display = 'none';
	} else if(parseInt(mouseY) > 490 && parseInt(mouseY) < 625) {
		document.getElementById('selected_ads_token').style.display = 'none';
		document.getElementById('selected_video_token').style.display = 'block';
		document.getElementById('selected_lpage_token').style.display = 'none';
		document.getElementById('selected_back_token').style.display = 'none';
	} else if(parseInt(mouseY) > 740 && parseInt(mouseY) < 870) {
		document.getElementById('selected_ads_token').style.display = 'none';
		document.getElementById('selected_video_token').style.display = 'none';
		document.getElementById('selected_lpage_token').style.display = 'block';
		document.getElementById('selected_back_token').style.display = 'none';
	} else if(parseInt(mouseX) < 150 && parseInt(mouseY) < 150) {
		document.getElementById('selected_ads_token').style.display = 'none';
		document.getElementById('selected_video_token').style.display = 'none';
		document.getElementById('selected_lpage_token').style.display = 'none';
		document.getElementById('selected_back_token').style.display = 'block';
	} else {
		document.getElementById('selected_ads_token').style.display = 'none';
		document.getElementById('selected_video_token').style.display = 'none';
		document.getElementById('selected_lpage_token').style.display = 'none';
		document.getElementById('selected_back_token').style.display = 'none';
	}
}

let interactivePagesRoutes = () => {
	if(parseInt(mouseX) < 100 && parseInt(mouseY) < 100) {
		if(document.getElementById('selected_back_token') != null) {
			document.getElementById('selected_back_token').style.display = 'block';	
		}
	}
	else {
		if(document.getElementById('selected_back_token') != null) {
			document.getElementById('selected_back_token').style.display = 'none';	
		}  
	}
}

let backButtonAction = () => {
	if(parseInt(mouseX) < 150 && parseInt(mouseY) < 150) {
		if(document.getElementById('selected_back_token') != null) {
			document.getElementById('selected_back_token').style.display = 'block';	
		}
	}
	else {
		if(document.getElementById('selected_back_token') != null) {
			document.getElementById('selected_back_token').style.display = 'none';	
		}  
	}	
}

var scrollable = true;
// //start 

document.addEventListener('DOMContentLoaded', (event) => {
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';   
  	console.log('hi');
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  }
  
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  	console.log('hi');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }
  
  let items = document.querySelectorAll('#floating_boll');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
});

