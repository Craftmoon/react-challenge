import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MessageActions } from "../../store/ducks/messages";

class MessageList extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.addMessage(this.input.value);

    this.input.value = "";
  };

  render() {
    const { messages, costumers, removeMessage } = this.props;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={el => (this.input = el)} />
          <button type="submit">Nova mensagem</button>
        </form>

        <ul>
          {messages.map(message => (
            <li key={message.id}>
              {message.id} {message.text}
              <button onClick={() => removeMessage(message.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  costumers: state.costumers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MessageActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
