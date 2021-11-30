import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ed2.png';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">Let&apos; Learn and Search About Some, Quizzes, PDFs, and other resources! </h1>
            {/*<p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>*/}

            <div className="gpt3__header-content__input">
                <input type="email" placeholder="what do you want to search about?" />
                <button type="button">Search</button>
            </div>

            <div className="gpt3__header-content__people">
                <img src={people}  alt=""/>
                <p>1,600 students requested access a visit in last month</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={ai}  alt=""/>
        </div>
    </div>
);

export default Header;
