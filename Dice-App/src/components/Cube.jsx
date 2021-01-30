import React from 'react';

import { FaDice, FaDiceD6 } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesOne} from "react-icons/gi";

const Cube = () => {
    
  return(

    <div class="page">
      <div class="container" data-aos="fade-down">
        <div class="shadow-wrapper">
          <div class="shadow">
            <div>&nbsp;</div>
          </div>
        </div>
        <div class="box-wrapper">
          <div class="box-faces">
            <div class="box-face front">
              <p>
              <GiPerspectiveDiceSixFacesOne size={70} className="icon"/>
              </p>
            </div>
            <div class="box-face back">
              <p>
              <FaDice size={70} className="icon"/>
              </p>
            </div>
            <div class="box-face left">
              <p>
              <FaDiceD6 size={70} className="icon"/>
              </p>
            </div>
            <div class="box-face right">
              <p> PLAY GAME </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

};

export default Cube;