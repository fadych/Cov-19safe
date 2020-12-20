import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatExpansionModule, MatSnackBarModule, MatToolbarModule, MatDialogModule, MatAutocompleteModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    imports: [
                MatButtonModule,
                MatIconModule,
                MatFormFieldModule,
                MatInputModule,
                MatCardModule,
                MatSelectModule,
                MatExpansionModule,
                MatSnackBarModule,
                MatCheckboxModule,
                MatToolbarModule,
                MatDialogModule,
                MatTabsModule,
                MatAutocompleteModule
             ],
    exports: [
                MatButtonModule,
                MatIconModule,
                MatFormFieldModule,
                MatInputModule,
                MatCardModule,
                MatSelectModule,
                MatExpansionModule,
                MatSnackBarModule,
                MatCheckboxModule,
                MatToolbarModule,
                MatDialogModule,
                MatTabsModule,
                MatAutocompleteModule
             ]
})
export class MaterialModule {

}
