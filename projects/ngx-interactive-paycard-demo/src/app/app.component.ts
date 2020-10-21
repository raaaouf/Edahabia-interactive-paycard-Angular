import { Component } from '@angular/core';
import { CardLabel, FormLabel } from 'ngx-interactive-paycard-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-interactive-paycard-demo';
  cardNumberFormat = '#### #### #### ####';
  cardNumberMask = '#### **** **** ***#';


  onSubmitEvent($event) {
    console.log($event);
  }
}
