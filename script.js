let container = document.querySelector('.container');
let containerHeight = container.offsetHeight;

let row = document.createElement('div');
row.classList.add('row');
let square = document.createElement('div');
square.classList.add('square')


function fillContainer(x = 16){

    
    for (let i = 1; i <= x; i++){
        
        row.id = i;
        container.append(row.cloneNode());

        for (let j = 1; j <= x; j++){
            let newSquare = square.cloneNode()
            document.getElementById(row.id).append(newSquare);
            newSquare.addEventListener('mouseenter', () => {

                newSquare.style.backgroundColor = 'red';

            });

        }

    }
    return;
}

function resize(){


    let parameters = parseInt(prompt('enter the number of squares (<=100), the default is 16: '));

    if (isNaN(parameters) || parameters > 100){
        alert('please enter valid parameter');
        document.querySelector('.container').innerHTML = '';
        fillContainer(16);
        // return parameters;

    }
    else{

        document.querySelector('.container').innerHTML = '';
        fillContainer(0);
        fillContainer(parameters);

    }

}

fillContainer();
