		var xuanze = document.getElementById("xuanze");
		var check = xuanze.getElementsByTagName("input");
		check[0].onchange = function(){
			console.log(111);
			var xzimg = document.getElementById("xzimg");
			if (this.value == "1") {
				xzimg.src = "../img/jichou_gaohu.jpg";
			}else if(this.value == "2"){
				xzimg.src = "../img/jichou_gaoqing.png";
			}else{
				xzimg.src = "../img/jiezhe_jichou.jpg";
			}
		}
		check[1].onchange = function(){
			var xzimg = document.getElementById("xzimg");
			if (this.value == "1") {
				xzimg.src = "../img/jichou_gaohu.jpg";
			}else if(this.value == "2"){
				xzimg.src = "../img/jichou_gaoqing.png";
			}else{
				xzimg.src = "../img/jiezhe_jichou.jpg";
			}
		}
		check[2].onchange = function(){
			var xzimg = document.getElementById("xzimg");
			if (this.value == "1") {
				xzimg.src = "../img/jichou_gaohu.jpg";
			}else if(this.value == "2"){
				xzimg.src = "../img/jichou_gaoqing.png";
			}else{
				xzimg.src = "../img/jiezhe_jichou.jpg";
			}
		}
		
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var day =d.getDate();
		var week=new Array(7);
		week[0]="星期天";
		week[1]="星期一";
		week[2]="星期二";
		week[3]="星期三";
		week[4]="星期四";
		week[5]="星期五";
		week[6]="星期六";
		var weekday = week[d.getDay()];
		var date = document.getElementById("date");
		date.innerHTML = year + "年" + month + "月" + day + "日" + weekday;
		
//		var jichou_canvas = document.getElementById("jichou_canvas");
//		var ctx = jichou_canvas.getContext("2d");
//		var img = document.getElementById("xzimg");
//		ctx.drawImage(img,50,50);
		
		
		var gaoqing = document.getElementById("gaoqing");
		var gaohu = document.getElementById("gaohu");
		var result = document.getElementById("jichou_result");
		function create(){
			result.style.display = "flex";
			var jichou = document.getElementById("jichou_riji");
//			console.log(jichou.offsetLeft);
			html2canvas(jichou,{
				canvas:jichou_canvas,
				width:jichou.offsetWidth,
				height:jichou.offsetHeight
//				x:518
			}).then(function(canvas) {
	//		    document.body.appendChild(canvas);
				gaoqing.setAttribute("src",canvas.toDataURL("image/jpg"));
//				console.log(canvas.toDataURL());
			});
			html2canvas(jichou,{
				canvas:jichou_canvas,
				imageTimeout:0,
				width:jichou.offsetWidth,
				height:jichou.offsetHeight
//				x:518
			}).then(function(canvas) {
	//		    document.body.appendChild(canvas);
				gaohu.setAttribute("src",canvas.toDataURL("image/jpeg",0.2));
			});
			
		}
		function save(data){
			if (data == 1) {
				var save_gaoqing = document.getElementById("save_gaoqing");
				save_gaoqing.href = gaoqing.src;
			}else{
				var save_gaohu = document.getElementById("save_gaohu");
				save_gaohu.href = gaohu.src;
			}
		}
		
		var jichou_content = [
			"和昨天一样没吃饭，一直在群里等人带我。昨天说好今天带我的，现在他们又说今天要上班没时间，还说不仅今天,往后都不会带我，简直不能忍,一定要好好记下来",
			"群里没人带我玩，这个仇我先记下了。",
			"群主拒绝了女装，这个仇，我先记下了",
			"一大早群里的人都打扮好了，出去浪了，只有我一个人守着群，MMP写不下去了，我也想出去玩，唉，找不到伴，算了，接着记下来",
			"今天天气热到爆炸，太阳也好毒，快要晒晕我了，但是没有人给我买冰西瓜冰阔落冰写币冰基宁，这个仇，我先记下了",
			"今天很不开心，因为没人理我，记一笔仇，下次也不理他们",
			"今天依然点红烧肉外卖，比昨天少了两块肉，这个仇我先记下了",
			"快到情人节了，群里还是没有小姐姐答应做我女朋友，这个仇先记下了",
			"今天的太阳和昨天一样，甚至比昨天还要大，热和昨天一样恶心，依旧没人给我买小雪糕，工地的砖头烫手，让我想起了昨晚被蚊子咬醒的炙热感，富婆还是没有出现，活着好累",
			"群里有人穿女装被我发现了，但是不给我穿，这个仇我记下了",
			"今天同样也没有吃早饭，我在群里给大佬们问候早安，没人回复我，我知道大佬都醒着，可是没人会回复我这个菜鸟，因为他们都不想带我打游戏，今天同样也没有大佬带我，这个仇我先记下来",
			
		];
		var rand = Math.floor(Math.random()*10);
		var jichou = document.getElementById("jichou");
		jichou.innerHTML = jichou_content[rand];
		