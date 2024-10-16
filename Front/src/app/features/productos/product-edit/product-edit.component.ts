import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from "../../../services/product.service";
import { Product } from "../productos.module";
@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
    productId!: number; // Para almacenar el ID del producto
    product!: Product; // Para almacenar los detalles del producto

    constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

    ngOnInit(): void {
        this.productId = Number(this.route.snapshot.paramMap.get('id')); // Obtén el ID del parámetro de la ruta
        const fetchedProduct = this.productService.getProductById(this.productId); // Carga el producto

        if (fetchedProduct) {
            this.product = fetchedProduct; // Asigna solo si se encuentra el producto
        } else {
            console.error('Producto no encontrado');
            this.router.navigate(['/product-list']); // Redirige si no se encuentra el producto
        }
    }

    onSubmit() {
        console.log('Product ID:', this.productId); // Verifica el valor del productId
        this.router.navigate(['/product-details/', this.productId]); // Redirige al detalle del producto actualizado
      }

      cancel() {
        console.log('Product ID:', this.productId); // Verifica el valor del productId
        this.router.navigate(['/product-details/', this.productId]); // Redirige al detalle del producto
      }

}
