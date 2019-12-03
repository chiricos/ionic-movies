import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliService } from '../../services/peli.service';
import { iPelis } from '../../model/iPelis.interface';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {

  results: Observable<iPelis>;
  term: string = "";
  type: string = "";

  constructor(private peliservice:PeliService) { }

  ngOnInit() { 
  }

  searchChanged() {
    this.results = this.peliservice.searchMovies(this.term, this.type);
  }

}
