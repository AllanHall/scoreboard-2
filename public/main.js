let teamOneScore = 0
let teamTwoScore = 0
let teamNameOne = 'Team 1'
let teamNameTwo = 'Team 2'
let periodNumber = 1

const main = () => {
  document.querySelector('.team1Score').textContent = teamOneScore
  document.querySelector('.team2Score').textContent = teamTwoScore
  document.querySelector('.team1Name').textContent = teamNameOne
  document.querySelector('.team2Name').textContent = teamNameTwo
  document.querySelector('.periodNumber').textContent = periodNumber
}

const updatePeriod = () => {
  if (periodNumber >= 3) {
    return 3
  }
  periodNumber += 1
  document.querySelector('.periodNumber').textContent = periodNumber
}

// Prevents score from going above 21 - team 1
const teamOneAddOne = () => {
  if (teamOneScore <= 20) {
    teamOneScore += 1
    document.querySelector('.team1Score').textContent = teamOneScore
  } else {
    document.querySelector('.winner-display-1').textContent = 'You Won!'
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
  }
}

// Prevents score from going above 21 - team 2
const teamTwoAddOne = () => {
  if (teamTwoScore <= 20) {
    teamTwoScore += 1
    document.querySelector('.team2Score').textContent = teamTwoScore
  } else {
    document.querySelector('.winner-display-2').textContent = 'You Won!'
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
  }
}

// Prevents score from going below zero - team 1
const teamOneSubtractOne = () => {
  if (teamOneScore <= 0) {
    return 0
  }
  teamOneScore -= 1
  document.querySelector('.team1Score').textContent = teamOneScore
}

// Prevents score from going below zero - team 2
const teamTwoSubtractOne = () => {
  if (teamTwoScore <= 0) {
    return 0
  }
  teamTwoScore -= 1
  document.querySelector('.team2Score').textContent = teamTwoScore
}

const teamOneUpdateName = () => {
  teamNameOne = document.querySelector('.team-1-name').value
  document.querySelector('.team1Name').textContent = teamNameOne
}

const teamTwoUpdateName = () => {
  teamNameTwo = document.querySelector('.team-2-name').value
  document.querySelector('.team2Name').textContent = teamNameTwo
}

// Resets all scores to zero and enables buttons again
const resetScores = () => {
  teamOneScore = document.querySelector('.team1Score').textContent = 0
  teamTwoScore = document.querySelector('.team2Score').textContent = 0
  periodNumber = document.querySelector('.period-number').textContent = 1
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.update-period').addEventListener('click', updatePeriod)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', teamOneAddOne)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', teamOneSubtractOne)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', teamTwoAddOne)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', teamTwoSubtractOne)
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', teamOneUpdateName)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', teamTwoUpdateName)
document.querySelector('.reset-button').addEventListener('click', resetScores)
