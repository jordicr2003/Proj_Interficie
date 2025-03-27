
document.addEventListener("DOMContentLoaded", function() {
    //variables necessaries pel modal
    let modal =  document.getElementById("Modal");
    let btn = document.getElementById("But");
    let span = document.getElementById("close");
    let Registered = document.getElementById("Registered");
    //després de clicar el botó mostra el modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    //després de clicar la creueta elimina el modal
    span.onclick = function() {
        modal.style.display='none';
    }
    Registered.onclick = function() {
        modal.style.display='none';
    }
    
    
    //Quan es clica algún lloc fora del modal desapareix el modal
    window.onclick = function(event) {
        if (event.target == modal) {
        mo
        dal.style.display = "none";
        }
        tippy('#Add-user', {
            content: 'Afegeix Pacients'
        });
    }
});