function MenuItem(name,kcal, gluten, lactosa,url) {
    this.name=name; // The this keyword refers to the object itself
    this.kcal =kcal;
    this.gluten = gluten;
    this.lactosa = lactosa;
	this.imagen=url;
    this.alergies = function() {
		var aler=[]
		if(this.gluten==true){
			aler.push("gluten")
		}if(this.lactosa==true){
			aler.push("lactosa")
		}if(aler.length==0){
			return ""
		}
		str="This product contain"
		
		for(i=0;i<aler.length;i++){
			if(i==0){
				str=str+" "+aler[i]
			}
			else if(i==(aler.length-1)){
				str=str+" and "+aler[i]
			}else{
				str=str+", "+aler[i]
			}
			
		}
		
        return str;
    };
}

function AddBurguers(food) {
	var foodjs = JSON.parse(food); 
	console.log(foodjs);	
	var foodarr=[];	
	for(i=0;i<foodjs.length;i++)
	{
		var burger=new MenuItem(foodjs[i].name,foodjs[i].kCal,foodjs[i].gluten,foodjs[i].lactose,foodjs[i].img);
		foodarr.push(burger);
	}
	
	return foodarr;
}
function printBurger(burger){
	str=burger.name+" "+burger.kcal+" "+burger.gluten+" "+burger.lactosa+" "+burger.imagen+" "+burger.alergies()
	return str
}

function CreateBurgersDiv(){
	var arr=AddBurguers(JSON.stringify(food));
	var divtable = document.createElement("div");
	var table1=document.createElement("div");
	console.log(arr.length);
	var i=0;
	for(i;i<arr.length;i++)
	{
		var divburger=document.createElement("div");
		divburger.setAttribute('class', 'Burger');	
		divburger.setAttribute('class', 'burger'+(i%3));		
		var h4=document.createElement("h4");
		var txt = document.createTextNode(arr[i].name);
		h4.appendChild(txt);
		var img=document.createElement("img");
		img.setAttribute('class', 'burgerImage');
		var txtimg = document.createTextNode(arr[i].imagen);
		img.setAttribute("src",arr[i].imagen);
		var ul=document.createElement("ul");
		var txtkcal = document.createTextNode(arr[i].kcal);
		var li1=document.createElement("li");
		var li2=document.createElement("li");
		var txtalergies = document.createTextNode(arr[i].alergies());
		var a=document.createElement("a");	
		a.setAttribute('class', 'typefood');
		li1.appendChild(txtkcal);
		li2.appendChild(txtalergies);
		ul.appendChild(li1);
		ul.appendChild(li2);
		divburger.appendChild(h4);	
		divburger.appendChild(img);			
		divburger.appendChild(ul);
		var checkbox=document.createElement("input");
		checkbox.setAttribute('type', 'checkbox');
		divburger.appendChild(checkbox);
		table1.appendChild(divburger);
		console.log(i);
		
		
	
	}	
	divtable.appendChild(table1);
	divtable.setAttribute('class', 'divtable');
	table1.setAttribute('class', 'table1');
	document.getElementById("hamburguerSelection").appendChild(divtable);
	console.log("finish");
	
}
function OrderBurger(){
	divOrder=document.createElement("div");
	
}
var myButton = document.getElementbyId('button');
myButton.onclick = function () {
	var name=document.getElementById("Fullname").value;
	var email=document.getElementById("email").value;
	var street=document.getElementById("street").value;
	var house=document.getElementById("house").value;
	var divorder = document.createElement("div");
	var pname = document.createElement("p");
	var pemail = document.createElement("p");
	var pstreet = document.createElement("p");
	var phouse = document.createElement("p");
	var txtname = document.createTextNode(name);
	var txtemail = document.createTextNode(email);
	var txtstreet = document.createTextNode(street);
	var txthouse = document.createTextNode(house);
	pname.appendChild(txtname);
	
	
	
	
}

CreateBurgersDiv();


