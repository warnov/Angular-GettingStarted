import {Component} from '@angular/core'
@Component({
  selector:'nq-root',
  template:`
    <div><h1>{{pageTitle}}</h1>
      <div>My First Component</div>
    </div>
  `
})
export class AppComponent{
  pageTitle: string='en Cuotas';
}