import {Element as StripeElement} from "../interfaces/element";

export abstract class StripeElementComponent {
    protected element: StripeElement;

    constructor() {}

    getElement(): StripeElement {
        return this.element;
    }
}