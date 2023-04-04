import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavoriteState, favoritar } from './store/app.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon';

  constructor(private store: Store<{ favorites: FavoriteState }>) {

  }

  favorites$ = this.store.select('favorites')
                          .pipe(
                            map(e => {
                              console.log('e >>> ', e)
                              // e.favorites
                            })
                          )

   public teste() {
    console.log('teste ', this.store)
    this.store.dispatch(favoritar())
    console.log('teste ', this.store)
   }
}
