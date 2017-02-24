Template.hotel.events({
	"click .hotel_left":function(event){
		if (!$(".hotel_left").hasClass("abc")) {
			$(".hotel_sidebar").fadeIn();
			$(".hotel_left").addClass("abc");
		}
	},
	"click .sidebar_right":function(event){
		if ($(".hotel_left").hasClass("abc")) {
			$(".hotel_sidebar").fadeOut();
			$(".hotel_left").removeClass("abc");
		}
	},
	"click .hotel_right":function(event){
		if (!$(".hotel_right").hasClass("abc")) {
			$(".hotel_nav").show();
			$(".hotel_right").addClass("abc");
		}else{
			$(".hotel_nav").hide();
			$(".hotel_right").removeClass("abc");
		}
	},
});
