import React from 'react';
import './App.css';

let a: number | null | string = 10;
a = "100";
let name: string = "1e34gtg";
let isStudent: boolean = true;

let family: Array<string> = ['sanya', 'tanya', 'pasha', 'illya'];

type UserType = {
    greeting: (message: string) => void
    name: string
    age?: number
    isStudent: boolean
    address: AddressType | null
};
type AddressType = {
    city: string | null
    country: string | null
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

let initialState = {
    name: null as string | null,
    age: null as number | null,
    isStudent: null as boolean | null,
    address: {
        city: null,
        country: null
    } as AddressType,
    addresses: [] as Array<AddressType>
};

export type InitialStateType = typeof initialState;

let state: InitialStateType = {
    name: 'alex',
    age: 38,
    isStudent: true,
    address: {
        city: 'Minsk',
        country: "BY"
    },
    addresses: [{
        city: 'Minsk',
        country: "BY"
    }]
};


export default App;
