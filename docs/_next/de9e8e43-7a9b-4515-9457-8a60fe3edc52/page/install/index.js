
          window.__NEXT_REGISTER_PAGE('/install', function() {
            var comp = module.exports=webpackJsonp([12],{985:function(e,n,t){e.exports=t(986)},986:function(e,n,t){"use strict";var s=t(0),a=function(e){return e&&e.__esModule?e:{default:e}}(s);Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),l=(function(e){e&&e.__esModule}(o),t(31));n.default=(0,l.withServerProps)(function(e){return a.default.createElement(l.Chrome,null,a.default.createElement(l.Content,{title:"Install"},a.default.createElement(l.Heading,{size:"xxLarge"},a.default.createElement("h1",null,"Install FTW!")),a.default.createElement(l.Doc,null,"\n## Normalize\n\nUse of the Core or Components requires the existence of the Design System normalize stylesheet on the page.  Install with:\n\n```bash\nnpm install @pluralsight/ps-design-system-normalize\n```\n\nInclude this vanilla CSS in your application in a method appropriate for your project. For usage options, follow the [Core Usage docs](/core/usage) patterns.\n\n## Use Core\n\nFirst install the dependency:\n\n```bash\nnpm install @pluralsight/ps-design-system-core\n```\n\nCore design elements are represented as a set of variables.  We recommend you use either the JavaScript variables or the CSS variables.\n\nSee individual reference pages for usage examples.\n\nFor build support, consult the [CSS Build docs](/core/build).\n\nFor usage details, see the [Core Usage docs](/core/usage).\n\n## Use Components\n\nMost components use [glamorous](https://github.com/paypal/glamorous), which has a peerDependency on [glamor](https://github.com/threepointone/glamor).  It needs to be installed exactly once per application that uses these components:\n\n```bash\nnpm install glamor\n```\n\nEach component is installed separately.  The JavaScript is prebuilt Node modules.  Assets are inlined.  Find and use what you need.  For example:\n\n```bash\nnpm install @pluralsight/ps-design-system-button\n```\n\nSee individual reference pages for usage examples.\n\nFor full, working project examples, see [github](https://github.com/pluralsight/design-system/tree/master/examples).\n")))})}},[985]);
            return { page: comp.default }
          })
        