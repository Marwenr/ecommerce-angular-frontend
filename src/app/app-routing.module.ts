import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { userGuard } from './guards/user.guard';
import { connectedGuard } from './guards/connected.guard';
import { LoginAdminLayoutComponent } from './layouts/login-admin-layout/login-admin-layout.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path: '', component: ClientLayoutComponent, children: [
    {path: '', loadChildren: () => import('./views/client/home/home.module').then(m => m.HomeModule)},
    {path: 'login', loadChildren: () => import('./views/client/login/login.module').then(m => m.LoginModule), canActivateChild: [connectedGuard]},
    {path: 'cart', loadChildren: () => import('./views/client/cart/cart.module').then(m => m.CartModule), canActivateChild: [userGuard]},
    {path: 'categories/:category', loadChildren: () => import('./views/client/category/category.module').then(m => m.CategoryModule)},
    {path: 'products/:productId', loadChildren: () => import('./views/client/product/product.module').then(m => m.ProductModule)},
  ]},
  {path: 'admin', component: AdminLayoutComponent, canActivate: [adminGuard], children: [
    {path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
    {path: 'dashboard', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m=> m.DashboardModule)},
    {path: 'analytics', loadChildren: () => import('./views/admin/analytics/analytics.module').then(m=> m.AnalyticsModule)},
    {path: 'warehouse', loadChildren: () => import('./views/admin/warehouse/warehouse.module').then(m=>m.WarehouseModule)},
    {path: 'carts', loadChildren: () => import('./views/admin/carts/carts.module').then(m=>m.CartsModule)},
    {path: 'users', loadChildren: () => import('./views/admin/users/users.module').then(m=>m.UsersModule)}
  ]},
  {path: 'adminLogin', component: LoginAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
