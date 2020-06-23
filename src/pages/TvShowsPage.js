import React, { Component } from "react";
import HeaderTvList from "../components/headerTvList";
import TVList from '../components/tv'

export default class TvShowsPage extends Component {
  render() {
    return (
      <div>
        <HeaderTvList />
        <TVList init={0} end={12}/>
      </div>
    );
  }
}
