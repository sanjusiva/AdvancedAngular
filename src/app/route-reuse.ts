import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
  storedRoutes = new Map<string, DetachedRouteHandle>();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.routeConfig?.path === 'users'; // only cache /users
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (route.routeConfig?.path) {
      this.storedRoutes.set(route.routeConfig.path, handle);
    }
    console.log("cache routes: ",this.storedRoutes,handle);
    
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.storedRoutes.has(route.routeConfig?.path || '');
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRoutes.get(route.routeConfig?.path || '') || null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}

/*
| Method             | Purpose                                |
| ------------------ | -------------------------------------- |
| `shouldDetach`     | Choose which routes to cache           |
| `store`            | Save the cached route/component        |
| `shouldAttach`     | Check if cached route should be reused |
| `retrieve`         | Return cached route handle             |
| `shouldReuseRoute` | Decide if two routes are same          |
*/