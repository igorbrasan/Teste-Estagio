
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


$(document).ready(function() {
  $("#finalizar").click(function() {
    var formData = {};
    var formSelector = "#meuFormulario";
    $(formSelector).find("input, select, textarea").each(function() {
      var campo = $(this);
      var nomeCampo = campo.attr("name");
      var valorCampo = campo.val();
      formData[nomeCampo] = valorCampo;
    });
    var jsonString = JSON.stringify(formData);
    console.log(jsonString);
  });
});

