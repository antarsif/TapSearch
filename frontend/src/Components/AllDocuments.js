import React, { Component } from "react";
import axios from "axios";

export class AllDocuments extends Component {
  state = {
    docs: []
  };

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  componentWillMount() {
    axios.get("https://tapsearchbackend.herokuapp.com/api/getall").then(res => {
      this.setState({
        docs: res.data["docs"]
      });
      console.log(res.data["docs"]);
    });
  }
  render() {
    return (
      <div>
        {this.state.docs.map(doc => (
          <div style={this.getStyle()}>
            <p>
              DocumentID: {doc[0]}
              <br />
              Document: {doc[1]}
              <br />
              <form
                action={
                  "https://sorablaze11.github.io/TapSearch/document/" + doc[0]
                }
              >
                <input type="submit" value="See the Document" />
              </form>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default AllDocuments;
