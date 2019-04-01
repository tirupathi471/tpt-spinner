# tpt-spinner
Angular 7 spinner.

# keywords [![NPM version](https://badge.fury.io/js/tpt-spinner.svg)](http://badge.fury.io/js/tpt-spinner)


> CLI utility for easily adding keywords to package.json.

## Install
### Install with [npm](npmjs.org):

```bash
npm i -g tpt-spinner
```

### Basic Usage

Add <tpt-spinner></tpt-spinner> tag in app component. and import TptSpinnerModule in Root module (appModule)

Injuct TptSpinnerManager in where ever you want to toggle spinner
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

**Jon Schlinkert**
 
+ [github/tirupathi471](https://github.com/tirupathi471)
+ [twitter/ThisZTirupathi](http://twitter.com/ThisZTirupathi) 

## License
Copyright (c) 2019 Tirupathi Temburu, contributors.  
Released under the MIT license

***

