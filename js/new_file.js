var lis=document.getElementsByName("banner");
		var wuyi=document.getElementsByName("wuyi");
		var num=0;
		off();
		lis[0].style.opacity="1";
		wuyi[0].style.background="red";
		var tim=setInterval(on,2000);
		//所有效果全部关闭
		function off()
		{
			for(var i=0;i<lis.length;i++)	
			{
				lis[i].style.opacity="0";
			}
			for(var i=0;i<wuyi.length;i++)	
			{
				wuyi[i].style.background="gray";
				wuyi[i].style.background="rgba(0,0,0,0.5)";
			}
		}
		//循环打开一个效果
		function on()
		{
			++num;
			if(num>3)
			{
				num=0;
			}
			for(var i=0;i<lis.length;i++)	
			{
				lis[i].style.opacity="0";
			}
			for(var i=0;i<wuyi.length;i++)	
			{
				wuyi[i].style.background="gray";
				wuyi[i].style.background="rgba(0,0,0,0.5)";
			}
			lis[num].style.opacity="1";
			wuyi[num].style.background="red";
		}
		//点击打开一个关闭其他
		function oneon(numtur)
		{
			clearInterval(tim);
			for(var i=0;i<lis.length;i++)	
			{
				lis[i].style.opacity="0";
				wuyi[i].style.background="gray";
				wuyi[i].style.background="rgba(0,0,0,0.5)";
			}
			lis[numtur].style.opacity="1";
			wuyi[numtur].style.background="red";
			num=numtur;
			tim =setInterval(on,2000);
		}
		//左边移动
		function lfeton()
		{
			clearInterval(tim);
			--num;
			if(num<0)
			{
				num=3;
			}
			for(var i=0;i<lis.length;i++)	
			{
				lis[i].style.opacity="0";
				wuyi[i].style.background="gray";
				wuyi[i].style.background="rgba(0,0,0,0.5)";
			}
			lis[num].style.opacity="1";
			wuyi[num].style.background="red";
			tim=setInterval(on,2000);
		}
		function rigthon()
		{
			clearInterval(tim);
			++num;
			if(num>3)
			{
				num=0;
			}
			for(var i=0;i<lis.length;i++)	
			{
				lis[i].style.opacity="0";
				wuyi[i].style.background="gray";
				wuyi[i].style.background="rgba(0,0,0,0.5)";
			}
			lis[num].style.opacity="1";
			wuyi[num].style.background="red";
			tim=setInterval(on,2000);
		}
	
	var huantu=document.getElementsByClassName("huantu")[0];
	var htlist=["2px","-209px","-421px"];
	var times=1;
	var sh=setInterval(huantus,2000);
	var flas=true;
	function huantus()
	{
		huantu.style.top=htlist[times];
		if(flas==true)
		{
			huantus1();
		}
		else 
		{
			huantus2();
		}
	}
	function huantus1(){
		times++;
		if(times==2)
		{
			flas=false;
		}
	}
	function huantus2()
	{
		times--;
		if(times==0)
		{
			flas=true;
		}
	}
	function hhhv(num)
	{
		if(num==0){
		clearInterval(sh);
		}
		else 
		{
			sh=setInterval(huantus,2000);
		}
	}