import { Component, OnInit } from '@angular/core';
import { Album } from 'src/models/placeholderModel';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = []

  constructor(private placeholderService: PlaceholderService) { }

  ngOnInit(): void {
    this.placeholderService.getAlbums().subscribe(albums => this.albums = albums);
  }

}
