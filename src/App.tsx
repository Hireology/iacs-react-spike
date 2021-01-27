import { FC } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import data from './data';
import { Header } from './components/Header';
import { BasicTemplate } from './components/BasicTemplate';
import { Site } from './types';

/**
 * App
 * * Entry point for In-App Career Sites
 * * Fetches initial site data based on URL params (/:org)
 * * Renders dynamic routes
 * ! if no route or org is available, an error page is displayed
 */
const App: FC = () => {
  // Fetch initial site data from route params
  const location = useRouteMatch('/:organization');

  // Render an error page if no params are present
  if (!location) return <div>Sorry! This page doesn't exist</div>;

  // Stub API response for singular organization site data <3
  const organization: Site =
    data.organizations.find(
      (o) => o.name === (location.params as any).organization
    ) || ({} as Site);

  const { routes } = organization;

  return (
    <div>
      <Header routes={routes} />
      {organization && (
        <Switch>
          <Route
            path={`/${organization.name}`}
            render={() => <BasicTemplate site={organization} />}
          />
          {organization.routes.map((route, i) => (
            <Route
              path={`/${organization.name}/${route.name}`}
              key={i}
              render={() => <BasicTemplate site={organization} />}
            />
          ))}
        </Switch>
      )}
    </div>
  );
};

export default App;
