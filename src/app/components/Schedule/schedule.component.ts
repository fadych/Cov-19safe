import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Schedule,
Params_Get_Schedule_By_OWNER_ID,
Params_Delete_Schedule,
Neighborhood,
Params_Get_Neighborhood_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-schedule',
templateUrl: './schedule.component.html',
styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit , OnDestroy  {
Get_Schedule_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Schedule_By_OWNER_ID = new Params_Get_Schedule_By_OWNER_ID();
data: Schedule[] = [];

NeighborhoodList: Neighborhood[];
_params_Get_Neighborhood_By_OWNER_ID = new Params_Get_Neighborhood_By_OWNER_ID();
Get_Neighborhood_By_OWNER_ID_Subscription = new Subscription();



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {

this._params_Get_Neighborhood_By_OWNER_ID.OWNER_ID = 1;
this.Get_Neighborhood_By_OWNER_ID_Subscription = this.proxy.Get_Neighborhood_By_OWNER_ID(this._params_Get_Neighborhood_By_OWNER_ID).subscribe(result => this.NeighborhoodList = result);


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Schedule_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Neighborhood_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Schedule_By_OWNER_ID_Subscription = this.proxy.Get_Schedule_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.SCHEDULE_ID === -1).length > 0) {
return;
}
}
const record = new Schedule();
record.SCHEDULE_ID = -1;
record.ISCLOSED = false;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Schedule(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.SCHEDULE_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_SCHEDULE]&REL_FIELD=SCHEDULE_IMAGE&REL_KEY=' + newEntry.SCHEDULE_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Schedule = new Params_Delete_Schedule();
_params_Delete_Schedule.SCHEDULE_ID = entry.SCHEDULE_ID;
this.proxy.Delete_Schedule(_params_Delete_Schedule).subscribe(data => {
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
