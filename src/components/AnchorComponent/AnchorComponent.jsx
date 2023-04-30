import { Anchor } from 'antd';
import c from './AnchorComponent.module.scss';
import { anchorData } from '../../data/anchorData';
import { useState, useEffect } from 'react';

export const AnchorComponent = () => {
  const [offsetTop, setOffsetTop] = useState(46);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOffsetTop(60);
      } else {
        setOffsetTop(46);
      }
    };

    
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Anchor
      className={c.anchorComponent}
      direction='horizontal'
      offsetTop={offsetTop}
      bounds={60}
      affix={true}
      items={anchorData}
    />
  );
};
