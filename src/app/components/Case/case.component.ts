import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Case,
Params_Get_Case_By_OWNER_ID,
Params_Delete_Case,
Person,
Params_Get_Person_By_OWNER_ID,
Neighborhood,
Params_Get_Neighborhood_By_OWNER_ID,
Confinement,
Params_Get_Confinement_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-case',
templateUrl: './case.component.html',
styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit , OnDestroy  {
Get_Case_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Case_By_OWNER_ID = new Params_Get_Case_By_OWNER_ID();
data: Case[] = [];

PersonList: Person[];
_params_Get_Person_By_OWNER_ID = new Params_Get_Person_By_OWNER_ID();
Get_Person_By_OWNER_ID_Subscription = new Subscription();

NeighborhoodList: Neighborhood[];
_params_Get_Neighborhood_By_OWNER_ID = new Params_Get_Neighborhood_By_OWNER_ID();
Get_Neighborhood_By_OWNER_ID_Subscription = new Subscription();

ConfinementList: Confinement[];
_params_Get_Confinement_By_OWNER_ID = new Params_Get_Confinement_By_OWNER_ID();
Get_Confinement_By_OWNER_ID_Subscription = new Subscription();



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {

this._params_Get_Person_By_OWNER_ID.OWNER_ID = 1;
this.Get_Person_By_OWNER_ID_Subscription = this.proxy.Get_Person_By_OWNER_ID(this._params_Get_Person_By_OWNER_ID).subscribe(result => this.PersonList = result);

this._params_Get_Neighborhood_By_OWNER_ID.OWNER_ID = 1;
this.Get_Neighborhood_By_OWNER_ID_Subscription = this.proxy.Get_Neighborhood_By_OWNER_ID(this._params_Get_Neighborhood_By_OWNER_ID).subscribe(result => this.NeighborhoodList = result);

this._params_Get_Confinement_By_OWNER_ID.OWNER_ID = 1;
this.Get_Confinement_By_OWNER_ID_Subscription = this.proxy.Get_Confinement_By_OWNER_ID(this._params_Get_Confinement_By_OWNER_ID).subscribe(result => this.ConfinementList = result);


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Case_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Person_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Neighborhood_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Confinement_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Case_By_OWNER_ID_Subscription = this.proxy.Get_Case_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.CASE_ID === -1).length > 0) {
return;
}
}
const record = new Case();
record.CASE_ID = -1;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Case(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.CASE_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_CASE]&REL_FIELD=CASE_IMAGE&REL_KEY=' + newEntry.CASE_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Case = new Params_Delete_Case();
_params_Delete_Case.CASE_ID = entry.CASE_ID;
this.proxy.Delete_Case(_params_Delete_Case).subscribe(data => {
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
