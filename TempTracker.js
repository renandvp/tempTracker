class TempTracker {
    constructor(temp = null) {
        this.max = null;
        this.min = null;
        this.avg = 0;
    }
    insert(num) {
        let temp = Number(num);

        if (typeof this.min != 'number' || temp > this.max) {
            this.max = temp;
        }

        if (typeof this.min != 'number' || temp < this.min) {
            this.min = temp;
        }


        this.avg = (this.max + this.min)/2
    }
    getMax() {
        return this.max;
    }

    getMin() {
        return this.min
    }

    getAvg() {
        return this.avg;
    }
}