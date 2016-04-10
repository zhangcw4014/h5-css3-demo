window.onload = function(){
 
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];//获取的是数组
    
    //music end stop
     audio.addEventListener("ended"，function(event){
     	music.setAttribute("class","");
     },false);

    //click music_pic
	/*music.onclick = function () {
		if (audio.paused) {
			audio.play();
			this.setAttribute("class","play");
			//this.style.animationPlayState = "runing";andriod不支持
		}else{
			audio.pause();
			this.setAttribute("class","");
			//this.style.animationPlayState = "paused";
		};
	};
*/
	music.addEventListener("touchstart",function(event){
		if (audio.paused) {
				audio.play();
				this.setAttribute("class","play");
				//this.style.animationPlayState = "runing";andriod不支持
			}else{
				audio.pause();
				this.setAttribute("class","");
				//this.style.animationPlayState = "paused";
			};
		}
	});

	page1.addEventListener("touchstart",function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top     = "100";

		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5500);
	},false)
};
