$(document).ready(function(){
    
    $('#menu-icon').click(function (e) {
        e.preventDefault();
        $('.overlay').fadeIn(350);
     });
     // Impede que o clique dentro do menu feche o overlay
     $('.menu-sidebar').click(function (e) {
        e.stopPropagation();
     });
     // Função para fechar o overlay ao clicar fora do menu
     $('.overlay').click(function () {
        $(this).fadeOut(350);
     });

     $('.btn-sidebar').click(function(e){
        $('.overlay').fadeOut()
     })
})