import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,AboutComponent,ItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }


}
