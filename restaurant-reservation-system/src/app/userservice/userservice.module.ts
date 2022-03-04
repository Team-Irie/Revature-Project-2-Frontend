import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewallComponent } from './viewall/viewall.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';




@NgModule({
  declarations: [
    ViewallComponent,
    ViewuserComponent,
    AdduserComponent,
    UpdateuserComponent
    
  ],
  imports: [
    CommonModule
  ]
})
export class UserserviceModule { }
