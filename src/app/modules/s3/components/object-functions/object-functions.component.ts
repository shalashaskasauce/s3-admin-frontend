import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { S3Service } from '../../services/s3.service';

@Component({
  selector: 'app-object-functions',
  templateUrl: './object-functions.component.html',
  styleUrls: ['./object-functions.component.scss']
})
export class ObjectFunctionsComponent implements OnInit {
  @Input() bucket: string = '';
  @Input() key: string = '';
  @Output() close = new EventEmitter();

  constructor(private s3Service: S3Service) { }

  ngOnInit(): void {
  }

  downloadFile() {
    this.s3Service.getObject(this.bucket, this.key).subscribe((response) => {
      const blob = new Blob([response], { type: "application/octet-stream" });
      const url = window.URL.createObjectURL(blob);
      // generate ad-hoc anchor to set filename
      const anchor = document.createElement("a");
      anchor.download = this.key;
      anchor.href = url;
      anchor.click();
    });
  }
}
