import React from 'react';
import IconSearch from '../../assets/img/icon-search.svg';

function Footer() {
    return (
        <>
            <footer>
                <img class="ft-lg" src={IconSearch} alt="" />
                <p>Cinema Paradiso is the world’s leading community for creators to share, grow, and get hired.</p>
                <h2>Contact</h2>
                <p>E-mail : movie@cinemaparadiso.com | Hotline: +1 131 138 138</p>
                <hr />
                <p>CINEMA PARADISO - © 2022. ALL RIGHTS RESERVED.</p>
            </footer>
        </>
    );
}

export default Footer;
