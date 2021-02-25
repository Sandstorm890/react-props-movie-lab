import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return this.props.movieData.map((movie) => {
      return(
        <MovieCard title={this.props.title}  imdbRating={this.props.imdbRating} genres={this.props.genres} poster={this.props.poster} />
      )
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
