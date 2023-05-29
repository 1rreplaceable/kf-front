/**
 * 
 */
 function createImg(){
	// 라디오 버튼의 value 속성값을 얻어와서 브라우저에 표시함
	// 이미지의 경로와 이름을 사용한다.
	let radios = document.getElementsByName("radioBtn");
	
	let radioValue = '';
	
	for(let radio of radios){
		if(radio.checked){
			radioValue = radio.value;
		}
	}
	console.log(radioValue);
	
	// 이미지 태그를 만들고 src 속성값을 저장
	let img = document.createElement('img');
	img.setAttribute('src',radioValue);
	
	let div = document.querySelector("#imgView");
	
	// div 태그들을 계속 만들면 가장 마지막에 생성된
	// 태그만 실행 할 수 있도록 설정하는 키워드
	// div.firstElementChild 가장 처음 만든 태그
	// div.lastElementChild 가장 마지막에 만든 태그
	let divImg = div.lastElementChild;
	
	div.appendChild(img);
	
}
function removeImg() {
	let div = document.getElementById('imgView');
	div.innerHTML = '<br/>';
}