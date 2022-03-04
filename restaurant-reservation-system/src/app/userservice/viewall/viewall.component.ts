import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  data:Array<any>

  constructor(private userService : UserService) {

    this.data = new Array<any>()
  }

    getDataFromAPI() {
      this.userService.getData().subscribe((data) => {
        console.log(data)
        this.data = data
      });
    }
  

  ngOnInit(): void {}

}
