const abrir_o_hinario = document.getElementById('abrir-o-hinario')
let div_abrir_hinario = document.getElementById('opcao1')

abrir_o_hinario.addEventListener('focus', function() {
    window.location.href = 'hinarioweb.html';
    div_abrir_hinario.style.backgroundColor = "white"
});

const procurar = document.getElementById('procurar');
const inserir_numero = document.getElementById('inserir-numero');

procurar.addEventListener('click', function() {
    const numero_hino = inserir_numero.value;

    if (numero_hino >= 1 && numero_hino <= 57) {
        window.location.href = `hinarioweb.html#hino-${numero_hino}`;
    } else {
        alert(`Digite um número válido entre 1 e 57.`);
    }
});

window.addEventListener("pageshow", function(event) {
    if (event.persisted) {
      window.location.reload();
    }
  })
  