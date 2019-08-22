import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from '../../../model/model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  displayedColumns = ["name", "email", "phone", "website", "action"];
  public dataSource = new MatTableDataSource<Account>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dynamicColumns = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: row => row.id,
    },
    {
      columnDef: 'name',
      header: 'Name',
      link: row => ([row.id]),
      cell: row => row.name,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: row => row.email,
    },
    {
      columnDef: 'phone',
      header: 'Phone',
      cell: row => row.phone,
    },
    {
      columnDef: 'industry',
      header: 'Industry',
      cell: row => row.industry,
    },
    {
      columnDef: 'website',
      header: 'Website',
      cell: row => row.website,
    }
  ];

  constructor(private accountService: AccountService) { }

  ngOnInit() {

    this.getAccounts();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  getAccounts() {
    this.accountService.getAllAccounts()
      .subscribe(
        accounts => {
          this.dataSource.data = accounts as Account[];
        }
      );
  }

  onDetails(id: number) {
    console.log('Detail', id);
  }

  onDelete(id: number) {
    console.log('delete', id);
  }

  onUpdate(id: number) {
    console.log('Update ', id)
  }

}
