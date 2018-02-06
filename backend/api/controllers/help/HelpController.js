module.exports = {
  postHelp: (req, res) => {
    const answers = [
      'I think I didn\'t understand you.',
      'Could you be more precisely?',
      'What do you mean by that?'
    ]

    const answer = answers[Math.floor(Math.random() * answers.length)]

    setTimeout(() => {
      return res.json({answer})
    }, 3000 * Math.random() + 3000)
  }
}
