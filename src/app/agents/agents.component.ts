import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgentFormComponent } from './agent-form/agent-form.component';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css',
})
export class AgentsComponent {
  constructor(private _dilog: MatDialog) {}
  onAgentClick() {
    this._dilog.open(AgentFormComponent);
    console.log('Agent clicked');
  }
}
