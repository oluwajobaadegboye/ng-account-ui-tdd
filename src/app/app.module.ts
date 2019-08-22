import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { ContentComponent } from './views/content/content.component';
import { AccountListComponent } from './views/content/account-list/account-list.component';
import { AccountCreateComponent } from './views/content/account-create/account-create.component';
import { ContactListComponent } from './views/content/contact-list/contact-list.component';
import { ContactCreateComponent } from './views/content/contact-create/contact-create.component';
import { ActivityListComponent } from './views/content/activity-list/activity-list.component';
import { ActivityCreateComponent } from './views/content/activity-create/activity-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule, MatCardModule } from  '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AccountListComponent,
    AccountCreateComponent,
    ContactListComponent,
    ContactCreateComponent,
    ActivityListComponent,
    ActivityCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatSortModule,
    MatFormFieldModule, 
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
