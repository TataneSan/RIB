function suggestion() {
	confirmation = prompt("Ecrivez ici votre suggestion !");
	

	var request = new XMLHttpRequest();
	request.open("POST", "https://discord.com/api/webhooks/920310967064207461/du3mlrsDm96_mGJbM5XlrTDYyshVv6Z6QgahGnWPj54gUSelXJ2sirVniDmA_iPQ8Yeu");

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
    	username: "Suggestions",
    	content: "Une nouvelle suggestions vient d'arriver :**" + confirmation.toString() + "** "
  	}

  	request.send(JSON.stringify(params));
}      
