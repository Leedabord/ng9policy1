import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../services/policy.service';
import { Policy } from '../../policy.model';  

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
              console.log(e.payload.doc.data);
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Policy;
      });  
              console.log(this.policies);
    });
  }

  create(policy: Policy){
      this.policyService.createPolicy(policy);
  }

  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }

}

/* 
*/