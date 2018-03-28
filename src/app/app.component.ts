import { Component } from '@angular/core';
import {HideserviceService} from './hideservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    constructor(private hideservice:HideserviceService) {
   
    
     }

    registerClick(){

     this.hideservice.login=true;
     this.hideservice.register=false;
    

    }
      loginClick(){

     this.hideservice.login=false;
     this.hideservice.register=true;
  
    
    }
    logoutClick(){

this.hideservice.register=true;
this.hideservice.logout=false;

    }
    
}
