import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { PokemonState, addComment } from 'src/app/store/app.state';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private store: Store<{ pokemon: PokemonState }>,
    private route: ActivatedRoute
    ) { }
  
  name = new FormControl('');
  comment = new FormControl('');

  public id: string = '';


  public onComment() {

    if(this.name && this.comment) {
      this.store.dispatch(addComment({ comment: {
        id: this.id,
        title: this.name.value,
        description: this.comment.value
      } }))
    }
      
  this.store.pipe(select('pokemon'))
          .subscribe(res => {
              console.log('res ', res)
          });   
        
    }

   ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id']
    });
   }
 
}
