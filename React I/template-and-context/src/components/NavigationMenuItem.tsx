import { Link } from 'react-router-dom';
import { NavigationType } from '../config/navigation';
import NavigationMenuItemStyled from './NavigationMenuItemStyled';

interface NavigationMenuItemProps {
  item: NavigationType;
}

function NavigationMenuItem({ item }: NavigationMenuItemProps) {
  return <NavigationMenuItemStyled><Link to={item.url}>{item.label}</Link></NavigationMenuItemStyled>;
}

export default NavigationMenuItem;
