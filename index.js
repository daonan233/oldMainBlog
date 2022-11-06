window.onload = function(){
    var img1 = document.getElementById("iconMusic1");
    var onOff = true;//

    img1.onclick = function(){
        if(onOff){
            img1.src = "img/musicIcon.png";//图片路径切换为图片2
            onOff = false;//并且开关设为假
        }
		else{//如果是假
            img1.src = "img/soundPause.png";//图片路径切换为图片1
            onOff = true;
        }
		
		var oAudio = document.getElementById('myaudio');
		if (oAudio.paused) {
		    oAudio.play();
		}
		else {
		    oAudio.pause();
		}
    }
}
		

(function () {
	            var a_idx = 0;
	            window.onclick = function (event) {
	                var a = new Array("初音ミク","ネロ·クラウディウス","鳶一 折紙","樋口 円香","遠坂 凛","空 銀子","鏡音リン","今井 リサ","時崎 狂三","五河 琴里","アルトリア·ペンドラゴン","沖田 総司","織田 信長","マシュ・キリエライト");
	 
	                var heart = document.createElement("b"); //创建b元素
	                heart.onselectstart = new Function('event.returnValue=false'); //防止拖动
	 
	                document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
	                a_idx = (a_idx + 1) % a.length;
	                heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式
	 
	                var f = 16, // 字体大小
	                    x = event.clientX - f / 2, // 横坐标
	                    y = event.clientY - f, // 纵坐标
	                    c = randomColor(), // 随机颜色
	                    a = 1, // 透明度
	                    s = 1.2; // 放大缩小
	 
	                var timer = setInterval(function () { //添加定时器
	                    if (a <= 0) {
	                        document.body.removeChild(heart);
	                        clearInterval(timer);
	                    } else {
	                        heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
	                            c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
	                            s + ");";
	 
	                        y--;
	                        a -= 0.016;
	                        s += 0.002;
	                    }
	                }, 15)
	 
	            }
	            // 随机颜色
	            function randomColor() {
	 
	                return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
	                .random() * 255)) + ")";
	 
	            }
	        }());
		



