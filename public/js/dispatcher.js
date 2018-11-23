/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#orders',
  data: {
    // list of available food
	received: false,
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
	}
  },
  created: function () {
    socket.on('order', function (data) {

      this.received=true;
      this.orders = data.orders;
	  this.customer.fullname=data.fullname;
	  this.customer.email=data.email;
	  this.customer.street=data.street;
	  this.customer.house=data.house;
	  this.customer.gender=data.gender;
	  this.customer.card=data.card;
	  
	  this.checkedBurgers=data.checkedBurgers;
    }.bind(this));

  }
});
