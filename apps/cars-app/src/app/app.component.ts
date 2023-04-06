import { Component } from '@angular/core';
// import * as demo from 'raw-loader!./demo.glsl';
import demo = require('!!raw-loader?!./demo.glsl');

@Component({
  selector: 'sample-root',
  template: `Sample`
})
export class AppComponent {
  title = demo;
}
