import { Component, OnInit, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'apt-users-page',
  templateUrl: './users-page.html',
  styleUrls: ['./users-page.scss'],
  animations: [],
})
export class UsersListPageComponent implements OnInit {
  ngOnInit(): void {
    //
  }

  constructor() {

  }


}

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [UsersListPageComponent],
  declarations: [UsersListPageComponent],
})
export class UsersListPageModule { }
