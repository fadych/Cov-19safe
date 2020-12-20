import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Contact_case,
Params_Get_Contact_case_By_OWNER_ID,
Params_Delete_Contact_case,
Person,
Params_Get_Person_By_OWNER_ID,
Neighborhood,
Params_Get_Neighborhood_By_OWNER_ID,
Patient,
Params_Get_Patient_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-contact_case',
templateUrl: './contact_case.component.html',
styleUrls: ['./contact_case.component.css']
})
export class Contact_caseComponent implements OnInit , OnDestroy  {
Get_Contact_case_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Contact_case_By_OWNER_ID = new Params_Get_Contact_case_By_OWNER_ID();
data: Contact_case[] = [];

PersonList: Person[];
_params_Get_Person_By_OWNER_ID = new Params_Get_Person_By_OWNER_ID();
Get_Person_By_OWNER_ID_Subscription = new Subscription();

NeighborhoodList: Neighborhood[];
_params_Get_Neighborhood_By_OWNER_ID = new Params_Get_Neighborhood_By_OWNER_ID();
Get_Neighborhood_By_OWNER_ID_Subscription = new Subscription();

PatientList: Patient[];
_params_Get_Patient_By_OWNER_ID = new Params_Get_Patient_By_OWNER_ID();
Get_Patient_By_OWNER_ID_Subscription = new Subscription();



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {

this._params_Get_Person_By_OWNER_ID.OWNER_ID = 1;
this.Get_Person_By_OWNER_ID_Subscription = this.proxy.Get_Person_By_OWNER_ID(this._params_Get_Person_By_OWNER_ID).subscribe(result => this.PersonList = result);

this._params_Get_Neighborhood_By_OWNER_ID.OWNER_ID = 1;
this.Get_Neighborhood_By_OWNER_ID_Subscription = this.proxy.Get_Neighborhood_By_OWNER_ID(this._params_Get_Neighborhood_By_OWNER_ID).subscribe(result => this.NeighborhoodList = result);

this._params_Get_Patient_By_OWNER_ID.OWNER_ID = 1;
this.Get_Patient_By_OWNER_ID_Subscription = this.proxy.Get_Patient_By_OWNER_ID(this._params_Get_Patient_By_OWNER_ID).subscribe(result => this.PatientList = result);


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Contact_case_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Person_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Neighborhood_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Patient_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Contact_case_By_OWNER_ID_Subscription = this.proxy.Get_Contact_case_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.CONTACT_CASE_ID === -1).length > 0) {
return;
}
}
const record = new Contact_case();
record.CONTACT_CASE_ID = -1;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Contact_case(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.CONTACT_CASE_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_CONTACT_CASE]&REL_FIELD=CONTACT_CASE_IMAGE&REL_KEY=' + newEntry.CONTACT_CASE_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Contact_case = new Params_Delete_Contact_case();
_params_Delete_Contact_case.CONTACT_CASE_ID = entry.CONTACT_CASE_ID;
this.proxy.Delete_Contact_case(_params_Delete_Contact_case).subscribe(data => {
if (data === '') {
this.data.splice(this.data.indexOf(entry), 1);
}
});
 }
});
}
goBack() {
this.location.back();
}
}
