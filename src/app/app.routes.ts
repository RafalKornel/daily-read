import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataImporterComponent } from './data-importer/data-importer.component';

export enum AppRoutes {
  Home = 'home',
  DataImporter = 'data-importer',
}

export const RoutesMap: Record<AppRoutes, Route> = {
  [AppRoutes.DataImporter]: {
    path: AppRoutes.DataImporter,
    title: 'Daily Read | Data Importer',
    component: DataImporterComponent,
  },
  [AppRoutes.Home]: {
    path: AppRoutes.Home,
    title: 'Daily Read',
    component: HomeComponent,
  },
} as const;

export const routes: Routes = [
  RoutesMap[AppRoutes.DataImporter],
  RoutesMap[AppRoutes.Home],
];
