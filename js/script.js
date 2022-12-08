//FUNZIONE CHE GENRA NUMERI CASUALI 
function createBombArray(min, max)
{
    let bombs = [];
    let i = 0;
    
    while(i < 16){
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!bombs.includes(number)){
            bombs.push(number);
            i++;
        }

    }


    return bombs;
}

//bonus

function CreateNewGame(){
   let difficulty = parseInt(document.getElementById('level').value);
  
   let arrayBombs = [];

   let cellsNumber;
   let cellsPerRow;

   switch(difficulty){
    case 1:
        cellsNumber = 100;
        cellsPerRow = 10;
        break;
    case 2:
        cellsNumber = 81;
        cellsPerRow = 9;
        break;
    case 3:
        cellsNumber = 49;
        cellsPerRow = 7;
        break;

    default:
        cellsNumber = 100;
        cellsPerRow = 10;
        break;

   }

   arrayBombs = createBombArray(1, cellsNumber)
   generateGameGrid(arrayBombs,cellsNumber, cellsPerRow);

}
function CreateSingleCell(num, cells_per_row)
{
    const cell = document.createElement('div');
    cell.classList.add('square');

    let sidelength = `calc(100% / ${cells_per_row})`;


    cell.style.width = sidelength;
    cell.style.height = sidelength;

    cell.innerHTML = num;
    return cell;
}

function generateGameGrid (bombs, cellsNumber, cellsPerRow)
{

    document.querySelector('.container').innerHTML = '';
    

    const grid = document.createElement('div')
    grid.classList.add('grid');

    for(let i = 1; i<=cellsNumber; i++){
        const cell = CreateSingleCell(i, cellsPerRow);
        cell.addEventListener('click', function(){
            this.classList.toggle('clicked');

            if(bombs.includes(parseInt(this.innerText))){
                this.classList.add('red');
                grid.classList.add('events-none')
            }
        })


        grid.appendChild(cell);
    }

    document.querySelector('.container').appendChild(grid)
  
    
    }
    
    document.getElementById('genera').addEventListener('click', function(){
        
        CreateNewGame();
    })