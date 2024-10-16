import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { Product } from '../productos.module';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductModalComponent], // Aquí importas el componente modal
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  isModalOpen: boolean = false;

  constructor(private router: Router, private productService: ProductService){}

ngOnInit(): void{
    this.loadProducts(); //cargar productos al inicializar
}

//cargar los productos desde la bs
loadProducts(): void{
    this.productService.getProducts().subscribe({
        next:(data:)
    })
}


}



// products: Product[] = []; // Cambia el tipo de productos al tipo Product
//   filteredProducts: Product[] = []; // Cambia el tipo a Product
//   searchTerm: string = '';
//   isModalOpen: boolean = false;

//   constructor(private router: Router, private productService: ProductService) {}

//   ngOnInit(): void {
//     this.products = this.productService.getProduct();
//     this.filteredProducts = [...this.products];
//   }

//   goToProductDetails(productId: number) {
//     this.router.navigate(['/product-details', productId]);
//   }

//   editProduct(productId: number) {
//     this.router.navigate(['/product-edit', productId]);
//   }

//   deleteProduct(productId: number) {
//     console.log(`Intentando eliminar el producto con ID: ${productId}`); // Verifica el ID
//     const confirmation = confirm(
//       '¿Estás seguro de que quieres eliminar este producto?'
//     );
//     if (confirmation) {
//       this.productService.deleteProduct(productId);
//       console.log(`Productos antes de la eliminación:`, this.products); // Verifica antes
//       this.products = this.productService.getProduct();
//       console.log(`Productos después de la eliminación:`, this.products); // Verifica después
//       this.filterProducts();
//     }
//   }

//   openModal() {
//     this.isModalOpen = true;
//   }

//   closeModal() {
//     this.isModalOpen = false;
//   }

//   // Cambia el tipo del parámetro a Product
//   onAddProduct(product: {
//     name: string;
//     price: number;
//     stock: number;
//     detail: string; // Asegúrate de que esta propiedad sea requerida al agregar
//   }) {
//     // Crea un objeto temporal para enviar al servicio
//     const productToAdd: Product = {
//       id: 0, // Temporal, ya que el servicio generará un ID único
//       name: product.name,
//       price: product.price,
//       stock: product.stock,
//       detail: product.detail, // Asegúrate de que el detalle se incluya aquí
//     };

//     this.productService.addProduct(productToAdd); // Usa el servicio para agregar el producto
//     this.products = this.productService.getProduct(); // Actualiza la lista de productos
//     this.filterProducts(); // Filtra los productos después de agregar uno nuevo
//   }

//   filterProducts() {
//     if (this.searchTerm) {
//       this.filteredProducts = this.products.filter((product) =>
//         product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
//       );
//     } else {
//       this.filteredProducts = [...this.products];
//     }
//   }
