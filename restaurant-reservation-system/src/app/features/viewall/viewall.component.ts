import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/core/services/user-service.service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor(private userService : UserServiceService) {}
  
  data:any[] = []

  ngOnInit() {
    this.userService.get().subscribe( data => {
      console.log(data)
      this.data = data 
    })
  }
  
}
