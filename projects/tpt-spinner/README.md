# tpt-spinner [![NPM version](https://badge.fury.io/js/tpt-spinner.svg)](http://badge.fury.io/js/tpt-spinner)

>Angular 7 spinner.
> Its good component for angular spinner where you can use default spinner or you can inject the template through ng-template. Default spinner is
<p align="center">
  <img src="data:image/gif;base64,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" width="350" title="hover text">
</p>
If you want to customize it please use ng-template 

## Install
### Install with [npm](npmjs.org):

```bash
npm i tpt-spinner
```

### Basic Usage

Add <tpt-spinner></tpt-spinner> tag in app component. and import TptSpinnerModule in Root module (appModule)

Inject TptSpinnerManager in where ever you want to toggle spinner
```bash
constructor(private spinnerManager: TptSpinnerManager) { }
this.spinnerManager.show();
this.spinnerManager.hide();
```
### With width and height
```bash
<tpt-spinner [width]="120" [height]="120"></tpt-spinner>
```


### Custom template injuction
```bash
<tpt-spinner [width]="120" [height]="120">
  <ng-template>
    <div class="loader"></div>
  </ng-template>
</tpt-spinner>
```
## Author

**Tirupathi Temburu**
 
+ [github/tirupathi471](https://github.com/tirupathi471)
+ [twitter/ThisZTirupathi](http://twitter.com/ThisZTirupathi) 

## License
Copyright (c) 2019 Tirupathi Temburu, contributors.  
Released under the MIT license

***
