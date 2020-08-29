var tl = new TimelineLite({delay: '0.3', clearProps: 'all'})
    .from('#section1 i', 0.9, {autoAlpha: 0, y: 15, ease: Power2.easeOut}, '0.06','+=0')
    .staggerFrom('#section1 h1', 0.9, {autoAlpha: 0, y: 35, ease: Power2.easeOut},'0.06', '-=0.6')
    .from('#section1 p', 0.9, {autoAlpha: 0, y: 15, ease: Power2.easeOut}, '0.08','-=0.8')
    .staggerFrom('#section2 h1', 0.9, {autoAlpha: 0, y: 45, ease: Power2.easeOut},'0.06', '-=0.6')
    .from('#section3 h1', 0.9, {autoAlpha: 0, ease: Power2.easeOut}, '-=0.6')
