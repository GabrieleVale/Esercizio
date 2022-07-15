import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Username } from '../class/Username';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: Username;
  @Output('deleteDipendente') delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete_dipendente(){
    this.delete.emit(this.user);
  }

}
