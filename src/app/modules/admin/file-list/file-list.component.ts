import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  // dummy
  files = [{ name: 'File1'}, { name: 'File2' }];

  constructor() { }

  ngOnInit(): void {
  }

}
