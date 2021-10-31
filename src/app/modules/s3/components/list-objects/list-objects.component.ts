import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

import { S3Object } from '../../interfaces/s3object.interface';
import { S3Service } from '../../services/s3.service';

@Component({
  selector: 'app-list-objects',
  templateUrl: './list-objects.component.html',
  styleUrls: ['./list-objects.component.scss']
})
export class ListObjectsComponent implements OnInit {
  objects$: Observable<S3Object[]> = of([]);
  bucket = '';

  readonly displayedColumns = ['Key', 'LastModified', 'Size', 'StorageClass'];
  constructor(private s3Service: S3Service, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.objects$ = this.s3Service.getObjects(params.bucket);
      this.bucket = params.bucket;
    });
  }

  downloadFile(objectKey: string) {
    this.s3Service.getObject(this.bucket, objectKey).subscribe((response) => {
      const blob = new Blob([response], { type: "application/octet-stream" });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.download = objectKey;
      anchor.href = url;
      anchor.click();
    });
  }
}
