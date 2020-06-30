import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../services/policy.service';
import { Policy } from '../models';  

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policies: Policy[];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Policy;
      });  
      console.log(this.policies);
    });
  }

  create(pol: Policy){
      this.policyService.createPolicy(pol);
  }

  update(pol: Policy) {
    this.policyService.updatePolicy(pol);
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }

}

/* 
*/