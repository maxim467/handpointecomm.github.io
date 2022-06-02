"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Overview",d={unversionedId:"overview",id:"overview",title:"Overview",description:"Introduction",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Transaction Types",permalink:"/docs/transactiontypes"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Security and Compliance",id:"security-and-compliance",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Message signing",id:"message-signing",level:3},{value:"Hosted HTTP Requests",id:"hosted-http-requests",level:2},{value:"Handling Errors",id:"handling-errors",level:2},{value:"Redirect URL",id:"redirectUrl",level:2},{value:"Callback URL",id:"callbackUrl",level:2},{value:"Field Formats",id:"fieldFormats",level:2}],h={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The Hosted Integration method makes it easy to add secure payment processing to your e-commerce business, using our Hosted Payment Pages (HPP). You can use this method if you do not want to collect and store Cardholder data."),(0,i.kt)("p",null,"The Hosted Integration method works by redirecting the Customer to our Gateway\u2019s Hosted Payment Page, which will collect the Customer\u2019s payment details and process the payment before redirecting the Customer back to a page on your website, letting you know the payment outcome. This allows you the quickest path to integrating with the Gateway.\nThe standard Hosted Payment Page is designed to be shown in a lightbox over your website and styled with logos and colours to match. Alternatively, you can arrange for fully customised Hosted Payment Pages to be produced that can match your website\u2019s style and layout. These fully customised pages are usually provided using a browser redirect, displaying full-page in the browser, or can be displayed embedded in an iframe on your website."),(0,i.kt)("p",null,"For greater control over the customisation of the payment page, our Gateway offers the use of Hosted Payment Fields, where only the individual input fields collecting the sensitive Cardholder data are hosted by the Gateway while the remainder of the payment form is provided by your website. These Hosted Payment Fields fit seamlessly into your payment page and can be styled to match your payment fields. When your payment form is submitted to your server, the Gateway will submit a payment token representing the sensitive card data it collected and your webserver can then use the Direct Integration to process the payment without ever being in contact with the collected Cardholder data. For more information, please refer to our Hosted Payment Fields SDK Guide."),(0,i.kt)("h2",{id:"security-and-compliance"},"Security and Compliance"),(0,i.kt)("p",null,"Each method requires a different level of server security and compliance with the Payment Card Industry Data Security Standard (PCI DSS).If you use Hosted Payment Pages with the Hosted Integration or Hosted Payment Fields with the Direct or Batch Integrations, then your webserver does not need an SSL certificate and you require the lowest level of PCI DSS compliance."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"You will need the following information to integrate with the Gateway which will be provided during onboarding:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Merchant Account ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Your unique Merchant Account ID.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hosted Integration URL"),(0,i.kt)("td",{parentName:"tr",align:null},"Your unique URL to use the Hosted Integration.")))),(0,i.kt)("p",null," You will be provided with unique production and test Merchant Account IDs during the onboarding process. You will also be provided with the integration URL. "),(0,i.kt)("p",null,"All requests must specify which Merchant Account they are for, using the merchantID request field. In addition to this, message signing is often used."),(0,i.kt)("h3",{id:"message-signing"},"Message signing"),(0,i.kt)("p",null,"You can configure a signing secret phrase for each Merchant Account. When configured, each request will need to be \u2018signed\u2019 by providing a signature field containing a hash generated from the combination of the serialised request and this signing secret phrase. On receipt, the Gateway will then re-generate the hash and compare it with the one sent. If the two hashes are different then the request received must not be the same as that sent and so the contents must have been tampered with and the transaction will be aborted and an error response is returned."),(0,i.kt)("p",null,"The Gateway will also return hash of the response message in the returned signature field, allowing you to create your own hash of the response (minus the signature field) and verify that the hashes match."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Message signing maybe mandatory on some Merchant Accounts"),".\nIf message signing is enabled, then the data POSTed to any callback URL will also be signed.\nSee ",(0,i.kt)("a",{parentName:"p",href:"annexes#signatureCalculation"},"signature calculation")," for information on how to create the hash."),(0,i.kt)("h2",{id:"hosted-http-requests"},"Hosted HTTP Requests"),(0,i.kt)("p",null,"A request can be sent to the Gateway by submitting a HTTP POST request to the integration URL provided."),(0,i.kt)("p",null,"The request should have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type: application/x-www-form-urlencoded")," HTTP header and the request should be name, value pairs URL encoded as per RFC 1738.\nComplex fields consisting of single or multidimensional records or arrays must be formatted as per the ",(0,i.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.http-build-query.php"},"PHP http_build_query method")," using square brackets to represent multiple dimensions. The sub-field names must be numeric or alphanumeric only, alphanumeric fields must not start with a numeric. Any square brackets around the nested field names should be URL encoded, ","[ as %5B and ]"," as %5D."),(0,i.kt)("p",null,"The following example request contains a complex items field consisting of an array of records representing the following table of purchased items."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Quantity"),(0,i.kt)("th",{parentName:"tr",align:null},"Amount"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Newspaper"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"110")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chocolate bar"),(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"249")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Carrier bag"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"10")))),(0,i.kt)("p",null,"For example, a request would be URL encoded as:\nmerchantID=100001&action=SALE&type=1&amount=1001","\xa4","cyCode=826&countryCode=826&transactionUnique=55f6db1c81d95&orderRef=Test+purchase&customerPostCode=NN17+8YG&responseCode=0&responseMessage=AUTHCODE%3A350333&state=captured&xref=15091702MG47WN32MM88LPK&cardNumber=4929+4212+3460+0821&cardExpiryDate=1215&items%5B0%5D%5Bdescription%5D=Newspaper&items%5B0%5D%5Bquantity%5D=1&items%5B0%5D%5Bamount%5D=110&items%5B1%5D%5Bdescription%5D=Chocolate+bar&items%5B1%5D%5Bquantity%5D=3&items%5B1%5D%5Bamount%5D=249&items%5B2%5D%5Bdescription%5D=Carrier+bag&items%5B2%5D%5Bquantity%5D=1&items%5B2%5D%5Bamount%5D=1"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please note that the field and sub-field names must be alphanumeric only and are cAsE sEnSiTiVe. Root integration fields must be numeric only and alphanumeric fields must not start with a numeric.")," "),(0,i.kt)("p",null,"The response will use the same URL encoding and return the request fields in addition to any dedicated response field. If the request contains a field that is also intended as a response field, then any incoming request value will be overwritten by the correct response value."),(0,i.kt)("p",null,"When using the Hosted Integration, the request must be sent from the Customer\u2019s web browser as the response will be a HTML Hosted Payment Page (HPP), used to collect the Customer\u2019s details. The format of the request is designed so that it can be sent using a standard HTML form with the data in hidden form fields. The browser will then automatically encode the request correctly according to application/x-www-form-urlencoded format."),(0,i.kt)("p",null,"When the Hosted Payment Page has been completed and the payment processed, the Customer\u2019s browser will be automatically redirected to the URL provided via the redirectURL field. The response will be returned to this page in application/x-www-form-urlencoded format, using a HTTP POST request."),(0,i.kt)("p",null,"All request fields will be returned in the response and a Merchant may add custom request fields as detailed in our pdf documentation. If the request contains a field that is also intended as a response field, then any incoming request value will be overwritten by the correct response value."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Gateway may add new request and response fields at any time and so your integration must take care not to send request fields that may conflict with future Gateway fields and be able to ignore response fields which it doesn\u2019t yet understand.")),(0,i.kt)("h2",{id:"handling-errors"},"Handling Errors"),(0,i.kt)("p",null,"When the Gateway is uncontactable due to a communications error, or problem with the internet connection, you may receive a HTTP status code in the 500 to 599 range. In this situation, you may want to retry the transaction. If you do choose to retry a transaction, then we recommend that you perform a limited number of attempts with an increasing delay between each attempt."),(0,i.kt)("p",null,"If the Gateway is unavailable during a scheduled maintenance period, you will receive a HTTP status code of 503 \u2018Service Temporarily Unavailable\u2019. In this situation, you should retry the transaction after the scheduled maintenance period has expired. You will be notified of the times and durations of any such scheduled maintenance periods in advance, by email, and given a time when transactions can be reattempted."),(0,i.kt)("p",null,"If you are experiencing these errors, then we recommend you consider the following steps as appropriate for the integration method being used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure the request is being sent to HTTPS and not HTTP. HTTP is not supported and is not redirected."),(0,i.kt)("li",{parentName:"ul"},"Send transactions sequentially rather than concurrently."),(0,i.kt)("li",{parentName:"ul"},"Configure your integration code with try/catch loops around individual transactions to determine whether they were successful or not and retry if required, based on the return code or HTTP status returned."),(0,i.kt)("li",{parentName:"ul"},"Configure the integration so that if one transaction fails, the entire batch does not stop at that point \u2013 ie log the failure to be checked and then skip to the next transaction rather than stopping entirely.")),(0,i.kt)("h2",{id:"redirectUrl"},"Redirect URL"),(0,i.kt)("p",null,"The redirectURL request field is used to provide the URL of a webpage on your server."),(0,i.kt)("p",null,"When provided, the Gateway will respond with a HTML page designed to redirect the Customer\u2019s browser to the URL provided, using a HTTP POST request containing the URL encoded response.\nFor the Hosted Integration, this will redirect the Customer from the Hosted Payment Page back to this URL on your website."),(0,i.kt)("p",null,"The redirectURL must be a fully qualified URL, containing at least the scheme and host components."),(0,i.kt)("h2",{id:"callbackUrl"},"Callback URL"),(0,i.kt)("p",null,"The callbackURL request field allows you optionally to request that the Gateway sends a copy of the response to an alternative URL. In this case, each response will then be POSTed to this URL in addition to the normal response. This allows you to specify a URL on a secure shopping cart or backend order processing system, which will then fulfil any order associated with the transaction. The callback URL is ",(0,i.kt)("strong",{parentName:"p"},"optional"),", it must be a fully qualified URL, containing at least the scheme and host components."),(0,i.kt)("h2",{id:"fieldFormats"},"Field Formats"),(0,i.kt)("p",null,"Most integration field values are either numerical or textual, and either free format or from a range of predetermined values. Some field values are records or arrays of records."),(0,i.kt)("p",null,"Unless otherwise stated, numerical values are whole integer values with no decimal points. Textual values should use the UTF-8 character set and will be automatically truncated if too long, unless stated otherwise in the field\u2019s description. Textual values may be transliterated when sending to third parties such as Acquirers but the original value is stored by Gateway."),(0,i.kt)("p",null,"Field values should use the following formats unless otherwise stated in the field\u2019s description:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Format"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Monetary Amounts"),(0,i.kt)("td",{parentName:"tr",align:null},"Either major currency units by providing a value that includes a single decimal point such as \u201910.99\u2019; or in minor currency units by providing a value that contains no decimal points such as \u20181099\u2019.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Timestamps"),(0,i.kt)("td",{parentName:"tr",align:null},"Date in the format \u2018YYYY-MM-DD HH:MM:SS\u2019")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dates"),(0,i.kt)("td",{parentName:"tr",align:null},"Date in the format \u2018YYYY-MM-DD\u2019")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Country Codes"),(0,i.kt)("td",{parentName:"tr",align:null},"Either the ISO-3166-1 2-letter, 3-letter or 3-digit code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Currency Codes"),(0,i.kt)("td",{parentName:"tr",align:null},"Either the ISO-4217 3-letter or 3-digit code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Records"),(0,i.kt)("td",{parentName:"tr",align:null},"Records can be provided using the ","[Y]"," notation, where Y is the record\u2019s sub-field name. Records can be nested to any depth, that is a sub-field\u2019s value can be another record. Arrays can be provided by using numeric sub-fields starting with the value 0 and incrementing by 1. For example: to send a value for the sub-field Z, of the sub-field Y in the integration field X, use the field name X","[Y][Z]","; however, to send a value for the sub-field Z in the fourth record for integration field X, then use the field name X","[4][Z]"," etc. Boolean values must be sent as the words \u2018true\u2019 or \u2018false\u2019.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Serialised Records"),(0,i.kt)("td",{parentName:"tr",align:null},"Certain fields allow records to be sent as JSON or URL serialised strings. If the first character of the serialised string is \u2018{\u2018, then the string is assumed to be in JSON format with any boolean values sent as their JSON equivalents, all other strings will be assumed to be application/x-www-form-urlencoded format with any boolean values sent as the words \u2018true\u2019 or \u2018false\u2019.")))),(0,i.kt)("p",null,"Note: Record format is useful when posting sub-fields directly from individual field in a HTML FORM. However, unlike the main integration fields, a record\u2019s sub-fields are not sorted when constructing the signature and are processed in the order received. Serialised record format can overcome any problems caused by the sub-fields of a record being received in a different order to that used when generating the signature. Not all fields using the record format also support the serialised record format especially the threeDSRequest, threeDSResponse, checkoutRequest, checkoutResponse and the purchase items field."),(0,i.kt)("p",null,"Boolean values cannot be represented when using the record format or the application/x-www-form-urlencoded serialised record format and the words \u2018true\u2019 and \u2018false\u2019 must be used. The JSON serialised record format does not have this restriction and a JSON boolean can be used."))}p.isMDXComponent=!0}}]);