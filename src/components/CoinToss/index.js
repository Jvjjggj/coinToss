import {Component} from 'react'

import './index.css'

const imgLst = {
  0: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  1: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
}

class CoinToss extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {total: 0, heads: 0, tails: 0, imgId: 0}

  changeToss = () => {
    const random = Math.floor(Math.random() * 2)
    this.setState({imgId: random})
    if (random === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else if (random === 1) {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    } else {
      // eslint-disable-next-line react/no-unused-state
      this.setState(prevState => ({total: prevState.total + 1}))
    }
  }

  render() {
    const {heads, tails, imgId} = this.state
    const t = heads + tails
    const imgElement = imgLst[imgId]

    return (
      <div className="mainContainer">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="img" src={imgElement} alt="toss result" />
          <div className="btnContainer">
            <button onClick={this.changeToss} className="btn" type="button">
              Toss Coin
            </button>
          </div>
          <div className="score">
            {t !== 0 || tails !== 0 || heads !== 0 ? (
              <div className="hideDiv">
                <p className="scorePara">Total: {t}</p>
                <p className="scorePara">Heads: {heads}</p>
                <p className="scorePara">Tails: {tails}</p>
              </div>
            ) : (
              <div className="hideDiv">
                <p className="scorePara">Total: 0</p>
                <p className="scorePara">Heads: 0</p>
                <p className="scorePara">Tails: 0</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
