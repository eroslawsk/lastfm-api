import React from "react";
import DisplayArtists from "./DisplayArtists";

class SearchArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      query: "",
    };
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  submitQuery(event) {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        this.state.query +
        "&api_key=8a90b7fa85ba96019b6db72f9e219fdc&format=json&limit=5",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ artists: data.similarartists.artist });
      })
      .then(console.log)
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div>
        <DisplayArtists query={this.state.query} artists={this.state.artists} />
        <form
          style={{ margin: "30px 0 10px 40px", width: "320px" }}
          onSubmit={this.submitQuery.bind(this)}
        >
          <div className="form-group">
            <label for="inputSearch">Search for Similar Artists</label>
            <input
              name="query"
              className="form-control"
              id="inputSearch"
              value={this.state.query}
              onChange={this.handleQueryChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" name="action">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchArtist;
