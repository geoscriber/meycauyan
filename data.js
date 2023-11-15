var APP_DATA = {
  "scenes": [
    {
      "id": "0-top-view-high-alt",
      "name": "Top View High Alt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.015263167688450707,
        "pitch": 1.5707963267948966,
        "fov": 1.4404666184485553
      },
      "linkHotspots": [
        {
          "yaw": -0.07294138058128752,
          "pitch": 1.2447601886982298,
          "rotation": 0,
          "target": "6-road-view-medium-alt"
        },
        {
          "yaw": -0.9841860175794466,
          "pitch": 1.4568994649103937,
          "rotation": 0,
          "target": "5-road-view"
        },
        {
          "yaw": -2.8527869498240843,
          "pitch": 1.2513666053742778,
          "rotation": 0,
          "target": "4-corner-road"
        },
        {
          "yaw": -3.039590062174099,
          "pitch": 0.9906715938578454,
          "rotation": 0,
          "target": "3-south-road"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.732661392181744,
          "pitch": 1.41617996308824,
          "title": "Subject Property",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-side-view-medium-alt",
      "name": "Side View Medium Alt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8646543301169061,
          "pitch": 0.6140367580480479,
          "rotation": 0,
          "target": "6-road-view-medium-alt"
        },
        {
          "yaw": 0.48324927322332556,
          "pitch": 0.7146337995879577,
          "rotation": 0,
          "target": "5-road-view"
        },
        {
          "yaw": -0.17579302688670317,
          "pitch": 0.6822110042905614,
          "rotation": 0,
          "target": "4-corner-road"
        },
        {
          "yaw": -0.8115599396903761,
          "pitch": 0.3986416188458861,
          "rotation": 0,
          "target": "3-south-road"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.15399823768439447,
          "pitch": 1.0357905827524405,
          "title": "Subject Property",
          "text": ""
        }
      ]
    },
    {
      "id": "2-side-view-low-alt",
      "name": "Side View Low Alt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.9507738041385458,
        "pitch": 1.3182550890431841,
        "fov": 1.4404666184485553
      },
      "linkHotspots": [
        {
          "yaw": -3.0583554942428215,
          "pitch": 0.4034410962926529,
          "rotation": 0,
          "target": "6-road-view-medium-alt"
        },
        {
          "yaw": 1.8336093563954305,
          "pitch": 0.8475259342186003,
          "rotation": 0,
          "target": "5-road-view"
        },
        {
          "yaw": 1.2001299733993314,
          "pitch": 0.6262080581338925,
          "rotation": 0,
          "target": "4-corner-road"
        },
        {
          "yaw": 0.7712619045041862,
          "pitch": 0.2892792106371296,
          "rotation": 0,
          "target": "3-south-road"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-south-road",
      "name": "South Road",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.013184956848181884,
          "pitch": -0.04252040325849116,
          "rotation": 0,
          "target": "4-corner-road"
        },
        {
          "yaw": 0.6170603358054709,
          "pitch": -0.5032579839119435,
          "rotation": 0,
          "target": "2-side-view-low-alt"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.24343729390794522,
          "pitch": -0.14687268072058934,
          "title": "Subject Property",
          "text": ""
        }
      ]
    },
    {
      "id": "4-corner-road",
      "name": "Corner Road",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.226157876506016,
          "pitch": 0.06804763577617656,
          "rotation": 0,
          "target": "3-south-road"
        },
        {
          "yaw": -0.8576541973548899,
          "pitch": 0.13270035181723827,
          "rotation": 0,
          "target": "5-road-view"
        },
        {
          "yaw": -0.9125876201536833,
          "pitch": -0.36985203783316756,
          "rotation": 0,
          "target": "6-road-view-medium-alt"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.22742885073824226,
          "pitch": 0.12356125547837316,
          "title": "Subject Property",
          "text": ""
        }
      ]
    },
    {
      "id": "5-road-view",
      "name": "Road View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.34214693578517874,
        "pitch": 0.12787432121997888,
        "fov": 1.4404666184485553
      },
      "linkHotspots": [
        {
          "yaw": 1.192485115709264,
          "pitch": 0.27460846252117577,
          "rotation": 0,
          "target": "4-corner-road"
        },
        {
          "yaw": 1.141029940050247,
          "pitch": 0.06411433053766302,
          "rotation": 0,
          "target": "3-south-road"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-road-view-medium-alt",
      "name": "Road View Medium Alt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3349466771461529,
          "pitch": 0.5773993114245002,
          "rotation": 0,
          "target": "5-road-view"
        },
        {
          "yaw": 0.3775774819442024,
          "pitch": 0.40982093507811257,
          "rotation": 0,
          "target": "4-corner-road"
        },
        {
          "yaw": 0.40595684594691583,
          "pitch": 0.25085937814112214,
          "rotation": 0,
          "target": "3-south-road"
        },
        {
          "yaw": -0.2810450925504995,
          "pitch": -0.07082223943713117,
          "rotation": 0,
          "target": "1-side-view-medium-alt"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1097100894435048,
          "pitch": 0.39029690997279864,
          "title": "Subject Property",
          "text": ""
        }
      ]
    }
  ],
  "name": "Tan-Torres Property",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
