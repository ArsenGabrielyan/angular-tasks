import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  count=0;
  msg="";
  arr: number[] = [];
  // All React Hooks
  ngOnInit(): void {
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
  }
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
}
