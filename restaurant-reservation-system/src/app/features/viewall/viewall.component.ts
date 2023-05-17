import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor(private userService : UserService) {}
  
  data:any[] = []

  ngOnInit() {
    this.userService.get().subscribe( data => {
      this.data = data 
    })
  }

}
