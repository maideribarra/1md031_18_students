'use strict';
var socket = io();

var vm = new Vue({
  el: '#hamburgerApp',
  data: {
    // list of available food
	food,
	
	// selected burger
	checkedBurgers: [],
	orders: {},
	
	// customer information
	customer: {
	  fullname: "",
	  email: "",
	  street: "",
	  house: 1,
	  gender: null,
	  card: null,
	},
		
	showConfbox: false
  },
  methods: {
    onClick: function() {
	  this.showConfbox = true;
	  
	  socket.emit("order", { orders: { x: this.orders.x,
                                           y: this.orders.y },
                                fullname: this.customer.fullname,
								email: this.customer.email,
								street: this.customer.street,
								house: this.customer.house,
								gender: this.customer.gender,
								card: this.customer.card,
								checkedBurgers: this.checkedBurgers
								
                              });
	},
	displayOrder: function() {
	  this.showConfbox = true;
	},
	addOrder: function (event) {
	
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
	  this.orders= {x: event.clientX - offset.x,
                                           y: event.clientY - offset.y }
	  

      
    }
	
  }
  
});


  