var totals=[];
var foods=[
  {
    "name":"Hot Dog",
    "type":"Mystery Meat",
    "cost":2
  },{
    "name":"Burger",
    "type":"Meat sandwich",
    "cost":8.50
  }
  ];
  function buyHotDog(){
    var qty= document.getElementById('qtyHotDog').value;
    var price= qty * foods[0].cost;
    totals.push(price);
    localStorage.setItem('finalSubTotal',totals);
  }