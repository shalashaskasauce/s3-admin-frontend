import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
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
  selectedBucket = '';
  selectedKey = '';

  readonly displayedColumns = ['Key', 'LastModified', 'Size', 'StorageClass'];
  constructor(private s3Service: S3Service, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.objects$ = this.s3Service.getObjects(params.bucket);
      this.selectedBucket = params.bucket;
    });
  }

  selectKey(key: string): void {
    this.selectedKey = key;
  }

  objectFunctionsClosed(): void {
    this.selectedKey = '';
  }
}
