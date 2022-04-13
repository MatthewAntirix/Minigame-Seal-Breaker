let active = 0


// Creating tiles grid

function create_grid(row_count, column_count) {

    for(let i = 1; i <= row_count; i++) {
        create_row(i, column_count);
    }
}


// Creating row

function create_row(row_id, column_count) {
    let new_row

    new_row = document.createElement(`div`)
    new_row.setAttribute('id',`tile_row_${row_id}`)
    document.getElementById('playground').appendChild(new_row)

        for(let i = 1; i <= column_count; i++) {
            create_tile(row_id, i);
        }
}


// Creating empty tile

function create_tile(row_id, column_id) {
    let new_tile

    new_tile = document.createElement(`span`)
    new_tile.classList.add(`tile_${row_id}_${column_id}`)
    new_tile.innerHTML = `<img src="./images/void.png"></img>`
    document.getElementById(`tile_row_${row_id}`).appendChild(new_tile)

    // Add tile listener

    document.querySelector(`.tile_${row_id}_${column_id}`).addEventListener('click',function(){

        console.log(`active tile ${row_id} ${column_id}`)
        
        
        if(active === 0) {
            document.querySelector(`.tile_${row_id}_${column_id}`).innerHTML = `<img src="./images/gem.png"></img>`
            document.querySelector(`.tile_${row_id-1}_${column_id}`).innerHTML = `<img src="./images/gem.png"></img>`
            document.querySelector(`.tile_${row_id+1}_${column_id}`).innerHTML = `<img src="./images/gem.png"></img>`
            document.querySelector(`.tile_${row_id}_${column_id-1}`).innerHTML = `<img src="./images/gem.png"></img>`
            document.querySelector(`.tile_${row_id}_${column_id+1}`).innerHTML = `<img src="./images/gem.png"></img>`


            active = 1
            console.log(active)


        } else if (active === 1){
            document.querySelector(`.tile_${row_id}_${column_id}`).innerHTML = `<img src="./images/void.png"></img>`
            document.querySelector(`.tile_${row_id-1}_${column_id}`).innerHTML = `<img src="./images/void.png"></img>`
            document.querySelector(`.tile_${row_id+1}_${column_id}`).innerHTML = `<img src="./images/void.png"></img>`
            document.querySelector(`.tile_${row_id}_${column_id-1}`).innerHTML = `<img src="./images/void.png"></img>`
            document.querySelector(`.tile_${row_id}_${column_id+1}`).innerHTML = `<img src="./images/void.png"></img>`

            active = 0
            console.log(active)
        }
    })
}






