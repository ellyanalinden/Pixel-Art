// Select color input
 let color = $('#colorPicker');

// Select size input
let sizePicker = $('#sizePicker');

//Select design canvas
const canvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
  //clears grid
  $('tr').remove();

  let gridHeight = $('#inputHeight').val();
  let gridWidth = $('#inputWidth').val();
  const tableBody = $('<tbody></tbody>');

   for (let i = 0; i < gridHeight; i++) {
     //create rows
      const row = $('<tr></tr>');
      for (let j = 0; j < gridWidth; j++) {
      //create table data
      let tableData = $('<td></td>');
      row.append(tableData);
    }
     tableBody.append(row);
   }
   canvas.append(tableBody);
}

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  canvas.append(makeGrid());
});

canvas.on('click','td', function() {
    $(this).css('background-color', color.val());
});
