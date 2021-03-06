import {Link} from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { HeaderWrapper, NavLinks } from './header.styles';


export const Header = (props) => {
  return (<HeaderWrapper>
  <div className='brand'>
  <FontAwesomeIcon icon={faSeedling} size="7x"/>
  <h1>Seedling</h1>
  </div>
  <NavLinks>
    <Link to='/calculator'>Loan Calculator</Link>
    <Link to='/reverse'>Reverse Calculator</Link>
    <Link to='/'>About</Link>
  </NavLinks>
  </HeaderWrapper>);
};
