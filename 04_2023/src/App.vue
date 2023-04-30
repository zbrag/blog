<template>
    <div class="container m-2">
        <div class="row">
            <div v-if="resultClass" class="alert" :class="this.resultClass" role="alert">
                {{ result }}
            </div>

            <div class="col-12 col-lg-6">
                <h2>Player</h2>
                <div>
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
</template>

<script>
export default {
    data() {
        return {
            choices: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
            playerChoice: null,
            computerChoice: null,
            result: null,
            resultClass: null
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
                this.resultClass = 'alert-warning';
            } else if ((player === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
                (player === 'paper' && (computer === 'rock' || computer === 'spock')) ||
                (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
                (player === 'lizard' && (computer === 'paper' || computer === 'spock')) ||
                (player === 'spock' && (computer === 'rock' || computer === 'scissors'))) {
                this.result = 'You win!';
                this.resultClass = 'alert-success';
            } else {
                this.result = 'You lose!';
                this.resultClass = 'alert-danger'
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
