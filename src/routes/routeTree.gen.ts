import { Route as rootRoute } from './__root';
import { Route as AboutImport } from '@/routes/pages/about';
import { Route as IndexImport } from '@/routes/pages/index';

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as never);

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as never);
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/about': {
      preLoaderRoute: typeof AboutImport;
      parentRoute: typeof rootRoute;
    };
  }
}
export const routeTree = rootRoute.addChildren([IndexRoute, AboutRoute]);
