
//starting outside the door 
export default (locations = {

//Below are Davis Maps 
  Outside: {
    name: 'Outside',
    img: 'Outside.JPG',
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
    
  DavisDoor: {
      name: 'DavisDoor',
      img: 'Test.JPG',
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
          goesTo: 'WilsonCafe',
        },
      ],
    },
    
  WilsonCafe: {
      name: 'Wilson Cafe',
      img: 'WilsonCafe.JPG',
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
      img: 'Lobby.JPG',
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
      img: 'FromLobbyLeft.JPG',
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
      img: 'DownLobbyLeft.JPG',
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
      img: "F1ViewingRoom.JPG",
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
      img: 'DownDownLobbyLeft.JPG',
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
      img: 'PrinterCorridorFirst.JPG',
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
      img: 'PastPrinterCorner.JPG',
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
      img: 'InsideCarrellByPrinters.JPG',
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
      img: 'DownPrinterCorner.JPG',
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
      img: 'FirstFloorLeftCorner.JPG',
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
      img: 'FirstFloorLeftCornerElevator.JPG',
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
      img: 'BackHallway.JPG',
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
      img: 'PrintersFirstFloor.JPG',
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
      img: 'FromEntranceRight.JPG',
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
      img: 'LobbyRightIn.JPG',
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
      img: 'iMacWorkStation.JPG',
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
      img: 'BloombergStation.JPG',
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
      img: 'RightStairs.JPG',
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
      img: 'RightFromLobbyStairs.JPG',
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
      img: 'UpstairsRightRight.JPG',
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
      img: 'UpstairsCenterOver.JPG',
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
    img: 'UpstairsLobby.JPG',
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
      img: 'Terrace2nd.JPG',
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
      img: 'LeftFromLobbyStairs.JPG',
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
    img: 'Outside301A.JPG',
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
    img: 'Outside301F.JPG',
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
    img: 'CornerNear301F.JPG',
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
    img: 'StudyRoomStairs2nd.JPG',
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
      img: 'OutsideWilsonMedia.JPG',
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
      img: 'WilsonMediaLab.JPG',
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
      img: 'CTLR.JPG',
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
      img: 'AnimationStudio.JPG',
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
      img: 'AnimationOutside.JPG',
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
      img: 'BehindAnimation.JPG',
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
      img: 'StairsUpCTLRLeft.JPG',
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
      img: 'CTLRRight.JPG',
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
      img: 'LeftOfOutsideWilson.JPG',
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
      img: "OutsideMedRCurtain.JPG",
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
      img: "OutsideMedR.JPG",
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
      img: "MeditationRoom.JPG",
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
      img: "LeftSideStairs2.JPG",
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
      img: "LeftSideStairs2F.JPG",
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
      img: "LeftSideStairs2F2.JPG",
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
      img: "RightSide2FEnd.JPG",
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
      img: "RightSide2FEnd2.JPG",
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
      img: "RightHallWayEnd.JPG",
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
      img: "RightHallWayMiddle.JPG",
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
      img: "RightHallWayMiddleOver.JPG",
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
      img: "RightHallWayEnd.JPG",
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
      img: "RightSide2FEnd2.JPG",
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
      img: "RightStairsEntranceLobby.JPG",
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
      img: "StairsDownFromHelpdesk.JPG",
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

    F0OutsideSC:{
      name: 'Stairs to Downstairs',
      img: "F0OutsideSC.JPG",
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
      img: "OutsideSC.JPG",
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
      img: "SpecialCollection1.JPG",
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
      img: "SpecialCollection2.JPG",
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
      img: "SpecialCollection3.JPG",
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
      img: "F0Lounge.JPG",
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
      img: "F0AdjLeft.JPG",
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
      img: "F0AdjRight.JPG",
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
      img: "F0LeftMostHall",
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
      img: "F0LeftMostHall2.JPG",
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
      img: "F0LeftMostHall3.JPG",
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
      img: "F0LeftMostEnd.JPG",
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
  });