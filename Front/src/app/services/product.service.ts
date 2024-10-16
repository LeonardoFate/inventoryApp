import { Injectable } from '@angular/core';
import { Product } from '../features/productos/productos.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:300/api/products'; //api url

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/{productId}`);
  }
}

//   private products: Product[] = []; // Almacena productos

//   getProduct(): Product[] {
//     return [...this.products]; // Devuelve la lista de productos
//   }

//   private generateUniqueId(): number {
//     return this.products.length > 0
//       ? Math.max(...this.products.map((p) => p.id)) + 1
//       : 1; // Genera un ID único
//   }

//   addProduct(product: Product) {
//     const { id, ...productWithoutId } = product; // Desestructura para omitir el ID
//     const newProduct: Product = {
//       id: this.generateUniqueId(), // Genera un ID único
//       ...productWithoutId,
//     };
//     this.products.push(newProduct); // Agrega el nuevo producto
//   }

//   deleteProduct(productId: number): void {
//     this.products = this.products.filter(product => product.id !== productId); // Elimina el producto
//   }

//   getProductById(id: number): Product | undefined {
//     const product = this.products.find(p => p.id === id);
//     return product;
//    // Asegúrate de que esta función retorne el objeto correcto
//   }

// }
