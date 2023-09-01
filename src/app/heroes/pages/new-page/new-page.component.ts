import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent {

    public publishers = [
      {id:'DC Comics', desc: 'DC-Comics'},
      {id:'Marvel Comics', desc: 'Marvel-Comics'}
    ];
}
