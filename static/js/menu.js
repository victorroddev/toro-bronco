addEventListener('DOMContentLoaded',  function(){
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const menu = document.getElementById('menu-modal');
    const menuIcon = this.document.getElementById('menu');
    const firstLine = document.getElementById('first-line');
    const secondLine = document.getElementById('second-line');
    const thirdLine = document.getElementById('third-line')


    menuIcon.addEventListener('click', function(){
        menu.classList.toggle('hidden');
        firstLine.classList.toggle('absolute');
        firstLine.classList.toggle('rotate-45');
        firstLine.classList.toggle('top-1-2');
        firstLine.classList.toggle('rotate-left-0');
        firstLine.classList.toggle('-translate-y-1/2');
        thirdLine.classList.toggle('opacity-0');
        secondLine.classList.toggle('absolute');
        secondLine.classList.toggle('-rotate-45');
        secondLine.classList.toggle('top-1-2');
        secondLine.classList.toggle('rotate-left-0');
        secondLine.classList.toggle('-translate-y-1/2');


        setTimeout(() => {
            menu.classList.toggle('opacity-0');
            menu.classList.toggle('opacity-100')
        }, 200);
    })

    // menuOpen.addEventListener('click', function(){
    //     menu.classList.remove('hidden');
    //     menuOpen.classList.add('hidden');
    //     menuClose.classList.remove('hidden')
        
    //     setTimeout(() => {
    //         menu.classList.remove('opacity-0');
    //         menu.classList.add('opacity-100')
    //     }, 100);
    
    // })

    // menuClose.addEventListener('click', function() {

    //     menu.classList.remove('max-h-[900px]', 'opacity-100');
    //     menu.classList.add('opacity-0');  

    //     setTimeout(() => {
    //         menu.classList.remove('hidden');
    //         menuClose.classList.add('hidden');
    //         menuOpen.classList.remove('hidden');
    //     }, 100);
    // })
})