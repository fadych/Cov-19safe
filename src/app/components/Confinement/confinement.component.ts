import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Confinement,
Params_Get_Confinement_By_OWNER_ID,
Params_Delete_Confinement,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-confinement',
templateUrl: './confinement.component.html',
styleUrls: ['./confinement.component.css']
})
export class ConfinementComponent implements OnInit , OnDestroy  {
Get_Confinement_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Confinement_By_OWNER_ID = new Params_Get_Confinement_By_OWNER_ID();
data: Confinement[] = [];



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Confinement_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Confinement_By_OWNER_ID_Subscription = this.proxy.Get_Confinement_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.CONFINEMENT_ID === -1).length > 0) {
return;
}
}
const record = new Confinement();
record.CONFINEMENT_ID = -1;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Confinement(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.CONFINEMENT_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_CONFINEMENT]&REL_FIELD=CONFINEMENT_IMAGE&REL_KEY=' + newEntry.CONFINEMENT_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Confinement = new Params_Delete_Confinement();
_params_Delete_Confinement.CONFINEMENT_ID = entry.CONFINEMENT_ID;
this.proxy.Delete_Confinement(_params_Delete_Confinement).subscribe(data => {
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
