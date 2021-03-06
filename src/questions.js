export const questions = [
  {
    text: "The deadline is pretty steep. A developer suggests\nto give up on writing tests.",
    character: "char4",
    answer2: {
      text: "Tests are awesome. Grab a cup of coffee\nand write some tests.",
      chaos: -20,
      tears: 10
    },
    answer1: {
      text: "Better to have a working feature than a\nfailing test.",
      chaos: 20,
      tears: -10
    }
  },
  {
    text: "A senior developer insists that test coverage needs\nto be 100%. Your test coverage is 60%.",
    character: "char2",
    answer2: {
      text: "Write some more tests.",
      chaos: -10,
      tears: 10
    },
    answer1: {
      text: "Tell him that he needs to cure his\nperfectionism.",
      chaos: 20,
      tears: -10
    }
  },
  {
    text: "A test is flaky.",
    character: "char3",
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
    character: "char3",
    answer2: {
      text: "Ugh. Walk over to your colleague and\ntalk to them.",
      chaos: -10,
      tears: 10
    },
    answer1: {
      text: "Send a mean tweet to Slack. You know you\nwant to.",
      chaos: 10,
      tears: -20
    }
  },
  {
    text: "Your team is fighting over whether you should use\nRSpec or Minitest to test a microservice.",
    character: "char1",
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
      chaos: 10,
      tears: -20
    },
    answer2: {
      text: "Tell him to man up.",
      chaos: 10,
      tears: 10
    }
  },
  {
    text: "A developer turns up at work drunk.",
    character: "char4",
    answer1: {
      text: "Send them home. They’re in no state to\ncode.",
      chaos: -10,
      tears: -10
    },
    answer2: {
      text: "BDD can stand for beer-driven\ndevelopment. Let them work.",
      chaos: 20,
      tears: 20
    }
  },
  {
    text: "The client is requesting new features, and you\nhaven't even managed to develop the planned ones.",
    character: "char2",
    answer2: {
      text: "The client is always right. Do all the\nfeatures!",
      chaos: 20,
      tears: 20
    },
    answer1: {
      text: "Sit down with the client and try to talk\nsome sense into them.",
      chaos: -20,
      tears: 10
    }
  },
  {
    text: "GitHub is down.",
    character: "char3",
    answer1: {
      text: "Admire the illustration on the 404 page,\nand then have a beer.",
      chaos: 10,
      tears: -20
    },
    answer2: {
      text: "Work on your local branch.",
      chaos: -10,
      tears: 0
    }
  },
  {
    text: "One of your senior developers decides to quit IT\nand start an alpaca farm.",
    character: "char2",
    answer1: {
      text: "Spend some time on recruiting a new\nsenior developer.",
      chaos: 10,
      tears: 10
    },
    answer2: {
      text: "Hire two of your friends who know how\nto code and have no interest in alpacas.",
      chaos: 30,
      tears: 20
    }
  },
  {
    text: "Your tests are failing, but the\napplication seems to work just fine.",
    character: "char1",
    answer2: {
      text: "Get cracking at making the tests pass.",
      chaos: -20,
      tears: 10
    },
    answer1: {
      text: "Look! It's snowing outside!",
      chaos: 20,
      tears: -20
    }
  },
  {
    text: "One of your colleagues isn't checking\nif the tests are passing.",
    character: "char4",
    answer1: {
      text: "Life's too short to waste time\nexplaining the basics to rookies.",
      chaos: 10,
      tears: -10
    },
    answer2: {
      text: "Time for some tough love.",
      chaos: -20,
      tears: 10
    }
  },
  {
    text: "There are 2 new junior developers.\nThey don't know how to write tests.",
    character: "char1",
    answer1: {
      text: "Show them a few examples and explain the\nimportance of writing tests first.",
      chaos: -10,
      tears: -20
    },
    answer2: {
      text: "Tell them to google TDD.",
      chaos: 10,
      tears: 10
    }
  },
  {
    text: "The customer wants you to make some major changes\nto the app.",
    character: "char3",
    answer1: {
      text: "Pour some more coffee and TDD your way\nthrough the code.",
      chaos: 10,
      tears: 10
    },
    answer2: {
      text: "Start googling 'How to start an alpaca\nfarm'.'",
      chaos: 30,
      tears: 30
    }
  },
  {
    text: "You're late for your mom's birthday. Also, the\nbranch you want to merge has some conflicts\nwith the master branch.",
    character: "char1",
    answer1: {
      text: "Sometimes, all you need to do is\nforce push stuff around.",
      chaos: 10,
      tears: 10
    },
    answer2: {
      text: "Resolve the issues first, you live at\nher place and see her every day anyway.",
      chaos: 30,
      tears: 30
    }
  }
]
