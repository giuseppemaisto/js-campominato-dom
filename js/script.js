//definisco funzione per la griglia
//function generateGameGrid (){

//document.querySelector('.grid').innerHTML = '';

//for(let i = 0; i < 100; i++){
 //   const cell = document.createElement('div');
 //   cell.classList.add('square');
 //   cell.innerText = i + 1;
 //   cell.addEventListener('click', function(){
 //       this.classList.toggle('clicked');
  //      console.log(this.innerText);
 //   })
  //  document.querySelector('.grid').appendChild(cell);
//}

//}

//document.getElementById('genera').addEventListener('click', function(){
   // generateGameGrid();
//})

//bonus

function CreateNewGame(){
   let difficulty = parseInt(document.getElementById('level').value);
  
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

   generateGameGrid(cellsNumber, cellsPerRow);

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

function generateGameGrid (cellsNumber, cellsPerRow)
{

    document.querySelector('.container').innerHTML = '';
    

    const grid = document.createElement('div')
    grid.classList.add('grid');

    for(let i = 1; i<=cellsNumber; i++){
        const cell = CreateSingleCell(i, cellsPerRow);
        cell.addEventListener('click', function(){
            this.classList.toggle('clicked');
        })

        grid.appendChild(cell);
    }

    document.querySelector('.container').appendChild(grid)
  
    
    }
    
    document.getElementById('genera').addEventListener('click', function(){
        //generateGameGrid();
        CreateNewGame();
    })