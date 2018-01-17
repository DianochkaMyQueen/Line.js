Line.js
=========================
Line.js is a simple plugin that create flexible moving line in your page with content and some custom settings you specified.

To init main function include script tag where you want appear the line with this code: ``` new Line(); ``` or you can write this in js file. 

## Custom settings
The function can accept 2 parameters: an ``` object ``` and an ``` array ```. The object has 2 properties: ``` duration ``` and ``` animation ```. You can change moving duration or add your own special class with the animation. And the array simply accepts the content
For example ``` new Line({duration: 10}, ['content', 'other content', '...'); ```
