import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public token: string | null = null;



  
  constructor(private http:HttpClient) { 

    
  }
  url="https://app.verfrut.cl/api-app/public/index.php/api/";




  insertardatos(data:any):Observable<any>{
    let json=JSON.stringify(data);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
  
    return this.http.post(this.url+'controlpesaje/insertaregistrocontacto',params,{headers:headers});
  }
 
  
  
}
