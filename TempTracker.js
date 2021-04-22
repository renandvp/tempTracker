class TempTracker {
    constructor() {
        this.max = null;
        this.min = null;
        this.temps = [];
        this.avg = null;
    }
    insert(num) {
        
        let temp = Number(num);
        if(isNaN(temp) || temp == ''){
            alert("Please, insert a valid number");
            return false;
        };

        if (typeof this.min != 'number' || temp > this.max) {
            this.max = temp;
        }

        if (typeof this.min != 'number' || temp < this.min) {
            this.min = temp;
        }
        this.temps.push(temp);
        let sum = this.temps.reduce((a, b) => a + b, 0)

        this.avg = sum/this.temps.length;

        return true;
    }
    getMax() {
        let max = this.max;
        if(max == null){
            return "no temperature recorded"
        }
        return max;
    }

    getMin() {
        let min = this.min;
        if(min == null){
            return "no temperature recorded"
        }
        return min;
    }

    getAvg() {
        let avg = this.avg;
        if(avg == null){
            return "no temperature recorded"
        }
        return avg;
    }
}