minInput=document.getElementById("minInput");
secInput=document.getElementById("secInput");
inputArea=document.getElementById("inputArea");
outputArea=document.getElementById("outputArea");

function timeButton(){
    if (minInput.value && secInput.value){
        window.alert(minInput.value+"分"+secInput.value+"秒です");
        outputArea.innerHTML='<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/632LyhbfQA5t7p7SHAjeJT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
}
