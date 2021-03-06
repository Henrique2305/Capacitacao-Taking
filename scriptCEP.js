const $campoCep = document.querySelector('[name="cep"]');
const $campoUf = document.querySelector('[name="uf"]');
const $campoDdd = document.querySelector('[name="ddd"]');
const $campoCidade = document.querySelector('[name="cidade"]');
const $campoBairro = document.querySelector('[name="bairro"]');
const $campoRua = document.querySelector('[name="rua"]');

$campoCep.addEventListener("blur", infosDoEvento => {
    const cep = infosDoEvento.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(respostaDoServer => {
            return respostaDoServer.json();
        })
        .then(dadosDoCep => {
            console.log(dadosDoCep);
            $campoUf.value = dadosDoCep.uf;
            $campoDdd.value = dadosDoCep.ddd;
            $campoCidade.value = dadosDoCep.localidade;
            $campoBairro.value = dadosDoCep.bairro;
            $campoRua.value = dadosDoCep.logradouro;
        })
});