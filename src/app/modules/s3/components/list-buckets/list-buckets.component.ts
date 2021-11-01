import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { S3Service } from '../../services/s3.service';
import { environment } from 'src/environments/environment';
import { Bucket } from '../../interfaces/bucket.interface';

@Component({
  selector: 'app-list-buckets',
  templateUrl: './list-buckets.component.html',
  styleUrls: ['./list-buckets.component.scss']
})
export class ListBucketsComponent implements OnInit {
  links = environment.links;
  buckets: Bucket[] = [];

  constructor(private s3Service: S3Service) { }

  ngOnInit(): void {
  }

  loadBuckets(): void {
    this.s3Service.getBuckets().pipe(
      first()
    ).subscribe((buckets: Bucket[]) => {
      this.buckets = buckets;
    });
  }
}
