jQuery(window).bind("load", function() {

	var tl = new TimelineMax();
	tl.to(".piece_1", 0, {scale:2})
	.to(".piece_2", 0, {scale:2})
	.to(".piece_3", 0, {scale:2})
	.to(".piece_4", 0, {scale:2})
	.to(".piece_5", 0, {scale:2})
	.to(".piece_6", 0, {scale:2})
	.to(".piece_7", 0, {scale:2})
	.to(".piece_8", 0, {scale:2})
	.to(".piece_9", 0, {scale:2})
	.to(".piece_10", 0, {scale:2})
	.to(".piece_11", 0, {scale:2})
	.to(".piece_12", 0, {scale:2})
	.to(".piece_13", 0, {scale:2})
	.to(".piece_14", 0, {scale:2})
	.to(".piece_15", 0, {scale:2})
	
	// Drop Animtaion
	.to(".piece_15", 0.4, {autoAlpha:1, scale:1, rotation:160})
	
	.to(".piece_14", 0.4, {autoAlpha:1, scale:1 ,rotation:60}, "-=0.2")
	
	.to(".piece_1", 0.4, {autoAlpha:1,scale:1,rotation:30})
	.to(".piece_1", 0.1, {skewX:-5, ease:Bounce.easeOut}, "-=0.4")
	
	.to(".piece_9", 0.4, {autoAlpha:1,scale:1,rotation:30}, "-=0.2")
	.to(".piece_9", 0.1, {skewX:-5, ease:Bounce.easeOut}, "-=0.4")
	
	.to(".piece_12", 0.4, {autoAlpha:1,scale:1,rotation:-20}, "-=0.4")
	.to(".piece_12", 0.1, {skewX:-5, ease:Bounce.easeOut}, "-=0.4")
	
	.to(".piece_8", 0.4, {autoAlpha:1,scale:1,rotation:-10}, "-=0.1")

	.to(".piece_5", 0.4, {autoAlpha:1,scale:1,rotation:20}, "-=0.3")
	.to(".piece_5", 0.1, {skewX:-5, ease:Bounce.easeOut}, "-=0.4")	
	
	.to(".piece_6", 0.4, {autoAlpha:1,scale:1,rotation:35}, "-=0.1")
	.to(".piece_6", 0.1, {skewX:-5, ease:Bounce.easeOut}, "-=0.4")	
	
	.to(".piece_2", 0.4, {autoAlpha:1,scale:1,rotation:-50}, "-=0.2")
	.to(".piece_2", 0.1, {skewX:-5, ease:Bounce.easeOut}, "-=0.4")	
	
	.to(".piece_13", 0.4, {autoAlpha:1,scale:1,rotation:90}, "-=0.4")
	.to(".piece_13", 0.1, {skewY:-5, ease:Bounce.easeOut}, "-=0.4")	
	
	.to(".piece_7", 0.4, {autoAlpha:1,scale:1,rotation:170}, "-=0.4")
	.to(".piece_7", 0.1, {skewY:-5, ease:Bounce.easeOut}, "-=0.4")
	
	.to(".piece_4", 0.4, {autoAlpha:1,scale:1,rotation:-100}, "-=0.1")
	.to(".piece_4", 0.1, {skewY:-5, ease:Bounce.easeOut}, "-=0.4")
	
	.to(".piece_11", 0.4, {autoAlpha:1,scale:1,rotation:100}, "-=0.3")
	.to(".piece_11", 0.1, {skewY:-5, ease:Bounce.easeOut}, "-=0.4")
	
	.to(".piece_10", 0.4, {autoAlpha:1,scale:1,rotation:90}, "-=0.2")
	.to(".piece_10", 0.1, {skewY:-5, ease:Bounce.easeOut}, "-=0.4")
	
	.to(".piece_3", 0.4, {autoAlpha:1,scale:1,rotation:45})
	.to(".piece_3", 0.1, {skewY:-5, ease:Bounce.easeOut}, "-=0.4")
	
	//Sort Animation
	.to(".piece_1", 0.5, {left:0, skewX:0, delay:0.3})
	.to(".piece_1", 0.5, {rotation:0, delay:0.2})
	
	.to(".piece_11", 0.5, {left:0, skewX:0, delay:0.3})
	.to(".piece_11", 0.5, {rotation:0, delay:0.2})
	
	.to(".piece_1", 0.5, {marginTop:0, delay:0.1})

	.to(".piece_6", 0.4, {left:0,skewX:0,delay:0.3})
	.to(".piece_6", 0.4, {rotation:0, delay:0.1})
	.to(".piece_6", 0.4, {marginTop:0, rotation:0, delay:0.1})
	.to(".piece_11", 0.5, {marginTop:0,rotation:0, delay:0.2})
	
	.to(".piece_4", 0.5, {marginTop:0,skewX:0,delay:0.1})
	
	.to(".piece_15", 0.9, {marginTop:0,skewX:0,rotation:0,left:0,delay:0.1})
	
	.to(".piece_3", 0.7, {marginTop:0,delay:0.1})
	
	.to(".piece_5", 0.5, {skewX:0,rotation:0,left:0,delay:0.1})
	.to(".piece_5", 0.4, {marginTop:0,delay:0.1})
	
	.to(".piece_12", 0.4, {marginTop:0,delay:0.1})
	
	.to(".piece_10", 0.4, {marginTop:0,skewX:0,rotation:0,left:0,delay:0.1})
	
	.to(".piece_3", 0.5, {marginTop:-30 + "%",skewX:0,delay:0.1})
	
	.to(".piece_4", 0.4, {rotation:0,delay:0.1})
	.to(".piece_4", 0.4, {left:0,delay:0.1})
	
	.to(".piece_7", 0.4, {marginTop:52 + "%",delay:0.2})
	.to(".piece_8", 0.4, {marginTop:52 + "%",delay:0.2})
	.to(".piece_3", 0.4, {marginTop:60,left:0,skewX:0,rotation:0,delay:0.1})	
	.to(".piece_14", 1, {marginTop:3 + "%",delay:0.2}, "shift")
	.to(".piece_13", 1, {marginTop:33 + "%",left:13 + "%",delay:0.2}, "shift")
	.to(".piece_9", 0.9, {marginTop:23 + "%",delay:0.1}, "shift")
	.to(".piece_7", 0.8, {marginTop:33 + "%",left:-3 + "%",delay:0.2}, "shift")
	.to(".piece_8", 0.7, {marginTop:33 + "%",delay:0.3}, "shift")	
	.to(".piece_2", 0.4, {marginTop:33 + "%",delay:0.1})
	
	.to(".piece_7", 0.5, {marginTop:0,rotation:0,skewY:0,left:13 + "%",skewX:0,delay:0.2})
	.to(".piece_7", 0.5, {rotation:0,delay:0.2})
	.to(".piece_7", 0.5, {left:0,delay:0.2})
	
	.to(".piece_3", 0.7, {marginTop:0,delay:0.2})
	
	.to(".piece_2", 0.7, {marginTop:23 + "%",rotation:0,skewX:0,delay:0.2,zIndex:16})
	.to(".piece_2", 0.7, {marginTop:0,left:0,delay:0.3})
	
	.to(".piece_8", 0.7, {marginTop:0,left:0,rotation:0,skewX:0,delay:0.2,zIndex:16})
	
	.to(".piece_9", 0.7, {rotation:0,skewX:0,delay:0.2,zIndex:17})
	.to(".piece_9", 0.7, {marginTop:0,left:0,delay:0.2})
	
	.to(".piece_14", 0.7, {marginTop:23 + "%"})
	
	.to(".piece_12", 0.7, {marginTop:9 + "%",left:35 + "%",rotation:0,skewX:0,delay:0.2,zIndex:17})
	.to(".piece_12", 0.5, {left:0,marginTop:0,delay:0.2})
	.to(".piece_13", 0.7, {marginTop:0,left:0,rotation:0,skewX:0,delay:0.2,zIndex:18})
	.to(".piece_14", 0.7, {marginTop:0,left:0,rotation:0,skewX:0,delay:0.2,zIndex:19})	

	
	
	.to(".piece_15", 0.5, {autoAlpha:1,boxShadow: "0px 0px 10px 4px #fff", backgroundColor:"#fff", borderColor:"#fff"})	
	
	.to(".piece_1", 1, {autoAlpha:0}, "end")
	.to(".piece_2", 1, {autoAlpha:0}, "end")
	.to(".piece_3", 1, {autoAlpha:0}, "end")
	.to(".piece_4", 1, {autoAlpha:0}, "end")
	.to(".piece_5", 1, {autoAlpha:0}, "end")
	.to(".piece_6", 1, {autoAlpha:0}, "end")
	.to(".piece_7", 1, {autoAlpha:0}, "end")
	.to(".piece_8", 1, {autoAlpha:0}, "end")
	.to(".piece_9", 1, {autoAlpha:0}, "end")
	.to(".piece_10", 1, {autoAlpha:0}, "end")
	.to(".piece_11", 1, {autoAlpha:0}, "end")
	.to(".piece_12", 1, {autoAlpha:0}, "end")
	.to(".piece_13", 1, {autoAlpha:0}, "end")
	.to(".piece_14", 1, {autoAlpha:0}, "end")
	.to(".piece_15", 1, {autoAlpha:0}, "end")
	.to(".complete", 1, {autoAlpha:1}, "end")
	

});