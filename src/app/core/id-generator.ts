export class IdGenerator {
    constructor() {
    }

    length: number = 8;
    timestamp: any = +new Date;

    _getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generate() {
        let ts = this.timestamp.toString();
        let parts = ts.split("").reverse();
        let id: number = 0;

        for (var i = 0; i < this.length; ++i) {
            var index = this._getRandomInt(0, parts.length - 1);
            id += parts[index];
        }

        return id;
    }

}
