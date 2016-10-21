import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MenuItem } from 'primeng/primeng';

@Injectable()
export class BreadcrumbService {
    public breadcrumbItem: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
    private itemBreadcrums: MenuItem[];

    setBreadcrumbs(page: string) {
        this.itemBreadcrums = [];
        let refList: MenuItem[] = this.getBreadcrumsLink(page);
        this.breadcrumbItem.next(refList);
    }

    private getBreadcrumsLink(page: string): MenuItem[] {
        this.itemBreadcrums = [];

        switch (page) {
            case 'dashboard':
                this.itemBreadcrums.push({ label: 'Dashboard' });
                break;
            case 'dashboard2':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: 'Dashboard2' });
                break;
            case 'searchMovie':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: 'Search Movie' });
                break;
            case 'movieList':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: 'Search Movie', routerLink: ['movie/searchMovie'] });
                this.itemBreadcrums.push({ label: 'Search Movie List' });
                break;
            case 'movieDetail':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: 'Search Movie', routerLink: ['movie/searchMovie'] });
                this.itemBreadcrums.push({ label: 'Search Movie List', routerLink: ['movie/searchMovieList'] });
                this.itemBreadcrums.push({ label: 'Search Movie Detail' });
                break;
            default:
                this.itemBreadcrums = [];
        }
        return this.itemBreadcrums;
    }

}
