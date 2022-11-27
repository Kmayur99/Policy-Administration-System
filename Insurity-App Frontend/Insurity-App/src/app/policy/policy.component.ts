import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PolicyDetailsResponse } from '../model/PolicyDetailsResponse';
import { Service } from '../policy-service/service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  message: any;
  policyDetailsResponse: any ;//PolicyDetailsResponse | undefined;

  constructor(private service:Service, private route: ActivatedRoute) { }

  ngOnInit() {
    //let consumerId = this.route.snapshot.params['consumerId'];
    //let policyId = this.route.snapshot.params['policyId'];
    //let consumerId= this.route.snapshot.paramMap.get("consumerId");
    //let policyId = this.route.snapshot.paramMap.get("policyId");
    let consumerId=sessionStorage.getItem("consumerId");
    let policyId=sessionStorage.getItem("policyId");
    //if(consumerId==null){
      //consumerId="987654"
    //}
    console.log("consumerId: "+consumerId);
    console.log("policyId: "+policyId);
    this.service.viewPolicy(consumerId,policyId).subscribe(data =>{
      this.policyDetailsResponse = data
      console.log(this.policyDetailsResponse)},
      error => {
        this.message = "Sorry, Policy not found"
        console.log(this.message)
    })
  }



}
