$(document).ready(function () {
    // Seletores dos artigos, controles e fotos
    let article1 = $('.text-container-one');
    let controlphoto1 = $('.foto1');
    let foto1 = $('.expFoto1');

    let article2 = $('.text-container-two');
    let controlphoto2 = $('.foto2');
    let foto2 = $('.expFoto2');

    let article3 = $('.text-container-tree');
    let controlphoto3 = $('.foto3');
    let foto3 = $('.expFoto3');

    let article4 = $('.text-container-four');
    let controlphoto4 = $('.foto4');
    let foto4 = $('.expFoto4');

    // Arrays para facilitar o controle
    const artigos = [article1, article2, article3, article4];
    const controlfotos = [controlphoto1, controlphoto2, controlphoto3, controlphoto4];
    const fotos = [foto1, foto2, foto3, foto4];

    let index = 0; 
    let intervalo; 

    // Função para atualizar a exibição
    function mostrarInfo() {
        controlfotos.forEach((controle, i) => {
            controle.removeClass('controlSelecionado'); // Remove destaque do controle
            fotos[i].addClass('desativado'); // Esconde as fotos
            fotos[i].removeClass('ativado'); // Esconde as fotos
            artigos[i].addClass('desativado'); // Esconde os artigos
        });

        // Exibe o artigo, a foto e o controle selecionados
        artigos[index].removeClass('desativado');
        fotos[index].removeClass('desativado').addClass('ativado');
        controlfotos[index].addClass('controlSelecionado');
    }
    // Função para iniciar o autoslide
    function startAutoSlide() {
        intervalo = setInterval(() => {
            index = (index + 1) % artigos.length; // Alterna o índice
            mostrarInfo();
        }, 5000); // Intervalo de 5 segundos
    }

    // Função para reiniciar o temporizador após interação manual
    function resetAutoSlide() {
        clearInterval(intervalo);
        startAutoSlide();
    }
    // Clique nos controles
    controlfotos.forEach((control, i) => {
        control.click(function () {
            index = i; // Atualiza o índice com base no controle clicado
            mostrarInfo(); // Mostra o slide correspondente
           
        });
    });

    // Inicia com o primeiro slide visível
    mostrarInfo();
    startAutoSlide();
});
