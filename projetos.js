const elements = ['#elit', '#ogani', '#piece'];

    elements.forEach(id => {
        const element = document.querySelector(id);
        
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.1)';
            element.style.zIndex = '1'; 
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)'; 
            element.style.zIndex = '0'; 
        });
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