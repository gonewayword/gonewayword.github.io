$(document).ready(function() {
    
    // console.log('inside doc ready...', Object.keys(_));

    class App {

        constructor() {
            this.config = {
                setView: 'engineer'
            }
        }
        
        setView(view, target) {
            console.log('setView(): ', view);
            this.config.setView = view;
            console.log('setView() target: ', target);
            $('.subsection')
                .removeClass('perma')
                .hide();
            const tarjay = $('.' + view)
            tarjay.show()
            setTimeout(() => {
                tarjay.addClass('perma');
            }, 50)
                
                // .addClass('perma');
            // $(target).addClass('perma');
        }
    
    }

    const app = new App();

    $('.subsection.engineer')
        .show()
        .addClass('perma');

    $('.toolbar-item-parent').click(e => {
        const classList = e?.target?.classList;
        const snatchedClass = classList[1];
        app.setView(snatchedClass, e?.target);
    });

    $('')
});

// class App {

//     constructor() {
//         this.config = {
//             setView: 'engineer'
//         }
//     }
    
//     setView(view) {
//         console.log('aspiajfkl');
//         this.config.setView = view;
//         console.log('view = ', this.config.setView);
        
//     }

// }

// function setView(view) {
//     app.setView(view);
// }

// (function createApp() {
//     app = new App();
// })()