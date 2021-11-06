import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { S3Object } from '../../interfaces/s3object.interface';
import { S3Service } from '../../services/s3.service';

@Component({
  selector: 'app-list-objects',
  templateUrl: './list-objects.component.html',
  styleUrls: ['./list-objects.component.scss']
})
export class ListObjectsComponent implements OnInit {
  objects: S3Object[] = [];
  selectedBucket = '';
  selectedKey = '';

  readonly displayedColumns = ['Key', 'LastModified', 'Size', 'StorageClass'];
  constructor(private s3Service: S3Service, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadObjects(params.bucket);
      this.selectedBucket = params.bucket;
    });
  }

  selectKey(key: string): void {
    this.selectedKey = key;
  }

  objectFunctionsClosed(): void {
    this.selectedKey = '';
  }

  private loadObjects(bucket: string) {
    const prefix = environment.productPrefix;

    this.s3Service.getObjects(bucket, prefix)
      .pipe(first()).subscribe((objects) => {
      // trim prefixes, filter empty string (directory, e.g.; /products/)
      this.objects = objects
        .map((object: S3Object) => ({ ...object, Key: object.Key.replace(`${prefix}/`, '') }))
        .filter((object: S3Object) => object.Key !== '');
    });
  }
}
