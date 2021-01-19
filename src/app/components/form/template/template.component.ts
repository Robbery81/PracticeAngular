import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  @ContentChild(TemplateRef, {static: true})
  template: TemplateRef<ElementRef>;

  @Input()
  portalData: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getAlert(file: File[]): void {
    console.log(file[0].name);
  }

}
