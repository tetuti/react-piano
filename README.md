# React piano

This is the outcome of my 5 year old daughter telling me here ["piano book"](https://usborne.com/browse-books/catalogue/product/1/8637/my-first-keyboard-book/) broke. Instead of throwing it in the trash I told here I could make her a new piano she could play her notes on.

The application is written in React using hooks and the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). The Web Audio API is a strange beast, particularly in regards to the [oscillator](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type) which can only be started once, meaning we have to create a new oscillator each time we want to play a note.

A potential workaround would be to start the oscillator in a useEffect hook (with a .stop() cleanup callback) and rather connecting and disconnecting the oscillator to our destination, something that I have yet to try out as I tried to get this made before my daugthers bedtime :blush:

A live demo of the app can be found [here](https://react-piano.netlify.com/) (best viewed on a phone, minimal work done on responsiveness).

The sound quality is rather poor and sound mixing is atrocious. There's also a bug whem pressing a key down and releasing it whilst moving the mouse away where the tone gets stuck due using the mouse/touch-up event for stopping the oscillator. 