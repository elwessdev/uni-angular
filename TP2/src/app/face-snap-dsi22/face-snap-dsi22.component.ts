import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap-dsi22.component.html',
  styleUrl: './face-snap-dsi22.component.scss'
})
export class FaceSnapComponent implements OnInit {
  // Inject faceSnap class
  @Input() faceSnap!: FaceSnap;
  
  // title!: string;
  // description!: string;
  // createDate!: Date;
  // snaps!: number;
  // imageUrl!:string;
  buttonText!: string;

  ngOnInit(){
    // this.title="Archiblad";
    // this.description="Mon meilleur ami depuis tout petit !";
    // this.createDate=new Date();
    // this.snaps=6;
    // this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"
    this.buttonText="Oh snap!"
  }

  onAddSnap(){
    this.faceSnap.snaps++;
  }
  onSnap(){
    if(this.buttonText=="Oh snap!"){
      this.faceSnap.snaps++;
      this.buttonText="Oops, unSnap!"
      this.faceSnap.imageUrl = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSV9DPPo4aKrDGdqZZ2PWdo0tjeJHIhNVfXfc50z6Bzn8YsORxp";
    } else {
      this.faceSnap.snaps--;
      this.buttonText="Oh snap!";
      this.faceSnap.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    }
  }
}
