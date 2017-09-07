
          window.__NEXT_REGISTER_PAGE('/core/color', function() {
            var comp = module.exports=webpackJsonp([15],{973:function(e,t,a){e.exports=a(974)},974:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=a(17),n=function(e){return e&&e.__esModule?e:{default:e}}(r);Object.defineProperty(t,"__esModule",{value:!0});var d=a(86),s=l(d),c=a(1),u=l(c),i=a(34),o=(l(i),a(0)),f=l(o),m=a(31),x=function(e){return f.default.createElement("div",{className:"palette"},e.children,f.default.createElement("style",null,"\n      .palette {\n        display: flex;\n        flex-wrap: wrap;\n        margin: calc(-0.5 * "+u.default.layout.spacingLarge+")\n          calc(-0.5 * "+u.default.layout.spacingLarge+");\n      }\n    "))},E=function(e){return f.default.createElement("div",{className:"stop","data-jsx":3319701705},e.children,f.default.createElement(n.default,{styleId:3319701705,css:'.stop[data-jsx="3319701705"]{color:'+u.default.colors.white+";white-space:nowrap}"}))},p=function(e){return f.default.createElement("div",{className:"var","data-jsx":3164816602},e.children,f.default.createElement(n.default,{styleId:3164816602,css:'.var[data-jsx="3164816602"]{color:'+u.default.colors.white+";white-space:nowrap;opacity:0.75;font-size:"+u.default.type.fontSizeXSmall+"}"}))},h=function(e){return f.default.createElement("div",{className:"gradient",style:{background:e.var},"data-jsx":1774066694},e.children,f.default.createElement(n.default,{styleId:1774066694,css:'.gradient[data-jsx="1774066694"]{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:120px;margin:calc('+u.default.layout.spacingLarge+" / 2);padding:"+u.default.layout.spacingLarge+" "+u.default.layout.spacingSmall+"}"}))},g=function(e){return f.default.createElement("div",{className:"swatch "+(e.light?"swatchLight":"swatchDark"),style:{backgroundColor:"#"+e.hex},"data-jsx":134793347},f.default.createElement("div",{className:"hex","data-jsx":134793347},e.hex),f.default.createElement("div",{className:"var","data-jsx":134793347},"psColors",e.var),f.default.createElement(n.default,{styleId:134793347,css:'.swatch[data-jsx="134793347"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:120px;width:150px;padding:'+u.default.layout.spacingSmall+";margin:calc("+u.default.layout.spacingLarge+' / 2)}.swatchLight[data-jsx="134793347"]{border:1px solid '+u.default.colors.gray01+'}.hex[data-jsx="134793347"],.var[data-jsx="134793347"]{white-space:nowrap}.var[data-jsx="134793347"]{opacity:0.75;font-size:'+u.default.type.fontSizeXSmall+'}.swatchLight[data-jsx="134793347"] .hex[data-jsx="134793347"],.swatchLight[data-jsx="134793347"] .var[data-jsx="134793347"]{color:'+u.default.colors.gray05+'}.swatchDark[data-jsx="134793347"] .hex[data-jsx="134793347"],.swatchDark[data-jsx="134793347"] .var[data-jsx="134793347"]{color:'+u.default.colors.white+"}"}))},y=function(e){return f.default.createElement(g,e)},v=function(e){return f.default.createElement(g,(0,s.default)({},e,{light:!0}))};t.default=(0,m.withServerProps)(function(e){return f.default.createElement(m.Chrome,null,f.default.createElement(m.Content,{title:"Color"},f.default.createElement(m.Heading,{size:"xxLarge"},f.default.createElement("h1",{"data-jsx":2979188986},"Color")),f.default.createElement(m.Heading,{size:"large"},f.default.createElement("h2",{"data-jsx":2979188986},"Grayscale colors")),f.default.createElement(m.P,null,"Grayscale colors are used for containers, text, lines and borders."),f.default.createElement("div",{"data-jsx":2979188986},f.default.createElement(x,null,f.default.createElement(v,{hex:"FFFFFF",var:"White"}),f.default.createElement(v,{hex:"F2F2F2",var:"Bone"}),f.default.createElement(y,{hex:"CCCCCC",var:"Gray01"}),f.default.createElement(y,{hex:"AAAAAA",var:"Gray02"}),f.default.createElement(y,{hex:"555555",var:"Gray03"}),f.default.createElement(y,{hex:"363636",var:"Gray04"}),f.default.createElement(y,{hex:"222222",var:"Gray05"}),f.default.createElement(y,{hex:"181818",var:"Gray06"}),f.default.createElement(y,{hex:"000000",var:"Black"})),f.default.createElement("br",{"data-jsx":2979188986}),f.default.createElement(m.Code,{language:"css"},'@import "@pluralsight/ps-design-system-core";\n.mySelector {\n  color: var(--psColorsGray04);\n}')),f.default.createElement(m.Heading,{size:"large"},f.default.createElement("h2",{"data-jsx":2979188986},"UI colors")),f.default.createElement(m.P,null,"UI colors emphasize interface elements such as buttons, links, accents and vizualization."),f.default.createElement("div",{"data-jsx":2979188986},f.default.createElement(x,null,f.default.createElement(y,{hex:"E80A89",var:"Pink"}),f.default.createElement(y,{hex:"DE3636",var:"Red"}),f.default.createElement(y,{hex:"F96816",var:"Orange"}),f.default.createElement(y,{hex:"FF7B39",var:"OrangeLight"}),f.default.createElement(y,{hex:"FFC200",var:"Yellow"}),f.default.createElement(y,{hex:"86CE21",var:"GreenLight"}),f.default.createElement(y,{hex:"23AA5A",var:"Green"}),f.default.createElement(y,{hex:"137BC2",var:"Blue"})),f.default.createElement("br",{"data-jsx":2979188986}),f.default.createElement(m.Code,{language:"css"},'@import "@pluralsight/ps-design-system-core";\n.mySelector {\n  color: var(--psColorsOrange);\n}')),f.default.createElement(m.Heading,{size:"large"},f.default.createElement("h2",{"data-jsx":2979188986},"Gradient")),f.default.createElement(m.P,null,"So fresh. Use the standard gradient to emphasize and showcase the brand. Use sparingly."),f.default.createElement("div",{"data-jsx":2979188986},f.default.createElement(x,null,f.default.createElement(h,{var:u.default.colors.gradientHorz},f.default.createElement("div",{"data-jsx":2979188986},f.default.createElement(E,null,"F05A28"),f.default.createElement(p,null,"psColorsGradientHorz")),f.default.createElement("div",{className:"gradientHorzStop2","data-jsx":2979188986},f.default.createElement(E,null,"E80A89"))),f.default.createElement(h,{var:u.default.colors.gradientVert},f.default.createElement("div",{className:"gradientVert","data-jsx":2979188986},f.default.createElement(E,null,"F05A28"),f.default.createElement(p,null,"psColorsGradientVert"),f.default.createElement("div",{className:"gradientVertStop2","data-jsx":2979188986},f.default.createElement(E,null,"E80A89"))))),f.default.createElement("br",{"data-jsx":2979188986}),f.default.createElement(m.Code,{language:"css"},'@import "@pluralsight/ps-design-system-core";\n.mySelector {\n  background: var(--psColorsGradientHorz);\n}'))),f.default.createElement(n.default,{styleId:2979188986,css:'.gradientHorzStop2[data-jsx="2979188986"]{margin-left:auto}.gradientVertStop2[data-jsx="2979188986"]{margin-top:auto}.gradientVert[data-jsx="2979188986"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}'}))})}},[973]);
            return { page: comp.default }
          })
        