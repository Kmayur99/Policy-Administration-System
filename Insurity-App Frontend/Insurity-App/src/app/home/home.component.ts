import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessPropertyDetails } from '../model/BusinessPropertyDetails';
import { BusinessPropertyRequest } from '../model/BusinessPropertyRequest';
import { ConsumerBusinessDetails } from '../model/ConsumerBusinessDetails';
import { ConsumerBusinessRequest } from '../model/ConsumerBusinessRequest';
import { CreatePolicyRequest } from '../model/CreatePolicyRequest';
import { IssuePolicyRequest } from '../model/IssuePolicyRequest';
import { Property } from '../model/Property';
import { Service } from '../policy-service/service';
import { PolicyDetailsResponse } from '../model/PolicyDetailsResponse';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  consumerBusinessCreate!: string | null;
  consumerBusinessUpdate!: string | null;
  businessPropertyCreate!: string | null;
  businessPropertyUpdate!: string |null;
  property!: Property;
  quotes!: string | null;
  createPolicyMessage!: string |null;
  issuePolicyMessage!: string | null;
  consumerId: any;
  policyDetailsResponse:any;
  policyId: any;

  constructor(private service:Service, private router:Router) {
    
   }

  ngOnInit() {
  }

  createConsumerBusinessSubmit(consumerBusinessRequest: ConsumerBusinessRequest){
    this.service.createConsumerBusiness(consumerBusinessRequest).subscribe(data => {
      this.consumerBusinessCreate = localStorage.getItem("createCBmessage");
    })
  }

  updateConsumerBusinessSubmit(consumerBusinessDetails: ConsumerBusinessDetails){
    
    this.service.updateConsumerBusiness(consumerBusinessDetails).subscribe(data =>{
      this.consumerBusinessUpdate = localStorage.getItem("updateCBmessage")
    })
  }

  createBusinessPropertySubmit(businessPropertyRequest: BusinessPropertyRequest){
    this.service.createBusinessProperty(businessPropertyRequest).subscribe(data =>{
      this.businessPropertyCreate = localStorage.getItem("createBPmessage")
    })
  }

  updateBusinessPropertySubmit(businessPropertyDetails: BusinessPropertyDetails){
    this.service.updateBusinessProperty(businessPropertyDetails).subscribe(data =>{
      this.businessPropertyUpdate = localStorage.getItem("updateBPmessage")
      console.log(data);
    })
    //console.log(businessPropertyDetails);
  }


  getQuotesSubmit(businessValue: number, propertyValue: number, propertyType: string){
    this.service.getQuotes(businessValue, propertyValue, propertyType).subscribe(data =>{
      this.quotes = localStorage.getItem("viewQuotes")
    })
  }

  createPolicySubmit(createPolicyRequest: CreatePolicyRequest){
    this.service.createPolicy(createPolicyRequest).subscribe(data =>{
      this.createPolicyMessage = localStorage.getItem("createPolicy")
    })
  }

  issuePolicySubmit(issuePolicyRequest: IssuePolicyRequest){
    this.service.issuePolicy(issuePolicyRequest).subscribe(data =>{
      this.issuePolicyMessage = localStorage.getItem("issuePolicy")
    })
  }



  onSubmitConsumerId(formValue:any){
    //console.log("this is in method submit")
    sessionStorage.setItem("consumerId",this.consumerId);
    //console.log(this.consumerId);
    this.router.navigate(['/viewConsumerBusiness'])

  }

  onSubmitConsumerIdAndPolicyId(formValue:any){
    //console.log("this is in method submit")
    sessionStorage.setItem("consumerId",this.consumerId);
    sessionStorage.setItem("policyId",this.policyId);
    console.log(this.consumerId);
    console.log(this.policyId);
    this.router.navigate(['/viewPolicy'])

  }

  onClick(){
    console.log("this is in onclick login method");
    this.router.navigate(['/login']);
  }
  
}
