var vm = new Vue({
  el: '#hamburguerSelection',
  data: {
    food
	
  }
})

var vm2 = new Vue({
  el: '#divbutton',
  methods: {
        click: function() {
			 alert('Hello ')
            var name=document.getElementById("Fullname").value;
			console.log(name);
			var email=document.getElementById("email").value;
			console.log(email);
			var street=document.getElementById("street").value;
			console.log(street);
			var house=document.getElementById("house").value;
			console.log(house);
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
			pemail.appendChild(txtemail);
			pstreet.appendChild(txtstreet);
			phouse.appendChild(txthouse);
			divorder.appendChild(pname);
			divorder.appendChild(pemail);
			divorder.appendChild(pstreet);
			divorder.appendChild(phouse);	
			var divor = document.getElementById("order");
			divor.appendChild(divorder);
        }   
    }
})

