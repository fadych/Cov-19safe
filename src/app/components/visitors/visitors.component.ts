import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { Case, Contact_case, Death_patient, Neighborhood,Params_Get_Case_By_OWNER_ID,Params_Get_Contact_case_By_OWNER_ID,
  Params_Get_Death_patient_By_OWNER_ID,
  Params_Get_Patient_By_OWNER_ID, Params_Get_Person_By_OWNER_ID, Params_Get_Recovery_patient_By_OWNER_ID, 
  Params_Get_Schedule_By_OWNER_ID, 
  Patient, Person, Proxy, Recovery_patient, Schedule } from '../../core/services/proxy.service';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {
  Patient: Patient[]=[];
  Person: Person[]=[];
  Contact_case: Contact_case[]=[];
  Case: Case[]=[];
  Recovery_patient: Recovery_patient[]=[];
  Death_patient: Death_patient[]=[];
  Schedule: Schedule[]=[];

  constructor(private proxy: Proxy) { }

  ngOnInit() {
    this.ListPerson();
    this.ListPatient();
    this.ListContact();
    this.ListCase();
    this.ListDeath();
    this.ListRecovery();
    this.ListSchedule();
  }

ListPatient(){
var Params: Params_Get_Patient_By_OWNER_ID= new Params_Get_Patient_By_OWNER_ID();
Params.OWNER_ID=1;
this.proxy.Get_Patient_By_OWNER_ID_Adv(Params).subscribe(d=>{
  this.Patient = d;
  // this.Patients[0].My_Neighborhood.NAME;
  // this.Patient[0].My_Person
})
}
  
ListPerson(){
  var Params: Params_Get_Person_By_OWNER_ID= new Params_Get_Person_By_OWNER_ID();
  Params.OWNER_ID=1;
  this.proxy.Get_Person_By_OWNER_ID_Adv(Params).subscribe(d=>{
    this.Person = d;
    
})
}
ListContact(){
var Params: Params_Get_Contact_case_By_OWNER_ID = new Params_Get_Contact_case_By_OWNER_ID();
Params.OWNER_ID=1;
this.proxy.Get_Contact_case_By_OWNER_ID_Adv(Params).subscribe(d=>{
  this.Contact_case= d;
  
})

}
ListCase(){
  var Params: Params_Get_Case_By_OWNER_ID = new Params_Get_Case_By_OWNER_ID();
Params.OWNER_ID=1;
this.proxy.Get_Case_By_OWNER_ID_Adv(Params).subscribe(d=>{
  this.Case= d;
//this.case[0].My_Person

})
}

ListRecovery(){
  var Params: Params_Get_Recovery_patient_By_OWNER_ID= new Params_Get_Recovery_patient_By_OWNER_ID();
  Params.OWNER_ID=1;
  this.proxy.Get_Recovery_patient_By_OWNER_ID_Adv(Params).subscribe(d=>{
    this.Recovery_patient = d;
    //this.Recovery_patient[0].My_Patient
})
}

ListDeath(){
  var Params: Params_Get_Death_patient_By_OWNER_ID= new Params_Get_Death_patient_By_OWNER_ID();
  Params.OWNER_ID=1;
  this.proxy.Get_Death_patient_By_OWNER_ID_Adv(Params).subscribe(d=>{
    this.Death_patient = d;
    
})
}
ListSchedule(){
  var Params: Params_Get_Schedule_By_OWNER_ID= new Params_Get_Schedule_By_OWNER_ID();
  Params.OWNER_ID=1;
  this.proxy.Get_Schedule_By_OWNER_ID_Adv(Params).subscribe(d=>{
    this.Schedule = d;
    
})
}



}

