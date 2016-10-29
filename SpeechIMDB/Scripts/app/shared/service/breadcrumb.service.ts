import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MenuItem } from 'primeng/primeng';

import { UrlHistoryService } from '../../search-movies/shared/service/url-history-store.service';
import * as _ from "lodash";

class BreadcrumItem {
    label: string;
    link: string;
}

@Injectable()
export class BreadcrumbService {
    public breadcrumbItem: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
    private itemBreadcrums: MenuItem[];

    constructor(private urlHistoryService: UrlHistoryService) {
    }

    setBreadcrumbs(page: string) {
        this.itemBreadcrums = [];
        let refList: MenuItem[] = this.getBreadcrumsLink(page);
        this.breadcrumbItem.next(refList);
    }

    private getBreadcrumsLink(page: string): MenuItem[] {
        this.itemBreadcrums = [];
        let item: BreadcrumItem = this.getsearchMoviePage();

        switch (page) {
            case 'dashboard':
                this.itemBreadcrums.push({ label: '' });
                break;
            case 'searchMovie':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: 'Search Movie' });
                break;
            case 'speechSearchMovie':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: 'Speech Search Movie' });
                break;
            case 'movieList':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: item.label, routerLink: [item.link] });
                this.itemBreadcrums.push({ label: 'Search Movie List' });
                break;
            case 'movieDetail':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: item.label, routerLink: [item.link] });
                this.itemBreadcrums.push({ label: 'Search Movie List', routerLink: ['movie/searchMovieList'] });
                this.itemBreadcrums.push({ label: 'Search Movie Detail' });
                break;
            default:
                this.itemBreadcrums = [];
        }
        return this.itemBreadcrums;
    }

    private getsearchMoviePage(): BreadcrumItem {
        let url = _.toLower(_.trim(this.urlHistoryService.getUrlHistoryObj()));
        let item: BreadcrumItem = new BreadcrumItem();

        if (_.includes(url, 'speech')) {
            item.label = "Speech Search Movie";
            item.link = "movie/speechSearchMovie"
        }
        else {
            item.label = "Search Movie";
            item.link = "movie/searchMovie"
        }
        return item;
    }

}
