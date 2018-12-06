import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from '../Game/Game';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);
library.add(faCheck);
library.add(faTimes);
library.add(faCircle);

class GameApp extends Component {
    render() {
        return (
            <div>
                <Game/>
            </div>
        )
    }
}

export default GameApp