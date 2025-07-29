addEventListener('DOMContentLoaded',  function(){
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const menu = document.getElementById('menu');

    menuOpen.addEventListener('click', function(){
        menu.classList.remove('hidden');
        menuOpen.classList.add('hidden');
        menuClose.classList.remove('hidden')
        
        setTimeout(() => {
            menu.classList.remove('opacity-0');
            menu.classList.add('opacity-100')
        }, 100);
    
    })

    menuClose.addEventListener('click', function() {

        menu.classList.remove('max-h-[900px]', 'opacity-100');
        menu.classList.add('opacity-0');  

        setTimeout(() => {
            menu.classList.remove('hidden');
            menuClose.classList.add('hidden');
            menuOpen.classList.remove('hidden');
        }, 100);
    })
})