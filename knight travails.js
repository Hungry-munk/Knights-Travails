class Move {
    constructor(move, preMove = null) {
        this.move = move;
        this.preMove = preMove;
    }

    get moves() {
        const knightMoves = [
            [1, 2],
            [2, 1],
            [-2, 1],
            [-1, 2],
            [1, -2],
            [2, -1],
            [-1, -2],
            [-2, -1],
        ];

        return (
            knightMoves
                // calculating valid positions
                .filter(
                    knightMove =>
                        this.move[0] + knightMove[0] >= 0 &&
                        this.move[0] + knightMove[0] <= 7 &&
                        this.move[1] + knightMove[1] >= 0 &&
                        this.move[1] + knightMove[1] <= 7
                )
                // adding valid positions to current position and making them instances of a new move
                .map(
                    knightMove =>
                        new Move(
                            [
                                this.move[0] + knightMove[0],
                                this.move[1] + knightMove[1],
                            ],
                            this
                        )
                )
        );
    }
}

function printPath(finalMove) {
    const path = (() => {
        let path = [];
        let currentMove = finalMove;
        while (currentMove) {
            path.push(currentMove.move);
            currentMove = currentMove.preMove;
        }
        return path;
    })();

    console.log(`==> You made it in ${path.length} moves! Here's your path:`);
    path.forEach(move => {
        console.log(move);
    });
}

export function knightMoves(originalMove, movingMove) {
    const startingMove = new Move(originalMove);
    let queue = [startingMove];

    while (queue.length) {
        const currentMove = queue.shift();
        queue = queue.concat(currentMove.moves);
        if (currentMove.move == movingMove) {
            printPath(currentMove);
            break;
        }
    }
}

export function logHi() {
    console.log("hi");
}
