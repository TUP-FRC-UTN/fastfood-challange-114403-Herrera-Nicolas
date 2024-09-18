import { Component } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import { Pedido } from '../../models/Pedido';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css',
})
export class DeliveryComponent {
  entregar(pedido: Pedido) {
    console.log(this.pedidos.indexOf(pedido));
    this.pedidos.splice(this.pedidos.indexOf(pedido), 1);
  }

  pedidos: Pedido[] = [];
  constructor(private pedidosService: PedidosService) {
    this.pedidos = pedidosService.getPedidosListos();
  }
}
