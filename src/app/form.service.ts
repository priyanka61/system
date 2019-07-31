import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
 
     formDetailsS=[{
    tournment:"",
    sports:"",
    events:"",
    records:"",
    recordHolder:"",
    date:"",
    championships:"",
    place:"",
    nationality:""
   }]
     addFormService(formDetails){
       this.formDetailsS.push(formDetails);
       localStorage.setItem('details',JSON.stringify(this.formDetailsS))
     }
  constructor() { }
}
