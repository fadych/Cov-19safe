import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Neighborhood,
Params_Get_Neighborhood_By_OWNER_ID,
Params_Delete_Neighborhood,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-neighborhood',
templateUrl: './neighborhood.component.html',
styleUrls: ['./neighborhood.component.css']
})
export class NeighborhoodComponent implements OnInit , OnDestroy  {
Get_Neighborhood_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Neighborhood_By_OWNER_ID = new Params_Get_Neighborhood_By_OWNER_ID();
data: Neighborhood[] = [];



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Neighborhood_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Neighborhood_By_OWNER_ID_Subscription = this.proxy.Get_Neighborhood_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.NEIGHBORHOOD_ID === -1).length > 0) {
return;
}
}
const record = new Neighborhood();
record.NEIGHBORHOOD_ID = -1;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Neighborhood(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.NEIGHBORHOOD_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_NEIGHBORHOOD]&REL_FIELD=NEIGHBORHOOD_IMAGE&REL_KEY=' + newEntry.NEIGHBORHOOD_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Neighborhood = new Params_Delete_Neighborhood();
_params_Delete_Neighborhood.NEIGHBORHOOD_ID = entry.NEIGHBORHOOD_ID;
this.proxy.Delete_Neighborhood(_params_Delete_Neighborhood).subscribe(data => {
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
