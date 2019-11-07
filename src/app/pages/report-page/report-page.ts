import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'apt-report-page',
  templateUrl: './report-page.html',
  styleUrls: ['./report-page.scss']
})
export class ReportPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [ReportPageComponent],
  declarations: [ReportPageComponent],
})
export class ReportPageModule { }
