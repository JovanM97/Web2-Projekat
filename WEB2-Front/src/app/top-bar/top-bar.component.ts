import { Component, OnInit } from '@angular/core';
import { UserCacheService } from '../Services/user-cache.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public username : string;
  public headline : string;

  constructor(private user : UserCacheService) {
    if(localStorage["role"] != null){
      this.username = localStorage["username"]
    }
   }

  ngOnInit(): void {
    this.headline = localStorage.getItem('headline')
  }

}
