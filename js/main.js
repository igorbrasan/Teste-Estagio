
$(document).ready(function () {
    let produto = 0;
    $("#adicionar-produto").click(function () {
        var fileToLoad = $(this).data('load-file');
        produto = produto + 1;
        $("#produto").load(fileToLoad, function () {
            var novaSecaoProduto = $("#produto").clone();

            novaSecaoProduto.find('input[type="text"]').val('');
            novaSecaoProduto.find('select').val('');
            novaSecaoProduto.find('input[type="number"]').val('');
            novaSecaoProduto.find('Produto 1').val('Produto ' + produto);
            novaSecaoProduto.find('id="produto"').val('id=produto' + produto);

            $("#produtos").append(novaSecaoProduto);
        });
    });
});

$(document).ready(function () {
    $("#buscaCEP").click(function () {
        var cep = $(this).val();

        cep = cep.replace(/\D/g, '');

        if (cep.length === 8) { 
            var url = `https://viacep.com.br/ws/${cep}/json/`;

            $.ajax({
                url: url,
                dataType: 'json',
                success: function (data) {
                    if (!data.erro) {
                        $("#inputEndereco").val(data.logradouro);
                        $("#inputBairro").val(data.bairro);
                        $("#inputMunicipio").val(data.localidade);
                        $("#inputEstado").val(data.uf);
                    } else {
                        alert('CEP não encontrado');
                    }
                },
                error: function () {
                    alert('Ocorreu um erro ao consultar o CEP');
                }
            });
        }
    });
});
