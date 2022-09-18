class Order {
    constructor(id,customerName, latitudeLongitude,  ItemsCount,itemName, count, price, totalPrice, discount, TotalPriceAfterDiscount) {
        this.id = id;
        this.namcustomerName = customerName;
        this.latitudeLongitude =latitudeLongitude;
        this.ItemsCount =ItemsCount;
        this.itemName =itemName;
        this.count =count;
        this.price =price;
        this.totalPrice =totalPrice;
        this.discount =discount;
        this.TotalPriceAfterDiscount =TotalPriceAfterDiscount;
    }

static copyFromData(id,customerName, latitudeLongitude,  ItemsCount,itemName, count, price, totalPrice, discount, TotalPriceAfterDiscount){
const order = new order (id,customerName, latitudeLongitude,  ItemsCount,itemName, count, price, totalPrice, discount, TotalPriceAfterDiscount);
return order ;
    }
}


module.exports = {
   Order  
}