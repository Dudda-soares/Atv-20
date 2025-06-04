document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const perguntas =document.querySelectorAll('[data-faq-question]');



    //Header
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){

        const posicao = window.scrollY;

        if(posicao < alturaHero){
            ocultarHeader();
        }else{
            exibirHeader();
        }

    })



    //Curiosidades
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(buttao){
            const abaAlvo = buttao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            ocultarPagina();
            aba.classList.add('arcos__list--is--active')
            ocultarBotao();
            buttao.target.classList.add('arcos__tabs__button--is--active')
        })

        
        
    }

    //Faq
    for(let i = 0 ; i < perguntas.length; i++ ){
        perguntas[i].addEventListener('click', abreOuFechaResposta )
    }
})

//*faq
function abreOuFechaResposta(elemento){
    const classe = 'faq__pergunta__item--is--open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}



//*header
function exibirHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');

}
//*header
function ocultarHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}





//*Curiosidades
function ocultarBotao(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('arcos__tabs__button--is--active')
    }
}
//*Cursiosidades
function ocultarPagina(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('arcos__list--is--active')
    }
}