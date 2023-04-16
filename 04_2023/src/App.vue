<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <h2>Player</h2>
                <div class="options">
                    <button @click="choose('rock')"><i class="fas fa-hand-rock fa-5x"></i></button>
                    <button @click="choose('paper')"><i class="fas fa-hand-paper fa-5x"></i></button>
                    <button @click="choose('scissors')"><i class="fas fa-hand-scissors fa-5x"></i></button>
                    <button @click="choose('lizard')"><i class="fas fa-hand-lizard fa-5x"></i></button>
                    <button @click="choose('spock')"><i class="fas fa-hand-spock fa-5x"></i></button>
                </div>
                <div v-if="playerChoice" class="choice">
                    <h3>Your choice:</h3>
                    <i :class="`fas fa-hand-${playerChoice} fa-3x`"></i>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <h2>Computer</h2>
                <div v-if="computerChoice" class="choice">
                    <h3>Computer's choice:</h3>
                    <i :class="`fas fa-hand-${computerChoice} fa-3x`"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row" v-if="result">
            <div class="col-12">
                <h2>{{ result }}</h2>
                <button @click="reset()">Play again</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            choices: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
            playerChoice: null,
            computerChoice: null,
            result: null
        };
    },
    methods: {
        choose(choice) {
            this.playerChoice = choice;
            this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
            this.calculateResult();
        },
        calculateResult() {
            const player = this.playerChoice;
            const computer = this.computerChoice;
            if (player === computer) {
                this.result = 'Tie!';
            } else if ((player === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
                (player === 'paper' && (computer === 'rock' || computer === 'spock')) ||
                (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
                (player === 'lizard' && (computer === 'paper' || computer === 'spock')) ||
                (player === 'spock' && (computer === 'rock' || computer === 'scissors'))) {
                this.result = 'You win!';
            } else {
                this.result = 'You lose!';
            }
        },
        reset() {
            this.playerChoice = null;
            this.computerChoice = null;
            this.result = null;
        }
    }
}
</script>

<style>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
}

.player,
.computer {
    width: 45%;
    text-align: center;
}

.options {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.choice {
    margin-top: 20px;
}
</style>
