import { Component, Input, OnChanges, OnDestroy, OnInit, Output, EventEmitter, TemplateRef, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges, OnDestroy{
  @Input() name: string = "";
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

  myFriends: string[] = ['Den', 'Robby', 'Emmy'];
  trigger: boolean = true;
  today: Date = new Date();

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  sendMessage() {
    this.nameChange.emit('Artur');
  }

  showText() {
    this.trigger = !this.trigger;
  }

  
}
