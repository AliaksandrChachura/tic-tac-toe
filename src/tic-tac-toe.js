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
        let arr = [];
        for (let i = 0; i < 3; i++) {
            for (let j =0; j <3; j++) {
                arr.push(this.matrix[i][j]);
            }
        }
        if (row.every(num => num === 'x') || row.every(num => num === 'o') || column.every(num => num === 'x') || column.every(num => num === 'o' ) || rightDiagonal.every(num => num === 'x') || rightDiagonal.every(num => num === 'o' ) || leftDiagonal.every(num => num === 'x') || leftDiagonal.every(num => num === 'o' ) || arr.every(num => num === 'x' || num === 'o' )) {
            return true;
        }
       
        else {
            return false;
        }
    }

    getWinner() {
        let row = [];
        let column = [];
        let rightDiagonal = [];
        let leftDiagonal = [];
        let winner = this.matrix[this.rowIndex][this.columnIndex];
        for (let i = 0; i < 3; i++) {
            rightDiagonal.push(this.matrix[i][i]);
            leftDiagonal.push(this.matrix[3-i-1][i]);
        }
        for (let a = 0; a < 3; a++) {
                column.push(this.matrix[a][this.columnIndex]);
                row.push(this.matrix[this.rowIndex][a]);
        }
        if (row.every(num => num === 'x') || row.every(num => num === 'o') || column.every(num => num === 'x') || column.every(num => num === 'o' ) || rightDiagonal.every(num => num === 'x') || rightDiagonal.every(num => num === 'o' ) || leftDiagonal.every(num => num === 'x') || leftDiagonal.every(num => num === 'o' ) ) {
            return winner;
        }
       
        else {
            return null;
        }
    }

    noMoreTurns() {
        let arr = [];
        for (let i = 0; i < 3; i++) {
            for (let j =0; j <3; j++) {
                arr.push(this.matrix[i][j]);
            }
        }
           if (arr.every(num => num === 'x' || num === 'o' )) {
               return true;
           }
           else {
               return false;
            }
    }


    isDraw() {
       if (this.noMoreTurns() === false || this.getWinner() !== null ) {
           return false
       }
       else {
           return true;
       }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
