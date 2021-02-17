import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@model/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-dumb',
  templateUrl: './product-dumb.component.html',
  styleUrls: ['./product-dumb.component.css']
})
export class ProductDumbComponent implements OnInit {

  @Input() productList: User[];
  @Output() editProductEventEmitter: EventEmitter<User> =  new EventEmitter<User>();
  @Output() deleteEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(readonly toastr: ToastrService) {}

  ngOnInit() {
  }

  onEditEvent(product: User) {
    this.editProductEventEmitter.emit(product);
  }

  onDeleteEvent($key: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.deleteEventEmitter.emit($key);
      this.toastr.success('Successfull Operation', 'User Deleted', {timeOut: 1000});
    }
  }

}
