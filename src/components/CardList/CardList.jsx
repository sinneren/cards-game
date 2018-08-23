import React, { Component } from 'react';
import CardBlock from  '../CardBlock/CardBlock';
import './style.css';

class CardList extends Component {
    createList = (list) => {
        let row = [];
        list.map((item, index)=> {
            row.push(<CardBlock key={index} id={item} index={index} />);
        });

        return row;
    }
    render() {
        return (
            <div className="Cards-Wrapper">
               {this.createList(this.props.list)}
            </div>
        );
    }
}

export default CardList;