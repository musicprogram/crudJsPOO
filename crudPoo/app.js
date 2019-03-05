

/* 1) dos clases principales, los productos y la interfaz UI */

class Product {
	constructor(name,last_name){ // los mismos datos del formulario
		this.name = name,
		this.last_name = last_name
	}
}

class UI { /*2) crud en la clase user interface */
	
	addProduct(product){ // 8) viene el producto con los parametros de una nueva clase creada
		const productList = document.querySelector("#productList"); // se coge elemento de todos 
		// los productos id productList
		
		const element = document.createElement('div'); // se crea un nuevo div vacío por cada producto
		element.innerHTML = `			
			<div class="card text-center mb-4">
				<div class="card-body">
					<strong>Product</strong>: ${product.name}
					<strong>Product</strong>: ${product.last_name}
					<a href="#" class="btn btn-danger" name="delete">delete<a> 
				</div>
			</div>
								<!-- 11) se crea un boton y se le da un name=delete -->
		` // como el nuevo producto viene compuesto por dos valores se asignan en la vista 

		// 9)
		productList.appendChild(element); // le decimos que vaya agregando despues de 
		// cada elemento el siguiente producto

	 			//	this.resetForm(); // this. para que llame de esta misma clase su metodo resetForm
	}

	// 10) resetear los campos del formulario con un metodo 
	resetForm(){
		document.querySelector("#productForm").reset();// este metodo resetea el formulario
		// siempre y cuando se llame ...
	}

	
	deleteProduct(element){ // .. 12) recibimos un elemento de html que sería el boton name=delete
		// para comprobar si queremos eliminar algo
		if(element.name === 'delete'){
			// este enlace <a> tiene un padre que sería una card
			//desde el element se sube niveles hasta llegar al principal
				// console.log(element.parentElement.parentElement.parentElement); // se suben 3 niveles del 
				// boton seleccionado, para poder eliminar solo el elemento de la lista
			element.parentElement.parentElement.parentElement.remove(); 
			// con el metodo remove() eliminamos contenido de html	
		}
	}
	
	showMessage(){

	}
}


//3) Dom events

	document.querySelector("#productForm").addEventListener("submit", ejecutar);

// 4)
function ejecutar(e){ // (evento) se captura el evento
	// alert('enviando...')
	e.preventDefault(); // dentro de la función se ejecuta y 
	// se detiene el navegador con preventDefault
		// console.log('Enviado...');

	// despues se capturan los valores del input
	// y se muestran por consola
		// console.log(document.querySelector("#name").value);
		// console.log(document.querySelector("#last_name").value);

	//5) se guarda el ultimo registro en el localStorage
		 localStorage.setItem('name',document.querySelector("#name").value);
		 localStorage.setItem('last_name',document.querySelector("#last_name").value);

	//6) asignando valores a variables de instancia
	const name = document.querySelector("#name").value;
	const last_name = document.querySelector("#last_name").value;

		// console.log(name);
		// console.log(last_name);

	// 7) crear un nuevo objeto de la clase Product	
	// valores de instancia asignados a una nueva clase
	// console.log(new Product)
	const product = new Product(name,last_name)	// producto compuesto por dos propiedades del formulario
	// este producto se asigna a un metodo de addProduct de la clase UI  que es la vista
	// console.log(product)
	const ui = new UI(); // obtiene los metodos de addProduct
	ui.addProduct(product); // asigno el producto en los parametros de la vista que los maneja UI

	// esto es parte del 10, donde llama el metodo para resetear formulario
	ui.resetForm();

}


// 11) se crea un evento para capturar el boton de eliminar de la lista 
document.querySelector("#productList").addEventListener("click", deleteButton);

function deleteButton(evento){ // en el click va a recibir el objeto del evento
		// console.log(evento.target); // sabemos que parte dentro de productList 
		// estamos presionando

	//12) se crea una nueva instancia de la interfaz
	const ui = new UI();
	ui.deleteProduct(evento.target); // asignamos el e.target que es un elemento en html
}
