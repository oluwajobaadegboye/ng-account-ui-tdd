import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'; 
import { Account } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllAccounts(): Observable<Account[]> {
    console.log(`${this.baseUrl}accounts`)
    return this.httpClient.get<Account[]>(`${this.baseUrl}accounts`)
  }

  getAccount(id: number) : Observable<Account> {
    return this.httpClient.get<Account>(`${this.baseUrl}accounts/${id}`)
  }

  createAccount(account: Account) {
    return this.httpClient.post(`${this.baseUrl}accounts`, account)
  }

}
