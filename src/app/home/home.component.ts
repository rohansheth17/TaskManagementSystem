import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';


@Component({
    'selector':'app-home',
    'template':`<h1> Hello from Home {{message}}</h1>
    <button type="button" (click)="increment()"></button>
    <button type="button" (click)="decrement()"></button>`
    
})

export class HomeComponent implements OnInit, OnChanges, OnDestroy{

    mycounterchild=10;

    @Output() 
    counterChanged = new EventEmitter<any>();

    @Input() customername:number=0;

    myservice:any;
    message:string="";

    // constructor(private service:DataService = new DataService()){
    //     this.myservice = service;
    // }

    increment(){
        this.mycounterchild++;
        this.counterChanged.emit(this.mycounterchild);
    }

    decrement(){
        this.mycounterchild--;
        this.counterChanged.emit(this.mycounterchild);
    }

    ngOnInit() {
       // debugger
        //this.message = this.myservice.greet();
        //console.log(this.message);
    }

    ngOnChanges(change:SimpleChanges){

    }

    ngOnDestroy(){

    }


    
}