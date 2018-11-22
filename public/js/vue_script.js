
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
  
})


  