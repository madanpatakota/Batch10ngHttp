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

  putCutomerID = '';
  putCusName = '';
  putCusJob = '';

  deleteCutomerID = '';
  deleteCusName = '';
  deleteCusJob = '';

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

    // some apis needs the information about you......
    //  Authorization information pass


    // their might be one information is common for all the apis

    // your authentication....


    // How to you maintain the common information to the all apis in the project

    this.httpClient
      .get('http://localhost:3000/customers', 
      {
        headers: {
            CompanyName : "Misard.com",
            Role        : "Admin",
            Project     : "Angular Project"
        },
        params : {
            Location : "Bangolore"
        }
      },
      
      
      )
      .subscribe((data) => {
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
      .patch('http://localhost:3000/customers/' + this.patchCutomerID, {
        Name: this.patchCusName,
      })
      .subscribe((data: any) => {
        var index = this.customersAPIData.findIndex((x: any) => {
          return x.id == data.id;
        });

        this.customersAPIData[index].Name = data.Name;

        //  arrayavalues[2].Name = "_______";

        //  var arrayavalues = [ {Name:""} , {Name : ""} , {Name : ""}]

        //console.log(data);

        // plan

        // 1.

        // var a = [];
        // a.push(1)  = [1]
        //this.customersAPIData.push(data);   /// this is bug  // push which inserts record
      });
  }

  // put

  // An api which is taking the responsibility to update all records based on the id

  evtPut() {
    this.httpClient
      .put('http://localhost:3000/customers/' + this.putCutomerID, {
        Name: this.putCusName,
        Job: this.putCusJob,
      })
      .subscribe((data: any) => {
        var index = this.customersAPIData.findIndex((x: any) => {
          return x.id == data.id;
        }); // you will get the index based on the id

        this.customersAPIData[index].Name = data.Name;
        this.customersAPIData[index].Job = data.Job;
      });
  }

  // very imporant how to connect the API
  // you have to subscribe

  // TASK from your team leader

  //  DEVELOPERS ,

  //stages
  //  DEV ,            QA , UAT , CERT(before Prod) , PROD(Money)

  // Delete

  // An api which is taking the responsibility to delete the record(s) on the based on parameter(id)
  // He will give the api
  evtDelete() {
    this.httpClient
      .delete('http://localhost:3000/customers/' + this.deleteCutomerID)
      .subscribe((response) => {
        // half-hour  - you have to share screen and show me code ....
        //  how are you update the table (you have to remove the id)
        // now i am getting empty object data
        // slice or splice
        // length
        //console.log(data);
      });
  }
}





