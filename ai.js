importScripts("status.js");

class Gomoku3D {
  constructor() {
    this.board = [];
  }

  isValidMove(x, y, z, face) {
    return this.board.some(
      (obj) =>
        obj.x === x &&
        obj.y === y &&
        obj.z === z &&
        obj.face === face &&
        obj.player === ""
    );
  }

  makeMove(x, y, z, face, player) {
    if (this.isValidMove(x, y, z, face)) {
      this.board.forEach((obj) => {
        if (obj.x === x && obj.y === y && obj.z === z && obj.face === face) {
          obj.player = player;
        }
      });
      console.log(
        `Move made by player ${player} at (${x}, ${y}, ${z}, ${face})`
      );
      return true;
    }
    console.log(
      `Invalid move attempt by player ${player} at (${x}, ${y}, ${z}, ${face})`
    );
    return false;
  }

  undoMove(x, y, z, face) {
    this.board.forEach((obj) => {
      if (obj.x === x && obj.y === y && obj.z === z && obj.face === face) {
        obj.player = "";
      }
    });
    console.log(`Move undone at (${x}, ${y}, ${z}, ${face})`);
  }

  getAvailableMoves() {
    const moves = [];
    const piecesList = getPlayerPieces(this.board);
    if (statusCheck(5, this.board).length === 0) {
      piecesList.forEach((obj) => {
        let surroundingList = surroundingCheck(
          obj.x,
          obj.y,
          obj.z,
          obj.face,
          this.board
        );
        surroundingList.forEach((surroundingObj) => {
          if (
            this.isValidMove(
              surroundingObj.x,
              surroundingObj.y,
              surroundingObj.z,
              surroundingObj.face
            )
          ) {
            const isDuplicate = moves.some(
              (move) =>
                move.x === surroundingObj.x &&
                move.y === surroundingObj.y &&
                move.z === surroundingObj.z &&
                move.face === surroundingObj.face
            );
            if (!isDuplicate) {
              moves.push(surroundingObj);
            }
          }
        });
      });
    }
    return moves;
  }

  evaluateBoard(player) {
    let five = statusCheck(5, this.board);
    let four = statusCheck(4, this.board);
    let three = statusCheck(3, this.board);
    let two = statusCheck(2, this.board);
    let score = 0;

    // 判斷敵我
    function isOpponent(obj, player) {
      return obj.player !== player && obj.player !== "";
    }

    // 判斷空一格
    function isMiddleOpponent(obj) {
      if (obj.middleOpponent === true) {
        return true;
      } else if (obj.middleOpponent === false) {
        return false;
      } else {
        return "none";
      }
    }

    // 判斷死活
    function isAlive(obj) {
      return obj.nearby.front === false && obj.nearby.back === false;
    }

    // 判斷無效情形
    function isIneffective(obj) {
      return obj.nearby.front === true && obj.nearby.back === true;
    }

    // 評估勝利分數
    function WinScore(list, num) {
      list.forEach((obj) => {
        if (!isOpponent(obj, player)) {
          score += num;
        } else {
          score -= num;
        }
      });
    }

    // 評估相連四子分數(玩家為X，電腦為O)
    function link4PiecesScore(list, num) {
      list.forEach((obj) => {
        if (!isOpponent(obj, player)) {
          if (isMiddleOpponent(obj) === true) {
            if (isAlive(obj)) {
              //"", "O", "X", "O", "O", "O", ""
              score -= num;
            } else if (isIneffective(obj)) {
              //"X", "O", "X", "O", "O", "O", "X"
              score -= num * 10;
            } else {
              //"X", "O", "X", "O", "O", "O", ""
              score -= num;
            }
          } else if (isMiddleOpponent(obj) === false) {
            if (isAlive(obj)) {
              //"", "O", "", "O", "O", "O", ""
              score += num * 10;
            } else if (isIneffective(obj)) {
              //"X", "O", "", "O", "O", "O", "X"
              score += num / 10;
            } else {
              //"X", "O", "", "O", "O", "O", ""
              score += num;
            }
          } else {
            if (isAlive(obj)) {
              //"", "O", "O", "O", "O", "", ""
              score += num * 10;
            } else if (isIneffective(obj)) {
              //"X", "O", "O", "O", "O", "X", ""
              score -= num * 10;
            } else {
              //"X", "O", "O", "O", "O", "", ""
              score += num / 10;
            }
          }
        } else {
          if (isMiddleOpponent(obj) === true) {
            if (isAlive(obj)) {
              //"", "X", "O", "X", "X", "X", ""
              score += num * 100;
            } else if (isIneffective(obj)) {
              //"O", "X", "O", "X", "X", "X", "O"
              score += num * 100;
            } else {
              //"O", "X", "O", "X", "X", "X", ""
              score += num * 100;
            }
          } else if (isMiddleOpponent(obj) === false) {
            if (isAlive(obj)) {
              //"", "X", "", "X", "X", "X", ""
              score -= num * 100;
            } else if (isIneffective(obj)) {
              //"O", "X", "", "X", "X", "X", "O"
              score -= num * 100;
            } else {
              //"O", "X", "", "X", "X", "X", ""
              score -= num * 100;
            }
          } else {
            if (isAlive(obj)) {
              //"", "X", "X", "X", "X", "", ""
              score -= num * 100;
            } else if (isIneffective(obj)) {
              //"O", "X", "X", "X", "X", "O", ""
              score += num * 100;
            } else {
              //"O", "X", "X", "X", "X", "", ""
              score -= num * 100;
            }
          }
        }
      });
    }

    // 評估相連三子或二子分數(玩家為X，電腦為O)
    function linkPiecesScore(list, num) {
      list.forEach((obj) => {
        if (!isOpponent(obj, player)) {
          if (isMiddleOpponent(obj) === true) {
            if (isAlive(obj)) {
              //"", "O", "X", "O", "O", ""
              score -= num / 10;
            } else if (isIneffective(obj)) {
              //"X", "O", "X", "O", "O", "X"
              score -= num;
            } else {
              //"X", "O", "X", "O", "O", ""
              score -= num / 10;
            }
          } else if (isMiddleOpponent(obj) === false) {
            if (isAlive(obj)) {
              //"", "O", "", "O", "O", ""
              score += num * 10;
            } else if (isIneffective(obj)) {
              //"X", "O", "", "O", "O", "X"
              score -= num;
            } else {
              //"X", "O", "", "O", "O", ""
              score += num;
            }
          } else {
            if (isAlive(obj)) {
              //"", "O", "O", "O", ""
              score += num * 10;
            } else if (isIneffective(obj)) {
              //"X", "O", "O", "O", "X"
              score -= num;
            } else {
              //"X", "O", "O", "O", ""
              score += num;
            }
          }
        } else {
          if (isMiddleOpponent(obj) === true) {
            if (isAlive(obj)) {
              //"", "X", "O", "X", "X", ""
              score += num * 10;
            } else if (isIneffective(obj)) {
              //"O", "X", "O", "X", "X", "O"
              score -= num;
            } else {
              //"O", "X", "O", "X", "X", ""
              score -= num;
            }
          } else if (isMiddleOpponent(obj) === false) {
            if (isAlive(obj)) {
              //"", "X", "", "X", "X", ""
              score -= num * 10;
            } else if (isIneffective(obj)) {
              //"O", "X", "", "X", "X", "O"
              score += num / 10;
            } else {
              //"O", "X", "", "X", "X", ""
              score += num * 10;
            }
          } else {
            if (isAlive(obj)) {
              //"", "X", "X", "X", ""
              score -= num * 10;
            } else if (isIneffective(obj)) {
              //"O", "X", "X", "X", "O"
              score += num / 10;
            } else {
              //"O", "X", "X", "X", ""
              score += num * 10;
            }
          }
        }
      });
    }

    // 評估單一子力分數
    function singlePiecesScore(list, num) {
      let piecesList = getPlayerPieces(list);
      piecesList.forEach((obj) => {
        if (!isOpponent(obj, player)) {
          let surroundingList = surroundingCheck(
            obj.x,
            obj.y,
            obj.z,
            obj.face,
            list
          );
          surroundingList.forEach((surroundingObj) => {
            if (isOpponent(surroundingObj, player)) {
              score += num / 10;
            } else if (surroundingObj.player === "") {
              score += num;
            } else {
              score += num * 10;
            }
          });
        } else {
          let surroundingList = surroundingCheck(
            obj.x,
            obj.y,
            obj.z,
            obj.face,
            list
          );
          surroundingList.forEach((surroundingObj) => {
            if (surroundingObj.player === player) {
              score -= num / 10;
            } else if (surroundingObj.player === "") {
              score -= num;
            } else {
              score -= num * 10;
            }
          });
        }
      });
    }

    WinScore(five, Infinity);
    link4PiecesScore(four, 10000);
    linkPiecesScore(three, 1000);
    linkPiecesScore(two, 100);
    singlePiecesScore(this.board, 10);

    console.log(score);

    return score;
  }
}

class GomokuAI {
  constructor(game, player, opponent) {
    this.game = game;
    this.player = player;
    this.opponent = opponent;
  }

  alphaBeta(depth, alpha, beta, isMaximizingPlayer) {
    if (depth === 0 || this.game.getAvailableMoves().length === 0) {
      return this.game.evaluateBoard(this.player);
    }

    const moves = this.game.getAvailableMoves();
    if (isMaximizingPlayer) {
      let maxEvaluation = -Infinity;
      for (const move of moves) {
        this.game.makeMove(move.x, move.y, move.z, move.face, this.player);
        const evaluation = this.alphaBeta(depth - 1, alpha, beta, false);
        this.game.undoMove(move.x, move.y, move.z, move.face);
        maxEvaluation = Math.max(maxEvaluation, evaluation);
        alpha = Math.max(alpha, evaluation);
        if (beta <= alpha) {
          console.log(`最大化玩家走法${move}剪枝`);
          break;
        }
      }
      return maxEvaluation;
    } else {
      let minEvaluation = Infinity;
      for (const move of moves) {
        this.game.makeMove(move.x, move.y, move.z, move.face, this.opponent);
        const evaluation = this.alphaBeta(depth - 1, alpha, beta, true);
        this.game.undoMove(move.x, move.y, move.z, move.face);
        minEvaluation = Math.min(minEvaluation, evaluation);
        beta = Math.min(beta, evaluation);
        if (beta <= alpha) {
          console.log(`最小化玩家走法${move}剪枝`);
          break;
        }
      }
      return minEvaluation;
    }
  }

  findBestMove(depth) {
    let bestMove = null;
    let bestValue = -Infinity;
    const moves = this.game.getAvailableMoves();
    for (const move of moves) {
      this.game.makeMove(move.x, move.y, move.z, move.face, this.player);
      const moveValue = this.alphaBeta(depth - 1, -Infinity, Infinity, false);
      this.game.undoMove(move.x, move.y, move.z, move.face);
      console.log(
        `Move (${move.x}, ${move.y}, ${move.z}, ${move.face}) evaluated with score: ${moveValue}`
      );
      if (moveValue > bestValue) {
        bestValue = moveValue;
        bestMove = move;
      }
    }
    if (bestMove) {
      console.log(
        `最佳走法： {"x":${bestMove.x},"y":${bestMove.y},"z":${bestMove.z},"face":"${bestMove.face}"} 最佳盤面分數： ${bestValue}`
      );
    } else {
      if (getPlayerPieces(this.game.board).length === this.game.board.length) {
        let message = { type: "endgame", data: "draw" };
        self.postMessage(message);
        console.log("和局");
      } else {
        let message = { type: "endgame", data: "surrender" };
        self.postMessage(message);
        console.log("電腦認輸");
      }
      console.log("無可行走法");
    }
    return bestMove;
  }
}

// AI下棋
function AIplaying(ai, depth) {
  const startTime = performance.now();
  const bestMove = ai.findBestMove(depth);
  const endTime = performance.now();
  const duration = endTime - startTime;
  const milliseconds = parseInt((duration % 1000).toFixed(0), 10);
  const seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);
  const hours = parseInt((duration / (1000 * 60 * 60)) % 24, 10);
  const formattedTime = `${hours} 小時 ${minutes} 分 ${seconds} 秒 ${milliseconds} 毫秒`;
  console.log(`AI計算最佳選點所需時間: ${formattedTime}`);
  return bestMove;
}

// 初始化3D棋盤
const game = new Gomoku3D();
const ai = new GomokuAI(game, null, null);
let depth = null;

// 處理來自主執行緒的消息
self.onmessage = function (e) {
  console.log("從主執行緒收到的消息", e.data);
  const { type, data } = e.data;
  if (type === "board") {
    game.board = data;
  } else if (type === "status") {
    ai.player = data.player;
    ai.opponent = data.opponent;
    depth = data.difficulty;
  } else if (type === "firstmove") {
    game.makeMove(data.x, data.y, data.z, data.face, ai.player);
  } else if (type === "rollback") {
    game.undoMove(data.x, data.y, data.z, data.face);
  } else {
    game.makeMove(data.x, data.y, data.z, data.face, ai.opponent);
    let bestMove = AIplaying(ai, depth);
    if (bestMove) {
      game.makeMove(
        bestMove.x,
        bestMove.y,
        bestMove.z,
        bestMove.face,
        ai.player
      );
      let message = { type: "coordinates", data: bestMove };
      self.postMessage(message);
    }
  }
};
