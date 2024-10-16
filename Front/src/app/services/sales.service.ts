import { Injectable } from '@angular/core';
import { Product } from '../features/productos/productos.module'; // Asegúrate de tener un modelo para productos

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private dailySales: { date: string; total: number; }[] = [];
  private totalSales: number = 0;

  constructor() {}

  addDailySale(amount: number) {
    const today = new Date().toISOString().split('T')[0]; // Obtener fecha actual
    this.dailySales.push({ date: today, total: amount });
    this.totalSales += amount;
  }

  getDailyTotal(): number {
    const today = new Date().toISOString().split('T')[0];
    return this.dailySales
      .filter(sale => sale.date === today)
      .reduce((acc, sale) => acc + sale.total, 0);
  }

  getMonthlyTotal(): number {
    const month = new Date().getMonth(); // Obtener el mes actual
    return this.dailySales
      .filter(sale => new Date(sale.date).getMonth() === month)
      .reduce((acc, sale) => acc + sale.total, 0);
  }

  // Método para restar el stock de productos
  updateProductStock(product: Product, quantity: number) {
    product.stock -= quantity; // Actualiza el stock del producto
  }
}
