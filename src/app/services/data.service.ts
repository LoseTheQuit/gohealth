import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
  constructor(public http: Http) {
    console.log("data service connected");
  }

  getPosts() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .map(res => res.json());
  }

  insuranceEligibilityAPI(data: object) {
    console.log("insuranceEligibilityAPI");

    return this.http
      .post("http://localhost:7000/healthcare", data)
      .map(res => res.json());
  }
}
