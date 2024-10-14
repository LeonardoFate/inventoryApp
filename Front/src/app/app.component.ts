import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { AddProductComponent } from "./components/add-product/add-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, EditProductComponent, AddProductComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventory-control';
}
