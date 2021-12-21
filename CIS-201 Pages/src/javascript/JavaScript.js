
// function to remove the navigation bar
function UnClicked(){
document.getElementById('Nav').style.display='none'
}
//function to add the navigation bar
function Clicked(){
document.getElementById("Nav").style.display="block";}


//function to print menu header
function PrintHeader(){
	document.write(
		"<div class=\"MenuTop\">"+
		"<h1 id=\"Menu\" > \"Menu\"</h1>"+
		"</div>"+"<hr>"
	);
}

//function to print a Hotdrinks header
function PrintHeader1(){
	document.write(
		"<DOCTYPE html>"+
		"<html lang=\"en\">"+
		"<head>"+
			"<meta charset=\"UTF-8\"/>"+
			"<link rel=\"stylesheet\" type=\"text/css\" href=\"../src/CSS/MenuStyle.css\">"+
		"</head>"+
		
		"<body>"+
	
		"<p onClick=\"Back();\" class=\"Back\" >Back</p>"+
		"<img  id=\"Bag\" alt=\"ShoppingBag\" src=\"../src/imgs/EmptyBag2.png\"/>"+
		"<p style=\"display: inline;\" id=\"OrderNum\" </p>"+
		
		
			
			"<div class=\"MenuTop\">"+
	
				"<h1 id=\"Menu\" > \-Hot Drinks\-</h1>"+
			"</div>"+"<hr>"+
		"</body>"+
		"<html>"
	);
}

//object to store menu orders
function DisplayMenu(name, price,imgs,btn){
	 this.name=name;
	 this.price=price;
	 this.imgs=imgs;
	 this.btn=btn;
}

//creating objects for hotdrinks page
var Order1=new DisplayMenu(
	"Americano",
	"15 SAR",
	"<img alt=\"Americano\" src=\"../src/imgs/Americano.jpeg\"/>",
	"<button type=\"button\">Add</button>"
);
	
var Order2=new DisplayMenu(
	"Espresso",
	"7 SAR",
	"<img alt=\"Americano\" src=\"../src/imgs/Americano.jpeg\"/>",
	"<button type=\"button\">Add</button>"
);

var Order3=new DisplayMenu(
	"Latte",
	"20 SAR",
	"<img alt=\"Americano\" src=\"../src/imgs/Americano.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
var Order4=new DisplayMenu(
	"White Mocha",
	"7 SAR",
	"<img alt=\"Americano\" src=\"../src/imgs/Americano.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
var Order5=new DisplayMenu(
	"PowerDrink",
	"10 SAR", "<img alt=\"Americano\" src=\"../src/imgs/Americano.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
var Order6=new DisplayMenu(
	"Tea",
	"10 SAR",
	"<img alt=\"Americano\" src=\"../src/imgs/Americano.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);



//adding objects in array
var HotCoffee=new Array();
HotCoffee.push(Order1);
HotCoffee.push(Order2);
HotCoffee.push(Order3);
HotCoffee.push(Order4);
HotCoffee.push(Order5);
HotCoffee.push(Order6);

//printing the array using table
function printArray(){
	for(var i=0; i<6;i++){
		document.write(
		//Printing the 2 images in one column
			"<table>"+
				"<tr>"+
					"<td> "+HotCoffee[i].imgs+"</td>"+
					"<td> "+HotCoffee[i++].imgs+"</td>"+
				"</tr>"+
				"<tr>"+
					"<td>"+"<h2>"+HotCoffee[i--].name+"</h2>"+"</td>"+
					"<td>"+"<h2>"+HotCoffee[i++].name+"</h2>"+"</td>"+
				"</tr>"+
				"<tr>"+
					"<td>"+"<p>"+HotCoffee[i--].price+"</p>"+"</td>"+
					"<td>"+"<p>"+HotCoffee[i++].price+"</p>"+"</td>"+
				"</tr>"+
				"<tr>"+
					"<td onClick=\"AddItems()\">"+HotCoffee[i].btn+"</td>"+
					"<td onClick=\"AddItems()\">"+HotCoffee[i].btn+"</td>"+
				"</tr>"+
			"</table>");	
						}
}





//function to print a ColdDrinks header
function PrintHeader2(){
	document.write(
		"<DOCTYPE html>"+
		"<html lang=\"en\">"+
		"<head>"+
			"<meta charset=\"UTF-8\"/>"+
			"<link rel=\"stylesheet\" type=\"text/css\" href=\"../src/CSS/MenuStyle.css\">"+
		"</head>"+
		
		"<body>"+
		
		"<p onClick=\"Back();\" class=\"Back\" >Back</p>"+
		"<img id=\"Bag\" alt=\"ShoppingBag\" src=\"../src/imgs/EmptyBag2.png\"/>"+
		"<p id=\"OrderNum\" > <p>"+
		
			"<div class=\"MenuTop\">"+
			"<h1 id=\"Menu\" > \-Cold Drinks\-</h1>"+
			"</div>"+"<hr>"+
		"</body>"+
		"<html>"
	);
}

//Creating objects for colddrinks menu
var Order7=new DisplayMenu(
	"Iced Americano"
	,"15 SAR",
	"<img alt=\"Americano\" src=\"../src/imgs/IcedLatte.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
	
var Order8=new DisplayMenu(
	"Iced Latte",
	"7 SAR",
	"<img alt=\"Americano\" src=\"../src/imgs/IcedLatte.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
var Order9=new DisplayMenu(
	"Matcha",
	"20 SAR", 
	"<img alt=\"Americano\" src=\"../src/imgs/IcedLatte.jpeg\"/>",
	 "<button type=\"button\">Add</button>"
	 );
var Order10=new DisplayMenu(
	"Lemon Water",
	"7 SAR",
	"<img alt=\"Americano\" src=\"../src/imgs/IcedLatte.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
var Order11=new DisplayMenu(
	"Iced tea",
	"10 SAR",
	"<img alt=\"Americano\" src=\"../src/imgs/IcedLatte.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
var Order12=new DisplayMenu(
	"Frappuccino",
	"10 SAR",
	"<img alt=\"Americano\" src=\"../src/imgs/IcedLatte.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
	
//adding objects to array
var ColdCoffee=new Array();
ColdCoffee.push(Order7);
ColdCoffee.push(Order8);
ColdCoffee.push(Order9);
ColdCoffee.push(Order10);
ColdCoffee.push(Order11);
ColdCoffee.push(Order12);

//printint the array using tables
function printArray2(){
	for(var i=0; i<6;i++){
		document.write(
		//Printing the 2 images in one column
			"<table>"+
				"<tr>"+
					"<td> "+ColdCoffee[i].imgs+"</td>"+
					"<td> "+ColdCoffee[i++].imgs+"</td>"+
				"</tr>"+
				"<tr>"+
					"<td>"+"<h2>"+ColdCoffee[i--].name+"</h2>"+"</td>"+
					"<td>"+"<h2>"+ColdCoffee[i++].name+"</h2>"+"</td>"+
				"</tr>"+
				"<tr>"+
					"<td>"+"<p>"+ColdCoffee[i--].price+"</p>"+"</td>"+
					"<td>"+"<p>"+ColdCoffee[i++].price+"</p>"+"</td>"+
				"</tr>"+
				"<tr>"+
					"<td onClick=\"AddItems()\">"+ColdCoffee[i].btn+"</td>"+
					"<td onClick=\"AddItems()\">"+ColdCoffee[i].btn+"</td>"+
				"</tr>"+
			"</table>");	
						}
}

//function to print Dessert header
function PrintHeader3(){
	document.write(
		"<DOCTYPE html>"+
		"<html lang=\"en\">"+
		"<head>"+
			"<meta charset=\"UTF-8\"/>"+
			"<link rel=\"stylesheet\" type=\"text/css\" href=\"../src/CSS/MenuStyle.css\">"+
		"</head>"+
		
		"<body>"+
		"<p onClick=\"Back();\" class=\"Back\" >Back</p>"+
		"<img id=\"Bag\" alt=\"ShoppingBag\" src=\"../src/imgs/EmptyBag2.png\"/>"+
		"<p id=\"OrderNum\"> <p>"+
		"<div class=\"MenuTop\">"+
			
				"<h1 id=\"Menu\" > \-Dessert\-</h1>"+
			"</div>"+"<hr>"+
			
			
		"</body>"+
		"<html>"
	);
}

//Creating objects for Dessert menu
var Order13=new DisplayMenu(
	"Apple Pie"
	,"17 SAR",
	"<img alt=\"pie\" src=\"../src/imgs/ApplePie.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
	
var Order14=new DisplayMenu(
	"Oat cookies",
	"7 SAR",
	"<img alt=\"pie\" src=\"../src/imgs/ApplePie.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
var Order15=new DisplayMenu(
	"Frozen yogurt",
	"13 SAR", 
	"<img alt=\"pie\" src=\"../src/imgs/ApplePie.jpeg\"/>",
	 "<button type=\"button\">Add</button>"
	 );
var Order16=new DisplayMenu(
	"Lemon cake",
	"20 SAR",
	"<img alt=\"pie\" src=\"../src/imgs/ApplePie.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
var Order17=new DisplayMenu(
	"Chocolate cake",
	"20 SAR",
	"<img alt=\"pie\" src=\"../src/imgs/ApplePie.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
var Order18=new DisplayMenu(
	"honey oats",
	"14 SAR",
	"<img alt=\"pie\" src=\"../src/imgs/ApplePie.jpeg\"/>",
	"<button type=\"button\">Add</button>"
	);
	
//adding objects to array
var Dessert=new Array();
Dessert.push(Order13);
Dessert.push(Order14);
Dessert.push(Order15);
Dessert.push(Order16);
Dessert.push(Order17);
Dessert.push(Order18);


//printint the array using tables
function printArray3(){
	for(var i=0; i<6;i++){
		document.write(
		//Printing the 2 images in one column
			"<table>"+
				"<tr>"+
					"<td> "+Dessert[i].imgs+"</td>"+
					"<td> "+Dessert[i++].imgs+"</td>"+
				"</tr>"+
				"<tr>"+
					"<td>"+"<h2>"+Dessert[i--].name+"</h2>"+"</td>"+
					"<td>"+"<h2>"+Dessert[i++].name+"</h2>"+"</td>"+
				"</tr>"+
				"<tr>"+
					"<td>"+"<p>"+Dessert[i--].price+"</p>"+"</td>"+
					"<td>"+"<p>"+Dessert[i++].price+"</p>"+"</td>"+
				"</tr>"+
				"<tr>"+
					"<td onClick=\"AddItems();\">"+Dessert[i].btn+"</td>"+
					"<td onClick=\"AddItems();\">"+Dessert[i].btn+"</td>"+
				"</tr>"+
			"</table>");} }



//Adding items to the cart
function AddItems(){
	document.getElementById("Bag").src="../src/imgs/FullBag2.png";
	var element =document.getElementById("OrderNum");
	var i=element.innerHTML;
	i++;
    document.getElementById("OrderNum").innerHTML= i;
	//changing images if the number reaches more than one 
	if(i>1){
		document.getElementById("Bag").src="../src/imgs/FullBag.png";
	}
}


//Reload the page function
function Back(){
	location.reload(true);  
}