function createreload(){

    var reloadbutton = document.createElement( "BUTTON" );
    reloadbutton.textContent = "リセット"
    document.getElementById( "reload" ).appendChild( reloadbutton ).addEventListener("click",addevent,false)

}

function addevent(){

    window.location.reload()

}