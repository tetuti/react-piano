# React piano

This is the outcome of my 5 year old daughter telling me here ["piano book"](https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/6/2/5/1/9200000028811526.jpg) broke. Instead of throwing it in the trash I told here I could make her a new piano she could play her notes on.

The application is written in React using hooks and the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). The Web Audio API is a strange beast, particularly in regards to the [oscillator](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type) which can only be started once, meaning we have to create a new oscillator each time we want to play a note. This behaviour has to do with garbage collection if this [thread](https://stackoverflow.com/questions/13096140/why-does-a-web-audio-oscillator-only-play-a-note-once) is to be believed

A potential workaround would be to start the oscillator in a useEffect hook (with a .stop() cleanup callback) and rather connecting and disconnecting the oscillator to our destination, something that I have yet to try out as I tried to get this made before my daugthers bedtime :blush:

A live demo of the app can be found [here](https://react-piano.netlify.com/) (best viewed on a phone, minimal work done on responsiveness).

The sound quality is rather poor and sound mixing is atrocious. There's also a bug when pressing a key down and releasing it whilst moving the mouse away from said key where the tone gets stuck. This is due to me using the mouse/touch-up/down events for starting and stopping the oscillator in order to be able to allow a key to "held". 
