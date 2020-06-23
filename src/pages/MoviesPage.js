import React, { Component } from "react";
import HeaderMoviesList from "../components/headerMoviesList";
import MovieList from '../components/movie'

export default class MoviesPage extends Component {
  render() {
    return (
      <div>
        <HeaderMoviesList />
        <MovieList init={0} end={12}/>
      </div>
    );     
  }
}
