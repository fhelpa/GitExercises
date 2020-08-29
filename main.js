  var tl = new TimelineLite({delay: '0.9', clearProps: 'all'})
    .from('s1', 0.9, {autoAlpha: 0, y: -30, ease: Power2.easeOut},'0.6', '+=0')
    .staggerFrom('.em-cow', 0.9, {autoAlpha: 0, y: -30, ease: Power2.easeOut},'0.8', '-=1')
    .from('#section3', 0.9, {autoAlpha: 0, y: -30, ease: Power2.easeOut},'0.12', '-=1')
