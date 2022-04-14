
////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating tiles grid
////////////////////////////////////////////////////////////////////////////////////////////////////

function create_grid(row_count, column_count) {

    for(let i = 1; i <= row_count; i++) {
        create_row(i, row_count, column_count);
    }
} // Creating tiles grid END



////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating row
////////////////////////////////////////////////////////////////////////////////////////////////////

function create_row(row_id, row_count, column_count) {
    let new_row

    new_row = document.createElement(`div`)
    new_row.setAttribute('id',`tile_row_${row_id}`)
    document.getElementById('playground').appendChild(new_row)

        for(let i = 1; i <= column_count; i++) {
            create_tile(row_id, i, row_count, column_count);
        }
} // Creating row END



////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating empty tile
////////////////////////////////////////////////////////////////////////////////////////////////////

function create_tile(row_id, column_id, row_count, column_count) {
    let new_tile

    new_tile = document.createElement(`span`)
    new_tile.classList.add(`tile_${row_id}_${column_id}`)
    new_tile.innerHTML = `<img class="img_${row_id}_${column_id}" src="./images/void.png"></img><span class="toggle">0</span>`
    document.getElementById(`tile_row_${row_id}`).appendChild(new_tile)



////////////////////////////////////////////////////////////////////////////////////////////////////
    // Add tile listener
////////////////////////////////////////////////////////////////////////////////////////////////////

    document.querySelector(`.tile_${row_id}_${column_id}`).addEventListener('click',function(){
        let toggle = document.querySelector(`.tile_${row_id}_${column_id}`).textContent
        let empty = `<img class="img_${row_id}_${column_id}" src="./images/void.png"></img><span class="toggle">0</span>` 
        let gem = `<img class="img_${row_id}_${column_id}" src="./images/gem.png"></img><span class="toggle">1</span>`
        let damaged_1
        let damaged_2
        let destroyed


        // Row upper target
        function row_up (row_id, column_id) {
            if(row_id > 1) {
                let toggle = document.querySelector(`.tile_${row_id-1}_${column_id}`).textContent
        
                if(toggle == 0) {
                    toggle_content = document.querySelector(`.tile_${row_id-1}_${column_id}`).innerHTML = gem
                } else if (toggle == 1) {
                    toggle_content = document.querySelector(`.tile_${row_id-1}_${column_id}`).innerHTML = empty
                }
            }
        } // END


        // Row lower target
        function row_down (row_id, column_id) {
            if(row_id < row_count) {
                let toggle = document.querySelector(`.tile_${row_id+1}_${column_id}`).textContent

                if(toggle == 0) {
                    toggle_content = document.querySelector(`.tile_${row_id+1}_${column_id}`).innerHTML = gem
                } else if (toggle == 1) {
                    toggle_content = document.querySelector(`.tile_${row_id+1}_${column_id}`).innerHTML = empty
                }
            }
        } // END


        // Column upper target
        function column_left (row_id, column_id) {
            if(column_id > 1) {
                let toggle = document.querySelector(`.tile_${row_id}_${column_id-1}`).textContent

                if(toggle == 0) {
                    toggle_content = document.querySelector(`.tile_${row_id}_${column_id-1}`).innerHTML = gem
                } else if (toggle == 1) {
                    toggle_content = document.querySelector(`.tile_${row_id}_${column_id-1}`).innerHTML = empty
                }
            }
        } // END


    // Column lower target
        function column_right (row_id, column_id) {
            if(column_id < column_count) {
                let toggle = document.querySelector(`.tile_${row_id}_${column_id+1}`).textContent

                if(toggle == 0) {
                    toggle_content = document.querySelector(`.tile_${row_id}_${column_id+1}`).innerHTML = gem
                } else if (toggle == 1) {
                    toggle_content = document.querySelector(`.tile_${row_id}_${column_id+1}`).innerHTML = empty
                }
            }
        } // END

        
        // Main target - EMPTY
        if(toggle == 0) {
            toggle_content = document.querySelector(`.tile_${row_id}_${column_id}`).innerHTML = gem 

            // Row upper target
                row_up(row_id, column_id)
            // Row lower target
                row_down(row_id, column_id)
            // Column upper target
                column_left(row_id, column_id)
            // Column lower target
                column_right(row_id, column_id)



        // Main target - GEM
        } else if (toggle == 1) {
            toggle_content = document.querySelector(`.tile_${row_id}_${column_id}`).innerHTML = empty 

            // Row upper target
                row_up(row_id, column_id)
            // Row lower target
                row_down(row_id, column_id)
            // Column upper target
                column_left(row_id, column_id)
            // Column lower target
                column_right(row_id, column_id)
           


        } else if (toggle == 2) {

        }


    }) // Add tile listener END

} // Creating empty tile END



