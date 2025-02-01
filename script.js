let container = document.querySelector('.container');
let containerHeight = container.offsetHeight;

let row = document.createElement('div');
row.classList.add('row');
let square = document.createElement('div');
square.classList.add('square')


function fillContainer(x){

    
    for (let i = 1; i <= x; i++){
        
        row.id = i;
        container.append(row.cloneNode());

        for (let j = 1; j <= x; j++){
            
            document.getElementById(row.id).append(square.cloneNode());

        }

    }
    
}

