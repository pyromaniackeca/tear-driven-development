export const questions = [
  {
    text: "The deadline is pretty steep. A developer suggests\nto give up writing tests.",
    character: "char1",
    answer1: {
      text: "Tests are awesome. Grab a cup of coffee\nand write some tests.",
      chaos: -20,
      tears: 10
    },
    answer2: {
      text: "Better to have a working feature than a\nfailing test.",
      chaos: 20,
      tears: -10
    }
  },
  {
    text: "A senior developer insists that test coverage needs\nto be 100%. Your test coverage is 60%.",
    character: "char1",
    answer1: {
      text: "Write some more tests.",
      chaos: -10,
      tears: 10
    },
    answer2: {
      text: "Tell him that he needs to cure his\nperfectionism.",
      chaos: 20,
      tears: -10
    }
  },
  {
    text: "A test is flaky.",
    character: "char2",
    answer1: {
      text: "Spend two days refactoring the code.",
      chaos: -20,
      tears: 20
    },
    answer2: {
      text: "Ignore it. Ain’t nobody got time for\nrefactoring.",
      chaos: 20,
      tears: -20
    }
  },
  {
    text: "Slack is down.",
    character: "char2",
    answer1: {
      text: "Ugh. Walk over to your colleague and\ntalk to them.",
      chaos: -10,
      tears: 20
    },
    answer2: {
      text: "Send a mean tweet to Slack. That might\nspeed them up.",
      chaos: 10,
      tears: -20
    }
  },
  {
    text: "Your team is fighting about whether you should use\nRSpec or Minitest to test a microservice.",
    character: "char3",
    answer1: {
      text: "Do some research on which works better\nfor your use case.",
      chaos: -20,
      tears: 10
    },
    answer2: {
      text: "The strongest developer picks the\nframework. Round one. Fight!",
      chaos: 20,
      tears: -10
    }
  },
  {
    text: "One of your developers can’t solve an issue and has\nbroken into tears.",
    character: "char3",
    answer1: {
      text: "Sit him down, and help him through it.",
      chaos: -10,
      tears: 20
    },
    answer2: {
      text: "Tell him to man up.",
      chaos: 10,
      tears: -10
    }
  },
  {
    text: "A developer turns up at work drunk.",
    character: "char3",
    answer1: {
      text: "Send them home. They’re in no state to\ncode.",
      chaos: -10,
      tears: -10
    },
    answer2: {
      text: "BDD can stand for beer-driven\ndevelopment. Let\nthem work.",
      chaos: 20,
      tears: 20
    }
  }
]
