let hash = require('object-hash');

class Blockchain {

    constructor(){
        // Create
        this.chain =[];
        // Transaction
        this.curr_transactions =[];
    }
    addNewBlock(prevHash){
        let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.curr_transactions,
            hash: null,
            prevHash: prevHash,
        }
        // Put Hash
        this.hash = hash(block)
        // Add to Chain
        this.chain.push(block);
        this.curr_transactions = [];
        return block;
    }
    addNewTransaction(sender, recipient, amount){
        this.curr_transactions.push({sender, recipient, amount})
    }
    lastBlock(){
        return this.chain.slice()
    }
    isEmpty(){
        return this.chain.length == 0;
    }
}

module.exports = Blockchain;