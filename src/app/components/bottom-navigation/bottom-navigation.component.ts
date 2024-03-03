import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppRoutes } from '../../app.routes';

@Component({
  selector: 'app-bottom-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './bottom-navigation.component.html',
  styleUrl: './bottom-navigation.component.scss',
})
export class BottomNavigationComponent {
  HomeRoute = `/${AppRoutes.Home}`;
  DataImporterRoute = `/${AppRoutes.DataImporter}`;
  PlanViewer = `/${AppRoutes.PlanViewer}`;
}
