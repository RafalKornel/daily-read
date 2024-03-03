import { Route, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanViewPageComponent } from './pages/plan-view-page/plan-view-page.component';

export enum AppRoutes {
  Home = 'home',
  PlanViewer = 'plan-viewer',
}

export const RoutesMap: Record<AppRoutes, Route> = {
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
  RoutesMap[AppRoutes.Home],
  RoutesMap[AppRoutes.PlanViewer],
  { path: '**', redirectTo: 'home' },
];
