// Write your React code here.
import {Component} from 'react'

import './index.css'

const Emoji = props => {
  const {eachEmojiDetails, onResponse} = props
  const {name, imageUrl} = eachEmojiDetails
  const onClickEmoji = () => {
    onResponse()
  }

  return (
    <li className="list-container" onClick={onClickEmoji}>
      <img src={imageUrl} className="img-style" alt={name} />
      <p className="paragraph">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {respond: false}

  onResponse = () => {
    this.setState(prevState => ({respond: !prevState.respond}))
  }

  render() {
    const {respond} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    if (respond) {
      return (
        <div className="main-container">
          <div className="love-card-container">
            <img src={loveEmojiUrl} alt="love emoji" className="image" />
            <h1 className="heading">Thank you!</h1>
            <p className="paragraph">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className="background-color">
        <div className="white-background">
          <h1 className="heading">
            How satisfied are you with our <br />
            customer support performance
          </h1>
          <ul className="emoji-container">
            {emojis.map(eachItem => (
              <Emoji
                eachEmojiDetails={eachItem}
                key={eachItem.id}
                onResponse={this.onResponse}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
