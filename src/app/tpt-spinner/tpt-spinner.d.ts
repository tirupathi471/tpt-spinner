import { OnInit } from "@angular/core";
import { TptSpinnerManager } from "./tpt-spinner.manager";

export declare class TptSpinner implements OnInit {
    ngOnInit(): void;
    width;
    height;
    spinnerURL;
    /** Reference to the spinner manager */
    constructor(spinnerManager: TptSpinnerManager);
}