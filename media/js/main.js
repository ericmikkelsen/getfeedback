class Tabs {
  constructor(cls) {
    this.controllers = [...document.querySelectorAll(cls)];
    this.tabs = [];
    this.hideTabs();
    this.showTab();
    this.setupControllers();
  }
    
  hideTabs(){
    this.controllers.forEach( controller => {
      const tab = document.querySelector(controller.getAttribute('href'));
      tab.hidden = true;
    } )
  }

  showTab(controller = undefined) {
    controller = controller || this.controllers[0];
    controller.tabIndex = 0;
    const tab = document.querySelector(controller.getAttribute('href'));
    tab.hidden = false;
  }

  // Method
  setupControllers() {
      this.controllers.forEach( (controller, index) => {
        controller.addEventListener('click', ( event ) => {
          event.preventDefault();
          this.hideTabs();
          this.showTab(controller);
        });
      })
  }
}

document.querySelector('html').classList.remove('no-js');

const tabs = new Tabs('.js-Tab__control');

if( window.innerWidth > 639) {
  const video = document.querySelector('.js-Header__bg iframe');
  console.log(video);
  video.setAttribute('src', video.getAttribute('data-src'));
}