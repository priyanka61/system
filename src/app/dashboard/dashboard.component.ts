import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formDetails={
    tournment:"",
    sports:"",
    country:"",
    state:"",
    district:"",
    tName:"",
    description:""
   }
records = [];
  constructor(private formService:FormService) { }


  ngOnInit() {
    this.list();
  }

  list(){
    this.formService.list().subscribe ((data)=>{
      console.log('subscribed',JSON.stringify(data))
  this.records=data['record'];
  
    });
  }
add(a){
  // console.log(this.formService.formDetailsS);
  this.formDetails={
    tournment:a.tournment,
    sports:a.sports,
    country:a.country,
    state:a.state,
    district:a.district,
    tName:a.tName,
    description:a.description
  }
  this.formService.addFormService(this.formDetails).subscribe ((data)=>{
    console.log('subscribed',JSON.stringify(data))
this.list();

  });
  // alert('addded');
  // this.formService.addFormService(this.formDetails)
}
}
