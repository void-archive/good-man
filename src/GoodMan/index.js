module.exports = class GoodMan { 
    constructor(...man) {
        this.man = man;
    }

    isAGoodMan() {
        this.man.forEach((man) => console.log(`${man} is indeed a good man.`));
    }
}
