'use strict';

import AboutMe from "./about_me";

// const AboutMe = () => (
//     <div class="subsection">
//         <h2> About Me </h2>
//     </div>
// );

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
        <AboutMe />
    );
    // if (this.state.liked) {
    //   return 'You liked this.';
    // }

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );
  }
}

const domContainer = document.querySelector('#dynamic_content_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));