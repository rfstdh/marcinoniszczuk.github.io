var currentSymbol = "X"
var markedFields = [0,0,0,0,0,0,0,0,0];
var finished = false;

const markField = (fieldId) => {
    if(markedFields[fieldId[fieldId.length-1]-1] == 0 && finished==false)
    {
        document.getElementById(fieldId).innerHTML = currentSymbol;
        if(currentSymbol == "X")
        {
            currentSymbol = "O";
            markedFields[fieldId[fieldId.length-1]-1] = "X";         
        }
        else 
        {
            currentSymbol = "X";
            markedFields[fieldId[fieldId.length-1]-1] = "O";
        }

        document.getElementById("gameStatus").innerHTML = "Ruch gracza " + currentSymbol;
        winResult = winCheck()
        if(winResult!=0){
            document.getElementById("gameStatus").innerHTML = winResult + " wygrał grę! Kliknij mnie, aby rozpocząć nową grę";
            finished = true;
        }
        else{
            tieResult = tieCheck();
            if(tieResult == true){
                document.getElementById("gameStatus").innerHTML = "Gra zakończona remisem! Kliknij mnie, aby rozpocząć nową grę";
                finished = true;
            }
        }
    }
}

const winCheck = () => {
    
    //column check
    for(let i=0; i<3; i++)
    {
        if(markedFields[i]==markedFields[i+3] && markedFields[i]==markedFields[i+6] && markedFields[i]!=0)
        {
            return markedFields[i];        
        }
    }
    
    //row check
    for(let i=0; i<8; i+=3)
    {
        if(markedFields[i]==markedFields[i+1] && markedFields[i]==markedFields[i+2] && markedFields[i]!=0)
        {
            return markedFields[i];  
        }
    }

    //diagonal check
    if(((markedFields[0]==markedFields[4] && markedFields[0]==markedFields[8]) || (markedFields[2]==markedFields[4] && markedFields[2]==markedFields[6]))  && markedFields[4]!=0)
    {
        return markedFields[4];  
    }
    else{
        return 0;
    }
    
}

const tieCheck = () => {
    let marked = 0;
    for(let i=0; i<9; i++)
    {
        if(markedFields[i] !=0){
            marked+=1
        }
    }

    return marked == 9
}

const newGame = () => {
    if(finished)
    {
        markedFields = [0,0,0,0,0,0,0,0,0];
        currentSymbol = "X";
        finished = false;
        for(let i=1; i<10; i++)
        {
            let name = "field" + i;
            document.getElementById(name).innerHTML = "";
        }
        document.getElementById("gameStatus").innerHTML = "Kliknij dowolne pole, aby rozpocząć";
    }
}