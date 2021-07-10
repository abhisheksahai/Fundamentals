import { Component, OnInit } from '@angular/core';
import { IEvent } from '../event/ievent';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event: IEvent = {
    id: 1,
    name: 'Angular connect',
    date: '30-June-2021',
    time: '10:00 am',
    price: 1000,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'Kailashpuri',
      city: 'Mughalsarai',
      country: 'India'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  eventClicked(eventName: string) {
    console.log(eventName);
  }

}