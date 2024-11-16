import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// Material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapListComponent,CommonModule,FormsModule,RouterOutlet,RouterLink,RouterLinkActive,MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
