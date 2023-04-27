const RULES = {
    'lizard': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'lose',
        'lizard': 'tie',
        'spock': 'win'
    },
    'spock': {
        'rock': 'win',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'lose',
        'spock': 'tie'
    },
    'paper': {
        'rock': 'win',
        'paper': 'tie',
        'scissors': 'lose',
        'lizard': 'lose',
        'spock': 'win'
    },
    'scissors': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'tie',
        'lizard': 'win',
        'spock': 'lose'
    },
   
    'rock': {
        'rock': 'tie',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'win',
        'spock': 'lose'
    }
   
}

export function rps(shoot) {

    console.log(shoot)
    const choices = ['rock', 'paper', 'scissors']
    if (!shoot) {
        return {'player': choices[Math.floor(Math.random() * 3)]}
    }

    shoot = shoot.toLowerCase();
    
    if (!choices.includes(shoot)) {
        console.error(`${shoot} is invalid`)
        throw new RangeError(`${shoot} is invalid`)
    }

    const enemey = choices[Math.floor(Math.random() * 3)]
    return {'player': shoot, 'opponent': enemey, 'result': RULES[shoot][enemey]}
}

export function rpsls(shoot) {

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    if (!shoot) {
        return {'player': choices[Math.floor(Math.random() * 5)]}
    }

    shoot = shoot.toLowerCase()

    if (!choices.includes(shoot)) {
        console.log("I executed");
        console.error(`${shoot} is invalid`);
        throw new RangeError(`${shoot} is invalid`);
    }

    const enemey = choices[Math.floor(Math.random() * 5)]
    return {'player': shoot, 'opponent': enemey, 'result': RULES[shoot][enemey]}


}