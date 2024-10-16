import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../productos.module';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  productId!: number; // Para almacenar el ID del producto
  product: Product = { id: 0, name: '', price: 0, detail: '', stock: 0 }; // Valor predeterminado


  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id')); // Obtén el ID del parámetro de la ruta
    const fetchedProduct = this.productService.getProductById(this.productId); // Carga el producto

    if (fetchedProduct) {
      this.product = fetchedProduct; // Asigna solo si se encuentra el producto
    } else {
      console.error('Producto no encontrado');
      // Redirige solo si el producto no existe
      this.router.navigate(['/product-list']);
    }
  }

}
