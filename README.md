Line.js
=========================
Line.js is a simple plugin that create flexible moving line in your page with content and some custom settings you specified.

To init main function include script tag where you want appear the line with this code: ``` new Line(); ``` or you can write this in js file. 

## Custom settings
The function can accept 2 parameters: an ``` object ``` and an ``` array ```. The object has 2 properties: ``` duration ``` and ``` animation ```. You can change moving duration or add your own special class with the animation. And the array simply accepts the content
For example ``` new Line({duration: 10}, ['content', 'other content', '...']); ```

![screenshot from 2018-01-17 21-44-04](https://user-images.githubusercontent.com/26124867/35063796-d5ab0b90-fbd0-11e7-8d97-dc4ea5ae22dc.png)
![screenshot from 2018-01-17 21-54-47](https://user-images.githubusercontent.com/26124867/35063895-1505df0e-fbd1-11e7-8d12-25c3840c995f.png)

## Source code explanation

Flexibility is due this code: ``` responseSize = +(100 * (animEl.clientWidth / screenWidth)).toFixed(2) ``` ~ 20% of screan width
