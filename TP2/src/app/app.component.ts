import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {FaceSnapComponent} from "./face-snap-dsi22/face-snap-dsi22.component"
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit(){
    this.mySnap = new FaceSnap(
      'Archiblad',
      'Mon meilleur ami depuis tout petit !',
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      new Date(),
      0
    )
  }
}
