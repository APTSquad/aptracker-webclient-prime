import { Component, OnInit, NgModule } from '@angular/core';

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
  ],
  exports: [UsersListPageComponent],
  declarations: [UsersListPageComponent],
})
export class UsersListPageModule { }
