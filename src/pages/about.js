/*
Front end for Dede passenger information system at dedriver.org
Copyright (C) 2021  Stefan Begerad

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react';
import {Link} from 'react-router-dom';
import dede from '../images/dedeLogo0032.png';
import car from '../images/car.svg';
import bus from '../images/bus.svg';
import train from '../images/train.svg';
import tram from '../images/tram.svg';
import taxi from '../images/taxi.svg';
import Parcelservice from '../images/parcelservice.svg';
import Deliveryservice from '../images/deliveryservice.svg';
import MenuBar from '../images/menu-bar.png';
import Popup from '../images/popup.png';
import { FormattedMessage } from 'react-intl';

const About = () => {
    return(
        <>
        <div>
            <h2><FormattedMessage id="Navbar.link.about"/></h2>
            <p><FormattedMessage id="About.service.intro"/></p>
            <p><FormattedMessage id="About.service.provider"/></p>
            <p><Link to="/app">
            <FormattedMessage id="About.link.app"/></Link></p>
            <p><FormattedMessage id="About.service.charges"/></p>
        </div>
        <div>
        <h2><FormattedMessage id="About.map.title"/></h2>
        <p><FormattedMessage id="About.map.view"/></p>
        {/* TODO The image is not international! */}
        <img src={MenuBar} alt="menu of Dede passenger information system" width="100%"/>
        <br/>
        <br/>
        <p><FormattedMessage id="About.map.symbols"/></p>
        {/* TODO Warning: validateDOMNesting(...): <tr> cannot appear as a child of <table>. Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser. */}
        <table>
            <tr>
            <th><FormattedMessage id="About.map.th.symbol"/></th>
            <th><FormattedMessage id="About.map.th.name"/></th>
            <th><FormattedMessage id="About.map.th.description"/></th>
            </tr>
            <tr>
            <td><img src={car} alt="symbol for car" width="32" height="32"/></td>
            <td><FormattedMessage id="About.map.ta.car.name"/></td>
            <td><FormattedMessage id="About.map.ta.car.desc"/></td>
            </tr>
            <tr>
            <td><img src={bus} alt="symbol for bus" width="32" height="32"/></td>
            <td><FormattedMessage id="About.map.ta.bus.name"/></td>
            <td><FormattedMessage id="About.map.ta.bus.desc"/></td>
            </tr>
            <tr>
            <td><img src={train} alt="symbol for train" width="32" height="32"/></td>
            <td><FormattedMessage id="About.map.ta.train.name"/></td>
            <td><FormattedMessage id="About.map.ta.train.desc"/></td>
            </tr>
            <tr>
            <td><img src={tram} alt="symbol for tram" width="32" height="32"/></td>
            <td><FormattedMessage id="About.map.ta.tram.name"/></td>
            <td><FormattedMessage id="About.map.ta.tram.desc"/></td>
            </tr>
            <tr>
            <td><img src={taxi} alt="symbol for taxi" width="32" height="32"/></td>
            <td><FormattedMessage id="About.map.ta.taxi.name"/></td>
            <td><FormattedMessage id="About.map.ta.taxi.desc"/></td>
            </tr>
            <tr>
            <td><img src={Parcelservice} alt="symbol for parcelservice" width="32" height="32"/></td>
            <td><FormattedMessage id="About.map.ta.ps.name"/></td>
            <td><FormattedMessage id="About.map.ta.ps.desc"/></td>
            </tr>
            <tr>
            <td><img src={Deliveryservice} alt="symbol for delivery service" width="32" height="32"/></td>
            <td><FormattedMessage id="About.map.ta.ds.name"/></td>
            <td><FormattedMessage id="About.map.ta.ds.desc"/></td>
            </tr>
            <tr>
            <td><img src={dede} alt="Dede symbol" width="32" height="32"/></td>
            <td><FormattedMessage id="About.map.ta.dede.name"/></td>
            <td><FormattedMessage id="About.map.ta.dede.desc"/></td>
            </tr>
        </table>
        <p><FormattedMessage id="About.map.dynamics"/></p>
        {/* TODO The image is not international! */}
        <img src={Popup} alt="symbol with dialog" width="100%"/>
        <br/>
        <br/>
        </div>
        <div>
        <h2><FormattedMessage id="Concept.title"/></h2>
        <p><FormattedMessage id="Concept.intro"/></p>
        <ul>
        <li><FormattedMessage id="Concept.component.app"/></li>
        <li><FormattedMessage id="Concept.component.server"/></li>
        <li><FormattedMessage id="Concept.component.map"/></li>
        </ul>
        <p><FormattedMessage id="Concept.description"/></p>
        </div>
        </>
    )
}

export default About;
