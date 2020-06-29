export class Policy {
    id: string;
    policyNumber: string;
    creationDate: Date;
    effectiveDate: Date;
    expireDate: Date;
    paymentOption: string;
    policyAmount: number;
    extraInfo: string;
};

export const products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];

export const quotes = [
  {
    origin: 'Phone XL',
    tags: [],
    qtext: 'A large phone with one of the best screens'
  },
  {
    origin: 'Phone XL',
    tags: [],
    qtext: 'A large phone with one of the best screens'
  },
  {
    origin: 'Phone XL',
    tags: [],
    qtext: 'A large phone with one of the best screens'
  },
  {
    origin: 'Phone XL',
    tags: [],
    qtext: 'A large phone with one of the best screens'
  },
  {
    origin: 'Phone XL',
    tags: [],
    qtext: 'A large phone with one of the best screens'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/