import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Person,
Params_Get_Person_By_OWNER_ID,
Params_Delete_Person,
Neighborhood,
Params_Get_Neighborhood_By_OWNER_ID,
Gender,
Params_Get_Gender_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-person',
templateUrl: './person.component.html',
styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit , OnDestroy  {
Get_Person_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Person_By_OWNER_ID = new Params_Get_Person_By_OWNER_ID();
data: Person[] = [];

NeighborhoodList: Neighborhood[];
_params_Get_Neighborhood_By_OWNER_ID = new Params_Get_Neighborhood_By_OWNER_ID();
Get_Neighborhood_By_OWNER_ID_Subscription = new Subscription();

GenderList: Gender[];
_params_Get_Gender_By_OWNER_ID = new Params_Get_Gender_By_OWNER_ID();
Get_Gender_By_OWNER_ID_Subscription = new Subscription();



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {

this._params_Get_Neighborhood_By_OWNER_ID.OWNER_ID = 1;
this.Get_Neighborhood_By_OWNER_ID_Subscription = this.proxy.Get_Neighborhood_By_OWNER_ID(this._params_Get_Neighborhood_By_OWNER_ID).subscribe(result => this.NeighborhoodList = result);

this._params_Get_Gender_By_OWNER_ID.OWNER_ID = 1;
this.Get_Gender_By_OWNER_ID_Subscription = this.proxy.Get_Gender_By_OWNER_ID(this._params_Get_Gender_By_OWNER_ID).subscribe(result => this.GenderList = result);


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Person_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Neighborhood_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Gender_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Person_By_OWNER_ID_Subscription = this.proxy.Get_Person_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.PERSON_ID === -1).length > 0) {
return;
}
}
const record = new Person();
record.PERSON_ID = -1;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Person(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.PERSON_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_PERSON]&REL_FIELD=PERSON_IMAGE&REL_KEY=' + newEntry.PERSON_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Person = new Params_Delete_Person();
_params_Delete_Person.PERSON_ID = entry.PERSON_ID;
this.proxy.Delete_Person(_params_Delete_Person).subscribe(data => {
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
