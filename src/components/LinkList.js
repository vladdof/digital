import Link from './Link';

const LinkList = ({ links }) => (
  <ul>
    {links.map(link =>
      <Link
        text={link}
        key={link}
      />
    )}
  </ul>
);

export default LinkList;
