document.addEventListener('contextmenu', event => event.preventDefault());
        
        function openCell(row, cell, checkEmpty = false) {

            let currentCell = document.getElementById(row+'_'+cell);

            if(currentCell === null || currentCell.classList.contains("check")){
                return;
            }

            let span = document.createElement("span");
            span.className = 'cell-' + field[row][cell];
            
            if(field[row][cell] !== 'B' && field[row][cell] !== 0){
                span.innerHTML = field[row][cell];
            }
            
            if (!currentCell.classList.contains("open")) {
                currentCell.className += " open";
                
                if(checkEmpty){ 
                    currentCell.className += " check";
                }

                if (currentCell.classList.contains("flag")) {
                    currentCell.classList.remove("flag");
                    currentCell.innerHTML = '';
                }

                if(field[row][cell] === 'B' && !checkEmpty){
                    span.className += " explosion check";
                    currentCell.append(span);
                    var title = document.getElementById('title');
                    title.innerHTML = 'You lose!';
                    openAll();
                } else {
                    currentCell.append(span);
                }
            }

            if (field[row][cell] === 0){
                openCell(row - 1, cell - 1, true);
                openCell(row - 1, cell, true);
                openCell(row - 1, cell + 1, true);
                openCell(row, cell - 1, true)
                openCell(row, cell + 1, true)
                openCell(row + 1, cell - 1, true);
                openCell(row + 1, cell, true);
                openCell(row + 1, cell + 1, true);
            }

            if (document.getElementsByClassName('flag').length/2 == bombCount 
                && document.getElementsByClassName('open').length == fieldSize - bombCount){
                var title = document.getElementById('title');
                title.innerHTML = 'You won!';
            }

        }

        function setFlag(row, cell){

            let currentCell = document.getElementById(row+'_'+cell);
            
            if (currentCell === null && !currentCell.classList.contains("open")){
                return false;
            } else {
                if (!currentCell.classList.contains("flag")) {
                    currentCell.classList += " flag";
                    let span = document.createElement("span");
                    span.className = "flag";
                    
                    currentCell.append(span);
                } else {
                    currentCell.classList.remove("flag");
                    currentCell.innerHTML = '';
                }
            }

            return false;
        }

        function openAll(){
            for (let row = 0; row < field.length; row++) {
                for (let cell = 0; cell < field[row].length; cell++) {
                    openCell(row, cell, true);
                }
            }
        }