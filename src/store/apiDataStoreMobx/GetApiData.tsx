import React from "react";
import {flow, observable} from "mobx";


export class GetApiData  {
    constructor(){

    }
    @observable apis: any;

    loadApiResponse = flow(function*(store:GetApiData ) {
        const options = {
            method: "POST",
        };
        const response = yield fetch('http://192.168.51.88:3000/api/table', options);
        store.apis = yield response.json();
        console.log(store.apis)
    });
}