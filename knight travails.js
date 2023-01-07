class Move {
    constructor(pos, prePos = null) {
        this.pos = pos;
        this.prePos = prePos;
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
                        this.pos[0] + knightMove[0] >= 0 &&
                        this.pos[0] + knightMove[0] <= 7 &&
                        this.pos[1] + knightMove[1] >= 0 &&
                        this.pos[1] + knightMove[1] <= 7
                )
                // adding valid positions to current position and making them instances of a new move
                .map(
                    knightMove =>
                        new Move(
                            this.pos[0] + knightMove[0],
                            this.pos[1] + knightMove[1]
                        )
                )
        );
    }
}

export function knightMoves(currentPos, movingPos) {
    const startingPos = new Move(currentPos);

    const queue = [startingPos];

    console.log(startingPos.moves);
}
