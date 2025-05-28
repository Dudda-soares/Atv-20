document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');


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
})

function ocultarBotao(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('arcos__tabs__button--is--active')
    }
}

function ocultarPagina(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('arcos__list--is--active')
    }
}