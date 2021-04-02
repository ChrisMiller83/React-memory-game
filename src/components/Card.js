import React from 'react';
import './Card.css'
import logo from './digitalcraftsLogo.jpg'

class Card extends React.Component {
  render() {
    let innerClass = "Card_inner";
    if (this.props.isFlipped) {
      innerClass += ' flipped';
    }
    return (
      <div className="Card" onClick={this.props.pickCard}>
        <div className={innerClass}>
          <div className="Card_front">
            {this.props.symbol}
          </div>
          <div className="Card_back">            
            <img src={logo} alt="dc logo" />
          </div>
        </div>
      </div>
    )
  }
}

export default Card;