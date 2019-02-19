import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class CertificateService {

    _url_list = "./../../assets/data/mock-certificates-list.json"
    _url_details = "./../../assets/data/mock-certificate-single.json"

    constructor(private http: HttpClient) {}

    
    getCertificateList(): Observable<ICertificateList[]> {
        return this.http.get<ICertificateList[]>(this._url_list);
    }

    getCertificateDetails(): Observable<ICertificateObj> {
        return this.http.get<ICertificateObj>(this._url_details);
    }

}