import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';
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

  form: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    limit: new FormControl(1, [Validators.required, Validators.min(1)])
  });

  downloadLinks: string[] = [];

  constructor(private s3Service: S3Service, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  downloadFile(): void {
    this.s3Service.getObject(this.bucket, `${environment.productPrefix}/${this.key}`).subscribe((response) => {
      const blob = new Blob([response], { type: "application/octet-stream" });
      const url = window.URL.createObjectURL(blob);
      // generate ad-hoc anchor to set filename
      const anchor = document.createElement("a");
      anchor.download = this.key;
      anchor.href = url;
      anchor.click();
    });
  }

  generateLink(): void {
    const email = this.form.get('email')?.value;
    const maxDownloads = this.form.get('limit')?.value || 1;

    this.s3Service.postAccessLink(this.bucket, this.key, email, maxDownloads)
      .subscribe((result) => {
        this.downloadLinks = result.links.map(link => `${environment.apiUrl}${link}`);
      }
    );
  }
}
