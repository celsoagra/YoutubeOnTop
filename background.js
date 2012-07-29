chrome.browserAction.onClicked.addListener(function(tab) {

	var url = tab.url;
	var linkInicial = "http://www.youtube.com/watch";
	
	if (url.indexOf(linkInicial) != -1){
		var v = "";
		var list = "";
	
		var urlEmbed = "http://www.youtube.com/embed/";
		var params = url.split("?")
		
		var parametros = params[1].split("&");		
		
		for (i=0 ; i < parametros.length ; i++){
			
			if (parametros[i].indexOf("v=") != -1){
				v = parametros[i].replace("v=","") + "?autoplay=1";
			}
			
			if (parametros[i].indexOf("list=") != -1 ){
				list = "&playnext=1&list=" + parametros[i].replace("list=","");
			}
			
		}
		
		chrome.windows.create({url:urlEmbed + v + list, top:0, width:370, height:270, type:"panel"});
	} else {
		 chrome.browserAction.setPopup({tabId:tab.id, popup:'message.html'})
	}
});
