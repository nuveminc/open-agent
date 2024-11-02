declare module '*.svg?react' {
  import React = require('react');
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}
