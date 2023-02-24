function validaForm () {
	let cod_filme = document.forms["form_cadastro"]["cod_filme"].value;
	//let cod_filme = document.form_cadastro.cod_filme.value; também é possivel e mais facil 
	let ano_filme = document.forms["form_cadastro"]["ano_filme"].value;
	let titulo = document.forms["form_cadastro"]["titulo"].value;
	let diretor = document.forms["form_cadastro"]["diretor"].value;
	let ator = document.forms["form_cadastro"]["ator"].value;
	let nota = document.forms["form_cadastro"]["nota"].value;
	let radio = document.forms["form_cadastro"]["radio"].value;
	


	if (cod_filme == "") {
		alert("Código deve ser preenchido!");
		return false;
	}

	if (ano_filme == "") {
		alert("Data deve ser preenchido!");
		return false;
	}

	if (titulo == "") {
		alert("Título deve ser preenchido!");
		return false;
	}

	if (diretor == "") {
		alert("Diretor(a) deve ser preenchido!");
		return false;
	}

	if (ator == "") {
		alert("Ator(a) deve ser preenchido!");
		return false;
	}

	if (nota == "") {
		alert("Nota deve ser preenchido!");
		return false;
	}

	if (radio == "") {
		alert("Genêro deve ser marcado!");
		return false;
	}
	
}

function insere_cadastro() {
	let cod_filme = document.forms["form_cadastro"]["cod_filme"].value;
	let ano_filme = document.forms["form_cadastro"]["ano_filme"].value;
	let titulo = document.forms["form_cadastro"]["titulo"].value;
	let diretor = document.forms["form_cadastro"]["diretor"].value;
	let ator = document.forms["form_cadastro"]["ator"].value;
	let nota = document.forms["form_cadastro"]["nota"].value;
	let radio = document.forms["form_cadastro"]["radio"].value;

	let inserir = document.getElementById("inserir");
	inserir.innerHTML = "<th scope='row'>" + cod_filme + "</th>";
	inserir.innerHTML += "<td>" + titulo + "</td>";
	inserir.innerHTML += "<td>" + diretor + "</td>";
	inserir.innerHTML += "<td>" + ano_filme + "</td>";
	inserir.innerHTML += "<td>" + radio + "</td>";
	inserir.innerHTML += "<td>" + ator + "</td>";
	inserir.innerHTML += "<td>" + nota + "/10</td>";
					
}