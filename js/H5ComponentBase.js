/* 基本图文组件对象 */

var H5ComponentBase = function(name,cfg){
	var cfg = cfg ||{};
	var id = ('H5_c_'+Math.random()).replace('.','_');

	//给组件添加class
	var cls = '  H5_component_'+cfg.type;
	var component = $('<div class="H5_component H5_component_name_'+name+cls+'" id="'+id+'"></div>');

	cfg.text && component.text(cfg.text);
	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);
	cfg.css && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage','url(imgs/'+cfg.bg+')');
	if(cfg.center === true){
		component.css({
			marginLeft:(cfg.width/4 * -1) +'px',
			left:'50%'
		});
	}

	// 很多自定义的参数
	// 返回到第一页
	if(cfg.onclick && (typeof cfg.onclick)==='function'){
		component.on('click',cfg.onclick);
	}

	//载入 移出的动画
	component.on('onLeave',function(){
		$(this).removeClass(cls+'_load').addClass(cls+'_leave');

		setTimeout(function(){
			cfg.animateIn && component.animate(cfg.animateOut);
		},cfg.delay||0)
		
		return false;
	});
	component.on('onLoad',function(){
		$(this).removeClass(cls+'_leave').addClass(cls+'_load');

		setTimeout(function(){
			cfg.animateIn && component.animate(cfg.animateIn);
		},cfg.delay||0)
		return false;
	});


	
	

	return component;
}