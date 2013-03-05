$(function () {
  require(['popcorn-complete'],function(){
    var pop = Popcorn.youtube(
       '#video',
       'http://www.youtube.com/watch?v=ZKerWsFChnU' );

    
    pop.footnote({
      start: 10,
      end: 44.65,
      text: "<span class=\"badge badge-info\">#MWC13</span><p>Barcelone\nJours 1 à 4</p>",
      target: "footnotediv"
    });
    pop.footnote({
      start: 173.717,
      end: 191.285,
      target: "footnotediv",
      text: "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"http://www.qualcomm.com/media/blog/2013/01/11/inside-snapdragontm-800-series-processors-new-adrenotm-330-gpu\">Snapdragon 800 100% WebGL accelerated</a></p>"
    });
    pop.footnote({
      "start": 193.98112,
      "end": 246.31912,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"http://www.intel.com\">intel</a></p>"
    });
    pop.footnote({
      "start": 267.91200000000003,
      "end": 289.14000000000004,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"http://www.chargebox.com/\">Charge Box</a></p>"
    });
    pop.footnote({
      "start": 319.884,
      "end": 344.04,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"https://marketplace.firefox.com/app/here-maps-packaged/\">Here Maps for FirefoxOS</a></p>"
    });
    pop.footnote({
      "start": 357.679,
      "end": 429.78099999999995,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"http://appsfuel.com/\“>Appsfuel</a></p>"
    });
    pop.footnote({
      "start": 476.53475772429243,
      "end": 490.44275772429245,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p>Eye controled\n<a href=\"https://minecraft.net/\">minecraft</a></p>"
    });
    pop.footnote({
      "start": 524.4810351911759,
      "end": 540.9510351911758,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"http://software.intel.com/cloudservicesplatform/about/welcome-intel-cloud-services\">Intel Cloud Services</a></p>"
    });
    pop.footnote({
      "start": 542.635,
      "end": 578.137,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"http://html5dev-software.intel.com/\">HTML 5 dev Intel (XDK)</a></p>"
    });
    pop.footnote({
      "start": 584.871384672365,
      "end": 606.8313846723651,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"https://www.tizen.org/\">Samsung &amp; Intel =&gt; Tizen</a></p>"
    });
    pop.footnote({
      "start": 665.089,
      "end": 689.6110000000001,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"https://t.co/AXpwlVwU0G\">Andrea Trasatti presentation</a></p>"
    });
    pop.footnote({
      "start": 698.59,
      "end": 773.254,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"https://store.makerbot.com/replicator2.html\">Replicator 2</a></p>"
    });
    pop.footnote({
      "start": 777.381,
      "end": 825.693,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"http://www.ubuntu.com/devices/phone\">Ubuntu phone</a></p>"
    });
    pop.footnote({
      "start": 839.64,
      "end": 854.646,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p>Firefox OS Persona Signin video</p>"
    });
    pop.footnote({
      "start": 858.554,
      "end": 884.174,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p>Le Hall 3 en vitesse</p>"
    });
    pop.footnote({
      "start": 892.443,
      "end": 897.443,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"http://www.developergarden.com/\">Developer Garden</a></p>"
    });
    pop.footnote({
      "start": 902,
      "end": 933.476,
      "target": "footnotediv",
      "text": "<span class=\"badge badge-info\">#MWC13</span><p><a href=\"https://www.x.com/developers/paypal/products/adaptive-payments\">Pre approved payment Business case</a></p>"
    });
    /*
    pop.twitter({
      "start": 295.728,
      "end": 311.832,
      "target": "footnotediv",
      "search": "#FirefoxOS",
      "username": "",
      "searchType": "popular",
      "numberOfTweets": "20",
      "transition": "popcorn-fade",
      "layout": "ticker",
      "width": "100%",
      "zindex": 1000,
      "id": "TrackEvent15"
    });
    */    
    pop.image({
      start: 290,
      end: 300,
      href: "http://mwdaily.mobileworldlive.com/2013/day1/offline/download.pdf",
      src: "https://pbs.twimg.com/media/BD73kcMCEAErX4_.jpg:small",
      text: "<span class=\"label label-success\">Firefox OS wins major operator backing</span>",
      target: "footnotediv"
    });
    pop.image({
      start: 300.1,
      end: 319,
      src: "https://pbs.twimg.com/media/BD8PH7wCEAA9r35.jpg:small",
      text: "<span class=\"label label-success\"><p>Firefox OS devices</p></span>",
      target: "footnotediv"
    });
    pop.googlemap({
      "start": 110.16663753841169,
      "end": 127.36863753841169,
      "target": "googlemap",
      "type": "HYBRID",
      "location": "",
      "fullscreen": false,
      "heading": 0,
      "pitch": 1,
      "zoom": 15,
      "transition": "popcorn-none",
      "lat": 41.35528338058881,
      "lng": 2.13088689188226,
      "zindex": 999,
      "id": "TrackEvent6"
    });
    pop.googlemap({
      "start": 4.392025416813755,
      "end": 20.496025416813755,
      "target": "googlemap",
      "type": "HYBRID",
      "location": "",
      "fullscreen": "",
      "heading": 0,
      "pitch": 1,
      "zoom": "16",
      "transition": "popcorn-fade",
      "lat": 41.3954814008685,
      "lng": 2.160094920623803,
      "zindex": 999,
      "id": "TrackEvent9"
    });
     // play the video right away
    pop.play();

  });
  // Create a popcorn instance by calling the Youtube player plugin
});