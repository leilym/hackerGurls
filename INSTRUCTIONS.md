## [Democratizing Propsective Student Tours: A Virtual Reality Tour into Middlebury College]
### Middlebury College, Computer Science CSCI 701 (Fall 2021)

### General familiarity 
- Transitions: the arrows that allow users to navigate through the map 

- Tooltips: Checkpoints that allow users to learn more information a certain location 

### Steps to add new locations 

1. Upload 360 images to appropriate folder in static_assets 
2. Go to locations.js 
3. Make a new element for each new image specifying name, img, transitions, and tooltips if needed. (feel free to copy and paste existing elements and change as necessary)
4. Find existing locations that will lead to newly added location and add  appropirate transitions 
5. cd middvr 
6. Run npm start and local host to see changes 
7. Adjust yaw, pitches, and rolls as necessary 

### Tips 
1. It is very easy to get lost keeping track of photos and transitions. To mitigate this stress, we suggest: 
   - Plan the route prior to taking pictures 
   - Have a mechanism for naming photos 
2. Play around with the yaws to get use to it

### Helpful information 

To change the landing page picture: 
1. Find Landing Page element in location.js 
2. Change the 'img'
3. Go to client.js and change the photo under setBackground
4. Go to wrapper.component 
5. Change the locationName to be the name of the element name under location.js 