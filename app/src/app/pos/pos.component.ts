import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  constructor(private pedidosService:PedidosService) { }
onSubmit(form: NgForm) {
  this.pedidosService.agregar({
    number: Math.floor(Math.random() * 1000) + 1,
    name: form.value.name,
    description: form.value.pedido,
    date: new Date()
  });
  form.reset();
}




}
