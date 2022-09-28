import { Component, OnInit } from '@angular/core';
import { Album } from 'src/models/placeholderModel';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private subscription: Subscription;
  id: number = 0;
  album: Album | undefined;

  constructor(private route: ActivatedRoute, private placeholderService: PlaceholderService) {
    this.subscription = route.params.subscribe(params => this.id = params['id']);
  }
  ngOnInit(): void {
    this.placeholderService.getPostById(this.id).subscribe(album => this.album = album);
  }

}
