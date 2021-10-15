<template>
    <div v-if="loaded" class="clock d-flex">
        <div class="icon">
            <font-awesome-icon :icon="['far', 'clock']"/>
        </div>
        <ul class="text d-flex align-items">
            <li>{{displayDays}}</li>
            <li>:</li>
            <li>{{displayHours}}</li>
            <li>:</li>
            <li>{{displayMinutes}}</li>
            <li>:</li>
            <li>{{displaySeconds}}</li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name : "Countdown",
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    data() {
        return {
            displayDays : "00",
            displayHours : "00",
            displayMinutes : "00",
            displaySeconds : "00",
            loaded : false
        }
    },
    computed : {
        // Update time unites
        _seconds: () => 1000,
        _minutes() {
            return this._seconds * 60
        },
        _hours() {
            return this._minutes * 60
        },
        
        _days() {
            return this._hours * 24
        },
        end() {
            return new Date(
                this.year,
                this.month,
                this.date,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            );
        }
    },
    mounted() {
        this.showRemaining()
    },
    methods: {
        // Adds a "0" in front of a number if its value is below 10 ex: ("09", "08", "07" etc...) 
        formatNum: num => num < 10 ? "0" + num : num,
        showRemaining() {
            const timer = setInterval( () => {
                const now = new Date();
                const distance = this.end.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                    return;
                }

                const days = Math.floor((distance / this._days));
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);
                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);
                this.loaded = true;
            }, 1000);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
    .clock {
        color: #000000;
        margin : 0 1em;
        font-weight: 700;

        .icon {
            margin-right: .5em;
        }

        .text li:nth-child(even) {
            margin: 0 .2em;
        }
    }

</style>