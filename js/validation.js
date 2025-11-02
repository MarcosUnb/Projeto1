
// Validação simples que complementa validação nativa
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('cadastroForm');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    // Aqui você pode enviar por fetch para uma API ou apenas simular sucesso
    const msg = document.getElementById('formMessage');
    msg.textContent = 'Cadastro enviado com sucesso! Obrigado por se inscrever.';
    msg.style.color = 'green';
    form.reset();
  });
});
