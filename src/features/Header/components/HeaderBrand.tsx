import { NavLink } from 'react-router-dom';

export function HeaderBrand() {
  return (
    <NavLink to="/" title="Home">
      <img src={'/HeaderLogo.svg'} />
    </NavLink>
  );
}
