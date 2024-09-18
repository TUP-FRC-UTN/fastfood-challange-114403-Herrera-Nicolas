import { Component } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import { Pedido } from '../../models/Pedido';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  pedidos:Pedido[]=[];
  pedidoEnCoccion:Pedido={
    number: 0,
    name: '',
    description: '',
    date: undefined
  };
  constructor(private pedidosService:PedidosService) {
    this.pedidos=pedidosService.getPedidos();
  }
  cocinar(pedido: Pedido) {
    this.pedidoEnCoccion=pedido;
    this.pedidos.splice(this.pedidos.indexOf(pedido),1);
  }
  terminarPedido() {
    this.pedidosService.agregarPedidoListo(this.pedidoEnCoccion);
    this.pedidoEnCoccion= {
      number: 0,
      name: '',
      description: '',
      date: undefined
    }
  }
}
