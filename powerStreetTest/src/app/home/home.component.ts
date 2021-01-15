import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[AuthService],
})
export class HomeComponent implements OnInit {
  search: string = '';
 public isLogged=false;
 public user: any;
  constructor(private authService:AuthService) { }

  async ngOnInit() {
   this.user = await this.authService.getCurrentUser();

    if(this.user){
      this.isLogged = true;
      console.log('user', this.user);
    }
  }
  
  

}
