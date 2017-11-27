import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '9b3184ec3e78202c7cf0';
    private client_secret = 'a3e1fdb3ed077b7354e3b4f3a4d709d0650fada2';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'rhxelj';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }

}