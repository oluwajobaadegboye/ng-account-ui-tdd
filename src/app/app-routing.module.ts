import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './views/content/account-list/account-list.component';
import { AccountCreateComponent } from './views/content/account-create/account-create.component';
import { ContactListComponent } from './views/content/contact-list/contact-list.component';
import { ContactCreateComponent } from './views/content/contact-create/contact-create.component';
import { ActivityListComponent } from './views/content/activity-list/activity-list.component';
import { ActivityCreateComponent } from './views/content/activity-create/activity-create.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'accounts',
    component: AccountListComponent
  },
  {
    path: 'create-account',
    component: AccountCreateComponent
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'create-contact',
    component: ContactCreateComponent
  },
  {
    path: 'activities',
    component: ActivityListComponent
  },
  {
    path: 'create-activity',
    component: ActivityCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
