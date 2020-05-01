import React from 'react';
import './App.css';

let a: number | null | string = 10;
a = "100";
let name: string = "1e34gtg";
let isStudent: boolean = true;

let family: Array<string> = ['sanya', 'tanya', 'pasha', 'illya'];

type UserType = {
    greeting: (message: string)=> void
    name: string
    age?: number
    isStudent: boolean
    address: AddressType | null
};
type AddressType = {
    city: string
    country: string
};
let user: UserType = {
    greeting(message) {
        alert('yo')
    },
    name: 'alex',
    age: 38,
    isStudent: true,
    address: {
        city: 'Minsk',
        country: "BY"
    }
};

 let initialStateType = {
  name: null as string | null,
  age: null as number | null,
  isStudent: null as boolean | null,
  address: AddressType | null,
};

export type InitialStateType = typeof initialStateType

let initialState: InitialStateType = {
  name: 'alex',
  age: 38,
  isStudent: true,
  address: {
    city: 'Minsk',
    country: "BY"
  }
};


export default App;
