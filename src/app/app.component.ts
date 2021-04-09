
import { Component } from '@angular/core';

import { FormGroup,FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
interface Patient {
  id:number;
  name:string;
  age:number;
  phone:number;
  email:number;
  regDate:Date;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  patientFormGroup:FormGroup;
  patients:any  ;
  visitingInfo:any; 
     constructor(private httpClient:HttpClient){
        this.patientFormGroup= new FormGroup({
           id: new FormControl("",[]),
           name:new FormControl("",[]),
           age:new FormControl("",[]),
           phone:new FormControl("",[]),
           email:new FormControl("",[])
        });
     }

    get cg(){
       return this.patientFormGroup.controls;
    }

     save(){
         console.log(this.patientFormGroup.value);
         this.httpClient.post("http://localhost:8080/patient/register",this.patientFormGroup.value)
         .subscribe(
           (sucess)=>{console.log(sucess)},
           (failure)=>{console.log(failure)}
         );
     } 


     getAll(){
        this.httpClient.get<Patient[]>("http://localhost:8080/patient/all")
        .subscribe(
           (a)=>{
              console.log(a);
              this.patients=a;
           },
           (a)=>{console.log(a)}
        );
     }

     getPatientById(id:number){
         console.log(id);
         this.httpClient.get<Patient>("http://localhost:8080/patient/byId/"+id)
         .subscribe(
            (a:Patient)=>{ 
               console.log(a);
               this.cg.id.setValue(a.id);
               this.patientFormGroup.controls.name.setValue(a.name);
               this.cg.age.setValue(a.age);
               this.cg.phone.setValue(a.phone);
               this.cg.email.setValue(a.email);
           },
            (a)=>{ console.log(a)}
         );
     }

     getVisitings(id :number){
         this.httpClient.get<any>("http://localhost:8080/visiting/byPatientId/"+id)
         .subscribe(
            (data)=>{
               console.log(data)
               this.visitingInfo=data;
              },
            (err)=>{console.log(err)}
         );
     }

     clearVisitingInfo(){
        this.visitingInfo=null;
     }

  
}
