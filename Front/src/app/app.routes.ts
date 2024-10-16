import { Routes } from '@angular/router';
import { ProductListComponent } from './features/productos/product-list/product-list.component';
import { ProductDetailComponent } from './features/productos/product-detail/product-detail.component';
import { ProductEditComponent } from './features/productos/product-edit/product-edit.component';

export const routes: Routes = [
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-details/:id', component: ProductDetailComponent },
    { path: 'product-edit/:id', component: ProductEditComponent },
    { path: '', redirectTo: '/product-list', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/product-list' } // Redirige cualquier ruta desconocida a la lista de productos
];
