# Bootstrap Dashboard Kit

The perfect starting point for your next web app built with Bootstrap 5. A free and minimal starter kit to build fast and modern dashboards and applications.

[<img src="https://www.netlify.com/img/deploy/button.svg" />](https://app.netlify.com/start/deploy?repository=https://github.com/webpixels/bootstrap-dashboard-kit)

<img src="https://repository-images.githubusercontent.com/457349987/98a31ae0-8150-47f0-b8cf-005303e643ea" >

## Features

* Includes Eleventy static site generator for building the layouts and pages
* Includes Bootstrap (currently using v5) source files via npm
* Includes Webpixels CSS as our design system based on Bootstrap 5
* Includes npm scripts for compiling and autoprefixing Sass, compiling JS, watching for changes, and starting a basic local server
* Example stylesheet (scss/main.scss)
* Example JavaScript file (js/main.js) showing how to import all Bootstrap
* HTML, CSS, and JS minification

---

## Getting Started

For easier asset management we've chosen [Parcel](https://parceljs.org/). If you want to see all the npm scripts included for this starter kit, open the `package.json` file.

Next, navigate to the root folder of the site and run:

```
npm install
```

To run a local server and watch for changes:

```
npm start
```

To build for production:

```
npm run build
```

For additional eleventy commands, visit the [Eleventy command line usage page](https://www.11ty.dev/docs/usage/).

---

## Highlights

Our products are architected as an extension of Bootstrap, built for a specific set of problems. This means not only extending the base components of Bootstrap, but also adding completely new components, utilities, and plugins. Our themes are also different for several reasons:

### No custom CSS code

Instead of creating new custom CSS classes, we have used utilities to avoid duplicate code and keep the code very clean. Every time you need a custom style or behavior for your components, try using our extended set of [utility classes generated with the Bootstrap API](https://webpixels.io/docs/css/1.0/position)

```html
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col">
                <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span>
                <span class="h3 font-bold mb-0">$750.90</span>
            </div>
            <div class="col-auto">
                <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                    <i class="bi bi-credit-card"></i>
                </div>
            </div>
        </div>
        <div class="mt-2 mb-0 text-sm">
            <span class="badge badge-pill bg-soft-success text-success me-2">
                <i class="bi bi-arrow-up me-1"></i>30%
            </span>
            <span class="text-nowrap text-xs text-muted">Since last month</span>
        </div>  
    </div>
</div>
```

### Fully customizable via Sass variables

All the components are fully customizable via Sass variables and fully responsive to help you build your own dashboard designs with the most popular grid system included in Bootstrap 5. Learn more about [how to build your own branded theme](https://webpixels.io/docs/css/1.0/theme) in minutes

[**Documentation →**](https://webpixels.io/docs/css/)

### Webpixels CSS Framework

Utility and component-centric Design System based on Bootstrap for fast, responsive UI development.

**[Learn more »](https://github.com/webpixels/css)**

---

## Premium Version

If you'd like to explore the full list of features, we've created a standalone version based on this dashboard kit that includes:

- 500+ ready-to-use customizable UI components
- 33+ pre-built pages and layouts
- All-set authentication flow: login, sign up, forgot password, profile flows
- Built-in apps: Project Management, Kanban
- Fully customized charts using the Apex Charts plugin

- [Product Details](https://webpixels.io/themes/clever-admin-dashboard-template)
- [Live Preview](https://clever-dashboard.webpixels.work/)

or you can get unlimited access to all the components and templates by upgrading to PRO.

## Upgrade to Pro

One of the benefits you get when working with our themes, free or premium, is that you can extend the default features with any of the [components and templates](https://webpixels.io/components) available on Webpixels.

[**Get Pro Access →**](https://webpixels.io/plans)

## Useful Resources

Get updates on the development of our tools, components, or themes, and chat with the project maintainers and community members.

- Follow [@webpxs](https://twitter.com/intent/user?screen_name=webpxs) on Twitter
- Read and subscribe to [The Official Webpixels Blog](https://webpixels.io/blog)
- Get inspired through our designs on [Dribbble](https://dribbble.com/webpixels)
- Check out our open-source projects on [Github](https://github.com/webpixels)

## Copyright

Made with ❤️ by [Webpixels](https://webpixels.io). Open-sourced software licensed under the MIT license.
