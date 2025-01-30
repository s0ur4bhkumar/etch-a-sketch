const container = document.querySelector('.container');

const row = document.createElement('div');
row.classList.add('rows');

const square = document.createElement('div');
square.classList.add('square');

function rows(){

    container.append(row.cloneNode());
    // row.id = 1

}

function add_rows(){

    for (let j = 1; j <= 16; j++){

        for ( let i = 1; i <= 16; i++ ){
            row.id = i;
            rows();
            document.getElementById(row.id).append(square.cloneNode())
        }
        
    }


}

// function add_squares(x){

//     for(let i = 1; i<= x*x; i++){

//         container.append(square.cloneNode());

//     }

// }


