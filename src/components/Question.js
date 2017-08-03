import React, { Component } from 'react';
import up from '../assets/images/icons/arrow-up.svg';
import down from '../assets/images/icons/arrow-down.svg';
import '../assets/faq.scss';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }
  toggleDropDown() {
    this.setState({ dropdown: !this.state.dropdown });
  }

  render() {
    const { dropdown } = this.state;
    const { title, body } = this.props;
    return (
      <div className="outline">
          <p className="faq-question left">{title}</p>
          {dropdown ? (
            <img calssName="icon" onClick={this.toggleDropDown} alt="arrow-down" src={down}/>
          ) : (
            <img className="icon" onClick={this.toggleDropDown} alt="arrow-up" src={up}/>
          )}
          {/*One of the FAQ items has HTML in it to easily make an offsite link, so we need to 'dangerously' set it*/}
          { dropdown ? <p className="faq-answer left topSpacing" dangerouslySetInnerHTML={{__html: body}}/> : null }
      </div>
    );
  }
}

export default Question;
