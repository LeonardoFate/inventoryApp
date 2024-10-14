import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { NgModule } from '@angular/core';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';

export const routes: Routes = [

    {path: 'products', component:ProductListComponent},
    { path: 'add', component: AddProductComponent },
  { path: 'edit', component: EditProductComponent },
  {path: '', redirectTo:'/products', pathMatch: 'full'},
  {path:'**', component: PageNoFoundComponent},
];
