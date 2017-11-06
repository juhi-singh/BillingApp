var deleteRow = function(row){
	/*alert('Sure Donot want this Item?');*/
	 var l = document.getElementById(row);
	 console.log(row);
	    var ulE = document.getElementById('itemTable');
	    ulE.removeChild(l);
	/* document.getElementById("itemTable").deleteRow(i);*/

}

var addRow = function(){

	var table = document.getElementById("itemTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;

	 // Insert a row in the table at the last row
	 var newRow   = table.insertRow();

	 console.log('newRow_id');
	 var img = document.createElement("img");

	 // Insert a cell in the row at index 0
	 var cell1  = newRow.insertCell(0);
	 var cell2 = newRow.insertCell(1);
	 var cell3 = newRow.insertCell(2);

	 // Append a text node to the cell
	 var item = document.getElementById('inputItem');
	 var qty = document.getElementById('inputQty');
		img.src ="images/delete.png";
		 img.onclick = function(){deleteRow(newRow.id)};
		 	
		    cell1.innerHTML = item.value;
		    cell2.innerHTML = qty.value;
		    cell3.appendChild(img);
	
		    table.appendChild(newRow);
	
}

var enterInput = function(ele){
	if(ele.key == 'Enter') {
        addRow();  
        clearField();
    }
	
}

var clearField = function(){
	 document.getElementById('inputItem').value="";
	 document.getElementById('inputQty').value="";
}