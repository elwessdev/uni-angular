import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FaceSnapComponent} from "../face-snap-dsi22/face-snap-dsi22.component"
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
  standalone: true,
  imports: [FaceSnapComponent,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaceSnapListComponent {
  constructor(private FaceSnapService: FaceSnapService){}
  
  faceSnaps!: FaceSnap[];

  ngOnInit(): void{
    this.faceSnaps = this.FaceSnapService.faceSnap;
  }
}
