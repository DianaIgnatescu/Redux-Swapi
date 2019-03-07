import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from '../actions';
class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <h2>Loading. Please wait...</h2>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetchin
  };
};

export default connect(
  mapStateToProps,
  {
    getCharacters
  },
)(CharacterListView);
