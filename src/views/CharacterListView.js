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
    // call our action
    this.props.getCharacters();
    console.log(this.props);
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
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
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetchin
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getCharacters
  },
)(CharacterListView);
