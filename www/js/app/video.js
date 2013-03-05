$(function () {
  require(['popcorn-complete'],function(){
    var pop = Popcorn.youtube(
       '#video',
       'http://www.youtube.com/watch?v=ZKerWsFChnU' );

    
    pop.googlemap({
      start: 6, // Our start time in seconds
      end: 19, // Our end time in seconds
      type: "STREETVIEW", //
      target: "footnotediv",  // The id of our target DoM element
      location: "Barcelona, Spain", //  The location we want our map to display at
      zoom: 1 // Setting the zoom that we would like
    });
    pop.footnote({
      start: 10,
      end: 44.65,
      text: "MWC13\nBarcelone\nJours 1 à 4",
      target: "footnotediv"
    });
    pop.footnote({
      start: 173.717,
      end: 191.285,
      target: "footnotediv",
      text: "<a href=\"http://www.qualcomm.com/media/blog/2013/01/11/inside-snapdragontm-800-series-processors-new-adrenotm-330-gpu\">Snapdragon 800 100% WebGL accelerated</a>"
    });
    pop.footnote({
      "start": 193.98112,
      "end": 246.31912,
      "target": "footnotediv",
      "text": "<a href=\"http://www.intel.com\">intel</a>"
    });
    pop.footnote({
      "start": 267.91200000000003,
      "end": 289.14000000000004,
      "target": "footnotediv",
      "text": "Charge Box",
      "linkUrl": "http://www.chargebox.com/",
    });
    pop.twitter({
      "start": 295.728,
      "end": 311.832,
      "target": "video",
      "search": "#FirefoxOS",
      "username": "",
      "searchType": "popular",
      "numberOfTweets": "20",
      "transition": "popcorn-fade",
      "layout": "ticker",
      "left": 64.947245017585,
      "width": 34.999633645955456,
      "zindex": 1000,
      "id": "TrackEvent15"
    });
    /*
popcorn.text({
  "start": 319.884,
  "end": 344.04,
  "target": "video-container",
  "text": "Here Maps for FirefoxOS ",
  "linkUrl": "https://marketplace.firefox.com/app/here-maps-packaged/",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 24.501758499413835,
  "top": 79.99218444704962,
  "width": 50,
  "zindex": 1000,
  "id": "TrackEvent16"
});
popcorn.text({
  "start": 357.679,
  "end": 429.78099999999995,
  "target": "video-container",
  "text": "Appsfuel",
  "linkUrl": "http://appsfuel.com/",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 26.025791324736225,
  "top": 84.61638660935262,
  "width": 50,
  "zindex": 1000,
  "id": "TrackEvent17"
});
popcorn.text({
  "start": 476.53475772429243,
  "end": 490.44275772429245,
  "target": "video-container",
  "text": "Eye controled\nhttps://minecraft.net/",
  "linkUrl": "https://minecraft.net/",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 14.88862837045721,
  "top": 79.99218444704962,
  "width": 71.39141266119577,
  "zindex": 1000,
  "id": "TrackEvent18"
});
popcorn.text({
  "start": 524.4810351911759,
  "end": 540.9510351911758,
  "target": "video-container",
  "text": "Intel Cloud Services",
  "linkUrl": "http://software.intel.com/cloudservicesplatform/about/welcome-intel-cloud-services",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 24.384525205158265,
  "top": 79.99218444704962,
  "width": 50,
  "zindex": 1000,
  "id": "TrackEvent19"
});
popcorn.text({
  "start": 542.635,
  "end": 578.137,
  "target": "video-container",
  "text": "HTML 5 dev Intel (XDK)",
  "linkUrl": "http://html5dev-software.intel.com/",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 26.494724501758498,
  "top": 78.15552950371239,
  "width": 50,
  "zindex": 1000,
  "id": "TrackEvent20"
});
popcorn.text({
  "start": 584.871384672365,
  "end": 606.8313846723651,
  "target": "video-container",
  "text": "Samsung &amp; Intel =&gt; Tizen",
  "linkUrl": "https://www.tizen.org/",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 11.606096131301289,
  "top": 89.99609222352481,
  "width": 76.08440797186401,
  "zindex": 1000,
  "id": "TrackEvent21"
});
popcorn.text({
  "start": 665.089,
  "end": 689.6110000000001,
  "target": "video-container",
  "text": "Andrea Trasatti presentation",
  "linkUrl": "https://t.co/AXpwlVwU0G",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 23.798358733880423,
  "top": 79.99218444704962,
  "width": 50,
  "zindex": 1000,
  "id": "TrackEvent22"
});
popcorn.text({
  "start": 698.59,
  "end": 773.254,
  "target": "video-container",
  "text": "Replicator 2",
  "linkUrl": "https://store.makerbot.com/replicator2.html",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 25.67409144196952,
  "top": 86.28370457209847,
  "width": 50,
  "zindex": 1000,
  "id": "TrackEvent23"
});
popcorn.text({
  "start": 777.381,
  "end": 825.693,
  "target": "video-container",
  "text": "Ubuntu phone",
  "linkUrl": "http://www.ubuntu.com/devices/phone",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 23.91559202813599,
  "top": 89.99609222352481,
  "width": 50,
  "zindex": 1000,
  "id": "TrackEvent24"
});
popcorn.text({
  "start": 839.64,
  "end": 854.646,
  "target": "video-container",
  "text": "Firefox OS Persona Signin video",
  "linkUrl": "",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 0,
  "top": 89.40992575224696,
  "width": 100,
  "zindex": 1000,
  "id": "TrackEvent25"
});
popcorn.text({
  "start": 858.554,
  "end": 884.174,
  "target": "video-container",
  "text": "Le Hall 3 en vitesse",
  "linkUrl": "",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 26.729191090269637,
  "top": 89.99609222352481,
  "width": 57.209847596717466,
  "zindex": 1000,
  "id": "TrackEvent26"
});
popcorn.text({
  "start": 892.443,
  "end": 897.443,
  "target": "video-container",
  "text": "Developer Garden",
  "linkUrl": "http://www.developergarden.com/",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 24.384525205158265,
  "top": 78.36394424905562,
  "width": 50,
  "zindex": 1000,
  "id": "TrackEvent27"
});
popcorn.text({
  "start": 902,
  "end": 933.476,
  "target": "video-container",
  "text": "Pre approved payment Business case",
  "linkUrl": "https://www.x.com/developers/paypal/products/adaptive-payments",
  "position": "custom",
  "alignment": "left",
  "transition": "popcorn-fade",
  "fontFamily": "Merriweather",
  "fontSize": 10,
  "fontColor": "#000000",
  "shadow": "",
  "shadowColor": "#444444",
  "background": "",
  "backgroundColor": "#888888",
  "fontDecorations": {
    "bold": false,
    "italics": false
  },
  "left": 25,
  "top": 0,
  "width": 50,
  "zindex": 1000,
  "id": "TrackEvent28"
});
popcorn.googlemap({
  "start": 110.16663753841169,
  "end": 127.36863753841169,
  "target": "video-container",
  "type": "HYBRID",
  "location": "",
  "fullscreen": false,
  "heading": 0,
  "pitch": 1,
  "zoom": 15,
  "transition": "popcorn-none",
  "left": 59.67174677608441,
  "top": 57.52246971473232,
  "width": 31.30128956623681,
  "height": 40.015631105900745,
  "lat": 41.35528338058881,
  "lng": 2.13088689188226,
  "zindex": 999,
  "id": "TrackEvent6"
});
popcorn.googlemap({
  "start": 4.392025416813755,
  "end": 20.496025416813755,
  "target": "video-container",
  "type": "HYBRID",
  "location": "",
  "fullscreen": "",
  "heading": 0,
  "pitch": 1,
  "zoom": "16",
  "transition": "popcorn-fade",
  "left": 61.66471277842908,
  "top": 5.210368633580826,
  "width": 28.956623681125436,
  "height": 33.759932265207766,
  "lat": 41.3954814008685,
  "lng": 2.160094920623803,
  "zindex": 999,
  "id": "TrackEvent9"
});
popcorn.googlemap({
  "start": 947.2134815594999,
  "end": 971.0034815594998,
  "target": "video-container",
  "type": "HYBRID",
  "location": "",
  "fullscreen": "",
  "heading": 0,
  "pitch": 1,
  "zoom": 16,
  "transition": "popcorn-fade",
  "left": 15.474794841735054,
  "top": 46.6849029568842,
  "width": 70.10367819460727,
  "height": 50.64478311840562,
  "lat": 41.41997327168717,
  "lng": 2.1663674836975133,
  "zindex": 999,
  "id": "TrackEvent29"
});
*/
     // play the video right away
    pop.play();

  });
  // Create a popcorn instance by calling the Youtube player plugin
});