import { Component, OnInit } from '@angular/core';
import { UiService }  from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Todo List";
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { }

  // if you want to run code when a component load input it here
  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}
