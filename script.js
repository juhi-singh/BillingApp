var deleteRow = function(row){
	/*alert('Sure Donot want this Item?');*/
	 var l = document.getElementById(''+row +'');
	 console.log(row);
	    var ulE = document.getElementById("table-body");
	    ulE.removeChild(l);
	/* document.getElementById("itemTable").deleteRow(i);*/
	total();

}

var addRow = function(){

	var table = document.getElementById("table-body");

	 // Insert a row in the table at the last rowhgjh
	 var newRow = document.createAttribute("tr");
	  newRow   = table.insertRow(table.rows.length);
	  newRow.id = table.rows.length;

	 console.log(newRow.id);


	 //console.log('newRow_id');
	 var img = document.createElement("img");

	 // Insert a cell in the row at index 0
	 var cell1  = newRow.insertCell(0);
	 var cell2 = newRow.insertCell(1);
	 var cell3 = newRow.insertCell(2);
	 var cell4 = newRow.insertCell(3);
	 var cell5 = newRow.insertCell(4);

	 // Append a text node to the cell
	 var item = document.getElementById('inputItem');
	 var qty = document.getElementById('inputQty');
	 var price = document.getElementById('inputPrice');
	 var tprice = qty.value *price.value;
		img.src ="images/delete.png";
		 img.onclick = function(){deleteRow(newRow.id)};
		 	
			cell1.innerHTML = item.value;
			cell2.innerHTML = qty.value;
			cell3.innerHTML = price.value;
		    cell4.innerHTML = tprice;
		    cell5.appendChild(img);
	
			table.appendChild(newRow);
			total();
	
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
	 document.getElementById('inputPrice').value="";
}

var total = function(){
	var table = document.getElementById("table-body");
	var sum =0 , tr;
	for(var i=0; i< table.rows.length;i++){
		sum = sum + parseInt(table.rows[i].cells[3].innerHTML);
		console.log(sum);
	}
	var table = document.getElementById("table-foot");
	table.rows["row1"].cells[3].innerHTML = sum;
}