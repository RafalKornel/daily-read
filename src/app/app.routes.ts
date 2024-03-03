import { Route, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DataFetcherPageComponent } from './pages/data-fetcher-page/data-fetcher-page.component';
import { PlanViewPageComponent } from './pages/plan-view-page/plan-view-page.component';

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
    component: HomePageComponent,
  },
  [AppRoutes.PlanViewer]: {
    path: AppRoutes.PlanViewer,
    title: 'Plan Viewer',
    component: PlanViewPageComponent,
  },
} as const;

export const routes: Routes = [
  RoutesMap[AppRoutes.DataImporter],
  RoutesMap[AppRoutes.Home],
  RoutesMap[AppRoutes.PlanViewer],
  { path: '**', redirectTo: 'home' },
];
