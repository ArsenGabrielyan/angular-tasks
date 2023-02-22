import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AsyncSubject, BehaviorSubject, combineLatest, concat, filter, forkJoin, from, interval, map, multicast, Observable, reduce, ReplaySubject, Subject } from 'rxjs';
import { printSomething } from 'src/app/decorator/decorators';
import { AddAnimal } from 'src/app/store/animals.action';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  count=0;
  msg="";
  arr: number[] = [];
  @printSomething public value = "Hello";
  ngOnInit():void{
    // fromEvent(document,"click").pipe(timestamp()).subscribe(console.log)
    // console.log("Before Subbing");
    // this.obs = new Observable((sub)=>{
    //   sub.next("Hello");
    //   sub.next("World");
    //   sub.complete();
    // })
    // this.obs.subscribe((x)=>{
    //   console.log(x)
    // })
    // console.log("After Subbing")
  }
  // All React Hooks (implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy)
  /*ngOnInit(): void {
    console.log("Initialized");
  }
  ngDoCheck(): void {
    console.log("checking...");
  }
  ngAfterContentInit(): void {
    console.log("Initialized Content");
  }
  ngAfterContentChecked(): void {
    console.log("Checked Content");
  }
  ngAfterViewChecked(): void {
    console.log("Checked View");
  }
  ngAfterViewInit(): void {
    console.log("Initialized View");
  }
  ngOnDestroy(): void {
    console.log("Bye bye, HomepageComponent");
  // }*/
  addCount(){
    this.count++;
    this.arr.push(this.count);
    this.arr = [...this.arr];
    console.log(this.arr);
  }
  removeCount(){
    this.count--;
    this.arr.pop();
    console.log(this.arr);
  }
  resetCount(){
    this.count=0;
    this.arr.splice(0,this.arr.length-1);
    console.log(this.arr);
  }
  rxjs1(){
    const subj = new AsyncSubject();
    subj.subscribe((v)=>console.log("Observer A:",v));
    subj.next(1);
    subj.next(2);
    subj.next(3);
    subj.next(4);
    subj.subscribe((v)=>console.log("Observer B", v));
    subj.next(5);
    subj.complete();
  }
  constructor(private store: Store){}
  addAnimal(name:string){
    this.store.dispatch(new AddAnimal(name))
  }
}
