Template.room.events({
	"click .rnf_down":function(event){
		if (!$(".rnf_down").hasClass("abc")) {
			$(".rnf_content").height("100%");
			$(".rnf_down").css("background-image","url(/rnf_top.png)");
			$(".rnf_down").addClass("abc");
		}else{
			$(".rnf_content").height("40px");
			$(".rnf_down").css("background-image","url(/rnf_down.png)");
			$(".rnf_down").removeClass("abc");
		}
	},
	"click .rtm_plus":function(event){
		var value = $(".rtm_input").val();
		$(".rtm_input").val(value*1+1);
	},
	"click .rtm_reduce":function(event){
		var value = $(".rtm_input").val();
		$(".rtm_input").val(value*1-1);
		if ($(".rtm_input").val()<1) {
			$(".rtm_input").val(1);
		};
	},
});
Template.room.onRendered(function(){
// 房间数量
	$("#standard_number").show();
	$(".room_type_specific").click(function(){
		$(".rtm_number").hide();
		$("#" + $(this).attr("data-for")).show();
	});
// 酒店信息、设施
	$("#rn_info").show();
	$(".room_nav_term").click(function(){
		$(".rn_content").hide();
		$("#" + $(this).attr("data-for")).show();
		$(".room_style").removeClass("room_style");
		$(this).addClass("room_style");
	});
});