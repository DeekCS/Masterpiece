import React, { useState } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const bodyScrolled = document.body.scrollTop;
    if (scrolled > 20 || bodyScrolled > 20) {
      setVisible(true);
    } else if (scrolled <= 20) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <a
      onClick={scrollTop}
      data-target="html"
      style={{ display: visible ? 'block' : 'none' }}
      className="scroll-to-target scroll-to-top"
    >
      <i className="fa fa-angle-up" />
    </a>
  );
};

export default ScrollToTop;
