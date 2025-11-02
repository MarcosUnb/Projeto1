
// Script simples para interação de UI
document.addEventListener('DOMContentLoaded', function(){
  // Atualiza anos no rodapé
  const y = new Date().getFullYear();
  const y1 = document.getElementById('year');
  const y2 = document.getElementById('year2');
  const y3 = document.getElementById('year3');
  if(y1) y1.textContent = y;
  if(y2) y2.textContent = y;
  if(y3) y3.textContent = y;

  // Toggle nav para telas pequenas
  document.querySelectorAll('.nav-toggle').forEach(btn=>{
    btn.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      const menu = document.getElementById('primary-menu');
      if(menu){
        if(menu.style.display === 'block'){
          menu.style.display = '';
        } else {
          menu.style.display = 'block';
        }
      }
    });
  });
});
