import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { CommonService } from './common.service';
@Injectable()
export class Proxy {
APIBaseUrl = '';
url = '';
constructor(public api: HttpClient, private common: CommonService) {
this.APIBaseUrl = common.APIUrl; 
}
Edit_Person(i_Person: Person) : Observable<Person> {
this.url = this.APIBaseUrl + '/Edit_Person?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Person>(this.url, JSON.stringify(i_Person), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Person;}));
}
Delete_Person(i_Params_Delete_Person: Params_Delete_Person) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Person?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Person), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Person_By_OWNER_ID(i_Params_Get_Person_By_OWNER_ID: Params_Get_Person_By_OWNER_ID) : Observable<Person[]> {
this.url = this.APIBaseUrl + '/Get_Person_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Person_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Person_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Person_By_OWNER_ID_Adv(i_Params_Get_Person_By_OWNER_ID: Params_Get_Person_By_OWNER_ID) : Observable<Person[]> {
this.url = this.APIBaseUrl + '/Get_Person_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Person_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Person_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Gender_By_OWNER_ID(i_Params_Get_Gender_By_OWNER_ID: Params_Get_Gender_By_OWNER_ID) : Observable<Gender[]> {
this.url = this.APIBaseUrl + '/Get_Gender_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Gender_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Gender_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Authenticate(i_Params_Authenticate: Params_Authenticate) : Observable<User> {
this.url = this.APIBaseUrl + '/Authenticate?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Authenticate>(this.url, JSON.stringify(i_Params_Authenticate), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Neighborhood(i_Neighborhood: Neighborhood) : Observable<Neighborhood> {
this.url = this.APIBaseUrl + '/Edit_Neighborhood?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Neighborhood>(this.url, JSON.stringify(i_Neighborhood), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Neighborhood;}));
}
Delete_Neighborhood(i_Params_Delete_Neighborhood: Params_Delete_Neighborhood) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Neighborhood?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Neighborhood), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Neighborhood_By_OWNER_ID(i_Params_Get_Neighborhood_By_OWNER_ID: Params_Get_Neighborhood_By_OWNER_ID) : Observable<Neighborhood[]> {
this.url = this.APIBaseUrl + '/Get_Neighborhood_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Neighborhood_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Neighborhood_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Neighborhood_By_OWNER_ID_Adv(i_Params_Get_Neighborhood_By_OWNER_ID: Params_Get_Neighborhood_By_OWNER_ID) : Observable<Neighborhood[]> {
this.url = this.APIBaseUrl + '/Get_Neighborhood_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Neighborhood_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Neighborhood_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Patient(i_Patient: Patient) : Observable<Patient> {
this.url = this.APIBaseUrl + '/Edit_Patient?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Patient>(this.url, JSON.stringify(i_Patient), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Patient;}));
}
Delete_Patient(i_Params_Delete_Patient: Params_Delete_Patient) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Patient?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Patient), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Patient_By_OWNER_ID(i_Params_Get_Patient_By_OWNER_ID: Params_Get_Patient_By_OWNER_ID) : Observable<Patient[]> {
this.url = this.APIBaseUrl + '/Get_Patient_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Patient_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Patient_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Patient_By_OWNER_ID_Adv(i_Params_Get_Patient_By_OWNER_ID: Params_Get_Patient_By_OWNER_ID) : Observable<Patient[]> {
this.url = this.APIBaseUrl + '/Get_Patient_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Patient_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Patient_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Confinement(i_Confinement: Confinement) : Observable<Confinement> {
this.url = this.APIBaseUrl + '/Edit_Confinement?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Confinement>(this.url, JSON.stringify(i_Confinement), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Confinement;}));
}
Delete_Confinement(i_Params_Delete_Confinement: Params_Delete_Confinement) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Confinement?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Confinement), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Confinement_By_OWNER_ID(i_Params_Get_Confinement_By_OWNER_ID: Params_Get_Confinement_By_OWNER_ID) : Observable<Confinement[]> {
this.url = this.APIBaseUrl + '/Get_Confinement_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Confinement_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Confinement_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Confinement_By_OWNER_ID_Adv(i_Params_Get_Confinement_By_OWNER_ID: Params_Get_Confinement_By_OWNER_ID) : Observable<Confinement[]> {
this.url = this.APIBaseUrl + '/Get_Confinement_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Confinement_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Confinement_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Contact_case(i_Contact_case: Contact_case) : Observable<Contact_case> {
this.url = this.APIBaseUrl + '/Edit_Contact_case?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Contact_case>(this.url, JSON.stringify(i_Contact_case), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Contact_case;}));
}
Delete_Contact_case(i_Params_Delete_Contact_case: Params_Delete_Contact_case) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Contact_case?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Contact_case), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Contact_case_By_OWNER_ID(i_Params_Get_Contact_case_By_OWNER_ID: Params_Get_Contact_case_By_OWNER_ID) : Observable<Contact_case[]> {
this.url = this.APIBaseUrl + '/Get_Contact_case_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Contact_case_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Contact_case_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Contact_case_By_OWNER_ID_Adv(i_Params_Get_Contact_case_By_OWNER_ID: Params_Get_Contact_case_By_OWNER_ID) : Observable<Contact_case[]> {
this.url = this.APIBaseUrl + '/Get_Contact_case_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Contact_case_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Contact_case_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Delete_Death_patient(i_Params_Delete_Death_patient: Params_Delete_Death_patient) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Death_patient?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Death_patient), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Edit_Death_patient(i_Death_patient: Death_patient) : Observable<Death_patient> {
this.url = this.APIBaseUrl + '/Edit_Death_patient?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Death_patient>(this.url, JSON.stringify(i_Death_patient), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Death_patient;}));
}
Get_Death_patient_By_OWNER_ID(i_Params_Get_Death_patient_By_OWNER_ID: Params_Get_Death_patient_By_OWNER_ID) : Observable<Death_patient[]> {
this.url = this.APIBaseUrl + '/Get_Death_patient_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Death_patient_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Death_patient_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Death_patient_By_OWNER_ID_Adv(i_Params_Get_Death_patient_By_OWNER_ID: Params_Get_Death_patient_By_OWNER_ID) : Observable<Death_patient[]> {
this.url = this.APIBaseUrl + '/Get_Death_patient_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Death_patient_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Death_patient_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Delete_Recovery_patient(i_Params_Delete_Recovery_patient: Params_Delete_Recovery_patient) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Recovery_patient?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Recovery_patient), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Edit_Recovery_patient(i_Recovery_patient: Recovery_patient) : Observable<Recovery_patient> {
this.url = this.APIBaseUrl + '/Edit_Recovery_patient?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Recovery_patient>(this.url, JSON.stringify(i_Recovery_patient), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Recovery_patient;}));
}
Get_Recovery_patient_By_OWNER_ID(i_Params_Get_Recovery_patient_By_OWNER_ID: Params_Get_Recovery_patient_By_OWNER_ID) : Observable<Recovery_patient[]> {
this.url = this.APIBaseUrl + '/Get_Recovery_patient_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Recovery_patient_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Recovery_patient_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Recovery_patient_By_OWNER_ID_Adv(i_Params_Get_Recovery_patient_By_OWNER_ID: Params_Get_Recovery_patient_By_OWNER_ID) : Observable<Recovery_patient[]> {
this.url = this.APIBaseUrl + '/Get_Recovery_patient_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Recovery_patient_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Recovery_patient_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Schedule(i_Schedule: Schedule) : Observable<Schedule> {
this.url = this.APIBaseUrl + '/Edit_Schedule?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Schedule>(this.url, JSON.stringify(i_Schedule), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Schedule;}));
}
Delete_Schedule(i_Params_Delete_Schedule: Params_Delete_Schedule) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Schedule?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Schedule), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Schedule_By_OWNER_ID(i_Params_Get_Schedule_By_OWNER_ID: Params_Get_Schedule_By_OWNER_ID) : Observable<Schedule[]> {
this.url = this.APIBaseUrl + '/Get_Schedule_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Schedule_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Schedule_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Schedule_By_OWNER_ID_Adv(i_Params_Get_Schedule_By_OWNER_ID: Params_Get_Schedule_By_OWNER_ID) : Observable<Schedule[]> {
this.url = this.APIBaseUrl + '/Get_Schedule_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Schedule_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Schedule_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Case(i_Case: Case) : Observable<Case> {
this.url = this.APIBaseUrl + '/Edit_Case?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Case>(this.url, JSON.stringify(i_Case), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Case;}));
}
Delete_Case(i_Params_Delete_Case: Params_Delete_Case) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Case?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Case), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Case_By_OWNER_ID(i_Params_Get_Case_By_OWNER_ID: Params_Get_Case_By_OWNER_ID) : Observable<Case[]> {
this.url = this.APIBaseUrl + '/Get_Case_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Case_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Case_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Case_By_OWNER_ID_Adv(i_Params_Get_Case_By_OWNER_ID: Params_Get_Case_By_OWNER_ID) : Observable<Case[]> {
this.url = this.APIBaseUrl + '/Get_Case_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Case_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Case_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
}
export class Person
{
PERSON_ID?: number;
NEIGHBORHOOD_ID?: number;
FIRSTNAME: string;
LASTNAME: string;
FATHERNAME: string;
MOTHERNAME: string;
GENDER_ID?: number;
DOB: string;
TEL?: number;
EMAIL: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Neighborhood: Neighborhood;
My_Gender: Gender;
}
export class Neighborhood
{
NEIGHBORHOOD_ID?: number;
NAME: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
export class Gender
{
GENDER_ID?: number;
GENDER_NAME: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
export class Params_Delete_Person
{
PERSON_ID?: number;
}
export class Params_Get_Person_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Gender_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Authenticate
{
USERNAME: string;
PASSWORD: string;
}
export class User
{
USER_ID?: number;
OWNER_ID?: number;
USERNAME: string;
PASSWORD: string;
USER_TYPE_CODE: string;
IS_ACTIVE?: boolean;
ENTRY_DATE: string;
}
export class Params_Delete_Neighborhood
{
NEIGHBORHOOD_ID?: number;
}
export class Params_Get_Neighborhood_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Patient
{
PATIENT_ID?: number;
PERSON_ID?: number;
NEIGHBORHOOD_ID?: number;
FIRSTNAME: string;
LASTNAME: string;
FATHERNAME: string;
MOTHERNAME: string;
STARTDATE: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
DESCRIPTION: string;
My_Person: Person;
My_Neighborhood: Neighborhood;
}
export class Params_Delete_Patient
{
PATIENT_ID?: number;
}
export class Params_Get_Patient_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Confinement
{
CONFINEMENT_ID?: number;
STARTDATE: string;
ENDDATE: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
DESCRIPTION: string;
}
export class Params_Delete_Confinement
{
CONFINEMENT_ID?: number;
}
export class Params_Get_Confinement_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Contact_case
{
CONTACT_CASE_ID?: number;
PERSON_ID?: number;
NEIGHBORHOOD_ID?: number;
PATIENT_ID?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
DESCRIPTION: string;
My_Person: Person;
My_Neighborhood: Neighborhood;
My_Patient: Patient;
}
export class Params_Delete_Contact_case
{
CONTACT_CASE_ID?: number;
}
export class Params_Get_Contact_case_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Delete_Death_patient
{
DEATH_PATIENT_ID?: number;
}
export class Death_patient
{
DEATH_PATIENT_ID?: number;
PATIENT_ID?: number;
NEIGHBORHOOD_ID?: number;
DIEDATE: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
DESCRIPTION: string;
My_Patient: Patient;
My_Neighborhood: Neighborhood;
}
export class Params_Get_Death_patient_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Delete_Recovery_patient
{
RECOVERY_PATIENT_ID?: number;
}
export class Recovery_patient
{
RECOVERY_PATIENT_ID?: number;
PATIENT_ID?: number;
NEIGHBORHOOD_ID?: number;
RECOVERYDATE: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
DESCRIPTION: string;
My_Patient: Patient;
My_Neighborhood: Neighborhood;
}
export class Params_Get_Recovery_patient_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Schedule
{
SCHEDULE_ID?: number;
NEIGHBORHOOD_ID?: number;
STARTDATE: string;
ENDDATE: string;
ISCLOSED?: boolean;
COMMENT: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Neighborhood: Neighborhood;
}
export class Params_Delete_Schedule
{
SCHEDULE_ID?: number;
}
export class Params_Get_Schedule_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Case
{
CASE_ID?: number;
PERSON_ID?: number;
NEIGHBORHOOD_ID?: number;
CONFINEMENT_ID?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
DESCRIPTION: string;
My_Person: Person;
My_Neighborhood: Neighborhood;
My_Confinement: Confinement;
}
export class Params_Delete_Case
{
CASE_ID?: number;
}
export class Params_Get_Case_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Action_Result{
ExceptionMsg: string;
}
export class Result_Edit_Person extends Action_Result {
My_Person : Person;
}
export class Result_Delete_Person extends Action_Result {
My_Params_Delete_Person : Params_Delete_Person;
}
export class Result_Get_Person_By_OWNER_ID extends Action_Result {
My_Result : Person[];
My_Params_Get_Person_By_OWNER_ID : Params_Get_Person_By_OWNER_ID;
}
export class Result_Get_Person_By_OWNER_ID_Adv extends Action_Result {
My_Result : Person[];
My_Params_Get_Person_By_OWNER_ID : Params_Get_Person_By_OWNER_ID;
}
export class Result_Get_Gender_By_OWNER_ID extends Action_Result {
My_Result : Gender[];
My_Params_Get_Gender_By_OWNER_ID : Params_Get_Gender_By_OWNER_ID;
}
export class Result_Authenticate extends Action_Result {
My_Result : User;
My_Params_Authenticate : Params_Authenticate;
}
export class Result_Edit_Neighborhood extends Action_Result {
My_Neighborhood : Neighborhood;
}
export class Result_Delete_Neighborhood extends Action_Result {
My_Params_Delete_Neighborhood : Params_Delete_Neighborhood;
}
export class Result_Get_Neighborhood_By_OWNER_ID extends Action_Result {
My_Result : Neighborhood[];
My_Params_Get_Neighborhood_By_OWNER_ID : Params_Get_Neighborhood_By_OWNER_ID;
}
export class Result_Get_Neighborhood_By_OWNER_ID_Adv extends Action_Result {
My_Result : Neighborhood[];
My_Params_Get_Neighborhood_By_OWNER_ID : Params_Get_Neighborhood_By_OWNER_ID;
}
export class Result_Edit_Patient extends Action_Result {
My_Patient : Patient;
}
export class Result_Delete_Patient extends Action_Result {
My_Params_Delete_Patient : Params_Delete_Patient;
}
export class Result_Get_Patient_By_OWNER_ID extends Action_Result {
My_Result : Patient[];
My_Params_Get_Patient_By_OWNER_ID : Params_Get_Patient_By_OWNER_ID;
}
export class Result_Get_Patient_By_OWNER_ID_Adv extends Action_Result {
My_Result : Patient[];
My_Params_Get_Patient_By_OWNER_ID : Params_Get_Patient_By_OWNER_ID;
}
export class Result_Edit_Confinement extends Action_Result {
My_Confinement : Confinement;
}
export class Result_Delete_Confinement extends Action_Result {
My_Params_Delete_Confinement : Params_Delete_Confinement;
}
export class Result_Get_Confinement_By_OWNER_ID extends Action_Result {
My_Result : Confinement[];
My_Params_Get_Confinement_By_OWNER_ID : Params_Get_Confinement_By_OWNER_ID;
}
export class Result_Get_Confinement_By_OWNER_ID_Adv extends Action_Result {
My_Result : Confinement[];
My_Params_Get_Confinement_By_OWNER_ID : Params_Get_Confinement_By_OWNER_ID;
}
export class Result_Edit_Contact_case extends Action_Result {
My_Contact_case : Contact_case;
}
export class Result_Delete_Contact_case extends Action_Result {
My_Params_Delete_Contact_case : Params_Delete_Contact_case;
}
export class Result_Get_Contact_case_By_OWNER_ID extends Action_Result {
My_Result : Contact_case[];
My_Params_Get_Contact_case_By_OWNER_ID : Params_Get_Contact_case_By_OWNER_ID;
}
export class Result_Get_Contact_case_By_OWNER_ID_Adv extends Action_Result {
My_Result : Contact_case[];
My_Params_Get_Contact_case_By_OWNER_ID : Params_Get_Contact_case_By_OWNER_ID;
}
export class Result_Delete_Death_patient extends Action_Result {
My_Params_Delete_Death_patient : Params_Delete_Death_patient;
}
export class Result_Edit_Death_patient extends Action_Result {
My_Death_patient : Death_patient;
}
export class Result_Get_Death_patient_By_OWNER_ID extends Action_Result {
My_Result : Death_patient[];
My_Params_Get_Death_patient_By_OWNER_ID : Params_Get_Death_patient_By_OWNER_ID;
}
export class Result_Get_Death_patient_By_OWNER_ID_Adv extends Action_Result {
My_Result : Death_patient[];
My_Params_Get_Death_patient_By_OWNER_ID : Params_Get_Death_patient_By_OWNER_ID;
}
export class Result_Delete_Recovery_patient extends Action_Result {
My_Params_Delete_Recovery_patient : Params_Delete_Recovery_patient;
}
export class Result_Edit_Recovery_patient extends Action_Result {
My_Recovery_patient : Recovery_patient;
}
export class Result_Get_Recovery_patient_By_OWNER_ID extends Action_Result {
My_Result : Recovery_patient[];
My_Params_Get_Recovery_patient_By_OWNER_ID : Params_Get_Recovery_patient_By_OWNER_ID;
}
export class Result_Get_Recovery_patient_By_OWNER_ID_Adv extends Action_Result {
My_Result : Recovery_patient[];
My_Params_Get_Recovery_patient_By_OWNER_ID : Params_Get_Recovery_patient_By_OWNER_ID;
}
export class Result_Edit_Schedule extends Action_Result {
My_Schedule : Schedule;
}
export class Result_Delete_Schedule extends Action_Result {
My_Params_Delete_Schedule : Params_Delete_Schedule;
}
export class Result_Get_Schedule_By_OWNER_ID extends Action_Result {
My_Result : Schedule[];
My_Params_Get_Schedule_By_OWNER_ID : Params_Get_Schedule_By_OWNER_ID;
}
export class Result_Get_Schedule_By_OWNER_ID_Adv extends Action_Result {
My_Result : Schedule[];
My_Params_Get_Schedule_By_OWNER_ID : Params_Get_Schedule_By_OWNER_ID;
}
export class Result_Edit_Case extends Action_Result {
My_Case : Case;
}
export class Result_Delete_Case extends Action_Result {
My_Params_Delete_Case : Params_Delete_Case;
}
export class Result_Get_Case_By_OWNER_ID extends Action_Result {
My_Result : Case[];
My_Params_Get_Case_By_OWNER_ID : Params_Get_Case_By_OWNER_ID;
}
export class Result_Get_Case_By_OWNER_ID_Adv extends Action_Result {
My_Result : Case[];
My_Params_Get_Case_By_OWNER_ID : Params_Get_Case_By_OWNER_ID;
}
