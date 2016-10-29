"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var ng_lightning_1 = require('ng-lightning/ng-lightning');
var dashboard_routing_module_1 = require('./dashboard-routing.module');
var dashboard_component_1 = require('./dashboard.component');
var DashboardMainModule = (function () {
    function DashboardMainModule() {
    }
    DashboardMainModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                ng_lightning_1.NglModule.forRoot(),
                dashboard_routing_module_1.DashbaordRoutingModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardMainModule);
    return DashboardMainModule;
}());
exports.DashboardMainModule = DashboardMainModule;
//# sourceMappingURL=dashboard.module.js.map