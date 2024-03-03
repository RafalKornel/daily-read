import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataFetcherPageComponent } from './data-fetcher-page/data-fetcher-page.component';
import { PlanViewComponent } from './plan-view/plan-view.component';

export enum AppRoutes {
  Home = 'home',
  DataImporter = 'reading-data-importer',
  PlanViewer = 'plan-viewer',
}

export const RoutesMap: Record<AppRoutes, Route> = {
  [AppRoutes.DataImporter]: {
    path: AppRoutes.DataImporter,
    title: 'Daily Read | Data Importer',
    component: DataFetcherPageComponent,
  },
  [AppRoutes.Home]: {
    path: AppRoutes.Home,
    title: 'Daily Read',
    component: HomeComponent,
  },
  [AppRoutes.PlanViewer]: {
    path: AppRoutes.PlanViewer,
    title: 'Plan Viewer',
    component: PlanViewComponent,
  },
} as const;

export const routes: Routes = [
  RoutesMap[AppRoutes.DataImporter],
  RoutesMap[AppRoutes.Home],
  RoutesMap[AppRoutes.PlanViewer],
  { path: '**', redirectTo: 'home' },
];
