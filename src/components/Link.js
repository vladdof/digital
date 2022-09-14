import A from './A';

const Link = ({ text, href = '#', ...props }) => (
  <A href={href} {...props}>
    { text }
  </A>
);

export default Link;
