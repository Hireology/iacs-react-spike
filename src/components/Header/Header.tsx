import { FC } from 'react';
import { useRouteMatch, NavLink as Link } from 'react-router-dom';
import { Route } from '../../types';
import { HeaderStyles } from './HeaderStyles';

interface Props {
  routes: Route[];
}

/**
 * Header
 * Site-wide navigation
 * Maps through routes from API (with exceptions)
 */
export const Header: FC<Props> = ({ routes }) => {
  const location = useRouteMatch('/:organization');

  const ROUTE_EXCEPTIONS = ['home'];

  return (
    <HeaderStyles>
      <h1>React Spike</h1>
      <nav>
        {routes?.map(
          (route, i) =>
            !ROUTE_EXCEPTIONS.includes(route.name) && (
              <Link
                activeClassName="active"
                to={`${location?.url}/${route.name}`}
                key={i}
              >
                {route.name}
              </Link>
            )
        )}
      </nav>
    </HeaderStyles>
  );
};
