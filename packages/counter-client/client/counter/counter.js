import {Component, View, Inject, bootstrap} from "angular2now";

@Component("counter")
@View('client/counter/counter.ng.html')
@Inject()
class App {
    constructor() {
        console.log("App");
    }
}
bootstrap(App);
