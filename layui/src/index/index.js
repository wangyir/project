$(function () {  
	if ((navigator.appName == "Microsoft Internet Explorer") && (document.documentMode < 10 || document.documentMode == undefined)) {  
	    var $placeholder = $("input[placeholder]");  
	    for (var i = 0; i < $placeholder.length; i++) {  
	        if ($placeholder.eq(i).attr("type") == "password") {  
	            $placeholder.eq(i).siblings("label").text($placeholder.eq(i).attr("placeholder")).show();  
	        } else {  
	            $placeholder.eq(i).val($placeholder.eq(i).attr("placeholder")).css({"color": "#ccc"});  
	        }  
	    }  
	    $placeholder.focus(function () {  
	        if ($(this).attr("type") == "password") {  
	            $(this).siblings("label").hide();  
	        } else {  
	            if ($(this).val() == $(this).attr("placeholder")) {  
	                $(this).val("").css({"color": "#ccc"});  
	            }  
	        }  
	    }).blur(function () {  
	        if ($(this).attr("type") == "password") {  
	            if ($(this).val() == "") {  
	                $(this).siblings("label").text($(this).attr("placeholder")).show();  
	            }  
	        } else {  
	            if ($(this).val() == "") {  
	                $(this).val($(this).attr("placeholder")).css({"color": "#ccc"}); 
	            }  
	    	}  
		});   
	}
});
layui.use(['form', 'jquery'], function(){
	var 
		$ = layui.$,
	  	form = layui.form

	function login() {
		$.ajax({
		    url:"index.json",
		    type:"POST",
		    dataType:"json",
		    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		    success:function(data){
		        if(data == false){
		            alert("您输入的用户名或密码有错！");
		            return false;
		        }else{
		            $(location).attr('href', '../main/main.html');
		        }
		    }
		});
	}
	  
	form.on('submit(login)', function(data){
	    layer.alert(JSON.stringify(data.field), {
	      	title: '最终的提交信息',
	    })
	    login();
	    return false;
	});
});