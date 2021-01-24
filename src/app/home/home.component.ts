import { Component, OnInit } from '@angular/core';
import {Gallery, GalleryService} from '../_services/gallery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  galleries: Gallery[];

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {
    this.galleryService.getAll()
      .subscribe(
        resp => this.galleries = resp
      );
  }


}
