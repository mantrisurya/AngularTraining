import { Component, OnInit } from '@angular/core';
import { state, style, animate, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-csssstyle',
  templateUrl: './csssstyle.component.html',
  styleUrls: ['./csssstyle.component.css'],
  animations: [
      trigger('slide',[
      state('changed', style({ background: '#444444', color: '#888888' })),
      transition('* <=> changed', [
        animate('1s')
      ])
    ])
  ]
})
export class CsssstyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  redVal = 0;
  greenVal = 0;
  blueVal = 0;
  red = "#FF0000";
  green = "#008000";
  blue = "#0000FF";
  afterBg = "#444444";
}
