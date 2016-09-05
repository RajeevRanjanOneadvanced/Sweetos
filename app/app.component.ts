import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/Rx'; // load all features from reactive extensions library - instruction to module loader; but actually imports nothing!

import {ProductListComponent} from './products/product-list.component'
import {ProductDetailComponent} from './products/product-detail.component'
import {WelcomeComponent} from './home/welcome.component'
import {ProductService} from './products/product.service';

@Component({
    selector: 'app',
    template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{ pageTitle }}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['Welcome']"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>
                        <li><a [routerLink]="['Products']"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span></a></li>
                    </ul>
                </div>
            </nav>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])
export class AppComponent implements OnInit {
    pageTitle: string = 'Sweetos';

    constructor() { }

    ngOnInit() { }

}