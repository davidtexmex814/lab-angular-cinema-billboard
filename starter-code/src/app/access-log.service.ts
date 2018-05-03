import { Injectable } from '@angular/core';
import { Movies } from '../app/movies-interface';

@Injectable()
export class AccessLogService {
  theMovies: Array<Movies> = [];

  constructor() {}
  
getAccessLog = () => console.log(this.theMovies)
}
