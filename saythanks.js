function saythanks() {
	confirmation = prompt("Indiquez votre prénom/pseudo pour accompagner le remerciement. \nMettez \"Anonyme\" si vous souhaitez le rester.");
	

	var request = new XMLHttpRequest();
	request.open("POST", "https://discord.com/api/webhooks/915672744492949555/OtRir9GdarYLMgMQn59btW7-Ardfcnx-KpzmVDkR2Je89DKOSdMJ3zrOomt9D8MXcK2z");

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
    	username: "Remerciementse",
    	content: "**" + confirmation.toString() + "** te remercie !"
  	}

  	request.send(JSON.stringify(params));
}      
