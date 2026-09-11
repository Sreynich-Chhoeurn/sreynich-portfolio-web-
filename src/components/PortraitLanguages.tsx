import React, { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { SiCss3, SiFlutter, SiHtml5, SiJavascript, SiLaravel, SiPhp, SiReact, SiTypescript, SiVuedotjs } from 'react-icons/si';

const technologies = [
  { name: 'HTML5', icon: SiHtml5, color: '#e65b30' },
  { name: 'CSS3', icon: SiCss3, color: '#2476d3' },
  { name: 'JavaScript', icon: SiJavascript, color: '#ae8500' },
  { name: 'React', icon: SiReact, color: '#008faa' },
  { name: 'PHP', icon: SiPhp, color: '#777bb4' },
  { name: 'Flutter', icon: SiFlutter, color: '#1689cf' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#269d72' },
  { name: 'Laravel', icon: SiLaravel, color: '#ed4b40' },
];

export default function PortraitLanguages() {
  const reduceMotion = useReducedMotion();
  const region = useRef<HTMLDivElement>(null);
  const visible = useInView(region, { amount: 0.15 });

  return (
    <div className="portrait-orbit" ref={region}>
      <div className="portrait-orbit-track" style={{ animationPlayState: reduceMotion || !visible ? 'paused' : 'running' }}>
        {technologies.map(({ name, icon: Icon, color }, index) => (
          <div className="portrait-orbit-mover" key={name} style={{ '--orbit-delay': `${-index * 4}s` } as React.CSSProperties}>
          <div
            className="portrait-orbit-badge"
            title={name}
            role="img"
            aria-label={name}
            tabIndex={0}
            style={{ color }}
          >
            <Icon size={26} aria-hidden="true" />
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
