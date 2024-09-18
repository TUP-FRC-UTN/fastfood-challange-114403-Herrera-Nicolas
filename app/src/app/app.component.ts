import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from "./pos/pos.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { DeliveryComponent } from "./delivery/delivery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PosComponent, KitchenComponent, DeliveryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
