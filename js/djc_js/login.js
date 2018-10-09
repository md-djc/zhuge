$('header>a').hover(function(){
	$(this).css('color','#FF8400');
},function(){
	$(this).css('color','#000000');
});
$('header ul li').hover(function(){
	$(this).children().css('color','#FF8400');
},function(){
	$(this).children().css('color','#000000');
});
var a = parseInt(Math.random()*9)-1;
var b = ["1_xx6d","2_zhqy","3_cmqe","4_qzqp","5_k8mx","6_7m6r","7_dtew","8_jxx6"];
console.log(b[a]);
$('.code-right img').attr('src','../img/djc_img/' + b[a] +'.png');

$('button').click(function(){
	var flag=true;
	var tels=$('.tel').val();
	var acc=$('.account').val();
	var coun=$('.account1').val();
	if(tels==''){
		var flag=false;
		tishi1.innerHTML='请输入手机号';
		tishi1.style.color='red';
	}else{
		tishi1.innerHTML='';
	}
})