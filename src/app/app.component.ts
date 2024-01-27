import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'recipe-app-angular';
  path = 'recipes';

  onNavigateTo(pathTo: string) {
    this.path = pathTo;
  }

  ngOnInit(): void {}
}
