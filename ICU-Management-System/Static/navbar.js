let menuicon=document.querySelector('#menuicon');
let navbar=document.querySelector('#navbardiv');
let content=document.querySelector('.navbarcontent');
let close=document.querySelector('#xicon');
function closemenu(){
    navbar.style.width='0px';
    navbar.style.display='none';
    content.style.marginLeft='0px';
    menuicon.style.display='inline';
    content.style.display='block';
}
function openmenu(){
    navbar.style.display = "block";
    if(screen.width>=600){
    navbar.style.width='200px';
    content.style.marginLeft = "200px";
    menuicon.style.display = "none";
    }
    else{
        navbar.style.width = "100%";
        content.style.display='none';
    }
}
/*function togglenavbar(){
        if(navbar.style.width=='200px'){
            navbar.style.width='0px';
            content.style.marginLeft='0px';
            menuicon.style.display='inline';
            close.style.display='none';
            }
        else{
        navbar.style.width='200px';
        content.style.marginLeft='200px';
        menuicon.style.display='none';
        close.style.display='inline';
        }
    }*/