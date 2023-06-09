$(document).ready(function () {

    $('input#telefone').mask('(00) 0 0000-0000');
    $('input#cpf').mask('000.000.000-00', {reverse: true});

    $('.linkMenu').click(function (pagelink) {
        pagelink.preventDefault();

        var menuClicado = $(this).attr('data-menu');

        console.log(menuClicado);
        
        var dados = {
            acao: menuClicado,
        };

        $.ajax({
            type: "POST",
            dataType: 'html',
            url: 'controle.php',
            data: dados,
            beforeSend: function () {
                loading();
            }, success : function (retorno) {
                $('div#conteudo').html(retorno);
                loadingend();
            }
        });

    });

    $("button#btnTeste").click(function() {
        alert('Teste');
        $("input#inputTeste").toggle().animate();
        $("input#inputTeste").toggleClass('d-none d-block');
    });

});

function loading() {
    $('div#loading').html("<div class='spinner-border text-danger' role='status'></div>");
}

function loadingend() {
    $('div#loading').html("");

}

function cadCard() {

    $('#formCadCard').submit(function (cad) {
        cad.preventDefault();

        alert('CLICOU');

        var dadosForm = $(this).serializeArray();

        dadosForm.push (
            {name: 'acao', value: 'addCard'},
        );

        $.ajax({
            type: "POST",
            dataType: 'html',
            url: 'controle.php',
            data: dadosForm,
            beforeSend: function () {
                loading();
            }, success : function (retorno) {
                $('div#conteudo').html(retorno);
                loadingend();
            }
        });

    });
};

function cadPessoa() {

    $('#formCadPessoa').submit(function (cad) {
        cad.preventDefault();

        // alert('CLICOU');

        var dadosForm = $(this).serializeArray();

        dadosForm.push (
            {name: 'acao', value: 'addPessoa'},
        );

        $.ajax({
            type: "POST",
            dataType: 'html',
            url: 'controle.php',
            data: dadosForm,
            beforeSend: function () {
                loading();
            }, success : function (retorno) {
                alert(retorno);
                loadingend();
                if (retorno == 'OK') {
                    $("div.resultSuccess").toggle().animate();
                    $("div.resultSuccess").toggleClass('d-none d-block');
                } else {
                    $("div.resultError").toggle().animate();
                    $("div.resultError").toggleClass('d-none d-block');
                    $("div.resultError").html('Erro: ' + retorno);
                }
            }
        });

    });

};

function cadFunci() {

    $('#formCadPessoa').submit(function (cad) {
        cad.preventDefault();

        // alert('CLICOU');

        var dadosForm = $(this).serializeArray();

        dadosForm.push (
            {name: 'acao', value: 'addPessoa'},
        );

        $.ajax({
            type: "POST",
            dataType: 'html',
            url: 'controle.php',
            data: dadosForm,
            beforeSend: function () {
                loading();
            }, success : function (retorno) {
                alert(retorno);
                loadingend();
                if (retorno == 'OK') {
                    $("div.resultSuccess").toggle().animate();
                    $("div.resultSuccess").toggleClass('d-none d-block');
                } else {
                    $("div.resultError").toggle().animate();
                    $("div.resultError").toggleClass('d-none d-block');
                    $("div.resultError").html('Erro: ' + retorno);
                }
            }
        });

    });

};

// setTimeout(function () {
//     $('div#loading').html("");
// }, 6000);

// MODELO POST AJAX JQUERY
// $.ajax({
//     type: "POST",
//     dataType: 'html',
//     url: 'teste.php',
//     data: data,
//     success: success
// });