var g_Interval = 10;
var g_PersonCount = 10000;//参加随机选取的人数
var g_Timer;
var running = false;
function beginRndNum(trigger)
{
	if(running)
	{
		running = false;
		clearTimeout(g_Timer);
    	$(trigger).val("开始");
		$('#ResultNum').css('color','red');
	}
	else
	{
		running = true;
		$('#ResultNum').css('color','black');
    	$(trigger).val("停止");
		beginTimer();//开始抽取
	}
}
function updateRndNum()
{
	var num = Math.floor(Math.random()*g_PersonCount+1);
	$('#ResultNum').html(num);
}
function beginTimer()
{
	g_Timer = setTimeout(beat, g_Interval);
}
function beat() 
{
	g_Timer = setTimeout(beat, g_Interval);
    updateRndNum();
}