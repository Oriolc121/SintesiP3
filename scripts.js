// Desplaçament suau
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Validació del formulari
  document.getElementById('formulari-contacte').addEventListener('submit', function(event) {
    event.preventDefault();
    var nom = document.getElementById('nom').value;
    var correu = document.getElementById('correu').value;
    var missatge = document.getElementById('missatge').value;
    var errors = [];
  
    if (!nom) {
      errors.push('El camp de nom és obligatori.');
    }
    if (!correu) {
      errors.push('El camp de correu electrònic és obligatori.');
    } else if (!/\S+@\S+\.\S+/.test(correu)) {
      errors.push('El correu electrònic no és vàlid.');
    }
    if (!missatge) {
      errors.push('El camp de missatge és obligatori.');
    }
  
    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      alert('Formulari enviat correctament!');
    }
  });
  
  // Carrusel automàtic
  document.addEventListener('DOMContentLoaded', function() {
    var carruselItems = document.querySelectorAll('.carousel-item');
    var currentIndex = 0;
  
    function showNextImage() {
      var nextIndex = (currentIndex + 1) % carruselItems.length;
  
      carruselItems[currentIndex].classList.remove('is-active');
      carruselItems[currentIndex].classList.add('prev');
      carruselItems[nextIndex].classList.add('is-active');
      carruselItems[nextIndex].classList.remove('next');
  
      setTimeout(function() {
        carruselItems[currentIndex].classList.remove('prev');
        carruselItems[nextIndex].classList.remove('is-active');
        carruselItems[nextIndex].classList.remove('next');
        carruselItems[nextIndex].classList.add('is-active');
        currentIndex = nextIndex;
      }, 1000); 
  
      var nextNextIndex = (nextIndex + 1) % carruselItems.length;
      carruselItems[nextNextIndex].classList.add('next');
    }
  
    setInterval(showNextImage, 3000); // Canvia d'imatge cada 3 segons
  });
  