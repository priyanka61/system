import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormService {
   constructor(private http:HttpClient) { 
}
addingUrl=' http://localhost:3000';
// formDetailsS=[{
//   tournment:"",
//   sports:"",
//   events:"",
//   records:"",
//   recordHolder:"",
//   date:"",
//   championships:"",
//   place:"",
//   nationality:""
//  }]
 //locally added
  //  addFormService(formDetails){
  //    this.formDetailsS.push(formDetails);
  //    localStorage.setItem('details',JSON.stringify(this.formDetailsS))
  //  }
  addFormService(formDetails):Observable<any>{
    let header=new HttpHeaders({
      'Accept':'application/json'
    });
    let options={headers:header};
    return this.http.post(this.addingUrl + '/create',formDetails)
  }
  list():Observable<any>{
    let header=new HttpHeaders({
      'Accept':'application/json'
    });
    let options={headers:header};
    return this.http.post(this.addingUrl + '/list',{});
  }
}