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

document.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('header svg');
    const ul = document.querySelector('header ul');

    svg.addEventListener('click', () => {
        ul.classList.toggle('active');
    });
});