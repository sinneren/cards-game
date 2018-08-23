import React, { Component } from 'react';
import CardBlock from  '../CardBlock/CardBlock';
import { connect } from "react-redux";
import './style.css';

class CardList extends Component {

    handleCardClick = (event) => {
        console.log(event)
        this.props.toggleCard();
        console.log(this.props)
    }
    createList = (list) => {
        let row = [];
        list.map((item, index)=> {
            row.push(<CardBlock key={index} id={item} />);
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

function mapStateToProps(state) {
    return {
        state
    }
}


export default connect(mapStateToProps)(CardList);