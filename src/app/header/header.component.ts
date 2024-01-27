import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() navigateTo = new EventEmitter<string>();

  onNavigate(path: string) {
    this.navigateTo.emit(path);
  }

  ngOnInit(): void {}
}
