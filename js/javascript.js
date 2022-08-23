//Funções após a leitura do documento
$(document).ready(function() {
    //Select para mostrar e esconder divs
    $('#atividades').on('change',function(){
        var SelectValue='.'+$(this).val();
        $('.maps div').hide();
        $(SelectValue).toggle();

        //Mostrar Mesmo com o hide() nas divs
        $('#btn-maps-inscricao').toggle();
    });
});

function btnEmail() {
	alert("E-mail cadastrado com sucesso!");
}

function btnCadastro() {
	alert("Cadastro realizado com sucesso!");
}

function btnContato() {
	alert("Obrigado por entrar em contato!");
}
