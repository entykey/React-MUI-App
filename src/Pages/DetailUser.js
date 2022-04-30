import * as React from "react";
//import { withRouter } from "react-router-dom"; // react-router v5
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {}
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {}
      });
      console.log(">>> check res user:", res);
    }
  }
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    //console.log(">>> check props:", this.props);
    return (
      <>
        <div>
          Hello World from DetailUser with id: {this.props.match.params.id}
        </div>
        {isEmptyObj === false && (
          <>
            <div>
              User's name: {user.first_name} - {user.last_name}
            </div>
            <div>User's email: {user.email}</div>
            <div>
              <img src={user.avatar} alt="user avatar" />
            </div>
          </>
        )}
      </>
    );
  }
}
export default DetailUser;
