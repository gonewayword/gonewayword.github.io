import AboutMe from "./about_me";
import Author from "./author";
import Engineer from "./engineer";
import WebDeveloper from "./web_developer";


function renderSwitchContent(view) {
  switch(view) {
    case 'engineer':
      return (<Engineer />);
    case 'webdev':
      return (<WebDeveloper />);
    case 'fiction':
      return (<Author />);
    case 'about':
    default:
      return (<AboutMe />);
  }
}

function DynamicContent (state) {
  console.log('props? ', state);
  const view = state.view;
  return (
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-10 col-sm-12">
        {renderSwitchContent(view)}
      </div>
    </div>
  )
}

export default DynamicContent;

// 'use strict';

// import AboutMe from "./about_me";


// const e = React.createElement;

// export class DynamicContent extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     switch(this.state) {
//       case 'about':
//       default:
//         return (<AboutMe />);
//     }

//     // return e(
//     //   'button',
//     //   { onClick: () => StateManager.setState('nonce') },
//     //   'Like'
//     // );
//   }
// }

// const domContainer = document.querySelector('#dynamic_content_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(DynamicContent));