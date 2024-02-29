import React from "react";
import "./Track.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';



function Track(props) {
  function renderAction() {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={passTrackToRemove}>
          <FontAwesomeIcon icon={faSquareMinus} style={{color: "#f6b7b5",}} />
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={passTrack}>
          <FontAwesomeIcon icon={faSquarePlus} style={{color: "#f6b7b5",}} />
        </button>
      );
    }
  }

  function passTrack() {
    props.onAdd(props.track);
  }

  function passTrackToRemove() {
    props.onRemove(props.track);
  }
  
  return (
    <div className="Track">
      <div className="Track-information">
        {/* <h3><!-- track name will go here --></h3> */}
        <h3>{props.track.name}</h3>
        {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {/* <button class="Track-action"><!-- + or - will go here --></button> */}
      {renderAction()}
    </div>
  );
}

export default Track;