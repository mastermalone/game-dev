require.config({
	paths: {
		"mousePos": "modules/mouseXY",
		"createNode": "modules/createNode",
		"events": "modules/events"
	}
});

require(["mousePos", "createNode", "events"], function(MousePos, CreateNode, Evt){
	var ms = new MousePos(), dv = new CreateNode(), theDv, evt = new Evt(), 
	main = document.getElementById("main");
	ms.getPos();
	theDv = dv.makeElement("DIV", "id", "drag");
	evt.addEvent(theDv, ["click", "mouseover", "mouseup", "mousedown"], theCallback);
	main.appendChild(theDv);
	
	console.log("WOKING in main", main);
	
	function theCallback (e) {
		switch(e.type){
			case "click": console.log(e.type); break;
			case "mouseover": console.log(e.type); break;
			case "mouseup": console.log(e.type); break;
			case "mousedown": console.log(e.type); break;
		}
	}
});
