const itemsPerPage = 28;
let currentPage = 1;

function showPage(page) {
    const buttons = document.querySelectorAll('.botaoDeProduto');
    const totalPages = Math.ceil(buttons.length / itemsPerPage);

    // Validar limites de página
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    // Atualizar a página atual
    currentPage = page;

    // Ocultar todos os botões
    buttons.forEach(button => button.style.display = 'none');

    // Exibir apenas os botões da página atual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < buttons.length; i++) {
        buttons[i].style.display = '';
    }

    // Atualizar a informação de página
    document.getElementById('pageInfo').textContent = `Página ${currentPage} de ${totalPages}`;
}

// Função para mudar a página
function changePage(direction) {
    showPage(currentPage + direction);
}

// Inicializar
changePage(-1);
// renderProdutos();
showPage(1);