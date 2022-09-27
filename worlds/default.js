// mythos.js
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "terrain.js", "ambientSound.js", "fireball.js",
        "blowing.js", "crowd.js", "horse.js", "menus.js", "replaceWorld.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "ambient sound",
                translation: [0, 0, -2],
                layers: ["pointer"],
                type: "sound",
                behaviorModules: ["AmbientSound"],
                dataType: "acc",
                dataLocation: "./assets/sounds/WindAmbience.aac",
                textureLocation: "./assets/images/mythos.png",
                loop: true,
                volume: 0.2,
                maxVolume: 0.3
            },
            id: "ambientSound"
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Lights"],
                dataType: "jpg",
                dataLocation: "./assets/sky/aboveClouds.jpg",
                clearColor: 0xffffff,
            }
        },

        {
            card: {
                name: "fireball",
               // layers: ["light"],
                type: "object",
                behaviorModules: ["Fireball"],
                layers:["pointer"],
                translation: [
                    137.04842673287243,
                    -16.422857610412652,
                    215.58989538473676
                ],
            },
        },
        {
            card: {
                name: "horse",
                layers: ["pointer"],
                type: "3d",
                behaviorModules: ["Horse"],
                modelType: "glb",
                dataLocation: "./assets/3D/horse_stone_light.glb",
                dataScale: [0.1, 0.1, 0.1],
                translation: [
                    0,
                    0,
                    0
                ],
            },
        },
        {
            card: {
                name: "Croquet Card",
                behaviorModules: ["ReplaceWorld"],
                targetURL: "https://croquet.io/microverse/?world=test",

                translation: [0, 2.536, -7.963],
                //    translation: [4.440892098500626e-16, 2.5357677795120512, -7.9631457611584615],
                //rotation: [0, Math.PI / 2, 0],
                layers: ["pointer"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/CroquetLogo_RGB.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                name: "About Mythos",
                translation: [-5, 2.1, -7.963],
                scale: [4, 4, 4],
                //rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                behaviorModules: ["PDFView"],
                color: 8947848,
                depth: 0.05,
                frameColor: 16777215,
                fullBright: true,
                modelType: "pdf",
                pdfLocation: "./assets/PDF/Mythos Readme.pdf",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        },
        {
            card: {
                name:"Terrain",
                behaviorModules: ["Terrain", "Menus"],
                layers: ["terrain"],
                type: "object",
                translation:[0, 0, 0],
                shadow: true,
            }
        },
        {
            card: {
                name:"Crowd",
                behaviorModules: ["Crowd"],
                layers: ["pointer"],
                type: "object",
                translation:[0, 0, 0],
                shadow: true,
            }
        },
        {
            card:{
                translation: [14.323492647614785, -2.7804596526792222, -5.391810022345661],
                rotation: [0, -0.01904446484351159, 0, 0.9998186377332763],
                layers: ["walk"],
                name: "/treepack4_small.glb",
                // dataLocation: "./assets/3D/treepack4_small.glb",
                dataLocation: "36bHrAibIhhNDw5QTWfleb-P1ufV9Gp4EKM28m0ss4iUXkJCRkUMGRlQX1pTRRhDRRhVRFlHQ1NCGF9ZGUMZYHp-UmwPBQdUcFVsckMHd19iAUJ4X3RCDlx8BBlfWRhVRFlHQ1NCGFJPWFdAU0RFUxlQZlFiYnJBQEIEAldxD1VnRUcHbHppUgN6blJjUXpvT3xVZ0J7bm5_ckZ_GVJXQlcZY29dBAJQYQFHfVdnWXxRUw4CbmZbZntpY0R9WHlPV1xaeX9RaUQBBhtUUQ",
                dataScale: [1.5, 1.5, 1.5],
                fileName: "/treepack4_small.glb",
                behaviorModules: ["Blowing"],
                modelType: "glb",
                shadow: true,
                singleSided: true,
                noFog: true,
                type: "3d",
                flatten: true
            }
        },
        {
            card: {
                dataLocation: "./assets/3D/temple_wmoss.glb",
                dataScale: [1,1,1],
                fileName: "/temple_wmoss.glb",
                layers: [
                    "walk", "pointer"
                ],
                modelType: "glb",
                name: "/temple_wmoss.glb",
                rotation: [
                    0,
                    -0.8375393574138387,
                    0,
                    0.5463769987680797
                ],
                shadow: true,
                singleSided: true,
                noFog: true,
                translation: [
                    137.04842673287243,
                    -16.422857610412652,
                    215.58989538473676
                ],
                type: "3d",
                flatten: true
            },
        }
    ];
}
