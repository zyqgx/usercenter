$(function() {

    //充值
    $('#chong').click(function() {
        $.fn.sysAlert('暂不支持在线充值', '请到店联系店员办理充值');
    });

    $.ajax({
    	url: $.fn.sysUrl.yue,
    	type: 'get',
    	data: {param1: 'value1'},
    })
    .done(function(res) {
    	
    })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });
    

});
