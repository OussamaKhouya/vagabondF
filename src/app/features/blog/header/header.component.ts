import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showSearchBox = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  doSearch(value: string) {
    this.router.navigateByUrl(`/search/${value}`);
  }

  toggleSearchBox() {
    this.showSearchBox = !this.showSearchBox;
  }
}
