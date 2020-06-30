import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from '../models';

@Injectable()
export class PolicyService {

  constructor(
    private firestore: AngularFirestore
    ) { 
    /*  */
  }

getPolicies() {
    return this.firestore.collection('quotes').snapshotChanges();
}

createPolicy(policy: Policy){
    return this.firestore.collection('quotes').add(policy);
}

updatePolicy(policy: Policy){
    delete policy.id;
    this.firestore.doc('quotes/' + policy.id).update(policy);
}

deletePolicy(policyId: string){
    this.firestore.doc('quotes/' + policyId).delete();
}

}
