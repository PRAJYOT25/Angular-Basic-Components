import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent implements OnInit {
  mytime: Date = new Date();
  constructor() { }

  ngOnInit() {
    console.log(this.mytime);

  }
}
