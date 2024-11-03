
    function typeEffect(element, text, delay) {
        let index = 0;

        function type() {
            if (index < text.length) {
                if (text.charAt(index) === '<') {
                    while (text.charAt(index) !== '>' && index < text.length) {
                        index++;
                    }
                } else {
                    element.innerHTML += text.charAt(index);
                }
                index++;
                setTimeout(type, delay);
            }
        }

        type();
    }

    document.addEventListener("DOMContentLoaded", () => {
        const titulos = document.querySelectorAll('.titulos');

        titulos.forEach(titulo => {
            const text = titulo.innerHTML; // Usa innerHTML para permitir <br>
            titulo.innerHTML = ''; // Limpa o conteúdo inicial
            typeEffect(titulo, text, 100);
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

