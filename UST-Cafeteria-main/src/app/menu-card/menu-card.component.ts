import { Component, OnInit } from '@angular/core';
import { EmployeRegService } from '../menu-card.service';
import { User } from '../User';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit{
  user:User=new User("","",0,"");
  message: any;
    constructor(private service:EmployeRegService){
      
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(){

  }
  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe(data=>this.message=data);
  }

}