import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Recovery_patient,
Params_Get_Recovery_patient_By_OWNER_ID,
Params_Delete_Recovery_patient,
Patient,
Params_Get_Patient_By_OWNER_ID,
Neighborhood,
Params_Get_Neighborhood_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-recovery_patient',
templateUrl: './recovery_patient.component.html',
styleUrls: ['./recovery_patient.component.css']
})
export class Recovery_patientComponent implements OnInit , OnDestroy  {
Get_Recovery_patient_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Recovery_patient_By_OWNER_ID = new Params_Get_Recovery_patient_By_OWNER_ID();
data: Recovery_patient[] = [];

PatientList: Patient[];
_params_Get_Patient_By_OWNER_ID = new Params_Get_Patient_By_OWNER_ID();
Get_Patient_By_OWNER_ID_Subscription = new Subscription();

NeighborhoodList: Neighborhood[];
_params_Get_Neighborhood_By_OWNER_ID = new Params_Get_Neighborhood_By_OWNER_ID();
Get_Neighborhood_By_OWNER_ID_Subscription = new Subscription();



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {

this._params_Get_Patient_By_OWNER_ID.OWNER_ID = 1;
this.Get_Patient_By_OWNER_ID_Subscription = this.proxy.Get_Patient_By_OWNER_ID(this._params_Get_Patient_By_OWNER_ID).subscribe(result => this.PatientList = result);

this._params_Get_Neighborhood_By_OWNER_ID.OWNER_ID = 1;
this.Get_Neighborhood_By_OWNER_ID_Subscription = this.proxy.Get_Neighborhood_By_OWNER_ID(this._params_Get_Neighborhood_By_OWNER_ID).subscribe(result => this.NeighborhoodList = result);


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Recovery_patient_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Patient_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Neighborhood_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Recovery_patient_By_OWNER_ID_Subscription = this.proxy.Get_Recovery_patient_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.RECOVERY_PATIENT_ID === -1).length > 0) {
return;
}
}
const record = new Recovery_patient();
record.RECOVERY_PATIENT_ID = -1;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Recovery_patient(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.RECOVERY_PATIENT_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_RECOVERY_PATIENT]&REL_FIELD=RECOVERY_PATIENT_IMAGE&REL_KEY=' + newEntry.RECOVERY_PATIENT_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Recovery_patient = new Params_Delete_Recovery_patient();
_params_Delete_Recovery_patient.RECOVERY_PATIENT_ID = entry.RECOVERY_PATIENT_ID;
this.proxy.Delete_Recovery_patient(_params_Delete_Recovery_patient).subscribe(data => {
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
