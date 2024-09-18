import { Injectable } from '@angular/core';
import { Pedido } from '../models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidos:Pedido[] = [];
  pedidosListos:Pedido[] = [];
  constructor() { }
  
  agregar(pedido:Pedido){
    this.pedidos.push(pedido);
  }
  agregarPedidoListo(pedidoEnCoccion: Pedido) {
    this.pedidosListos.push(pedidoEnCoccion);
  }
  getPedidosListos(){
    return this.pedidosListos;
  }
  getPedidos(){
    return this.pedidos;
  }
}
