import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from '../../../model/model';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];
  displayedColumns = ["name","email","phone","industry","website"];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAllAccounts()
      .subscribe(
        accounts => {
          this.accounts = accounts
          console.log(this.accounts)
        }
      )
  }

}
