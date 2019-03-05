const traer = document.querySelector("#traer");

const imagenes = document.querySelector("#imagenes");

traer.addEventListener("click", traerInformacion);

function traerInformacion(){
	//console.log('click')

	fetch("https://dog.ceo/api/breed/hound/images/random/3")
		.then(function(respuesta){
			return respuesta.json()
		})
		.then(function(retornandoJson){
			// console.log(retornandoJson.message[0]);
			// var image = retornandoJson.message[0]
			// var image = retornandoJson.message[Math.floor(Math.random() * retornandoJson.message.length)]; // Random

			//console.log(retornandoJson.message)
			
			for(let img of retornandoJson.message){
				console.log(img)
				imagenes.innerHTML += `
					<div class="col-md-4 pt-3">
						<img src="${img}" class="img-fluid img-thumbnail">
					</div>
					
				`
			}

		})
}


