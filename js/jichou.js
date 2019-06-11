		var xuanze = document.getElementById("xuanze");
		var check1 = xuanze.getElementsByTagName("input");

		window.onchange = function(){
			var xzimg = document.getElementById("xzimg");
			if (check1[0].checked) {
				xzimg.src = "../img/jichou_gaohu.jpg";
			}else if (check1[1].checked) {
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
			var save = document.getElementById("save");
			var definition = document.getElementById("definition");
			var check2 = definition.getElementsByTagName("input");
			result.style.display = "flex";
			var jichou = document.getElementById("jichou_riji");
//			console.log(jichou.offsetLeft);
			html2canvas(jichou,{
				canvas:jichou_canvas,
				width:jichou.offsetWidth,
			//	height:jichou.offsetHeight
			}).then(function(canvas) {
	//		    document.body.appendChild(canvas);
				gaoqing.setAttribute("src",canvas.toDataURL("image/jpg"));
				gaohu.setAttribute("src",canvas.toDataURL("image/jpeg",0.2));
//				console.log(canvas.toDataURL());
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
		var wea = [
			"晴","阴","多云","雨夹雪","小雨","中雨","阵雨",
			"小雪","中雪","大雪","大雨","雾","暴雨",
			"雷阵雨","阵雪","暴雪","扬沙","大暴雨","霾","浮尘",
		];
//		console.log(wea.length);
		var rand1 = Math.floor(Math.random()*20);
		var weather = document.getElementById("weather");
		weather.innerHTML = "天气" + wea[rand1];
		
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
			"最高温度38℃！今天的砖比昨天的还要烫手，富婆依旧没有出现。我感觉我比前两天好像又黑了一些！不知道自己还能坚持多久！",
			"今天还是很热，和昨天一样热甚至比昨天更热，给我买雪糕的人还没有出现，今天要是没有得到小雪糕，我将锤爆在座各位的头",
			"今天外面38度，我在富婆的家里看着满地的六味地黄丸，想起我在工地的日子，虽然烫手但腿不抖",
			"今天群里面好多兄弟都有男朋友了，只有我还喜欢女孩子，因为我觉得女孩子软软的香香的，我觉得我跟这群gay玩不下去了",
			"群主说好女装给我看的，现在却人影都没有，这个仇先记下来。",
			"群里他们都在吃泡面，但是汤都不让我喝一口，这个仇我先记下来",
			"群里人答应带我一起玩，但是又不跟我玩了，说我菜，还嘲笑我夕阳红枪法，总而言之这个仇我记住了",
			"没有富婆给我买花露水，我就只能被蚊子咬，这个仇我记下来了",
			"",
			"",
			
		];
//		console.log(jichou_content.length);
		var rand2 = Math.floor(Math.random()*19);
		var jichou = document.getElementById("jichou");
		jichou.innerHTML = jichou_content[rand2];
		
		