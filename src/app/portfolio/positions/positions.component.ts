import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/core/services/position.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {

  constructor(
    private positionServices: PositionService
    ) 
    { }

  positions$ = this.positionServices.getPosition();

  respOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useSmallerHeadings: false },
    { viewClasses: 'd-flex d-md-none', headingClass: '', useSmallerHeadings: true }
  ];

  ngOnInit(): void {
  }

}
