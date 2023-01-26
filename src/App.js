import { useState } from 'react'

const Header = () => <h1>give feedback</h1>

const Button = (props) => 
    <button onClick={props.handleClick}>{props.text}</button>

const Statistics = (props) => {
  return (
    <div>
      <h2>statistics</h2>
      <div>
        good {props.good}<br />
        neutral {props.neutral}<br />
        bad {props.bad}
      </div>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const hanleGoodClick = () => 
    setGood(good + 1)

  const handleNeutralClick = () =>
    setNeutral(neutral + 1)

  const handleBadClick = () =>
    setBad(bad + 1)

  return (
    <div>
      <Header />
      <div>
        <Button handleClick={hanleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <div>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      </div>
    </div>
  )
}

export default App;
