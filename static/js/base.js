
(function ($) {
  $.fn.sysAlert = function() {
    var msg = '';
	for (var i = 0; i < arguments.length; i++) {
		msg += (arguments[i] + '<br>');
	}
	var html = '<div class="alert-area" id="alert-area">'+
	'    <div class="con">'+
	'        <div class="msg">'+ msg +
	'        </div>'+
	'        <div class="btns">'+
	'            <button class="btn" id="btn-close">忽略</button>'+
	'            <button class="btn">确定</button>'+
	'        </div>'+
	'    </div>'+
	'</div>';
  if($('#alert-area').length == 0){
    $('body').append(html);
  }else{
    $('#alert-area').show();
  }


  setTimeout(function(){
    $('#alert-area').click(function(){
      $('#alert-area').fadeOut();
    });
  }, 0);

  };

//url
  $.fn.sysUrl = (function(){
  	var host = '';

  	return {
  		yue: host + './data/yue.json'
  	};
  })();

  //timestamp
  $.fn.sysFn = (function(){

  	return {
  		timestamp: function(str){
  			var str = parseInt(str) * 1000;
        var date = new Date(str);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        var time = Y + M + D + h + m;
        return time;
  		}
  	};

  })();

})(jQuery)
