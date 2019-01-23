$(document).ready()
{
	
	$('#open_me').click(function()
	{
		/*点击按钮显示主体*/
		$('#detail_msg_div').stop().toggle(800);
	});
	
	$('#detail_msg_div a').click(function (e) 
	{
       e.preventDefault
       $(this).tab('show');
       
    });
		
}



