
// Máscaras simples para CPF, telefone e CEP (compatível com input maxlength)
function setInputFilter() {
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  if(cpf){
    cpf.addEventListener('input', function(e){
      let v = e.target.value.replace(/\D/g,'');
      v = v.replace(/(\d{3})(\d)/,'$1.$2');
      v = v.replace(/(\d{3})(\d)/,'$1.$2');
      v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
      e.target.value = v.slice(0,14);
    });
  }

  if(tel){
    tel.addEventListener('input', function(e){
      let v = e.target.value.replace(/\D/g,'');
      if(v.length <= 10){
        v = v.replace(/(\d{2})(\d)/,'($1) $2');
        v = v.replace(/(\d{4})(\d)/,'$1-$2');
      } else {
        v = v.replace(/(\d{2})(\d)/,'($1) $2');
        v = v.replace(/(\d{5})(\d)/,'$1-$2');
      }
      e.target.value = v.slice(0,15);
    });
  }

  if(cep){
    cep.addEventListener('input', function(e){
      let v = e.target.value.replace(/\D/g,'');
      v = v.replace(/(\d{5})(\d)/,'$1-$2');
      e.target.value = v.slice(0,9);
    });
  }
}

document.addEventListener('DOMContentLoaded', setInputFilter);
