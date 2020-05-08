var availableContent = ["content","gamecontent","aboutcontent","profilecontent","contactcontent","authorcontent"];


function switchContent(tabIndex) {
    document.getElementsByClassName(availableContent[tabIndex])[0].className = availableContent[tabIndex] + " active";
    for(let i=0; i<availableContent.length; i++){
        if(i==tabIndex)continue;
        else{
            document.getElementsByClassName(availableContent[i])[0].className = availableContent[i];
        }
    }
}