EnumeratedViews = {
    portfolio: 'portfolio',
    about: 'about',
    experience: 'experience'
}

EnumeratedIframes = {
    vsw: 'https://www.visitsouthwalton.com',
    piccadilly: 'https://web.archive.org/web/20200809231730/https://www.piccadilly.com/',
    mowalsh: 'https://www.mowalsh.com',
    justin: 'https://www.justinmaxwellplaywright.com'
}

SliderTypes = {
    myLeviton: 'my-leviton'
}

$(document).ready(function() {

    const setView = 'about';

    class App {

        #EnumeratedViews = {
            portfolio: 'portfolio',
            about: 'about',
            experience: 'experience'
        }

        constructor() {
            this.config = {
                setView
            }
        }

        initialize() {

            /*
            * Events
            */

            $('.arrow-pointy').click(function(e) {
                const showcaseId = $(this).data('id');
                const selectorRoot = '.shrink-wrapper.' + showcaseId;
                const shrinkWrapper = $(selectorRoot);
                const isActive = shrinkWrapper.hasClass('active');
                const iframe = $(selectorRoot + ' iframe');
                const targetSrc = isActive ? '' : EnumeratedIframes[showcaseId];
                if (!isActive) iframe.attr('src', targetSrc);
                shrinkWrapper.toggleClass('active');
                if (isActive) setTimeout(() => iframe.attr('src', targetSrc), 1500);
            });

        }

        /* Getters/Setters */

        get enumeratedViews() {
            return this.#EnumeratedViews;
        }
        
        /*
        * Slider Initialization
        */

        initializeSlider() {

        }

        /*
        * Events
        */
        setView(view, target) {
            console.log('setView(): view: ', view);
            console.log('setView(): target: ', view);
            if (EnumeratedViews.hasOwnProperty(view)) {
                const targView = this.enumeratedViews[view];
                this.config.setView = targView;
                console.log('setView() target: ', target);
                console.log('setView() target view: ', targView);
                $('.subsection')
                    .removeClass('perma')
                    .hide();
                $('.toolbar-item-parent').removeClass('perma');
                const tarjay = $('.' + targView);
                tarjay.show();
                setTimeout(() => {
                    tarjay.addClass('perma');
                }, 50)
            } else {
                console.warn('Received nonexisting view, aborting.');
            }
            
        }
    
    }

    class Slider {

        #activeIndex = 0;

        constructor(sliderType, options) {
            this.sliderType = sliderType;
            this.options = options;
        }

        initialize() {
            console.log('initialize() with slider type: ', this.sliderType);
            MyLevitonSlides.forEach((s, i) => {
                $('.slide-proxy.' + this.sliderType)
                    .append(
                        // '<div class="slide-item slide-' + i + ' ' + (i === 0 ? 'active' : '') + '" data-index="' + i + '">' +
                        '<div class="slide-item slide-' + i + ' ' + (i === 0 ? 'active' : (i === 1 ? 'next' : '')) + '">' +
                        '<img src="' + s.src + '" />' +
                        '<div class="subtitle">' + s.subtitle + '</div>' +
                        '</div>'
                    )
            });
            const allSlidesOfType = $('.' + this.sliderType + ' .slide-item');
            const endIndex = allSlidesOfType.length - 1;
            /*
            * Slider back action handler
            */
            $('.slider.' + this.sliderType + ' .left-arrow')
                .click(el => {
                    if (this.activeIndex === 0) {
                        if (!this.options.infinite) return;
                        allSlidesOfType
                            .removeClass('prev')
                            .removeClass('active')
                            .removeClass('next');
                        const last = $(allSlidesOfType[endIndex]);
                        const newPrev = last.prev();
                        last.addClass('active');
                        newPrev.addClass('prev');
                        this.#activeIndex = endIndex;
                        return;
                    }
                    const active = $('.slide-item.active');
                    const prev = active.prev();
                    const next = active.next();
                    const newPrev = prev.prev();
                    prev.removeClass('prev').addClass('active');
                    active.removeClass('active').addClass('next');
                    next.removeClass('next');
                    newPrev.addClass('prev');
                    this.#activeIndex--;
                });
            /*
            * Slider forward action handler
            */
            $('.slider.' + this.sliderType + ' .right-arrow')
                .click(el => {
                    if (this.activeIndex === endIndex) {
                        if (!this.options.infinite) return;
                        allSlidesOfType
                            .removeClass('prev')
                            .removeClass('active')
                            .removeClass('next');
                        const firstSlide = allSlidesOfType
                            .first();
                        const newNext = firstSlide.next();
                        firstSlide.addClass('active');
                        newNext.addClass('next');
                        this.resetIndex();
                        return;
                    }
                    const active = $('.slide-item.active');
                    const prev = active.prev();
                    const next = active.next();
                    const newNext = next.next();
                    active.removeClass('active').addClass('prev');
                    prev.removeClass('prev');
                    next.removeClass('next').addClass('active');
                    newNext.addClass('next');
                    this.#activeIndex++;
                });
        }

        get activeIndex() {
            return this.#activeIndex;
        }

        resetIndex() {
            this.#activeIndex = 0;
        }

    }

    const app = new App();
    app.initialize();

    const levSlider = new Slider(SliderTypes.myLeviton, {
        infinite: true
    });
    levSlider.initialize();

    $('.subsection.' + setView)
        .show()
        .addClass('perma');
    $('.toolbar-item-parent.' + setView)
        .addClass('perma');

    $('.toolbar-item-parent').click(e => {
        const target = e?.target;
        const classList = target?.classList;
        const snatchedClass = classList[1];
        app.setView(snatchedClass, target);
    });

    $('.util-col').click(e => {
        app.setView('about')
    })

    $('#year').text((new Date()).getFullYear());

});