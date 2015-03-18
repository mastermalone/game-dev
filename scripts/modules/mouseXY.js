define(function(){
	function MousePos () {
		//Constructor
	}
	
	MousePos.prototype = {
		constructor: MousePos,
		getPos: function () {
			console.log("Getting Mouse Position");
		}
	};
	
	return MousePos;
});
