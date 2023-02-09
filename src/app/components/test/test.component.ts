import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnChanges{
  @Input() msg="";
  @Input() arr!: number[];
  int:any;
  constructor(private ref: ChangeDetectorRef){
    console.log(this.arr);
    this.ref.markForCheck();
  }
  // OnChanges Hook and change Detection
  ngOnChanges(changes: SimpleChanges):void{
    for(let props in changes){
      console.log(changes[props])
    }
  }
  stop(){
    clearInterval(this.int);
  }
}
