// //khai báo biến
// var slideIndex;
// // KHai bào hàm 
// function showSlides() {
// 	var i;
// 	var slides = document.getElementsByClassName("slide");
// 	var dots = document.getElementsByClassName("dot");
// 	for (i = 0; i < slides.length; i++) {
// 	   slides[i].style.display = "none";  
// 	}
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	}

// 	slides[slideIndex].style.display = "block";  
// 	dots[slideIndex].className += " active";
// 	//chuyển đến slide tiếp theo
// 	slideIndex++;
// 	//nếu đang ở slide cuối cùng thì chuyển về slide đầu
// 	if (slideIndex > slides.length - 1) {
// 	  slideIndex = 0
// 	}    
// 	//tự động chuyển đổi slide sau 3s
// 	setTimeout(showSlides, 3000);
// }
// //mặc định hiển thị slide đầu tiên 
// showSlides(slideIndex = 0);

// function click(n) {
//   showSlides(slideIndex = n);
// }

// <div class="footer_icon_1">
// 	<p><i class="fa fa-facebook"></i></p>
// </div>
// <div class="footer_icon_2">
// 	<p><i class="fa fa-google-plus"></i></p>
// </div>
// <div class="footer_icon_2">
// 	<p><i class="fa fa-youtube-play"></i></p>
// </div>
// <div class="footer_icon_2">
// 	<p><i class="fa fa-linkedin"></i></p>
// </div>


//banner chuyển ảnh 
// var myIndex = 0;
// showslides();

// function showslides() {
//     var i;
//     var x = document.getElementsByClassName("slide");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";  
//     }
    
//     myIndex++;

//     if (myIndex > x.length) {
//     myIndex = 1
//     }    
//     x[myIndex-1].style.display = "block";  
//     setTimeout(showslides, 3000); // Change image every 2 seconds
// }


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
    });
    } // End if
    });


});

//menu and top


    

