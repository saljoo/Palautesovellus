import { useState } from 'react'

//Component for page header
const Header = () => <h1>give feedback</h1>

//Button component
const Button = (props) => 
    <button onClick={props.handleClick}>{props.text}</button>

//Component to show statistics
const Statistics = (props) => {
  //Return this if there isn't any feedback given
  if(props.all===0) {
    return (
      <div>
        <h2>statistics</h2>
        <div>
          No feedback given
        </div>
      </div>
    )
  }
  //Return statistics
  return (
    <div>
      <h2>statistics</h2>
      <div>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} />
      </div>
    </div>
  )
}

//Component to show one statistic line
const StatisticLine = (props) => {
  if(props.text==="positive") {
    return (
      <div>{props.text} {props.value} %</div>
    )
  }
  return (
    <div>{props.text} {props.value}</div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(((good + 1) - bad)/(all + 1))
    setPositive((good + 1)/(all + 1)*100)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((good - bad)/(all + 1))
    setPositive(good/(all + 1)*100)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage((good - (bad + 1))/(all + 1))
    setPositive(good/(all + 1)*100)
  }

  return (
    <div>
      <Header />
      <div>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <div>
          <Statistics good={good} neutral={neutral} bad={bad}
            all={all} average={average} positive={positive} />
        </div>
      </div>
    </div>
  )
}

export default App;