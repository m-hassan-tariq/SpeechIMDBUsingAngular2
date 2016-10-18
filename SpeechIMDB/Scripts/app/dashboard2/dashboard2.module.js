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
var dashboard2_routing_module_1 = require('./dashboard2-routing.module');
var dashboard2_component_1 = require('./dashboard2.component');
var DashboardMainModule = (function () {
    function DashboardMainModule() {
    }
    DashboardMainModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                dashboard2_routing_module_1.DashbaordRoutingModule
            ],
            declarations: [
                dashboard2_component_1.DashboardComponent2
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardMainModule);
    return DashboardMainModule;
}());
exports.DashboardMainModule = DashboardMainModule;
//# sourceMappingURL=dashboard2.module.js.map