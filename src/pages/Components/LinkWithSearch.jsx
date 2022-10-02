import { Link, useLocation } from 'react-router-dom';

export const LinkWithSearch = ({ children, to, ...props }) => {
  const { search } = useLocation();

  return (
    <Link to={to + search} {...props}>
      {children}
    </Link>
  );
};