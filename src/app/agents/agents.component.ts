import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgentFormComponent } from './agent-form/agent-form.component';
import { CommonModule } from '@angular/common';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css',
})
export class AgentsComponent {
  agents: any = [];
  constructor(private _dilog: MatDialog, private _agents: AgentService) {}
  onAgentClick() {
    this._dilog.open(AgentFormComponent);
    console.log('Agent clicked');

    this.getAllAgents();
  }

  ngOnInit() {
    this.getAllAgents();
  }

  getAllAgents() {
    this._agents.getAllAgents().subscribe({
      next: (data) => {
        this.agents = data;
        console.log('Agents fetched successfully:', data);
      },
      error: (error) => {
        console.error('Error fetching agents:', error);
      },
    });
  }
}
