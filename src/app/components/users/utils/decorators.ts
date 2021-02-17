import { EventEmitter } from '@angular/core';
import { User } from '@model/user';


export function ProductFormEmittersInit(constructor: Function) {
  console.log(constructor.prototype.name);
  constructor.prototype.submitEventEmitter = new EventEmitter<User>();
  constructor.prototype.resetEventEmitter = new EventEmitter<void>();
  constructor.prototype.getProductsEventEmitter = new EventEmitter<void>();
}
