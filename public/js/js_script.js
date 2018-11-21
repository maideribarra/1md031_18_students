CreateBurgersDiv();

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
	table1.setAttribute('class', 'table1');	
	console.log(arr.length);
	var i=0;
	for(i;i<arr.length;i++)
	{
		var divburger=document.createElement("div");
		divburger.setAttribute('class', 'Burger');	
				
		var h4=document.createElement("h4");
		h4.setAttribute('class', 'nameBurger');
	
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
		checkbox.setAttribute('id', "cb"+i);
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
function Click(burgers) {
	var titleOrder=document.createElement("h3");
	var texttitleOrder=document.createTextNode("Order confirmation");
	titleOrder.appendChild(texttitleOrder);
	var titleCustomer=document.createElement("h2");
	var texttitleCustomer=document.createTextNode("Customer details");
	titleCustomer.appendChild(texttitleCustomer);	
	var titleBurger=document.createElement("h2");
	var texttitleBurger=document.createTextNode("Order Sumary");	
	titleBurger.appendChild(texttitleBurger);	
	var hamburgers=document.getElementsByClassName("Burger"); 
	var name=document.getElementById("Fullname").value;
	console.log(name);
	var email=document.getElementById("email").value;
	console.log(email);
	var street=document.getElementById("street").value;
	console.log(street);
	var house=document.getElementById("house").value;
	console.log(house);
	var payment=document.getElementById("paymethod").value;
	console.log(house);
	var genre=document.getElementById("house").value;
	console.log(house);	
	var divorder = document.createElement("div");
	var pname = document.createElement("p");
	var pemail = document.createElement("p");
	var pstreet = document.createElement("p");
	var phouse = document.createElement("p");
	var payment = document.createElement("p");
	var genre = document.createElement("p");
	var txtname = document.createTextNode(name);
	var txtemail = document.createTextNode(email);
	var txtstreet = document.createTextNode(street);
	var txthouse = document.createTextNode(house);
	var txtgenre = document.createTextNode(house);
	var txtName = document.createTextNode("Name:");
	var txtEmail = document.createTextNode("Email:");
	var txtStreet = document.createTextNode("Street:");
	var txtHouse = document.createTextNode("House:");	
	pname.appendChild(txtName);
	pemail.appendChild(txtEmail);
	pstreet.appendChild(txtStreet);
	phouse.appendChild(txtHouse);
	pname.appendChild(txtname);
	pemail.appendChild(txtemail);
	pstreet.appendChild(txtstreet);
	phouse.appendChild(txthouse);
	divorder.appendChild(titleOrder);
	divorder.appendChild(titleCustomer);
	divorder.appendChild(pname);	
	divorder.appendChild(pname);
	divorder.appendChild(pemail);
	divorder.appendChild(pstreet);
	divorder.appendChild(phouse);
	divorder.appendChild(titleBurger);		
	var divor = document.getElementById("order");
	var divburger=document.createElement("div");
	var i=0;
	console.log("hamburger lenght");
	console.log(hamburgers.length);
	for(i;i<hamburgers.length;i++)
	{
		var liorder = document.createElement("li");
		console.log(document.getElementById("cb"+i).value);			
			
		if(document.getElementById("cb"+i).checked==true){
			console.log(document.getElementById("cb"+i).value);			
			var pnameburger = document.createElement("p");
			var txtNameBurger = document.createTextNode(hamburgers[i].getElementByClassName('nameBurger'));
			console.log(hamburgers[i].getElementByClassName('nameBurger'));		
			pnameburger.appendChild(txtNameBurger);
			liorder.appendChild(pnameburger);
			
		}
		divburger.appendChild(liorder);
	}
	divorder.appendChild(divburger);
	divor.appendChild(divorder);
		
}



