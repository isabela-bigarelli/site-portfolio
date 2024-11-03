document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById('titulo');
    const paginas = document.getElementById('paginas');

    titulo.classList.add('animate');
    paginas.classList.add('animate');
});

const themeToggleButton = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Verifica se o tema escuro está armazenado no localStorage
if (localStorage.getItem('dark-theme') === 'true') {
    body.classList.add('dark');
    themeIcon.src = themeToggleButton.getAttribute('data-dark'); // Define a imagem do tema escuro
}

// Atualiza o tema ao clicar no botão
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        localStorage.setItem('dark-theme', 'true');
        themeIcon.src = themeToggleButton.getAttribute('data-dark'); // Atualiza a imagem para o tema escuro
    } else {
        localStorage.setItem('dark-theme', 'false');
        themeIcon.src = themeToggleButton.getAttribute('data-light'); // Atualiza a imagem para o tema claro
    }
});

document.querySelector('svg').addEventListener('click', function() {
    const paginas = document.getElementById('paginas');
    paginas.classList.toggle('show');
});



