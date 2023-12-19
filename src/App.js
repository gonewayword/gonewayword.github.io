import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import DynamicContent from './pages/dynamic_content';

function App() {
  console.log('render() in App');
    const [view, setView] = useState('engineer');
    const isView = (state) => {
        return view === state;
    }
    const curlyClass = (state, type) => {
        let classString = type === 'open' ? 'open-curly' : 'closed-curly';
        classString += view === state ? ' perma' : '';
        return classString;
    }
    return (
        <div className="app-mt-30 app-ml-30">
            <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-12 util-col">
                    <img id="logo" src="/img/logo-circle-only-transparent.png"></img>
                    {/* <br />
                    <br /> */}
                </div>
                <div className="col-lg-7 col-md-6 title-col">
                    <span className="pre-title">
                        <span className="open-curly">&#123;</span>
                        Brendan
                        <span className="closed-curly">&#125;</span>
                    </span>
                    <h1 onClick={() => setView('about')} className="main-title hover-text">Frost<span>ware</span></h1>
                </div>
                {/* <div className="col-md-5 toolbar">
                    
                </div> */}
                <div className="col-md-3 cat-col">
                    <img id="fun-img" src="/img/laptop-cat-1.png"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 menu">
                    <div class="centralizer">
                        {/* <span className="pointer-animation">
                        <img className="pointer" src="./img/pointer-real.png"></img>
                        </span> */}
                        <div onClick={() => setView('engineer')} className="toolbar-item-parent">
                            <span className={curlyClass('engineer', 'open')}>&#123;</span>
                            Software Portfolio
                            <span className={curlyClass('engineer', 'closed')}>&#125;</span>
                        </div>
                        <div onClick={() => setView('webdev')} className="toolbar-item-parent">
                            <span className={curlyClass('webdev', 'open')}>&#123;</span>
                            Website Portfolio
                            <span className={curlyClass('webdev', 'closed')}>&#125;</span>
                        </div>
                        <div onClick={() => setView('about')} className="toolbar-item-parent">
                            <span className={curlyClass('about', 'open')}>&#123;</span>
                            Who I Am
                            <span className={curlyClass('about', 'closed')}>&#125;</span>
                        </div>
                        {/* <span onClick={() => setView('engineer')} className="toolbar-item-parent">Senior Software Engineer</span>
                        <span onClick={() => setView('webdev')} className="toolbar-item-parent">Website & App Creator</span>
                        <span onClick={() => setView('fiction')} className="toolbar-item-parent">Fiction & Article Author</span> */}
                    </div>
                </div>
                <div className="col-md-10 col-sm-12">
                    <DynamicContent view={view} />
                </div>
            </div>
        </div>
    )
}

export default App;


// {/* <span onClick={() => setView('ideate')} className="toolbar-item-parent hover-text">Philosopher & Ideator</span> */}