import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../_services/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  identifiedObjects: any;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {}

  loadData() {
    this.communicationService.getIdentifiedObjects().subscribe((data) => {
      this.identifiedObjects = data;
    });
  }
}
