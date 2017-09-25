import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Config } from '../config';


@Component({
  selector: 'hello-world-app',
  templateUrl: 'hello-world.template.html',
//  template:`
//  <h1>Hello World! {{url}}</h1>
//  <h2>hello hello </h2>
//`,
  styleUrls: ['hello-world.style.css']
})
export class HelloWorldComponent implements OnInit{

    config: Config;
    url: string;

    ngOnInit(): void {
        this.getJSON()
            .then(config => {
                this.config = config;
                console.log(config.url);
                this.url = config.url;
            });
        //console.log(this.config.url);
    }
    constructor(private http: Http) {
       //this.url = 'lalalala';
    }

    public getJSON(): Promise<Config> {
         return this.http.get("./config.json").toPromise()
             .then(res =>
                 res.json() as Config)
             .catch(this.handleError);                            
    }

    private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
}
}
