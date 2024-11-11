document.addEventListener('DOMContentLoaded', function() {
    const click = document.getElementById('click');
    const nav = document.querySelector('nav');
    const mainIcon = document.querySelector('.mainicon');
  
    
    click.addEventListener('change', function() {
      if (click.checked) {
        nav.style.left = '0'; 
      } else {
        nav.style.left = '-100%'; 
      }
    });
  
    
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        click.checked = false;
        nav.style.left = '-100%'; 
      });
    });
  });