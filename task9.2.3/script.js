/*
 * Find 7 errors in the function: 
    function ToDo(atr);{
        var any = 'value';

        if (any || number > 1 ){
            number =  -1;
        }
    
        return
        atr;
    }
    
    document.write(toDo(alr));
*/

function toDo(atr) {

    let number = 2;

    if (number > 1 ) {
        return number = -1;
    }

    return atr;
}

document.write(toDo('alr'));