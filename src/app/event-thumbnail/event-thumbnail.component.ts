import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../event/ievent';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event!: IEvent;
  @Output() eventClick: EventEmitter<string> = new EventEmitter<string>();
  someProperty: string = 'some property';
  constructor() { }

  ngOnInit(): void {
  }

  eventClicked() {
    this.eventClick.emit('Clicked on ' + this.event.name);
  }

  logFoo() {
    console.log('logFoo');
  }

}