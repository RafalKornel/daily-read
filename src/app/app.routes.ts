import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadingDataHandlerComponent } from './reading-data-handler/reading-data-handler.component';

export enum AppRoutes {
  Home = 'home',
  DataImporter = 'reading-data-handler',
}

export const RoutesMap: Record<AppRoutes, Route> = {
  [AppRoutes.DataImporter]: {
    path: AppRoutes.DataImporter,
    title: 'Daily Read | Data Importer',
    component: ReadingDataHandlerComponent,
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
  { path: '**', redirectTo: 'home' },
];
