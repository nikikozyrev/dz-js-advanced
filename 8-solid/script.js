"use strict";

class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, count) {
    super(amount);
    this.count = count;
  }

  calculateTotal() {
    return this.amount * this.count;
  }
}
