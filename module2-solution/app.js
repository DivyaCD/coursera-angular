(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller("ToBuyController",ToBuyController)
  .controller("AlreadyBoughtController",AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

  ToBuyController.$inject=['ShoppingListCheckOffService']
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService']

  function ToBuyController(ShoppingListCheckOffService){
    var toBuyItems=this;

    toBuyItems.items=ShoppingListCheckOffService.getItemsToBuy();
    toBuyItems.buyItem=function(itemIndex){
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtItems=this;

    boughtItems.items=ShoppingListCheckOffService.getBoughtItems();
  }


  function ShoppingListCheckOffService(){
    var service=this;

    var itemsToBuy=[{ name: "cookies", quantity: 10 },{ name: "bag of chips", quantity: 5 },{ name: "soda bottles", quantity: 15 },{ name: "milk packets", quantity: 12 },{ name: "peanut butter", quantity: 4 }];
    var itemsBought=[];

    service.getItemsToBuy = function(){
      return itemsToBuy;
    }

    service.buyItem=function(itemIndex){
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex,1);

    }

    service.getBoughtItems = function(){
      return itemsBought;
    }
  }



})();
