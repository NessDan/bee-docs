(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{124:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return a?o.a.createElement(m,c(c({ref:t},s),{},{components:a})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),r=(a(0),a(124)),i={title:"Upgrading Bee",id:"upgrading-bee"},c={unversionedId:"working-with-bee/upgrading-bee",id:"working-with-bee/upgrading-bee",isDocsHomePage:!1,title:"Upgrading Bee",description:"Keep a close eye on the #bee-node-updates channel in our Discord Server for information on the latest software updates for Bee. It's very important to keep Bee up to date to benefit from security updates and ensure you are able to properly interact with the swarm.",source:"@site/docs/working-with-bee/upgrade.md",slug:"/working-with-bee/upgrading-bee",permalink:"/docs/working-with-bee/upgrading-bee",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/working-with-bee/upgrade.md",version:"current",sidebar:"Balls",previous:{title:"Backups",permalink:"/docs/working-with-bee/backups"},next:{title:"Uninstalling Bee",permalink:"/docs/working-with-bee/uninstalling-bee"}},l=[{value:"Upgrading from 0.5.x Series to 0.6.x",id:"upgrading-from-05x-series-to-06x",children:[]},{value:"Upgrade Procedure",id:"upgrade-procedure",children:[{value:"Ubuntu / Debian / Raspbian",id:"ubuntu--debian--raspbian",children:[]}]}],s={toc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Keep a close eye on the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.gg/vQcngMzZ9c"}),"#bee-node-updates")," channel in our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.gg/wdghaQsGq5"}),"Discord Server")," for information on the latest software updates for Bee. It's very important to keep Bee up to date to benefit from security updates and ensure you are able to properly interact with the swarm. "),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Bee sure to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/working-with-bee/backups"}),"backup")," your clef key material and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/working-with-bee/cashing-out"}),"cashout your cheques")," to make sure your gBZZs are safe before applying updates."))),Object(r.b)("h3",{id:"upgrading-from-05x-series-to-06x"},"Upgrading from 0.5.x Series to 0.6.x"),Object(r.b)("p",null,"Bee 0.6.2 contains a few breaking changes which mean a database migration must take place. We also intoduce ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/access-the-swarm/keep-your-data-alive"}),"postage stamps")," which must be attached to chunks of data so that they will be retained in the Swarm network."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Please take note that nodes which deployed their chequebook with bee v0.5.0 will have to be started with the --transaction TXHASH flag where TXHASH is any Ethereum transaction on goerli network sent from the bee node's Ethereum address. The hash of the chequebook deployment transaction can be used for this and can be looked up on etherscan. For nodes which first started with v0.5.1 or higher no action is necessary, as their chequebook deployment transaction will be automatically picked-up by the Bee node. "))),Object(r.b)("p",null,"As part of these changes, if you have any ",Object(r.b)("strong",{parentName:"p"},"locally pinned content"),", this must be manually migrated to the new data structure expected by the network of 0.6.2 clients, see below for information on how to proceed. "),Object(r.b)("p",null,"If you ",Object(r.b)("em",{parentName:"p"},"do not")," have any locally pinned content, your migration will be automatic and your update will proceed as normal."),Object(r.b)("p",null,"To check if a 0.5.x has pinned content, query the ",Object(r.b)("inlineCode",{parentName:"p"},"pin")," api endpoint as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl -s localhost:1633/pin/chunks | jq ".chunks | length"\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"100\n")),Object(r.b)("p",null,"If any non-zero values are returned, ",Object(r.b)("strong",{parentName:"p"},"you must")," complete the manual migration procedure, automatic migration will be prevented and ",Object(r.b)("em",{parentName:"p"},"you must")," follow the Manual Migration Procedure detailed further down the page."),Object(r.b)("h4",{id:"automatic-migration-procedure"},"Automatic Migration Procedure"),Object(r.b)("p",null,"To update ",Object(r.b)("strong",{parentName:"p"},"without pinned content:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Optionally, ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/working-with-bee/cashing-out"}),"cashout your node's cheques")," to make sure your gBZZs are safe. If you have cashed out recently, you can skip this step."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/working-with-bee/backups"}),"Backup your Bee")," data, especially your keys folder!"),Object(r.b)("li",{parentName:"ol"},"Upgrade your node, as you normally would (see below)."),Object(r.b)("li",{parentName:"ol"},"Adjust your configuration. Several configuration parameters have changed in 0.6.x - If you wish to continue running as a full node, you must set the new ",Object(r.b)("inlineCode",{parentName:"li"},"full-node")," flag to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),". check out the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/working-with-bee/configuration"}),"configuration")," guide for more info on how to update your configuration."),Object(r.b)("li",{parentName:"ol"},"Restart your node.")),Object(r.b)("p",null,"Your Bee should start up as normal, and begin to connect to other Bees that are running Bee 0.6.2 or later."),Object(r.b)("h4",{id:"manual-migration-procedure"},"Manual Migration Procedure"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/working-with-bee/cashing-out"}),"Cashout your node")," to make sure your gBZZs are safe. If you have cashed out recently, you can skip this step."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/working-with-bee/backups"}),"Backup your Bee")," data, especially your keys folder!"),Object(r.b)("li",{parentName:"ol"},"If you have pinned data, Download all your pinned data. Please use these to download all your data ready for re-upload with ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/access-the-swarm/keep-your-data-alive"}),"postage stamps"),"."),Object(r.b)("li",{parentName:"ol"},"Carefully, delete your ",Object(r.b)("inlineCode",{parentName:"li"},"localstorage")," folder ",Object(r.b)("strong",{parentName:"li"},"only"),". ",Object(r.b)("em",{parentName:"li"},"DO NOT DELETE")," your ",Object(r.b)("inlineCode",{parentName:"li"},"keys")," or ",Object(r.b)("inlineCode",{parentName:"li"},"statestore")," folder. Your ",Object(r.b)("inlineCode",{parentName:"li"},"localstorage")," folder can be located by consulting your Bee's ",Object(r.b)("inlineCode",{parentName:"li"},"data-dir")," configuration parameter. If you are using Docker, please delete just the contents of the folder."),Object(r.b)("li",{parentName:"ol"},"Upgrade your node, as you normally would (see below)."),Object(r.b)("li",{parentName:"ol"},"Adjust your configuration. Several configuration parameters have changed in 0.6.x - If you wish to continue running as a full node, you must set the new ",Object(r.b)("inlineCode",{parentName:"li"},"full-node")," flag to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),". check out the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/working-with-bee/configuration"}),"configuration")," guide for more info on how to update your configuration."),Object(r.b)("li",{parentName:"ol"},"Restart your node.")),Object(r.b)("p",null,"Your Bee should start up as normal, and begin to connect to other Bees that are running Bee 0.6.2 or later."),Object(r.b)("h2",{id:"upgrade-procedure"},"Upgrade Procedure"),Object(r.b)("h3",{id:"ubuntu--debian--raspbian"},"Ubuntu / Debian / Raspbian"),Object(r.b)("p",null,"To upgrade Bee, simply stop the Bee service."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"sudo systemctl stop bee\n")),Object(r.b)("p",null,"Now follow the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/install"}),"installation instructions")," to download the new package and install the new version, as you would during a new installation."),Object(r.b)("p",null,"You will be greeted by the following prompt:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Configuration file '/etc/bee/bee.yaml'\n ==> Modified (by you or by a script) since installation.\n ==> Package distributor has shipped an updated version.\n   What would you like to do about it ?  Your options are:\n    Y or I  : install the package maintainer's version\n    N or O  : keep your currently-installed version\n      D     : show the differences between the versions\n      Z     : start a shell to examine the situation\n The default action is to keep your current version.\n*** bee.yaml (Y/I/N/O/D/Z) [default=N] ?\n")),Object(r.b)("p",null,"Select ",Object(r.b)("inlineCode",{parentName:"p"},"N")," to keep your current data and keys."),Object(r.b)("p",null,"You may now start your node again."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"sudo systemctl start bee\n")),Object(r.b)("h4",{id:"manual-installations"},"Manual Installations"),Object(r.b)("p",null,"To upgrade your manual installation, simply stop Bee, replace the Bee binary and restart."),Object(r.b)("h4",{id:"docker"},"Docker"),Object(r.b)("p",null,"To upgrade your docker installation, simply increment the version number in your configurations and restart."))}b.isMDXComponent=!0}}]);