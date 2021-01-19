import { Component, Output} from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})

export class PortalComponent {
  name:string = 'Tom';
  
  colorize: boolean = true;

  portalData: number[] = new Array(1,2,3,4,5);
}
