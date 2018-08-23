import React, { Component } from 'react';
import CardBlock from  '../CardBlock/CardBlock';
import './style.css';

class CardList extends Component {
    constructor(props) {
        super(props);
    }
    createList = (list) => {
        let row = [];
        const maxi = list.length;
        for (let i = 0; i < maxi; i++) {
            row.push(<CardBlock key={i} id={list[i]}/>)
        }

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