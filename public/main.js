(function(){

  this.Line = function() {

// Default Settings
    this.settings = {
      animate: 'right-left',
      duration: 30
    };
    
    this.news = [
      'Flexible line for your site news with custom settings',"The director's adopted daughter discusses assault claim in her first TV interview.",'Palestinian Ahed Tamimi is viewed as a symbol of resistance by some and a propaganda tool by others.', 'The crypto-currency has nearly halved in value since its peak in December.'
    ]
    
    if(arguments && typeof arguments[0] == 'object' && (Boolean(Object.keys(arguments[0]).length) || Array.isArray(arguments[1])) && Boolean(arguments[1].length)) {
      assignSettings(this.settings, this.news, arguments[0], arguments[1]);
    }
    
// Append custom settings func
    function assignSettings(setts, arr, customSetts, customStrArr) {
      let style = Object.keys(customSetts),
          news = customStrArr,
          length = style.length,
          err = new Error();

      for(let i = 0; i < length; i++) {

        if(setts.hasOwnProperty(style[i])) {
          setts[style[i]] = customSetts[style[i]];
        } else {
           throw new Error("No property such: " + style[i]);
        }
        
      }

      if(news.length) {

        for(let i = 0; i < news.length; i++) {
          if(news[i].length !== 0)
            arr.length = 0;
            arr.push(news[i]);
        }
      }
    }
    
// HTML generation func
    function createLine(settings, news) {
    
      let line = document.createElement("div"),
          animEl = document.createElement("div");
      
      animEl.classList.add(`anim-${settings.animate}`);
      animEl.style['animation-duration'] = `${settings.duration}s`;

      line.className = 'line';
      document.body.appendChild(line);
      line.appendChild(animEl);
      
      for(let i = 0; i < news.length; i++) {
        
        let pEl = document.createElement('p');
        pEl.className = "news"
        
        animEl.appendChild(pEl);
        pEl.innerText = news[i];

      }
// Animation Appending
      let screenWidth = line.clientWidth,
          style = document.createElement('style');
      
// Calculate element size percentage of screen width
      let responseSize = +(100 * (animEl.clientWidth / screenWidth)).toFixed(2),
      
          keyFrames = `\@keyframes alr {\
                  0% {\
                    margin-left: 100%\
                  }\
                  \
                  100% {\
                    margin-left: -${responseSize}%;\
                  }\
                }`;
      style.type = 'text/css';
      style.innerHTML = keyFrames;
      animEl.appendChild(style);
    }
    
  createLine(this.settings, this.news);
  }
}());

// Plugin init
let a = new Line({}, []);    
