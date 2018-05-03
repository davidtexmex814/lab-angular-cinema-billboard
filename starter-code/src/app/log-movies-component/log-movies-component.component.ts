import { Component, OnInit } from "@angular/core";
import { AccessLogService } from "../access-log.service";
import movies from "../movies";

@Component({
  selector: "app-log-movies-component",
  templateUrl: "./log-movies-component.component.html",
  styleUrls: ["./log-movies-component.component.css"],
  providers: [AccessLogService]
})
export class LogMoviesComponentComponent implements OnInit {
  movies: Array<Object> = [];
  constructor(private AccessLog: AccessLogService) {
    this.movies = movies;
  }

  ngOnInit() {
    this.movies = movies;
  }
  getMovies() {
    console.log(this.movies);
  }

  getMovie(id) {
    console.log(this.movies.splice(this.movies.indexOf(id)));
  }
}
