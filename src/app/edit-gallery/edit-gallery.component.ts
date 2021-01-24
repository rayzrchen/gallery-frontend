import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {GalleryService} from '../_services/gallery.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.css']
})
export class EditGalleryComponent implements OnInit {
  isSuccess = false;
  form = this.formBuilder.group({
    title: '',
    description: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private galleryService: GalleryService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isSuccess = false;
    this.galleryService.create(this.form.value)
      .subscribe(
        resp => this.isSuccess = true,
        err => alert('创建失败')
      );
  }
}
