
class Kitty {
    constructor() {
    }
}

class KittyWorld {
    constructor() {
        this.kitties = [];
        this.timestamp = 0;
    }

    tick(timestamp) {
        const delta = timestamp - this.timestamp;
        this.timestamp = timestamp;
    }
}
