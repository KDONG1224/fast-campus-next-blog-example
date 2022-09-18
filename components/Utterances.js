import React, { memo } from 'react';

const Utterances = () => {
  return (
    <section
      ref={(elem) => {
        if (!elem) return;

        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.async = true;
        script.setAttribute('repo', 'KDONG1224/fast-campus-next-blog-example');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('theme', 'dark-blue');
        script.crossOrigin = 'anonymous';

        elem.appendChild(script);
      }}
    />
  );
};

export default memo(Utterances);
