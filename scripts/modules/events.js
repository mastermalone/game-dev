define(function(){
	function Evt () {
		//Constructor
		var convert = function (list) {
			//Create and object that is returned with the 
			//converted events
		};
	}
	
	Evt.prototype = {
		constructor: Evt,
		addEvent: function (target, list, callback, touch) {
			if(typeof target === "String"){
				var targ = document.getElementById(target);
			}else{
				targ = target;
			}
			
			for(var i = 0; i < list.length; i++){
				if(window.addEventListener){
					//Convert list and use it as the event list
					targ.addEventListener(list[i], callback, true);
				}else{
					targ.attachEvent(list[i], callback);
				}	
			}
		}
	};
	return Evt;
});
