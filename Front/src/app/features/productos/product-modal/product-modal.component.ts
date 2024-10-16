import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css'
})
export class ProductModalComponent {
    newProductName: string = '';
    newProductPrice: number | null = null;
    newProductStock: number = 0; // Asegúrate de incluir stock
    newProductDetail: string = ''; // Agrega una propiedad para el detalle del producto

    @Output() addProduct = new EventEmitter<{ name: string; price: number; stock:number; detail:string }>();
    @Output() closeModal = new EventEmitter<void>();

    submit() {
      if (this.newProductName && this.newProductPrice !== null) {
        this.addProduct.emit({
          name: this.newProductName,
          price: this.newProductPrice,
          stock: this.newProductStock,
          detail: this.newProductDetail
        });
        this.closeModal.emit(); // Cierra el modal
        this.clearForm(); // Limpia el formulario
      } else {
        alert('Por favor, complete todos los campos.'); // Mensaje de error si faltan campos
      }
    }

    clearForm() {
        this.newProductName = '';
        this.newProductPrice = null;
        this.newProductStock = 0; // Limpia también el stock
        this.newProductDetail = ''; // Limpia el detalle
    }
  }
