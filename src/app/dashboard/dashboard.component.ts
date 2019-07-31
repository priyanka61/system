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
    events:"",
    records:"",
    recordHolder:"",
    date:"",
    championships:"",
    place:"",
    nationality:""
   }

  constructor(private formService:FormService) { }


  ngOnInit() {
  }
add(a){
  console.log(this.formService.formDetailsS);
  this.formDetails={
    tournment:a.tournment,
    sports:a.sports,
    events:a.events,
    records:a.records,
    recordHolder:a.recordHolder,
    date:a.date,
    championships:a.championships,
    place:a.place,
    nationality:a.nationality
  }
  alert('addded');
  this.formService.addFormService(this.formDetails);
}
}
