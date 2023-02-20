const smoothScroll = (target, duration) => {
    const element = document.querySelector(target);
    const elementPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    let startTime = null;
  
    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation);
  };
  
  const aboutlinks = document.querySelector('a[href="#about"]');
  aboutlinks.forEach(aboutlink => {
    aboutlink.addEventListener('click', () => {
        smoothScroll('#about', 500);
      });
  })

  const servicelinks = document.querySelector('a[href="#service"]');
  servicelinks.forEach(servicelink => {
    servicelink.addEventListener('click', () => {
        smoothScroll('#service', 500);
      });
  })

  const technologieslinks = document.querySelectorAll('a[href="#technologies"]');
  technologieslinks.forEach(technologieslink => {
    technologieslink.addEventListener('click', () => {
        smoothScroll('#technologies', 500);
      });
  })

  const howtolinks = document.querySelectorAll('a[href="#howto"]');
  howtolinks.forEach(howtolink => {
    howtolink.addEventListener('click', () => {
        smoothScroll('#howto', 500);
      });
  })

  const joinlinks = document.querySelectorAll('a[href="#join"]');
  joinlinks.forEach(joinlink => {
    joinlink.addEventListener('click', () => {
        smoothScroll('#join', 500);
    });
  })

  const contactlinks = document.querySelectorAll('a[href="#contact"]');
  contactlinks.forEach(contactlink => {
    contactlink.addEventListener('click', () => {
        smoothScroll('#contact', 500);
      });
  })