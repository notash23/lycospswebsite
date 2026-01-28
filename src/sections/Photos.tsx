import React from 'react';
import './Slideshow.css';

function Photos() {
  return (
    <div className="responsive-google-slides">
      <iframe name="col" title="SPS Photos" width="960" height="569"
        src="https://docs.google.com/presentation/d/e/2PACX-1vQjaSippFRhyuQmi73FTEqlQdyWaIwN3YjmjppHtpfYuyTxlyntPa6yVBZqzBC0en7CmUTIn0eF4GdK/pubembed?start=true&loop=true&delayms=4000&rm=minimal"
        style={{ border: 0 }}
        allowFullScreen={true}
      />

      <a className="prev"
        href="https://docs.google.com/presentation/d/e/2PACX-1vQjaSippFRhyuQmi73FTEqlQdyWaIwN3YjmjppHtpfYuyTxlyntPa6yVBZqzBC0en7CmUTIn0eF4GdK/embed?start=true&loop=false&delayms=4000&rm=minimal#slide=previous"
        target="col">
        &#10094;
      </a>
      <a className="next"
        href="https://docs.google.com/presentation/d/e/2PACX-1vQjaSippFRhyuQmi73FTEqlQdyWaIwN3YjmjppHtpfYuyTxlyntPa6yVBZqzBC0en7CmUTIn0eF4GdK/embed?start=true&loop=false&delayms=4000&rm=minimal#slide=next"
        target="col">
        &#10095;
      </a>
    </div>
  );
}
export default Photos;