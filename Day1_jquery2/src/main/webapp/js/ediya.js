/**
 * 
 */
$(() => {
	$(".ediya_list_text").hide();
	
	$('.ediya_list').hover(
		function() {
			// 지금 마우스가 올라간 태그만 변경하고 싶을 경우에 this
			// stop() 선택된 요소에서 실행중인 모든 이펙트를 즉시 중지
			$(".ediya_list_text").stop().slideDown();
		},

		function() {
			// 지금 마우스가 올라간 태그만 변경하고 싶을 경우에 this
			// stop() 선택된 요소에서 실행중인 모든 이펙트를 즉시 중지
			$(".ediya_list_text").stop().slideUp();
		}
	);
	
});

