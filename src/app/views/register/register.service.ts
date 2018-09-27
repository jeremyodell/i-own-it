import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  registerUser(values: any): void {
    this.httpClient.post('http://localhost:3001/api/users/register', values)
      .subscribe(
        (data) => {
        console.log('here is the return data', data);
        },
        (err) => {
          window.alert('error ' + err);
        }
      );

    }
}
