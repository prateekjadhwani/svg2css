# Tutorials for SVG2CSS

### What is this web-application used for?

The main purpose of this web-app is to help the user build complex css animations. The user needs to create a keyframe, provide the keyframe with a property, say `left` or `top` or any other css property, and a svg path indicating what should be hapenning with that particular property, along with the unit that the property uses and its min and max value. If the property follows a non-numerical value, the user can choose the `1's and 0's` checkbox and put the `String` values in min and max input field. This way, if the curve is on the top, it will choose the max value and vice versa. I will be showing a demo of `1's and 0's` checkbox in the later section.


## Demo

### Moving ball demo a.k.a. Projectile Demo

In this demo, the user decides to modify the default code and keyframes by making the ball move forward.

##### Step 1

- `Refresh` / Play the animation with the refresh button.

![Screenshot](assets/svg2css-refresh.gif)

##### Step 2

- Click on the `+` button in the *keyframes* section to view the property add section.
- Add the SVG path for the property
- Add the property you want to change, and its details like unit, min and max values
- Click on the `Add Property` button to add the property to the *keyframes*
 
![Screenshot](assets/svg2css-addedleftproperty.gif)

##### Step 3

- Click on the `Refresh` button to see the changes in animation
 
![Screenshot](assets/svg2css-leftrefresh.gif)

### Saving Your Changes

If you would like to save your changes you can simply click on the save icon on the top, and the app will let you save the css in your [gists](https://gist.github.com/).

### Bugs and Issues

If you think there is an bug in the webapp, please feel free to file an issue by clicking on the bug icon right next to the save icon. Similarly, you can file for new features.
