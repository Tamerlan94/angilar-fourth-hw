import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/models/placeholderModel';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];

  id: number = 0;

  constructor(private route: ActivatedRoute, private placeholderService: PlaceholderService) {
    this.id = Number(this.route.parent?.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.placeholderService.getAlbumPhotos(this.id).subscribe(photos => this.photos = photos);
  }

}
