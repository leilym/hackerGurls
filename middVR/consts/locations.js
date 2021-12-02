
//starting outside the door 
export default (locations = {

//Below are Davis Maps 


  Outside: {
    name: 'Outside',
    img: 'davis/Outside.JPG',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 9.55,
        pitch: 0.01,
        goesTo: 'DavisDoor',
      },
    ],
  },
    
  // DavisDoor: {
  //     name: 'DavisDoor',
  //     img: 'Test.JPG',
  //     tooltips: [
  //       {
  //         width: 50,
  //         height: 50,
  //         yaw: 6.8,
  //         pitch: 0.01,
  //         text: 'Welcome to Davis Library! This is the largest library at Middlebury',
  //       },
  //       {
  //         width: 50,
  //         height: 50,
  //         yaw: 1.9, //goes left and right
  //         pitch: 0.01, //up and down 
  //         text: 'Enter Wilson Cafe',

  //       },
  //     ],
  //     transitions: [
  //       {
  //         width: 50,
  //         height: 50,
  //         yaw: 6.4,
  //         pitch: 0.01,
  //         goesTo: 'DavisLobby',
  //       },
  //       {
  //         width: 50,
  //         height: 50,
  //         yaw:-3.4,
  //         pitch: 0.01,
  //         goesTo: 'Outside',
  //       },
  //       {
  //         width: 50,
  //         height: 50,
  //         yaw: 1.7,
  //         pitch: 0.01,
  //         roll: 1,
  //         goesTo: 'WilsonCafe',
  //       },
  //     ],
  //   },
    
  // WilsonCafe: {
  //     name: 'Wilson Cafe',
  //     img: 'WilsonCafe.JPG',
  //     transitions: [
  //       {
  //         width: 50,
  //         height: 50,
  //         yaw: 0.7,
  //         pitch: 0.01,
  //         goesTo: 'DavisDoor',
  //       },
  //     ],
  //     tooltips: [
  //       {
  //         width: 50,
  //         height: 50,
  //         yaw: 9.9,
  //         pitch: 0.01,
  //         text: 'Welcome to Wilson Cafe! This is a 24/7 study space with weekday retail coffee and bagel offerings',

  //       },
  //     ]
  //   },
    
  // DavisLobby: {
  //     name: 'Davis Lobby',
  //     img: 'Lobby.JPG',
  //     tooltips: [
  //       {
  //         width: 50,
  //         height: 50,
  //         yaw: 4,
  //         pitch: 0.01,
  //         text: 'Students can find and check out library materials including books, cameras, and projectors! ',

  //       },
  //       {
  //         width: 50,
  //         height: 50,
  //         yaw: 7.8,
  //         pitch: -0.1,
  //         text: 'Here on display is a special collections temporary exhibit',

  //       },
  //     ],
  //     transitions: [
  //       {
  //         width: 50,
  //         height: 50,
  //         yaw: 9.55,
  //         pitch: 0.01,
  //         goesTo: 'DavisDoor',
  //       },
  //     ],
  //   },
  
    LandingPage: {
      name: 'LandingPage',
      img: 'LandingPageNew.jpg',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 8.9,
          pitch: 0.01,
          goesTo: 'DavisDoor',
        },
        {
          width: 50,
          height: 50,
          yaw: 7.8,
          pitch: 0.01,
          goesTo: 'Entrance2nd', //Axinn door or something 
        },
        {
          width: 50,
          height: 50,
          yaw: 11,
          pitch: 0.01,
          goesTo: 'mccOutsideMainEntrance', //Mccor something 
        },
      ],
      
    },
      
    DavisDoor: {
        name: 'DavisDoor',
        img: 'davis/Test.JPG',
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 6.8,
            pitch: 0.01,
            text: 'Welcome to Davis Library! This is the largest library at Middlebury',
          },
          {
            width: 50,
            height: 50,
            yaw: 1.9, //goes left and right
            pitch: 0.01, //up and down 
            text: 'Enter Wilson Cafe',
  
          },
        ],
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 6.4,
            pitch: 0.01,
            goesTo: 'DavisLobby',
          },
          {
            width: 50,
            height: 50,
            yaw:-3.4,
            pitch: 0.01,
            goesTo: 'Outside',
          },
          {
            width: 50,
            height: 50,
            yaw: 1.7,
            pitch: 0.01,
            roll: 1,
            goesTo: 'WilsonCafe',
          },
        ],
      },
      
    WilsonCafe: {
        name: 'Wilson Cafe',
        img: 'davis/WilsonCafe.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 0.7,
            pitch: 0.01,
            goesTo: 'DavisDoor',
          },
        ],
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 9.9,
            pitch: 0.01,
            text: 'Welcome to Wilson Cafe! This is a 24/7 study space with weekday retail coffee and bagel offerings',
  
          },
        ]
      },
      
    DavisLobby: {
        name: 'Davis Lobby',
        img: 'davis/Lobby.JPG',
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 4,
            pitch: 0.01,
            text: 'Students can find and check out library materials including books, cameras, and projectors! ',
  
          },
          {
            width: 50,
            height: 50,
            yaw: 7.8,
            pitch: -0.1,
            text: 'Here on display is a special collections temporary exhibit',
  
          },
        ],
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 3,
            pitch: 0.01,
            goesTo: 'DavisDoor',
          },
          {
            width: 50,
            height: 50,
            yaw: 2.35,
            pitch: -0.3,
            roll: 3,
            goesTo: 'RightStairsEntranceLobby',
          },
          {
            width: 50,
            height: 50,
            yaw: 0.75,
            pitch: 0.01,
            goesTo: 'FromEntranceRight',
          },
          {
            width: 50,
            height: 50,
            yaw: 5.55,
            pitch: 0.01,
            goesTo: 'FromLobbyLeft',
          },
        ],
      },
     
    FromLobbyLeft: {
        name: 'From Lobby Left',
        img: 'davis/FromLobbyLeft.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 2.6,
            pitch: 0.01,
            goesTo: 'DavisLobby', // go to upstairs
          },
          {
            width: 50,
            height: 50,
            yaw: 5.4,
            pitch: 0.01,
            goesTo: 'PrinterCorridorFirst', //go to printers 
          },
          {
            width: 50,
            height: 50,
            yaw: 0,
            pitch: 0.01,
            goesTo: 'DownLobbyLeft',
          },
          {
            width: 50,
            height: 50,
            yaw: 4.7,
            pitch: 0.01,
            goesTo: 'UpstairsRightRight', //go up stairs 
          },
        ],
      },
  
      //in my current status the tranisitions aren't right
    DownLobbyLeft: {
        name: 'Down Lobby Left',
        img: 'davis/DownLobbyLeft.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 3.2,
            pitch: 0.01,
            goesTo: 'DownDownLobbyLeft', 
          },
          {
            width: 50,
            height: 50,
            yaw: 5,
            pitch: 0.01,
            //this shouldn't be DownLobbyLeft? 
            goesTo: 'LobbyRightIn', //go to printers  
          },
          {
            width: 50,
            height: 50,
            yaw: 0,
            pitch: 0.01,
            goesTo: 'FromLobbyLeft',
          },
          {
            width: 50,
            height: 50,
            yaw: 0.6,
            pitch: 0.01,
            goesTo: 'F1ViewingRoom',
          },
        ],
      },
      
      F1ViewingRoom:{
        name: "Viewing Room",
        img: "davis/F1ViewingRoom.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 1.6,
            pitch: 0.01,
            goesTo: 'DownLobbyLeft',
          },
        ],
      },
  
    DownDownLobbyLeft: {
        name: 'Down Down Lobby Left',
        img: 'davis/DownDownLobbyLeft.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 0,
            pitch: 0.01,
            goesTo: 'DownLobbyLeft', // go to upstairs
          },
          {
            width: 50,
            height: 50,
            yaw: 3.3,
            pitch: 0.01,
            goesTo: 'BackHallway', //go to printers 
          },
        ],
      },
  
    PrinterCorridorFirst: {
        name: 'Printer Corridor First Floor',
        img: 'davis/PrinterCorridorFirst.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: -.2,
            pitch: 0.01,
            goesTo: 'FromLobbyLeft',
          },
          {
            width: 50,
            height: 50,
            yaw: 9.3,
            pitch: 0.01,
            goesTo: 'PastPrinterCorner',
          },
          {
            width: 50,
            height: 50,
            yaw: 4.3,
            pitch: 0.01,
            goesTo: 'PrintersFirstFloor',
          },
        ],
      },
  
    PastPrinterCorner: {
        name: 'PastPrinterCorner',
        img: 'davis/PastPrinterCorner.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 4.5,
            pitch: 0.01,
            goesTo: 'InsideCarrellByPrinters',
          },
          {
            width: 50,
            height: 50,
            yaw: 9.1,
            pitch: 0.01,
            goesTo: 'PrinterCorridorFirst',
          },
          {
            width: 50,
            height: 50,
            yaw: 6.4,
            pitch: 0.01,
            goesTo: 'DownPrinterCorner',
          },
        ],
      },
  
    InsideCarrellByPrinters: {
        name: 'InsideCarrellByPrinters',
        img: 'davis/InsideCarrellByPrinters.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 3.3,
            pitch: 0.01,
            goesTo: 'PastPrinterCorner',
          },
        ],
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 3.6,
            pitch: 0.01, 
            text: 'These carrels are where seniors culminate their studies into their thesis!',
          },
        ],
      },
  
    DownPrinterCorner: {
        name: 'DownPrinterCorner',
        img: 'davis/DownPrinterCorner.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 6.4,
            pitch: 0.01,
            goesTo: 'FirstFloorLeftCorner',
          },
          {
            width: 50,
            height: 50,
            yaw: 9.3,
            pitch: 0.01,
            goesTo: 'PastPrinterCorner',
          },
        ],
      },
  
    FirstFloorLeftCorner: {
        name: 'FirstFloorLeftCorner',
        img: 'davis/FirstFloorLeftCorner.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: -1,
            pitch: 0.01,
            goesTo: 'FirstFloorLeftCornerElevator',//go to elevator
          },
          {
            width: 50,
            height: 50,
            yaw: 7.4,
            pitch: 0.01,
            goesTo: 'BackHallway',
          },
          {
            width: 50,
            height: 50,
            yaw: 9,
            pitch: 0.01,
            goesTo: 'DownPrinterCorner', 
          },
        ],
      },
  
    FirstFloorLeftCornerElevator: {
        name: 'FirstFloorLeftCornerElevator',
        img: 'davis/FirstFloorLeftCornerElevator.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: -0.7,
            pitch: 0.01,
            goesTo: 'LeftSideStairs2F2',//go to elevator
          },
          {
            width: 50,
            height: 50,
            yaw: -0.7,
            pitch: -0.2,
            goesTo: 'FirstFloorLeftCorner',
          },
        ],
      },
  
    BackHallway: {
        name: 'BackHallway',
        img: 'davis/BackHallway.JPG',
        transitions: [
          
          {
            width: 50,
            height: 50,
            yaw: 7.35,
            pitch: 0.01,
            goesTo: 'FirstFloorLeftCorner',
          },
          {
            width: 50,
            height: 50,
            yaw: 6.3,
            pitch: 0.01,
            goesTo: 'DownDownLobbyLeft',
          },
          {
            width: 50,
            height: 50,
            yaw: 10,
            pitch: 0.01,
            goesTo: 'CTLR'//CTLR, 
          },
          {
            width: 50,
            height: 50,
            yaw: 5.1,
            pitch: 0.01,
            goesTo: 'LeftOfOutsideWilson'//CTLR, 
          },
          {
            width: 50,
            height: 50,
            yaw: 7.8,
            pitch: 0.01,
            goesTo: 'StairsUpCTLRLeft'//take the stairs up
          },
        ],
      },
  
    PrintersFirstFloor: {
        name: 'Printer First Floor',
        img: 'davis/PrintersFirstFloor.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 1,
            pitch: 0.01,
            goesTo: 'PrinterCorridorFirst',
          },
        ],
      },
  
    FromEntranceRight: {
        name: 'From Entrance Lobby',
        img: 'davis/FromEntranceRight.JPG',
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 8,
            pitch: 0.01,
            text: 'This is the Technology Help Desk! Students come here for both hardware and software help.',
  
          },
        ],
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 2.8,
            pitch: 0.01,
            goesTo: 'RightStairs', //up from main stairs 
          },
          {
            width: 50,
            height: 50,
            yaw: 1.1,
            pitch: 0.01,
            goesTo: 'StudyRoomStairs2nd', //needs to go upstairs from help desk
          },
          {
            width: 50,
            height: 50,
            yaw: 1.7,
            pitch: 0.01,
            goesTo: 'HelpDesk', //needs to go upstairs from help desk
          },
          {
            width: 50,
            height: 50,
            yaw: 0.2,
            pitch: 0.01,
            goesTo: 'LobbyRightIn',
          },
          {
            width: 50,
            height: 50,
            yaw: 4.1,
            pitch: 0.01,
            goesTo: 'DavisLobby',
          },
        ],
      },
  
    LobbyRightIn: {
        name: 'Lobby Right to Lobby In',
        img: 'davis/LobbyRightIn.JPG',
        tooltips: [
        ],
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 3.3,
            pitch: 0.01,
            goesTo: 'DavisLobby', 
          },
          {
            width: 50,
            height: 50,
            yaw: 1.1,
            pitch: 0.01,
            goesTo: 'iMacWorkStation',
          },
          {
            width: 50,
            height: 50,
            yaw: 0.2,
            pitch: 0.01,
            goesTo: 'OutsideWilson', //make this go to the other side 
          },
          {
            width: 50,
            height: 50,
            yaw: 4.6,
            pitch: 0.01,
            goesTo: 'DownLobbyLeft',
          },
        ],
      },
  
    iMacWorkStation: {
        name: 'iMacWorkStation',
        img: 'davis/iMacWorkStation.JPG',
        tooltips: [
        ],
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 0.9,
            pitch: 0.01,
            goesTo: 'LobbyRightIn',
          },
          {
            width: 50,
            height: 50,
            yaw: 2.8,
            pitch: 0.01,
            goesTo: 'OutsideAnimationStudio',
          },
          {
            width: 50,
            height: 50,
            yaw: 5.4,
            pitch: 0.01,
            goesTo: 'BloombergStation',
          },
        ],
      }, 
  
    BloombergStation: {
        name: 'BloombergStation',
        img: 'davis/BloombergStation.JPG',
        tooltips: [
        ],
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 0.9,
            pitch: 0.01,
            goesTo: 'FromEntranceRight',
          },
          {
            width: 50,
            height: 50,
            yaw: 3.2,
            pitch: 0.01,
            goesTo: 'iMacWorkStation',
          },
        ],
      },    
  
    RightStairs: {
        name: 'RightStairs',
        img: 'davis/RightStairs.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 4.3,
            pitch: 0.01,
            goesTo: 'UpstairsLobby', //keep going up
          },
          {
            width: 50,
            height: 50,
            yaw: 0.75,
            pitch: -0.7,
            goesTo: 'FromEntranceRight', 
          },
        ],
      },
  
    RightFromLobbyStairs: {
        name: 'RightFromLobbyStairs',
        img: 'davis/RightFromLobbyStairs.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 1.3,
            pitch: 0.01,
            goesTo: 'UpstairsLobby', //keep going up
          },
          {
            width: 50,
            height: 50,
            yaw: 5,
            pitch: 0.01,
            goesTo: 'UpstairsRightRight', 
          },
          {
            width: 50,
            height: 50,
            yaw:3.3,
            pitch: 0.01,
            goesTo: 'OutsideMeditationRoom2', 
          },
        ],
      },  
  
    UpstairsRightRight: {
        name: 'UpstairsRightRight',
        img: 'davis/UpstairsRightRight.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 6.5,
            pitch: 0.01,
            goesTo: 'RightFromLobbyStairs', //keep going up
          },
          {
            width: 50,
            height: 50,
            yaw: 4.7,
            pitch: 0.01,
            goesTo: 'UpstairsCenterOver', 
          },
          {
            width: 50, 
            height: 50,
            yaw:1.5,
            pitch: 0.01,
            goesTo: 'FromLobbyLeft', //go back downstairs 
          },
          {
            width: 50, 
            height: 50,
            yaw:3.2,
            pitch: 0.01,
            goesTo: 'LeftSideStairs', 
          },
        ],
      },    
  
    UpstairsCenterOver: {
        name: 'UpstairsCenterOver',
        img: 'davis/UpstairsCenterOver.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 5,
            pitch: 0.01,
            goesTo: 'UpstairsRightRight', //keep going up
          },
          {
            width: 50,
            height: 50,
            yaw: 1.5,
            pitch: 0.01,
            goesTo: 'StudyRoomStairs2nd', 
          },
        ],
      },     
    UpstairsLobby: {
      name: 'UpstairsLobby',
      img: 'davis/UpstairsLobby.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.7,
          pitch: -0.1,
          goesTo: 'RightStairs', //go downstairs
        },
        {
          width: 50,
          height: 50,
          yaw: 5.2,
          pitch: 0.01,
          goesTo: 'Terrace2nd', //go outside 
        },
        {
          width: 50,
          height: 50,
          yaw: 10.45,
          pitch: 0.01,
          goesTo: 'LeftFromLobbyStairs', //go right 
        },
        {
          width: 50,
          height: 50,
          yaw: 8.25,
          pitch: 0.01,
          goesTo: 'RightFromLobbyStairs', //go right 
        },
      ],
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 9.2,
          pitch: 0.2,
          text: 'This is a canvas paint piece by Matt Mullican called The Art of Writing and was commissioned by the college.',
        },
      ]
      },
      
    Terrace2nd: {
        name: 'Terrace2nd',
        img: 'davis/Terrace2nd.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 3.15,
            pitch: 0.01,
            goesTo: 'UpstairsLobby',
          },
        ],
      }, 
  
    LeftFromLobbyStairs: {
        name: 'LeftFromLobbyStairs',
        img: 'davis/LeftFromLobbyStairs.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 5.2,
            pitch: 0.01,
            goesTo: 'UpstairsLobby',
          },
          {
            width: 50,
            height: 50,
            yaw: 3.2,
            pitch: 0.01,
            goesTo: 'Outside301A',
          },
          {
            width: 50,
            height: 50,
            yaw: 7.7,
            pitch: 0.01,
            goesTo: 'StudyRoomStairs2nd',
          },
        ],
      },
  
    Outside301A: {
      name: 'Outside301A',
      img: 'davis/Outside301A.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 6.45,
          pitch: 0.01,
          goesTo: 'UpstairsLobby',
        },
        {
          width: 50,
          height: 50,
          yaw: 8.2,
          pitch: 0.01,
          goesTo: 'LeftFromLobbyStairs',
        },
        {
          width: 50,
          height: 50,
          yaw: 9.4,
          pitch: 0.01,
          goesTo: 'Outside301F',
        },
      ],
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 10.3,
          pitch: 0.01,
          text: 'These are some study rooms that students can use upon reserving',
        },
      ]
    },
   
    Outside301F: {
      name: 'Outside301F',
      img: 'davis/Outside301F.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 4.7,
          pitch: 0.01,
          goesTo: 'Outside301A',
        },
        {
          width: 50,
          height: 50,
          yaw: 0.8,
          pitch: 0.01,
          goesTo: 'CornerNear301F',
        },
      ],
    }, 
  
    CornerNear301F: {
      name: 'CornerNear301F',
      img: 'davis/CornerNear301F.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 5,
          pitch: 0.01,
          goesTo: 'Outside301F',
        },
        {
          width: 50,
          height: 50,
          yaw: 5.2,
          pitch: 0.01,
          goesTo: 'StudyRoomStairs2nd',
        },
      ],
    }, 
  
    StudyRoomStairs2nd: {
      name: 'StudyRoomStairs2nd',
      img: 'davis/StudyRoomStairs2nd.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 4.85,
          pitch: 0.01,
          goesTo: 'CornerNear301F',
        },
        {
          width: 50,
          height: 50,
          yaw: 5.3,
          pitch: 0.01,
          goesTo: 'LeftFromLobbyStairs',
        },
        {
          width: 50,
          height: 50,
          yaw: 4.55,
          pitch: -.2,
          goesTo: 'FromEntranceRight',
        },
        {
          width: 50,
          height: 50,
          yaw: 2.7,
          pitch: 0,
          goesTo: 'RightHallWayMiddle', //it goes to the hallway that goes to the end2F2End 
        },
        {
          width: 50,
          height: 50,
          yaw: 7.5,
          pitch: 0.01,
          goesTo: 'UpstairsCenterOver', //it goes to the hallway that goes to the end2F2End 
        },
      ],
    }, 
  
    OutsideWilson: {
        name: 'Outside Wilson',
        img: 'davis/OutsideWilsonMedia.JPG',
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 8,
            pitch: 0.01,
            text: 'This the Wilson Media Lab - This lab provides a collaborative workspace and a variety of digitization equipment. Sometimes classes and workshops would take place here..',
  
          },
        ],
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 3.3,
            pitch: 0.01,
            goesTo: 'LobbyRightIn',
          },
          {
            width: 50,
            height: 50,
            yaw: 1.1,
            pitch: 0.01,
            goesTo: 'WilsonMediaLab', //don't have pictures yet 
          },
          {
            width: 50,
            height: 50,
            yaw: -0.1,
            pitch: 0.01,
            goesTo: 'CTLR',
          },
          {
            width: 50,
            height: 50,
            yaw: 0.5,
            pitch: 0.01,
            goesTo: 'CTLRRight',
          },
        ],
      },
  
    WilsonMediaLab: {
        name: 'WilsonMediaLab',
        img: 'davis/WilsonMediaLab.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 3.15,
            pitch: 0.01,
            goesTo: 'OutsideWilson',
          },
        ],
      },  
     
    CTLR: {
        name: 'CTLR',
        img: 'davis/CTLR.JPG',
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 7.8,
            pitch: 0.01,
            text: 'This academic center supports faculty and students with tutoring, research advising, inclusivity initiatives and more!',
          },
        ],
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 3.5,
            pitch: 0.01,
            goesTo: 'OutsideWilson',
          },
          {
            width: 50,
            height: 50,
            yaw: 6.0,
            pitch: 0.01,
            goesTo: 'BackHallway',
          },
        ],
      },
     
    AnimationStudio: {
        name: 'Animation Studio',
        img: 'davis/AnimationStudio.JPG',
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 7.8,
            pitch: 0.01,
            text: 'This is a space for students interested in Animation, both 2D and 3D! ',
          },
        ],
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 6.85,
            pitch: 0.01,
            goesTo: 'OutsideAnimationStudio',
          },
        ],
      },
      
    OutsideAnimationStudio: {
        name: 'Outside Animation Studio',
        img: 'davis/AnimationOutside.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 3.8,
            pitch: 0.01,
            goesTo: 'AnimationStudio', //not sure where this goes to 
          },
          {
            width: 50,
            height: 50,
            yaw: 6.3,
            pitch: 0.01,
            goesTo: 'iMacWorkStation', //not sure where this goes to 
          },
          {
            width: 50,
            height: 50,
            yaw: 9.4,
            pitch: 0.01,
            goesTo: 'BehindAnimation', //not sure where this goes to 
          },
        ],
      },
  
    BehindAnimation: {
        name: 'Behind Animation',
        img: 'davis/BehindAnimation.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 2.8,
            pitch: 0.01,
            //roll: 5,
            goesTo: 'CTLRRight', //not sure where this goes to 
          },
          {
            width: 50,
            height: 50,
            yaw: -0.25,
            pitch: 0.01,
            goesTo: 'OutsideAnimationStudio',  //this was CTLRRight
          },
        ],
      },
  
    StairsUpCTLRLeft: {
        name: 'StairsUpCTLRLeft',
        img: 'davis/StairsUpCTLRLeft.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 2.8,
            pitch: 0.01,
            //roll: 5,
            goesTo: 'CTLRRight', //not sure where this goes to 
          },
          {
            width: 50,
            height: 50,
            yaw: -0.25,
            pitch: 0.01,
            goesTo: 'LeftSideStairs2F2',  //this was CTLRRight
          },
        ],
      },
  
    CTLRRight: {
        name: 'CTLR Right',
        img: 'davis/CTLRRight.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 3.45,
            pitch: 0.01,
            goesTo: 'CTLR', 
          },
          {
            width: 50,
            height: 50,
            yaw: 2.6,
            pitch: 0.01,
            goesTo: 'LeftOfOutsideWilson', //goes to the other side back hallway 
          },
          {
            width: 50,
            height: 50,
            yaw: 1.7,
            pitch: 0.01,
            goesTo: 'OutsideWilson', 
          },
          {
            width: 50,
            height: 50,
            yaw: 0,
            pitch: 0.01,
            goesTo: 'RightHallWayEnd', //goes upstairs 
          },
          {
            width: 50,
            height: 50,
            yaw: -0.95,
            pitch: 0.01,
            goesTo: 'BehindAnimation', //goes upstairs 
          },
        ],
      },    
      
    LeftOfOutsideWilson: {
        name: 'LeftOfOutsideWilson',
        img: 'davis/LeftOfOutsideWilson.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 0,
            pitch: 0.01,
            goesTo: 'CTLRRight', 
          },
          {
            width: 50,
            height: 50,
            yaw: 3.1,
            pitch: 0.01,
            goesTo: 'BackHallway', //goes to the other side back hallway 
          },
        ],
      },
  
    OutsideMeditationRoom1:{
        name: 'Outside Meditation Room',
        img: "davis/OutsideMedRCurtain.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 3.3,
            pitch: 0.01,
            goesTo: 'MeditationRoom', 
            },  
        ]
      },
  
    OutsideMeditationRoom2:{
        name: 'Outside Meditation Room',
        img: "davis/OutsideMedR.JPG",
        transitions:[
          {
          width: 50,
          height: 50,
          yaw: -0.3,
          pitch: 0.01,
          goesTo: 'RightFromLobbyStairs', //not sure where this goes to 
          },
          {
            width: 50,
            height: 50,
            yaw: 3.5,
            pitch: 0.01,
            goesTo: 'MeditationRoom', //not sure where this goes to 
            },
          
        ]
      },
  
    MeditationRoom: {
        name: 'Meditation and Resting room',
        img: "davis/MeditationRoom.JPG",
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 1.5,
            pitch: 0.01,
            goesTo: 'OutsideMeditationRoom1'
          },
  
          {
            width: 50,
            height: 50,
            yaw: -1.8,
            pitch: 0.01,
            goesTo: 'OutsideMeditationRoom2', 
          },
        ],
      },
  
      LeftSideStairs:{
        name: 'study carrels - 2nd floor',
        img: "davis/LeftSideStairs2.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 6,
            pitch: 0.01,
            goesTo: 'UpstairsRightRight' //I think it should be RightFromLobbyStairs but i wasn't sure
          },
              {
                width: 50,
                height: 50,
                yaw: 3.3,
                pitch: 0.01,
                goesTo: 'LeftSideStairs2F', 
              },
        ],
      },
  
      //guide on naming: 
      // leftSide of the main stairs (from ground floor lobby) 2nd Floor 
      LeftSideStairs2F:{
        name: 'study carrels - 2nd floor',
        img: "davis/LeftSideStairs2F.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: -3,
            pitch: 0.01,
            goesTo: 'LeftSideStairs2F2',
          },
          {
            width: 50,
            height: 50,
            yaw: -1.7,
            pitch: 0.01,
            goesTo: 'RightHallWayMiddle',
          },
          {
            width: 50,
            height: 50,
            yaw: -0.3,
            pitch: 0.01,
            goesTo: 'LeftSideStairs',
          },
        ],
      },
  
      // leftSide of the main stairs (from ground floor lobby) 2nd Floor - 2nd part, further down
      LeftSideStairs2F2:{
        name: 'Second Floor - Ending',
        img: "davis/LeftSideStairs2F2.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: -0.7,
            pitch: 0.01,
            goesTo: 'LeftSideStairs2F',
          },
          {
            width: 50,
            height: 50,
            yaw: 1,
            pitch: 0.01,
            goesTo: 'BackHallway', //godownstairs
          },
          {
            width: 50,
            height: 50,
            yaw: 3,
            pitch: 0.01,
            goesTo: 'RightSide2FEnd',
          },
        ],
      },
  
      // leftSide of the main stairs (from ground floor lobby) 2nd Floor - the ending
      RightSide2FEnd:{
        name: 'Second Floor - Study desks',
        img: "davis/RightSide2FEnd.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: -7.5,
            pitch: 0.01,
            goesTo: 'LeftSideStairs2F2',
          },
          {
            width: 50,
            height: 50,
            yaw: 2,
            pitch: 0.01,
            goesTo: 'RightSide2FEnd2', 
          },
        ],
      },
  
      // leftSide of the main stairs (from ground floor lobby) 2nd Floor - second part of the ending 
      //is this an end to the tour? 
      RightSide2FEnd2:{
        name: 'Second Floor - Study desks',
        img: "davis/RightSide2FEnd2.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 6,
            pitch: 0.01,
            goesTo: 'RightSide2FEnd',
          },
          {
            width: 50,
            height: 50,
            yaw: 3.5,
            pitch: 0.01,
            goesTo: 'RightHallWayEnd', //the long hallway on the right 
          },
        ],
      },
  
      RightHallWayEnd:{
        name: 'RightHallWayEnd',
        img: "davis/RightHallWayEnd.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 6,
            pitch: 0.01,
            goesTo: 'RightSide2FEnd2',
          },
          {
            width: 50,
            height: 50,
            yaw: 6.8,
            pitch: 0.01,
            goesTo: 'CTLRRight',
          },
          {
            width: 50,
            height: 50,
            yaw: 3.5,
            pitch: 0.01,
            goesTo: 'RightHallWayMiddle', //the long hallway on the right 
          },
        ],
      },
  
      RightHallWayMiddle:{
        name: 'RightHallWayMiddle',
        img: "davis/RightHallWayMiddle.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 3.2,
            pitch: 0.01,
            goesTo: 'RightHallWayEnd',
          },
          {
            width: 50,
            height: 50,
            yaw: 6,
            pitch: 0.01,
            goesTo: 'StudyRoomStairs2nd', //the long hallway on the right 
          },
          {
            width: 50,
            height: 50,
            yaw: 4.5,
            pitch: 0.01,
            goesTo: 'RightHallWayMiddleOver', //the long hallway on the right 
          },
          {
            width: 50,
            height: 50,
            yaw: 1.4,
            pitch: 0.01,
            goesTo: 'LeftSideStairs2F', //the long hallway on the right 
          },
        ],
      },
  
      RightHallWayMiddleOver:{
        name: 'RightHallWayMiddleOver',
        img: "davis/RightHallWayMiddleOver.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 4.7,
            pitch: 0.01,
            goesTo: 'RightHallWayMiddle',
          },
        ],
      },
  
      RightHallWayEnd:{
        name: 'RightHallWayEnd',
        img: "davis/RightHallWayEnd.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 3.5,
            pitch: 0.01,
            goesTo: 'RightSide2FEnd2',
          },
          {
            width: 50,
            height: 50,
            yaw: 6.5,
            pitch: 0.01,
            goesTo: 'RightHallWayMiddle', //the long hallway on the right 
          },
        ],
      },
  
  
  
      // leftSide of the main stairs (from ground floor lobby) 2nd Floor - second part of the ending 
      //is this an end to the tour? 
      RightSide2FEnd2:{
        name: 'Second Floor - Study desks',
        img: "davis/RightSide2FEnd2.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 3.7,
            pitch: 0.01,
            goesTo: 'RightSide2FEnd',
            text: "beautiful view of Middlebury's mountains"
          },
          {
            width: 50,
            height: 50,
            yaw: 2.3,
            pitch: 0.01,
            goesTo: 'RightHallWayEnd', 
          },
        ],
      },
  
      RightStairsEntranceLobby:{
        name: 'Stairs to Downstairs and Special Collection Entrance ',
        img: "davis/RightStairsEntranceLobby.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 0,
            pitch: -.6,
            goesTo: 'OutsideSC',
          },
          //goes back upstairs
          {
            width: 50,
            height: 50,
            yaw: 3.5,
            pitch: 0.25,
            goesTo: 'DavisLobby',
          },
        ],
      },
  
      //helpdesk to downstairs - haven't connected helpdesk to it though
      StairsDownFromHelpdesk:{
        name: 'Stairs to Downstairs',
        img: "davis/StairsDownFromHelpdesk.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 1,
            pitch: 0.01,
            goesTo: 'F0OutsideSC'
          },
          {
            width: 50,
            height: 50,
            yaw: 5,
            pitch: 0.05,
            goesTo: 'HelpDesk' //should go back upstairs but don't know if there is an image before helpdesk
          },
        ],
      },
  
      //helpdesk
      HelpDesk:{
        name:'ITS HelpDesk',
        img: "davis/HelpDesk.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 2,
            pitch: 0.05,
            goesTo: 'StairsDownFromHelpdesk'
          },
          {
            width: 50,
            height: 50,
            yaw: 4.3,
            pitch: 0.05,
            goesTo: 'FromEntranceRight'
          },
        ],
      },
  
      F0OutsideSC:{
        name: 'Stairs to Downstairs',
        img: "davis/F0OutsideSC.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: -5,
            pitch: 0.01,
            goesTo: 'StairsDownFromHelpdesk' 
          },
          {
            width: 50,
            height: 50,
            yaw: -4,
            pitch: 0.01,
            goesTo: 'F0Lounge' 
          },
          {
            width: 50,
            height: 50,
            yaw: -2,
            pitch: 0.01,
            goesTo: 'OutsideSC' 
          },
          {
            width: 50,
            height: 50,
            yaw: -3,
            pitch: 0.01,
            goesTo: 'RightStairsEntranceLobby' 
          },
        ],
      },
  
      OutsideSC:{
        name: 'Special Collections Entrance',
        img: "davis/OutsideSC.JPG",
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: -3.5,
            pitch: 0.01,
            text: 'Middlebury College Special Collections houses the college’s rare book, manuscript, and archival collections.',
          },
        ],
  
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: -4.4,
            pitch: 0.01,
            goesTo: 'F0OutsideSC' 
          },
          {
            width: 50,
            height: 50,
            yaw: 6,
            pitch: 0.01,
            goesTo: 'F0Lounge' 
          },
          {
            width: 50,
            height: 50,
            yaw: -3,
            pitch: 0.01,
            goesTo: 'SpecialCollection1' 
          },
          {
            width: 50,
            height: 50,
            yaw: -1.5,
            pitch: 0.01,
            goesTo: 'RightStairsEntranceLobby' 
          },
        ],
      },
  
      SpecialCollection1:{
        name: 'Special Collection #1',
        img: "davis/SpecialCollection1.JPG",
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 6,
            pitch: 0.01,
            text: 'There are collections of 80 zines, 46 tiny books, and 1 stuffed poodles.',
          },
        ],
          transitions:[
            {
              width: 50,
              height: 50,
              yaw: -0.5,
              pitch: 0.01,
              goesTo: 'OutsideSC' 
            },
            {
              width: 50,
              height: 50,
              yaw: 1.9,
              pitch: 0.01,
              goesTo: 'SpecialCollection2' 
            },
          ],
      },
      SpecialCollection2:{
        name: 'Special Collection #2',
        img: "davis/SpecialCollection2.JPG",
        transitions:[
          {
            width: 50,
              height: 50,
              yaw: 2,
              pitch: 0.01,
              goesTo: 'SpecialCollection1'
          },
          {
            width: 50,
            height: 50,
            yaw: 3,
            pitch: 0.01,
            goesTo: 'SpecialCollection3'
          }
        ],
      },
  
      SpecialCollection3:{
        name: "Special Collections #3",
        img: "davis/SpecialCollection3.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 5,
            pitch: 0.01,
            goesTo: 'SpecialCollection2'
          },
          {
            width: 50,
            height: 50,
            yaw: 0.7,
            pitch: 0.01,
            goesTo: 'OutsideSC'
          },
        ],
      },
  
      F0Lounge:{
        name: 'Study Lounge - Downstairs',
        img: "davis/F0Lounge.JPG",
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 1.4,
            pitch: 0.01,
            text: 'Click to enter one of the study rooms. They can be reserved for individual or group study sessions.',
          },
          {
            width: 50,
            height: 50,
            yaw: 2.5,
            pitch: 0.01,
            text: 'Click to explore more shelves. This way also leads to an exit.',
          },
          {
            width: 50,
            height: 50,
            yaw: 3.5,
            pitch: 0.01,
            text: 'More shelves!--Italian Literature, etc.',
          },
          {
            width: 50,
            height: 50,
            yaw: 4.5,
            pitch: 0.01,
            text: 'More shelves--poetry and more literature',
          },
        ],
        transitions:[
          //across from outside special collections
          {
            width: 50,
            height: 50,
            yaw: -1,
            pitch: 0.01,
            goesTo: 'F0OutsideSC' 
          },
          //back to right outside special collections
          {
            width: 50,
            height: 50,
            yaw: -2,
            pitch: 0.01,
            goesTo: 'OutsideSC' 
          },
          //study room
          {
            width: 50,
            height: 50,
            yaw: 1,
            pitch: 0.01,
            goesTo: 'F0150A' 
          },
  
          //leads to an exit
          {
            width: 50,
            height: 50,
            yaw: 2.8,
            pitch: 0.01,
            goesTo: 'F0LeftMostHall' 
          },
  
          //Italian literature
          {
            width: 50,
            height: 50,
            yaw: 3.8,
            pitch: 0.01,
            goesTo: 'F0AdjLeft' 
          },
  
          //poetry and literature
          {
            width: 50,
            height: 50,
            yaw: 4.8,
            pitch: 0.01,
            goesTo: 'F0AdjRight' 
          },
        ],
      },
  
  
      F0AdjLeft:{
        name: "Adjecent Left Side shelves",
        img: "davis/F0AdjLeft.JPG",
        tooltips:[
          {
            width: 50,
            height: 50,
            yaw: 4.2,
            pitch: 0.01,
            text: 'More shelves--poetry and more literature',
          },
        ],
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 1,
            pitch: 0.01,
            goesTo: 'F0Lounge' 
          },
          {
            width: 50,
            height: 50,
            yaw: 4,
            pitch: 0.01,
            goesTo: 'F0AdjRight' 
          },
        ],
      },
  
  
      F0AdjRight:{
        name: "Right side shelves",
        img: "davis/F0AdjRight.JPG",
        tooltips: [
          {
            width: 50,
            height: 50,
            yaw: 2.5,
            pitch: 0.01,
            text: 'More shelves--poetry and literature',
          },
        ],
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: 4,
            pitch: 0.01,
            goesTo: 'F0AdjLeft' 
          },
          {
  
          },
        ],
      },
  
  
      F0LeftMostHall:{
        name: "Bottom Floor shelves",
        img: "davis/F0LeftMostHall.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: -2,
            pitch: 0.01,
            goesTo: 'F0Lounge' 
          },
          {
            width: 50,
            height: 50,
            yaw: 1,
            pitch: 0.01,
            goesTo: 'F0LeftMostHall2' 
          },
        ],
      },
  
      F0LeftMostHall2:{
        name: "Shelves Hallway 2",
        img: "davis/F0LeftMostHall2.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: -1,
            pitch: 0.01,
            goesTo: 'F0LeftMostHall' 
          },
          {
            width: 50,
            height: 50,
            yaw: 2.5,
            pitch: 0.01,
            goesTo: 'F0LeftMostHall3' 
          },
        ],
      },
  
  
      F0LeftMostHall3:{
        name: "Shelves Hallway 3",
        img: "davis/F0LeftMostHall3.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: -2,
            pitch: 0.01,
            goesTo: 'F0LeftMostHall2' 
          },
          {
            width: 50,
            height: 50,
            yaw: 3,
            pitch: 0.01,
            goesTo: 'F0LeftMostEnd' 
          },
        ],
      },
  
  
      F0LeftMostEnd:{
        name: "Exit - first floor",
        img: "davis/F0LeftMostEnd.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: -1,
            pitch: 0.01,
            goesTo: 'F0LeftMostHall3' 
          },
        ],
      },
  
      //study room in the first floor
      F0150A:{
        name: "Study Rooms",
        img: "davis/F0150A.JPG",
        transitions:[
          {
            width: 50,
            height: 50,
            yaw: -1,
            pitch: 0.01,
            goesTo: 'F0Lounge' 
          },
        ],
      },


    /////////////////////////MCC///////////////////////////////////

    mccOutsideMainEntrance:{
      name: 'mcc Outside Main Entrance ',
      img: 'mcc/mccOutsideMainEntrance.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 3.1,
          pitch: 0.01,
          goesTo: 'mccMainEntrance',
        },
      ],
    },

    mccMainEntrance: {
      name: 'mcc Main Entrance (Inside)',
      img: 'mcc/mccMainEntrance.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 0.1,
          pitch: 0.01,
          goesTo: 'mccOutsideCR',
        },
        {
          width: 50,
          height: 50,
          yaw: -3,
          pitch: 0.01,
          goesTo: 'mccOutsideMainEntrance',
        },
      ],
      // tooltips: [
      //   {
      //     width: 50,
      //     height: 50,
      //     yaw: 0.14,
      //     pitch: 0.1,
      //     text: '',
      //   },
      // ]
  },

  mccOutsideCR: {
      name: 'mcc Outside Crossroads',
      img: 'mcc/mccOutsideCR.JPG',
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 0.2,
          pitch: 0.17,
          text: 'Click to enter MiddXpress. Our little college supermarket',
        },
        {
          width: 50,
          height: 50,
          yaw: -1.2,
          pitch: 0.17,
          text: 'Click to enter Crossroads Cafe',
        },

        {
          width: 50,
          height: 50,
          yaw: 0.5,
          pitch: 0.17,
          text: 'Click to go towards mail Center',
        },
      ],

      transitions: [
          //midd Xpress
          {
            width: 50,
            height: 50,
            yaw: 0.2,
            pitch: 0.01,
            goesTo: 'mccMiddX',
          },
          //crossroads
          {
            width: 50,
            height: 50,
            yaw: -1.2,
            pitch: 0.01,
            goesTo: 'mccCR2',
          },
          {
            width: 50,
            height: 50,
            yaw: -3.9,
            pitch: 0.01,
            goesTo: 'mccMainEntrance',
          },
          {
            width: 50,
            height: 50,
            yaw: 0.5,
            pitch: 0.01,
            goesTo: 'mccToMailCenter',
            },
        ],
  },

  mccToMailCenter:{
    name: 'hallway to Mail Center',
    img: 'mcc/mccToMailCenter.JPG',

    tooltips: [
      {
        width: 50,
        height: 50,
        yaw: 3,
        pitch: 0.17,
        text: 'Click to go to Student mail center',
      },
    ],

    transitions: [
        {
          width: 50,
          height: 50,
          yaw: 0.2,
          pitch: 0.01,
          goesTo: 'mccOutsideCR',
        },
        {
          width: 50,
          height: 50,
          yaw: 3,
          pitch: 0.01,
          goesTo: 'mccMailCenter1',
        },
        
      ],
  },

  mccMailCenter1:{
      name: 'mcc Mail center ',
      img: 'mcc/mccMailCenter1.JPG',

      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 3.3,
          pitch: 0.01,
          goesTo: 'mccToMailCenter',
        },
        {
          width: 50,
          height: 50,
          yaw: 0.1,
          pitch: 0.01,
          goesTo: 'mccMailCenter2',
        },
      ],
  },

  mccMailCenter2:{
    name: 'mcc mail center 2',
    img: 'mcc/mccMailCenter2.JPG',
    tooltips: [
      {
        width: 50,
        height: 50,
        yaw: -2.4,
        pitch: 0.01,
        text: 'Students are waiting in line to get their mail',
      },
    ],
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -2,
        pitch: 0.01,
        goesTo: 'mccMailCenter1',
    },

    {
      width: 50,
      height: 50,
      yaw: 0,
      pitch: 0.01,
      goesTo: 'mccStairsAfterMC',
  },
    ],

  },

  mccStairsAfterMC:{
    name: 'Stairs after MailCenter',
    img: 'mcc/mccStairsAfterMC.JPG',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -3.8,
        pitch: 0.01,
        goesTo: 'mccMailCenter2',
      },
      {
      width: 50,
      height: 50,
      yaw: 0.2,
      pitch: 0.01,
      goesTo: 'mccEntrance2Indoors',
    },
    ],
  },

  mccEntrance2Indoors:{
    name: 'Second entrance - Indoors',
    img: 'mcc/mccEntrance2Indoors.JPG',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 2.2,
        pitch: 0.01,
        goesTo: 'mccStairsAfterMC',
      },
      {
        width: 50,
        height: 50,
        yaw: 2.9,
        pitch: 0.01,
        goesTo: 'mccOutsideBS',
      },
    ],
  },

  mccMiddX: {
      name: 'mcc MiddXpress',
      img: 'mcc/mccMiddX.JPG',
      transitions: [
          {
              width: 50,
              height: 50,
              yaw: -3.7,
              pitch: 0.01,
              goesTo: 'mccOutsideCR',
          },
      ],
  },

  mccCR2: {
    name: "Center of CrossRoads cafe",
    img: 'mcc/mccCR2.JPG',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -2,
        pitch: 0.01,
        goesTo: 'mccOutsideCR',
      },

      {
        width: 50,
        height: 50,
        yaw: 2,
        pitch: 0.01,
        goesTo: 'mccCR1',
      },

      {
        width: 50,
        height: 50,
        yaw: 3.6,
        pitch: 0.01,
        goesTo: 'mccCR3',
      },
    ],
  },

  mccCR3: {
    name: "Crossroads - back side",
    img: 'mcc/mccCR3.JPG',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -6,
        pitch: 0.01,
        goesTo: 'mccCR2',
      },

      {
        width: 50,
        height: 50,
        yaw: 3.4,
        pitch: 0.01,
        goesTo: 'mccCR4StudyRoom',
      },
    ],
    tooltips: [
      {
        width: 50,
        height: 50,
        yaw: 3.4,
        pitch: 0.15,
        text: 'Click to enter the study room',
      },
    ],
  },

  mccCR1: {
    name: "Crossroads - pool side",
    img: 'mcc/mccCR1.JPG',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 3.5,
        pitch: 0.002,
        goesTo: 'mccCR2',
      },
      {
        width: 50,
        height: 50,
        yaw: 1,
        pitch: 0.01,
        goesTo: 'mccGrille3',
      },
    ],
  },

  mccCR4StudyRoom: {
    name: "CrossRoads - Study room",
    img: 'mcc/mccCR4StudyRoom.JPG',
    transitions:[
      {
        width: 50,
        height: 50,
        yaw: -3,
        pitch: 0.01,
        goesTo: 'mccCR3',
      },
    ],
  },

  mccGrille3:{
    name: "Grille - towards stairs to pool",
    img: 'mcc/mccGrille3.JPG',

    tooltips:[
      {
        width: 50,
        height: 50,
        yaw: 7,
        pitch: 0.17,
        text: 'Click to go back to crossroads cafe',
      },
    ],

    transitions:[
      {
        width: 50,
        height: 50,
        yaw: 7,
        pitch: 0.01,
        goesTo: 'mccCR1',
      },
      {
        width: 50,
        height: 50,
        yaw: 5,
        pitch: 0.01,
        goesTo: 'mccGrille2',
      },
    ],
  },

  mccGrille2:{
    name: "Grille - center",
    img: 'mcc/mccGrille2.JPG',
    transitions:[
      {
        width: 50,
        height: 50,
        yaw: -1,
        pitch: 0.01,
        goesTo: 'mccGrille3',
      },
      {
        width: 50,
        height: 50,
        yaw: -5,
        pitch: 0.01,
        goesTo: 'mccGrille1',
      },
    ],
  },

  mccGrille1:{
    name: "Grille - order",
    img: 'mcc/mccGrille1.JPG',
    tooltips:[
      {
        width: 50,
        height: 50,
        yaw: 5.4,
        pitch: 0.17,
        text: 'Students can order Grille food here. Grille is non-taxed!',
      },
    ],
    transitions:[
      {
        width: 50,
        height: 50,
        yaw: 2.2,
        pitch: 0.01,
        goesTo: 'mccGrille2',
      },
      {
        width: 50,
        height: 50,
        yaw: 6.5,
        pitch: 0.01,
        goesTo: 'mccOutsideGrille',
      },
    ],
  },

  mccOutsideGrille:{
    name: "Grille - order",
    img: 'mcc/mccOutsideGrille.JPG',

    transitions:[
      {
        width: 50,
        height: 50,
        yaw: -7.2,
        pitch: 0.01,
        goesTo: 'mccGrille1',
      },
      {
        width: 50,
        height: 50,
        yaw: -3.5,
        pitch: 0.01,
        goesTo: 'mccOutsideWilson',
      },
      {
        width: 50,
        height: 50,
        yaw: -6,
        pitch: 0.01,
        goesTo: 'mccOutsideBS',
      },
    ],
  },

  mccOutsideWilson:{
    name: "Outside Wilson Hall",
    img: 'mcc/mccOutsideWilson.JPG',

    transitions:[
      {
        width: 50,
        height: 50,
        yaw: -1.6,
        pitch: 0.01,
        goesTo: 'mccOutsideGrille',
      },

      {
        width: 50,
        height: 50,
        yaw: 0.1,
        pitch: 0.01,
        goesTo: 'mccWilson',
      },

      {
        width: 50,
        height: 50,
        yaw: 1.6,
        pitch: 0.01,
        goesTo: 'mccHallwayAfterWilson',
      },
    ],
  },

  mccHallwayAfterWilson:{
    name: "Outside Wilson Hall - Left",
    img: 'mcc/mccHallwayAfterWilson.JPG',

    transitions:[
      {
        width: 50,
        height: 50,
        yaw: 0,
        pitch: 0.01,
        goesTo: 'mccOutsideWilson',
      },
      {
        width: 50,
        height: 50,
        yaw: 3.3,
        pitch: 0.01,
        goesTo: 'mccStairsToMG',
      },
    ],
  },

  mccWilson:{
    name: "Wilson Hall",
    img: 'mcc/mccWilson.JPG',

    tooltips:[
      {
        width: 50,
        height: 50,
        yaw: -3,
        pitch: 0.17,
        text: 'Students from Tap dance are practicing on stage!',
      },
      {
        width: 50,
        height: 50,
        yaw: -3.3,
        pitch: 0.17,
        text: 'Wilson Hall is used for performances, panels, speakers, etc.!',
      },
    ],

    transitions:[
      {
        width: 50,
        height: 50,
        yaw: -1.5,
        pitch: 0.01,
        goesTo: 'mccOutsideWilson',
      },
    ],
  },

  mccOutsideBS:{
    name: "Outside Wilson Hall",
    img: 'mcc/mccOutsideBS.JPG',

    transitions:[
      {
        width: 50,
        height: 50,
        yaw: 0.3,
        pitch: 0.01,
        goesTo: 'mccBookStore',
      },
      {
        width: 50,
        height: 50,
        yaw: 3,
        pitch: 0.01,
        goesTo: 'mccOutsideGrille',
      },
      {
        width: 50,
        height: 50,
        yaw: 1.2,
        pitch: 0.01,
        goesTo: 'mccEntrance2Indoors',
      },

    ],
  },

  mccStairsToMG:{
    name: "Stairs to meditation room",
    img: 'mcc/mccStairsToMG.JPG',

    tooltips:[
      {
        width: 50,
        height: 50,
        yaw: -3,
        pitch: 0.17,
        text: 'These stairs lead to Mitchel Green room. It is a study, meditation, etc. room.',
      },

      {
        width: 50,
        height: 50,
        yaw: -2,
        pitch: 0.07,
        text: 'Click this to exit McCullough - Main entrance',
      },

    ],

    transitions:[
      {
        width: 50,
        height: 50,
        yaw: 3.5,
        pitch: 0.01,
        goesTo: 'mccHallwayAfterWilson',
      },

      {
        width: 50,
        height: 50,
        yaw: -2,
        pitch: 0.01,
        goesTo: 'mccOutsideMainEntrance',
      },

    ],
  },

  mccBookStore:{
    name: "BookStore",
    img: 'mcc/mccBookStore.JPG',

    tooltips:[
      {
        width: 50,
        height: 50,
        yaw: 3,
        pitch: 0.17,
        text: 'College bookstore sells Middlebury merch and dorm & class supplies!',
      },
    ],
    transitions:[
      {
        width: 50,
        height: 50,
        yaw: 6.5,
        pitch: 0.01,
        goesTo: 'mccOutsideBS',
      },
    ],
  },
  
    //study room in the first floor
  F0150A:{
      name: "Study Rooms",
      img: "F0150A.JPG",
      transitions:[
        {
          width: 50,
          height: 50,
          yaw: -1,
          pitch: 0.01,
          goesTo: 'F0Lounge' 
        },
      ],
  },

        //Axinn things from here
  Entrance2nd: {
    name: 'Entrance2nd',
    img: 'axinn/0.JPG',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 0,
        pitch: 0.01,
        goesTo: 'FromEntrance2nd',
      },
    ],
    tooltips: [
    {
              width: 50,
              height: 50,
              yaw: 6.8,
              pitch: 0.01,
              text: 'Welcome to Axinn Center at Starr Library! Its the home to academic departments, classrooms and study spaces',
            },
          ]
  },
    
  FromEntrance2nd: {
          name: 'FromEntrance2nd',
          img: 'axinn/1.JPG',
          transitions: [
            {
              width: 50,
              height: 50,
              yaw: 9.55,
              pitch: 0.01,
              goesTo: 'Entrance2nd',
            },
            {
              width: 50,
              height: 50,
              yaw: 11.4,
              pitch: 0.01,
              goesTo: 'Lobby2nd',
            },
            {
              width: 50,
              height: 50,
              yaw: 0,
              pitch: 0.01,
              goesTo: 'Before229',
            },
          ],
  },
    
  Lobby2nd: {
          name: 'Lobby2nd',
          img: 'axinn/2.JPG',
          transitions: [
            {
              width: 50,
              height: 50,
              yaw: 0.5,
              pitch: 0.01,
              goesTo: 'Before229',
            },
            {
              width: 50,
              height: 50,
              yaw: 2,
              pitch: 0.01,
              goesTo: 'FromEntrance2nd',
            },
          ],
  },
    
  Before229: {
          name: 'Before229',
          img: 'axinn/3.JPG',
          transitions: [
            {
              width: 50,
              height: 50,
              yaw: 9.55,
              pitch: 0.01,
              goesTo: 'FromEntrance2nd',
            },
            {
              width: 50,
              height: 50,
              yaw: 9.55,
              pitch: 0.01,
              goesTo: '',
            },
            {
              width: 50,
              height: 50,
              yaw: 0.25,
              pitch: 0.01,
              goesTo: 'Room229',
            },
            {
              width: 50,
              height: 50,
              yaw: -0.3,
              pitch: 0.01,
              goesTo: 'BigLoungeAxinn',
            },
            {
              width: 50,
              height: 50,
              yaw: 0,
              pitch: 0.01,
              goesTo: 'Past229',
            },
          ],
  },
    
  BigLoungeAxinn: {
    name: 'BigLoungeAxinn',
    img: 'axinn/19.JPG',
    transitions: [
    {
    width: 50,
    height: 50,
    yaw: 2.2,
    pitch: 0.01,
    goesTo: 'Before229',
    },
    {
            width: 50,
            height: 50,
            yaw: 0.7,
            pitch: 0.01,
            goesTo: 'Past229',
          },
          {
            width: 50,
            height: 50,
            yaw: 2.8,
            pitch: 0.01,
            goesTo: 'Room232',
          },
        ],
      },
    
      Room232: {
        name: 'Room232',
        img: 'axinn/20.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 0.6,
            pitch: 0.01,
            goesTo: 'BigLoungeAxinn',
          },
        ],
      },
    
      Room229: {
          name: 'Room229',
          img: 'axinn/5.JPG',
          transitions: [
            {
              width: 50,
              height: 50,
              yaw: 8.8,
              pitch: 0.01,
              goesTo: 'Before229',
            },
            {
              width: 50,
              height: 50,
              yaw: 10.4,
              pitch: 0.01,
              goesTo: 'Past229',
            },
          ],
      },
    
      Past229: {
        name: 'Past229',
        img: 'axinn/6.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 9,
            pitch: 0.01,
            goesTo: '229',
          },
          {
            width: 50,
            height: 50,
            yaw: -0.2,
            pitch: 0.01,
            goesTo: 'Abernathy',
          },
          {
            width: 50,
            height: 50,
            yaw: 0,
            pitch: 0.01,
            goesTo: 'BeforeElevator2nd',
          },
          {
            width: 50,
            height: 50,
            yaw: -2.3,
            pitch: 0.01,
            goesTo: 'BigLoungeAxinn',
          },
        ],
    },
    
    Abernathy: {
      name: 'Abernathy',
      img: 'axinn/7.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.9,
          pitch: 0.01,
          goesTo: 'Past229',
        },
        {
          width: 50,
          height: 50,
          yaw: 9.2,
          pitch: 0.01,
          goesTo: 'BeforeElevator2nd',
        },
      ],
    },
    
    BeforeElevator2nd: {
      name: 'BeforeElevator2nd',
      img: 'axinn/8.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.6,
          pitch: 0.01,
          goesTo: 'Abernathy',
        },
        {
          width: 50,
          height: 50,
          yaw: 1,
          pitch: 0.01,
          goesTo: 'Elevator2nd',
        },
      ],
    },
    
    Elevator2nd: {
      name: 'Elevator2nd',
      img: 'axinn/9.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.6,
          pitch: 0.01,
          goesTo: 'BeforeElevator2nd',
        },
        {
          width: 50,
          height: 50,
          yaw: 10.05,
          pitch: 0.01,
          goesTo: 'InElevator',
        },
        {
          width: 50,
          height: 50,
          yaw: 1.7,
          pitch: 0.01,
          goesTo: 'Stairs2nd',
        },
        {
          width: 50,
          height: 50,
          yaw: 6.3,
          pitch: 0.01,
          goesTo: 'FilmOffices',
        },
      ],
    },
    
    Stairs2nd: {
      name: 'Stairs2nd',
      img: 'axinn/10.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.7,
          pitch: 0.01,
          goesTo: 'Elevator2nd',
        },
        {
          width: 50,
          height: 50,
          yaw: 12,
          pitch: -0.4,
          goesTo: 'Elevator1st',
        },
        {
          width: 50,
          height: 50,
          yaw: 7.2,
          pitch: 0.4,
          goesTo: 'Elevator3rd',
        },
        {
          width: 50,
          height: 50,
          yaw: 12,
          pitch: -0.7,
          goesTo: 'ElevatorBasement',
        },
      ],
      tooltips: [
        {
          width: 30,
          height: 30,
          yaw: 9.8,
          pitch: 0.01,
          text: 'Click on this to visit the 2nd floor',
        },
        {
          width: 30,
          height: 30,
          yaw: 12.1,
          pitch: -0.4,
          text: 'Click on this to visit the 1st floor',
        },
        {
          width: 30,
          height: 30,
          yaw: 7.3,
          pitch: 0.4,
          text: 'Click on this to visit the 3rd floor',
        },
        {
          width: 30,
          height: 30,
          yaw: 12.1,
          pitch: -0.7,
          text: 'Click on this to visit the basement floor',
        },
      ],
    },
    
    Elevator3rd: {
      name: 'Elevator3rd',
      img: 'axinn/27.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.55,
          pitch: 0.01,
          goesTo: 'Stairs2nd',
        },
        {
          width: 50,
          height: 50,
          yaw: -0.75,
          pitch: 0.01,
          goesTo: 'InElevator',
        },
        {
          width: 50,
          height: 50,
          yaw:1.6,
          pitch: 0.01,
          goesTo: 'EnglishOffices',
        },
      ],
    },
    
    EnglishOffices: {
      name: 'EnglishOffices',
      img: 'axinn/28.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.5,
          pitch: 0.01,
          goesTo: 'Elevator3rd',
        },
      ],
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 0.3,
          pitch: 0.01,
          text: 'These are the English and American Literature department offices',
        },
      ],
    },
    
    FilmOffices: {
      name: 'FilmOffices',
      img: 'axinn/11.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.55,
          pitch: 0.01,
          goesTo: 'Elevator2nd',
        },
      ],
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 0,
          pitch: 0.01,
          text: 'These are the film department offices',
        },
      ],
    },
    
    InElevator: {
      name: 'InElevator',
      img: 'axinn/12.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: -0.2,
          pitch: -0.13,
          goesTo: 'Elevator3rd',
        },
        {
          width: 50,
          height: 50,
          yaw: -0.2,
          pitch: -0.2,
          goesTo: 'Elevator2nd',
        },
        {
          width: 50,
          height: 50,
          yaw: -0.2,
          pitch: -0.27,
          goesTo: 'Elevator1st',
        },
        {
          width: 50,
          height: 50,
          yaw: -0.2,
          pitch: -0.35,
          goesTo: 'ElevatorBasement', 
        },
      ],
    },
    
    Elevator1st: {
      name: 'Elevator1st',
      img: 'axinn/13.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: -0.6,
          pitch: 0.01,
          goesTo: 'InElevator',
        },
        {
          width: 50,
          height: 50,
          yaw: 9.4,
          pitch: -0.1,
          goesTo: 'Stairs2nd',
        },
        {
          width: 50,
          height: 50,
          yaw: -1.7,
          pitch: 0.01,
          goesTo: 'Lobby1st',
        },
        {
          width: 50,
          height: 50,
          yaw: 1.6,
          pitch: 0.01,
          goesTo: 'Room100',
        },
      ],
    },
    
    ElevatorBasement: {
      name: 'ElevatorBasement',
      img: 'axinn/22.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 0.25,
          pitch: 0.01,
          goesTo: 'InElevator',
        },
        {
          width: 50,
          height: 50,
          yaw: - 1.8,
          pitch: 0.01,
          goesTo: 'Stairs2nd',
        },
        {
          width: 50,
          height: 50,
          yaw: -0.5,
          pitch: 0.01,
          goesTo: 'EquipmentStudios',
        },
        {
          width: 50,
          height: 50,
          yaw: -3.5,
          pitch: 0.01,
          goesTo: 'Outside100',
        },
      ],
    },
    
    EquipmentStudios: {
      name: 'EquipmentStudios',
      img: 'axinn/24.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.55,
          pitch: 0.01,
          goesTo: 'ElevatorBasement',
        },
      ],
    },
    
    Room100: {
      name: 'Room100',
      img: 'axinn/21.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.2,
          pitch: 0.23,
          goesTo: 'Elevator1st',
        },
        {
          width: 50,
          height: 50,
          yaw: 1,
          pitch: 0.01,
          goesTo: 'Outside100',
        },
      ],
    },
    
    Outside100: {
      name: 'Outside100',
      img: 'axinn/23.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 0,
          pitch: 0.01,
          goesTo: 'ElevatorBasement',
        },
        {
          width: 50,
          height: 50,
          yaw: 1,
          pitch: 0.01,
          goesTo: 'Room100',
        },
      ],
    },
    
    Lobby1st: {
      name: 'Lobby1st',
      img: 'axinn/14.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.45,
          pitch: 0.01,
          goesTo: 'Elevator1st',
        },
        {
          width: 50,
          height: 50,
          yaw: 7.6,
          pitch: 0.01,
          goesTo: 'Outside1st',
        },
        {
          width: 50,
          height: 50,
          yaw: -1.6,
          pitch: 0.01,
          goesTo: 'Outside105',
        },
      ],
    },
    
    Outside1st: {
      name: 'Outside1st',
      img: 'axinn/25.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 0,
          pitch: 0.01,
          goesTo: 'Lobby1st',
        },
      ],
    },
    
    Outside105: {
      name: 'Outside105',
      img: 'axinn/15.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.55,
          pitch: 0.01,
          goesTo: 'Lobby1st',
        },
        {
          width: 50,
          height: 50,
          yaw: 1.2,
          pitch: 0.01,
          goesTo: 'Room105',
        },
        {
          width: 50,
          height: 50,
          yaw: 0.2,
          pitch: 0.01,
          goesTo: 'AxinnPrinter',
        },
      ],
    },
    
    Room105: {
      name: 'Room105',
      img: 'axinn/16.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.45,
          pitch: 0.01,
          goesTo: 'Outside105',
        },
      ],
    },
    
    AxinnPrinter: {
      name: 'AxinnPrinter',
      img: 'axinn/17.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.55,
          pitch: 0.01,
          goesTo: 'Outside105',
        },
        {
          width: 50,
          height: 50,
          yaw: -0.2,
          pitch: 0.01,
          goesTo: 'Outside109',
        },
      ],
    },
    
    Outside109: {
      name: 'Outside109',
      img: 'axinn/18.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.55,
          pitch: 0.01,
          goesTo: 'AxinnPrinter',
        },
        {
          width: 50,
          height: 50,
          yaw: -0.3,
          pitch: 0.01,
          goesTo: 'Room109',
        },
      ],
    },
    
    Room109: {
      name: 'Room109',
      img: 'axinn/26.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 8.8,
          pitch: 0.01,
          goesTo: 'Outside109',
        },
      ],
    },
       
  });
