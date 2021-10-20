export default (locations = {
    DavisDoor: {
      name: 'DavisDoor',
      img: 'Davis1.JPG',
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 10.3,
          pitch: 0.1,
          text: 'This is the largest library at Middlebury',
          //img: 'youth_center.jpg',
        },
        {
          width: 50,
          height: 50,
          yaw: 6.7,
          pitch: 0.16,
          text: 'This is the largest library at Middlebury',
          //img: 'shevchenko_theatre.jpg',
        },
        {
          width: 50,
          height: 50,
          yaw: 8.65,
          pitch: 0.16,
          text: 'Chernihiv Regional State Administration',
         // img: 'state_administration.jpg',
        },
      ],
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 3.4,
          pitch: 0.09,
          goesTo: 'DavisLobby',
        },
        {
          width: 50,
          height: 50,
          yaw: 6.44,
          pitch: 0.09,
          goesTo: 'DavisLobby',
        },
        {
          width: 50,
          height: 50,
          yaw: 7.96,
          pitch: 0.11,
          goesTo: 'DavisLobby',
        },
      ],
    },
    DavisLobby: {
      name: 'Davis Lobby',
      img: 'Davis2.JPG',
      tooltips: [
        {
          width: 35,
          height: 35,
          yaw: 9.7,
          pitch: 0.1,
          text: 'Welcome to the lobby',
          //img: 'khmeln_monument.jpg',
        },
        {
          width: 50,
          height: 50,
          yaw: 7.35,
          pitch: 0.16,
          text: 'Pyatnytska Church',
          //img: 'pyatnyckaya_church.jpg',
        },
      ],
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 19.2,
          pitch: 0.09,
          goesTo: 'DavisDoor',
        },
      ],
    },
    Davis2: {
      name: 'Davis2',
      img: 'Davis2.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 11.2,
          pitch: 0,
          goesTo: 'DavisDoor',
        },
      ],
      tooltips: [
        {
          width: 35,
          height: 35,
          yaw: 14.32,
          pitch: 0.1,
          text: 'Chernihiv National Bank',
          //img: 'national_bank.jpg',
        },
      ],
    },
    Davis2: {
      name: 'Davis Inside',
      img: 'Davis3.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.5,
          pitch: 0.03,
          goesTo: 'DavisDoor',
        },
        {
          width: 50,
          height: 50,
          yaw: 18.9,
          pitch: 0.02,
          goesTo: 'WorldHello',
        },
      ],
    },
    WorldHello: {
      name: 'WorldHello',
      img: '360_world.jpg',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 9.5,
          pitch: 0.01,
          goesTo: 'DavisDoor',
        },
        // {
        //   width: 50,
        //   height: 50,
        //   yaw: 17.36,
        //   pitch: 0,
        //   goesTo: 'Val',
        // },
      ],
    //   tooltips: [
    //     {
    //       width: 50,
    //       height: 50,
    //       yaw: 18.93,
    //       pitch: 0.04,
    //       text: `Catherine's Church`,
    //       img: 'catherine_church.jpg',
    //     },
    //   ],
    },
    Val: {
      name: 'Val',
      img: 'val.jpg',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 10.1,
          pitch: 0.02,
          goesTo: 'CatherineChurch',
        },
      ],
    //   tooltips: [
    //     {
    //       width: 50,
    //       height: 50,
    //       yaw: 5.47,
    //       pitch: 0,
    //       text: `Boris and Glib Cathedral`,
    //       img: 'boris_glib_cathedral.jpg',
    //     },
    //     {
    //       width: 50,
    //       height: 50,
    //       yaw: 7.17,
    //       pitch: -0.02,
    //       text: `Transfiguration Cathedral`,
    //       img: 'transfiguration_cathedral.jpg',
    //     },
    //   ],
    },
  });