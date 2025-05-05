import { NavLink } from 'react-router-dom';

export function HeaderBrand() {
  return (
    <NavLink to="/" title="Home">      
      <img src={`${import.meta.env.BASE_URL}./HeaderLogo.svg`} />
    </NavLink>
  );
}
