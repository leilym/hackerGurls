export default (Axinn = {

    Entrance2nd: {
        name: 'Entrance2nd',
        img: 'Entrance2nd.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 9.55,
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
            text: 'Welcome to Axinn Center at Starr Library! This is the home to a few academic departments, classrooms and study spaces',
          },
        ]
    },

    FromEntrance2nd: {
        name: 'FromEntrance2nd',
        img: '1.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 9.55,
            pitch: 0.01,
            goesTo: 'Lobby2nd',
          },
          {
            width: 50,
            height: 50,
            yaw: 9.55,
            pitch: 0.01,
            goesTo: 'Before229',
          },
        ],
    },

    Lobby2nd: {
        name: 'Lobby2nd',
        img: '2.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 9.55,
            pitch: 0.01,
            goesTo: 'Before229',
          },
          {
            width: 50,
            height: 50,
            yaw: 9.55,
            pitch: 0.01,
            goesTo: 'FromEntrance',
          },
        ],
    },

    //missing one of the big red-ish dark room that is 226

    Before229: {
        name: 'Lobby2nd',
        img: '2.JPG',
        transitions: [
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
            yaw: 9.55,
            pitch: 0.01,
            goesTo: '',
          },
          {
            width: 50,
            height: 50,
            yaw: 9.55,
            pitch: 0.01,
            goesTo: 'Room229',
          },
        ],
    },

    Room229: {
        name: 'Room229',
        img: '5.JPG',
        transitions: [
          {
            width: 50,
            height: 50,
            yaw: 9.55,
            pitch: 0.01,
            goesTo: 'Before229',
          },
        ],
    },

})