class TicTacToe {
    constructor() {
        this.matrix =  [[null, null, null], [null, null, null], [null, null, null]];
        this.symbol = 'x';
        this.rowIndex;
        this.columnIndex;
    }

    getCurrentPlayerSymbol() {

        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) { 
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;     
        if (this.matrix [this.rowIndex][this.columnIndex] === null) {
            this.matrix [this.rowIndex][this.columnIndex] = this.symbol;
            if (this.symbol === 'x') {
                return this.symbol = 'o';
            }
            else {
                return this.symbol = 'x';
            }
        }
        else {
            return this.symbol;
        }
    }

    isFinished() {
        let row = [];
        let column = [];
        let rightDiagonal = [];
        let leftDiagonal = [];
        let cI = +this.columnIndex;
        let rI = +this.rowIndex;
        for (let i = 0; i < 3; i++) {
            rightDiagonal.push(this.matrix[i][i]);
            leftDiagonal.push(this.matrix[3-i-1][i]);
        }
        for (let a = 0; a < 3; a++) {
                column.push(this.matrix[a][cI]);
                row.push(this.matrix[rI][a]);
        }
        if (row.every((num) => num === this.symbol) || column.every((num) => num === this.symbol) || rightDiagonal.every((num) => num === this.symbol) || leftDiagonal.every((num) => num === this.symbol)) {
            return true;
        }
       
        else {
            return false;
        }
    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
