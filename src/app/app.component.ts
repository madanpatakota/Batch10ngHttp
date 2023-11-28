import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Batch10ngHttp';

  constructor(public httpClient: HttpClient) {}

  JsonPlaceHolderAPI = 'https://jsonplaceholder.typicode.com/posts';
  localhostApiCustomers = 'http://localhost:3000/customers';
  customerID = '';
  CusName = '';
  CusJob = '';

  patchCutomerID = '';
  patchCusName = '';
  patchCusJob = '';

  //Test api
  //jsonplaceholder - Maintain the api

  //you have to subscribe the api
  // get , post , put , delete , patch

  // something you are expecting data from the api

  jsonPlaceHolderkAPIData: any = [];
  customersAPIData: any = [];
  ngOnInit(): void {
    // this.httpClient.get(this.JsonPlaceHolderAPI).subscribe((data)=>{
    //      console.log(data);
    //      // I am going to bind the data...
    //      this.jsonPlaceHolderkAPIData = data;

    // })

    this.httpClient.get(this.localhostApiCustomers).subscribe((data) => {
      console.log(data);
      // I am going to bind the data...
      this.customersAPIData = data;
    });
  }

  //                         http://localhost:3000/customers/___________
  //localhostApiCustomers = "http://localhost:3000/customers";
  evtGetCustomerBYID() {
    this.httpClient
      .get('http://localhost:3000/customers/' + this.customerID + '')
      .subscribe((data) => {
        console.log(data);
        // I am going to bind the data...

        var latestRecords = [];
        latestRecords.push(data);

        this.customersAPIData = latestRecords;
      });
  }

  evtPost() {
    this.httpClient
      .post('http://localhost:3000/customers', {
        Name: this.CusName,
        Job: this.CusJob,
      })
      .subscribe((data) => {
        //console.log(data);
        this.customersAPIData.push(data);
      });
  }

  // on which id
  // what is the patch   ............
  evtPatch() {
    this.httpClient
      .patch('http://localhost:3000/customers/' + this.patchCutomerID,
       {
        Name: this.patchCusName,
       })
      .subscribe((data) => {
        //console.log(data);
        this.customersAPIData.push(data);   /// this is bug
      });
  }
}
