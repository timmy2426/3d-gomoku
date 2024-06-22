let Xaxis_check_list = [
  { x: 0, y: 3, z: 0, face: "right" },
  { x: 0, y: 3, z: 1, face: "right" },
  { x: 0, y: 3, z: 2, face: "right" },
  { x: 0, y: 3, z: 3, face: "right" },
  { x: 0, y: 3, z: 3, face: "bottom" },
  { x: 0, y: 2, z: 3, face: "bottom" },
  { x: 0, y: 1, z: 3, face: "bottom" },
  { x: 0, y: 0, z: 3, face: "bottom" },
  { x: 0, y: 0, z: 3, face: "left" },
  { x: 0, y: 0, z: 2, face: "left" },
  { x: 0, y: 0, z: 1, face: "left" },
  { x: 0, y: 0, z: 0, face: "left" },
  { x: 0, y: 0, z: 0, face: "top" },
  { x: 0, y: 1, z: 0, face: "top" },
  { x: 0, y: 2, z: 0, face: "top" },
  { x: 0, y: 3, z: 0, face: "top" },
];
let Yaxis_check_list = [
  { x: 0, y: 0, z: 0, face: "back" },
  { x: 0, y: 0, z: 1, face: "back" },
  { x: 0, y: 0, z: 2, face: "back" },
  { x: 0, y: 0, z: 3, face: "back" },
  { x: 0, y: 0, z: 3, face: "bottom" },
  { x: 1, y: 0, z: 3, face: "bottom" },
  { x: 2, y: 0, z: 3, face: "bottom" },
  { x: 3, y: 0, z: 3, face: "bottom" },
  { x: 3, y: 0, z: 3, face: "front" },
  { x: 3, y: 0, z: 2, face: "front" },
  { x: 3, y: 0, z: 1, face: "front" },
  { x: 3, y: 0, z: 0, face: "front" },
  { x: 3, y: 0, z: 0, face: "top" },
  { x: 2, y: 0, z: 0, face: "top" },
  { x: 1, y: 0, z: 0, face: "top" },
  { x: 0, y: 0, z: 0, face: "top" },
];
let Zaxis_check_list = [
  { x: 0, y: 0, z: 0, face: "back" },
  { x: 0, y: 1, z: 0, face: "back" },
  { x: 0, y: 2, z: 0, face: "back" },
  { x: 0, y: 3, z: 0, face: "back" },
  { x: 0, y: 3, z: 0, face: "right" },
  { x: 1, y: 3, z: 0, face: "right" },
  { x: 2, y: 3, z: 0, face: "right" },
  { x: 3, y: 3, z: 0, face: "right" },
  { x: 3, y: 3, z: 0, face: "front" },
  { x: 3, y: 2, z: 0, face: "front" },
  { x: 3, y: 1, z: 0, face: "front" },
  { x: 3, y: 0, z: 0, face: "front" },
  { x: 3, y: 0, z: 0, face: "left" },
  { x: 2, y: 0, z: 0, face: "left" },
  { x: 1, y: 0, z: 0, face: "left" },
  { x: 0, y: 0, z: 0, face: "left" },
];
let diagonal_check_list0 = [
  { x: 3, y: 0, z: 0, face: "front" },
  { x: 3, y: 1, z: 0, face: "top" },
  { x: 2, y: 2, z: 0, face: "top" },
  { x: 1, y: 3, z: 0, face: "top" },
  { x: 0, y: 3, z: 0, face: "right" },
  { x: 0, y: 3, z: 1, face: "back" },
  { x: 0, y: 2, z: 2, face: "back" },
  { x: 0, y: 1, z: 3, face: "back" },
  { x: 0, y: 0, z: 3, face: "bottom" },
  { x: 1, y: 0, z: 3, face: "left" },
  { x: 2, y: 0, z: 2, face: "left" },
  { x: 3, y: 0, z: 1, face: "left" },
];
let diagonal_check_list1 = [
  { x: 3, y: 0, z: 1, face: "front" },
  { x: 3, y: 1, z: 0, face: "front" },
  { x: 3, y: 2, z: 0, face: "top" },
  { x: 2, y: 3, z: 0, face: "top" },
  { x: 1, y: 3, z: 0, face: "right" },
  { x: 0, y: 3, z: 1, face: "right" },
  { x: 0, y: 3, z: 2, face: "back" },
  { x: 0, y: 2, z: 3, face: "back" },
  { x: 0, y: 1, z: 3, face: "bottom" },
  { x: 1, y: 0, z: 3, face: "bottom" },
  { x: 2, y: 0, z: 3, face: "left" },
  { x: 3, y: 0, z: 2, face: "left" },
];
let diagonal_check_list2 = [
  { x: 3, y: 0, z: 2, face: "front" },
  { x: 3, y: 1, z: 1, face: "front" },
  { x: 3, y: 2, z: 0, face: "front" },
  { x: 3, y: 3, z: 0, face: "top" },
  { x: 2, y: 3, z: 0, face: "right" },
  { x: 1, y: 3, z: 1, face: "right" },
  { x: 0, y: 3, z: 2, face: "right" },
  { x: 0, y: 3, z: 3, face: "back" },
  { x: 0, y: 2, z: 3, face: "bottom" },
  { x: 1, y: 1, z: 3, face: "bottom" },
  { x: 2, y: 0, z: 3, face: "bottom" },
  { x: 3, y: 0, z: 3, face: "left" },
];
let diagonal_check_list3 = [
  { x: 3, y: 1, z: 3, face: "front" },
  { x: 3, y: 2, z: 2, face: "front" },
  { x: 3, y: 3, z: 1, face: "front" },
  { x: 3, y: 3, z: 0, face: "right" },
  { x: 2, y: 3, z: 0, face: "top" },
  { x: 1, y: 2, z: 0, face: "top" },
  { x: 0, y: 1, z: 0, face: "top" },
  { x: 0, y: 0, z: 0, face: "back" },
  { x: 0, y: 0, z: 1, face: "left" },
  { x: 1, y: 0, z: 2, face: "left" },
  { x: 2, y: 0, z: 3, face: "left" },
  { x: 3, y: 0, z: 3, face: "bottom" },
];
let diagonal_check_list4 = [
  { x: 3, y: 2, z: 3, face: "front" },
  { x: 3, y: 3, z: 2, face: "front" },
  { x: 3, y: 3, z: 1, face: "right" },
  { x: 2, y: 3, z: 0, face: "right" },
  { x: 1, y: 3, z: 0, face: "top" },
  { x: 0, y: 2, z: 0, face: "top" },
  { x: 0, y: 1, z: 0, face: "back" },
  { x: 0, y: 0, z: 1, face: "back" },
  { x: 0, y: 0, z: 2, face: "left" },
  { x: 1, y: 0, z: 3, face: "left" },
  { x: 2, y: 0, z: 3, face: "bottom" },
  { x: 3, y: 1, z: 3, face: "bottom" },
];
let diagonal_check_list5 = [
  { x: 3, y: 3, z: 3, face: "front" },
  { x: 3, y: 3, z: 2, face: "right" },
  { x: 2, y: 3, z: 1, face: "right" },
  { x: 1, y: 3, z: 0, face: "right" },
  { x: 0, y: 3, z: 0, face: "top" },
  { x: 0, y: 2, z: 0, face: "back" },
  { x: 0, y: 1, z: 1, face: "back" },
  { x: 0, y: 0, z: 2, face: "back" },
  { x: 0, y: 0, z: 3, face: "left" },
  { x: 1, y: 0, z: 3, face: "bottom" },
  { x: 2, y: 1, z: 3, face: "bottom" },
  { x: 3, y: 2, z: 3, face: "bottom" },
];
let diagonal_check_list6 = [
  { x: 3, y: 0, z: 3, face: "front" },
  { x: 3, y: 1, z: 3, face: "bottom" },
  { x: 2, y: 2, z: 3, face: "bottom" },
  { x: 1, y: 3, z: 3, face: "bottom" },
  { x: 0, y: 3, z: 3, face: "right" },
  { x: 0, y: 3, z: 2, face: "back" },
  { x: 0, y: 2, z: 1, face: "back" },
  { x: 0, y: 1, z: 0, face: "back" },
  { x: 0, y: 0, z: 0, face: "top" },
  { x: 1, y: 0, z: 0, face: "left" },
  { x: 2, y: 0, z: 1, face: "left" },
  { x: 3, y: 0, z: 2, face: "left" },
];
let diagonal_check_list7 = [
  { x: 3, y: 0, z: 2, face: "front" },
  { x: 3, y: 1, z: 3, face: "front" },
  { x: 3, y: 2, z: 3, face: "bottom" },
  { x: 2, y: 3, z: 3, face: "bottom" },
  { x: 1, y: 3, z: 3, face: "right" },
  { x: 0, y: 3, z: 2, face: "right" },
  { x: 0, y: 3, z: 1, face: "back" },
  { x: 0, y: 2, z: 0, face: "back" },
  { x: 0, y: 1, z: 0, face: "top" },
  { x: 1, y: 0, z: 0, face: "top" },
  { x: 2, y: 0, z: 0, face: "left" },
  { x: 3, y: 0, z: 1, face: "left" },
];
let diagonal_check_list8 = [
  { x: 3, y: 0, z: 1, face: "front" },
  { x: 3, y: 1, z: 2, face: "front" },
  { x: 3, y: 2, z: 3, face: "front" },
  { x: 3, y: 3, z: 3, face: "bottom" },
  { x: 2, y: 3, z: 3, face: "right" },
  { x: 1, y: 3, z: 2, face: "right" },
  { x: 0, y: 3, z: 1, face: "right" },
  { x: 0, y: 3, z: 0, face: "back" },
  { x: 0, y: 2, z: 0, face: "top" },
  { x: 1, y: 1, z: 0, face: "top" },
  { x: 2, y: 0, z: 0, face: "top" },
  { x: 3, y: 0, z: 0, face: "left" },
];
let diagonal_check_list9 = [
  { x: 3, y: 1, z: 0, face: "front" },
  { x: 3, y: 2, z: 1, face: "front" },
  { x: 3, y: 3, z: 2, face: "front" },
  { x: 3, y: 3, z: 3, face: "right" },
  { x: 2, y: 3, z: 3, face: "bottom" },
  { x: 1, y: 2, z: 3, face: "bottom" },
  { x: 0, y: 1, z: 3, face: "bottom" },
  { x: 0, y: 0, z: 3, face: "back" },
  { x: 0, y: 0, z: 2, face: "left" },
  { x: 1, y: 0, z: 1, face: "left" },
  { x: 2, y: 0, z: 0, face: "left" },
  { x: 3, y: 0, z: 0, face: "top" },
];
let diagonal_check_list10 = [
  { x: 3, y: 2, z: 0, face: "front" },
  { x: 3, y: 3, z: 1, face: "front" },
  { x: 3, y: 3, z: 2, face: "right" },
  { x: 2, y: 3, z: 3, face: "right" },
  { x: 1, y: 3, z: 3, face: "bottom" },
  { x: 0, y: 2, z: 3, face: "bottom" },
  { x: 0, y: 1, z: 3, face: "back" },
  { x: 0, y: 0, z: 2, face: "back" },
  { x: 0, y: 0, z: 1, face: "left" },
  { x: 1, y: 0, z: 0, face: "left" },
  { x: 2, y: 0, z: 0, face: "top" },
  { x: 3, y: 1, z: 0, face: "top" },
];
let diagonal_check_list11 = [
  { x: 3, y: 3, z: 0, face: "front" },
  { x: 3, y: 3, z: 1, face: "right" },
  { x: 2, y: 3, z: 2, face: "right" },
  { x: 1, y: 3, z: 3, face: "right" },
  { x: 0, y: 3, z: 3, face: "bottom" },
  { x: 0, y: 2, z: 3, face: "back" },
  { x: 0, y: 1, z: 2, face: "back" },
  { x: 0, y: 0, z: 1, face: "back" },
  { x: 0, y: 0, z: 0, face: "left" },
  { x: 1, y: 0, z: 0, face: "top" },
  { x: 2, y: 1, z: 0, face: "top" },
  { x: 3, y: 2, z: 0, face: "top" },
];
const patterns = {
  2: [
    ["X", "", "X"],
    ["O", "", "O"],
    ["X", "O", "X"],
    ["O", "X", "O"],
  ],
  3: [
    ["X", "", "X", "X"],
    ["X", "X", "", "X"],
    ["O", "", "O", "O"],
    ["O", "O", "", "O"],
    ["X", "O", "X", "X"],
    ["X", "X", "O", "X"],
    ["O", "X", "O", "O"],
    ["O", "O", "X", "O"],
  ],
  4: [
    ["X", "X", "X", "", "X"],
    ["X", "X", "", "X", "X"],
    ["X", "", "X", "X", "X"],
    ["O", "O", "O", "", "O"],
    ["O", "O", "", "O", "O"],
    ["O", "", "O", "O", "O"],
    ["X", "X", "X", "O", "X"],
    ["X", "X", "O", "X", "X"],
    ["X", "O", "X", "X", "X"],
    ["O", "O", "O", "X", "O"],
    ["O", "O", "X", "O", "O"],
    ["O", "X", "O", "O", "O"],
  ],
};

let testBoardX = [
  { x: 0, y: 3, z: 0, face: "right", player: "O" },
  { x: 0, y: 3, z: 1, face: "right", player: "X" },
  { x: 0, y: 3, z: 2, face: "right", player: "" },
  { x: 0, y: 3, z: 3, face: "right", player: "" },
  { x: 0, y: 3, z: 3, face: "bottom", player: "" },
  { x: 0, y: 2, z: 3, face: "bottom", player: "O" },
  { x: 0, y: 1, z: 3, face: "bottom", player: "O" },
  { x: 0, y: 0, z: 3, face: "bottom", player: "X" },
  { x: 0, y: 0, z: 3, face: "left", player: "X" },
  { x: 0, y: 0, z: 2, face: "left", player: "X" },
  { x: 0, y: 0, z: 1, face: "left", player: "" },
  { x: 0, y: 0, z: 0, face: "left", player: "" },
  { x: 0, y: 0, z: 0, face: "top", player: "" },
  { x: 0, y: 1, z: 0, face: "top", player: "O" },
  { x: 0, y: 2, z: 0, face: "top", player: "O" },
  { x: 0, y: 3, z: 0, face: "top", player: "" },
];
let testBoardY = [
  { x: 0, y: 0, z: 0, face: "back", player: "O" },
  { x: 0, y: 0, z: 1, face: "back", player: "O" },
  { x: 0, y: 0, z: 2, face: "back", player: "" },
  { x: 0, y: 0, z: 3, face: "back", player: "" },
  { x: 0, y: 0, z: 3, face: "bottom", player: "" },
  { x: 1, y: 0, z: 3, face: "bottom", player: "" },
  { x: 2, y: 0, z: 3, face: "bottom", player: "" },
  { x: 3, y: 0, z: 3, face: "bottom", player: "" },
  { x: 3, y: 0, z: 3, face: "front", player: "" },
  { x: 3, y: 0, z: 2, face: "front", player: "" },
  { x: 3, y: 0, z: 1, face: "front", player: "O" },
  { x: 3, y: 0, z: 0, face: "front", player: "X" },
  { x: 3, y: 0, z: 0, face: "top", player: "X" },
  { x: 2, y: 0, z: 0, face: "top", player: "" },
  { x: 1, y: 0, z: 0, face: "top", player: "X" },
  { x: 0, y: 0, z: 0, face: "top", player: "O" },
];
let testBoardZ = [
  { x: 0, y: 0, z: 0, face: "back", player: "X" },
  { x: 0, y: 1, z: 0, face: "back", player: "" },
  { x: 0, y: 2, z: 0, face: "back", player: "" },
  { x: 0, y: 3, z: 0, face: "back", player: "" },
  { x: 0, y: 3, z: 0, face: "right", player: "" },
  { x: 1, y: 3, z: 0, face: "right", player: "X" },
  { x: 2, y: 3, z: 0, face: "right", player: "" },
  { x: 3, y: 3, z: 0, face: "right", player: "O" },
  { x: 3, y: 3, z: 0, face: "front", player: "X" },
  { x: 3, y: 2, z: 0, face: "front", player: "X" },
  { x: 3, y: 1, z: 0, face: "front", player: "O" },
  { x: 3, y: 0, z: 0, face: "front", player: "O" },
  { x: 3, y: 0, z: 0, face: "left", player: "" },
  { x: 2, y: 0, z: 0, face: "left", player: "O" },
  { x: 1, y: 0, z: 0, face: "left", player: "X" },
  { x: 0, y: 0, z: 0, face: "left", player: "X" },
];
let testBoardDi = [
  { x: 3, y: 0, z: 0, face: "front", player: "X" },
  { x: 3, y: 1, z: 0, face: "top", player: "X" },
  { x: 2, y: 2, z: 0, face: "top", player: "X" },
  { x: 1, y: 3, z: 0, face: "top", player: "X" },
  { x: 0, y: 3, z: 0, face: "right", player: "" },
  { x: 0, y: 3, z: 1, face: "back", player: "X" },
  { x: 0, y: 2, z: 2, face: "back", player: "" },
  { x: 0, y: 1, z: 3, face: "back", player: "" },
  { x: 0, y: 0, z: 3, face: "bottom", player: "O" },
  { x: 1, y: 0, z: 3, face: "left", player: "" },
  { x: 2, y: 0, z: 2, face: "left", player: "O" },
  { x: 3, y: 0, z: 1, face: "left", player: "X" },
];

// 生成棋盤列表
function generateBoardList(open = false) {
  if (open !== true) return;
  const board = [];
  let cube = document.querySelector(`.cube`);
  let cells = cube.querySelectorAll("div");
  cells.forEach((cell) => {
    let data = cell.dataset.coordinates;
    if (data !== undefined) {
      data = JSON.parse(data);
      data.player = cell.textContent;
      board.push(data);
    }
  });
  return board;
}
let testBoardlist = generateBoardList();

// 檢查清單正確性
function list_correctnessCheck(list = []) {
  if (list.length === 0) return;
  for (let i = 0; i < list.length; i++) {
    let cells = document.querySelector(
      `.face.${list[i].face} div[data-coordinates='{"x":${list[i].x},"y":${list[i].y},"z":${list[i].z},"face":"${list[i].face}"}']`
    );
    try {
      cells.textContent = `${i}`;
    } catch (e) {
      console.log(
        `error cell: {"x":${list[i].x},"y":${list[i].y},"z":${list[i].z},"face":"${list[i].face}"}`
      );
    }
  }
}
list_correctnessCheck();

// 檢查周圍正確性
function surrounding_correctnessCheck(x, y, z, face, board = []) {
  if (board.length === 0) return;
  let output = surroundingCheck(x, y, z, face, board);
  output.forEach((obj) => {
    let cells = document.querySelector(
      `.face.${obj.face} div[data-coordinates='{"x":${obj.x},"y":${obj.y},"z":${obj.z},"face":"${obj.face}"}']`
    );
    try {
      cells.textContent = "@";
    } catch (e) {
      console.log(
        `error cell: {"x":${obj.x},"y":${obj.y},"z":${obj.z},"face":"${obj.face}"}`
      );
    }
    console.log(obj);
  });
}
surrounding_correctnessCheck(3, 1, 1, "front", []);

// 獲取真實棋盤格子
function getCell(x, y, z, face) {
  const cell = document.querySelector(
    `.face.${face} div[data-coordinates='{"x":${x},"y":${y},"z":${z},"face":"${face}"}']`
  );
  let item = { x: x, y: y, z: z, face: face, player: cell.textContent };
  return item;
}

// 獲取模擬棋盤格子
function getBoardCell(x, y, z, face, board) {
  const foundItem = board.find(
    (obj) => obj.x === x && obj.y === y && obj.z === z && obj.face === face
  );
  if (foundItem) {
    let player = foundItem.player;
    let item = { x: x, y: y, z: z, face: face, player: player };
    return item;
  }
}

// 獲取雙方落子座標
function getPlayerPieces(board) {
  let piecesList = [];
  board.forEach((obj) => {
    if (obj.player !== "") {
      piecesList.push(obj);
    }
  });
  return piecesList;
}

// 檢查旁邊是否為對手棋子
function nearbyOpponent(x, y, z, face, player, board) {
  let cell = null;
  if (board.length === 0) {
    cell = getCell(x, y, z, face);
  } else {
    cell = getBoardCell(x, y, z, face, board);
  }
  let type = cell.player;
  return type !== "" && type !== player;
}

// 檢查空一格相鄰
function oneSpaceCheck(length, targetCells_list, pattern_list) {
  const selectedPatterns = patterns[length] || null;
  if (selectedPatterns) {
    pattern_list.splice(-length + 1);
    let pattern_correspond = [];
    let type = [];
    for (const array of pattern_list) {
      type.push(array[1]);
    }
    let coor = [];
    for (const array of pattern_list) {
      coor.push(array[0]);
    }
    const n = type.length;

    function checkPattern(start, pattern, nearby) {
      const length = pattern.length;
      for (let i = 0; i < length; i++) {
        if (type[(start + i) % n] !== pattern[i]) {
          return false;
        }
      }
      if (
        type[(start - 1) % n] !== "" &&
        type[(start - 1) % n] !== type[start]
      ) {
        nearby.front = true;
      }
      if (
        type[(start + length) % n] !== "" &&
        type[(start + length) % n] !== type[start]
      ) {
        nearby.back = true;
      }
      return true;
    }

    for (const pattern of selectedPatterns) {
      const player = pattern[0];
      const opponent = player === "X" ? "O" : "X";
      for (let i = 0; i < n; i++) {
        let nearby = { front: false, back: false };
        let middleOpponent = false;
        if (checkPattern(i, pattern, nearby)) {
          const emptyIndex = pattern.indexOf("");
          const opponentIndex = pattern.indexOf(opponent);
          if (opponentIndex < 0) {
            pattern_correspond.push({
              coor: (i + emptyIndex) % n,
              type: player,
              nearby: nearby,
              middleOpponent: middleOpponent,
            });
          } else {
            middleOpponent = true;
            pattern_correspond.push({
              coor: (i + opponentIndex) % n,
              type: player,
              nearby: nearby,
              middleOpponent: middleOpponent,
            });
          }
        }
      }
    }
    for (const obj of pattern_correspond) {
      let coordinates = coor[obj.coor];
      let player = obj.type;
      let nearby = obj.nearby;
      let middleOpponent = obj.middleOpponent;
      coordinates.player = player;
      coordinates.nearby = nearby;
      coordinates.middleOpponent = middleOpponent;
      targetCells_list.push(coordinates);
    }
  }
}

// 檢查X軸相鄰
function XaxisCheck(length, board = []) {
  let targetCells_list = [];

  for (let x = 0; x < 4; x++) {
    let count = 0;
    let prevType = null;
    let pattern_list = [];

    for (let i = 0; i < Xaxis_check_list.length + length - 1; i++) {
      let adjustedIndex = i % Xaxis_check_list.length;
      let coordinates = Xaxis_check_list[adjustedIndex];
      let cell = null;

      if (board.length === 0) {
        cell = getCell(x, coordinates.y, coordinates.z, coordinates.face);
      } else {
        cell = getBoardCell(
          x,
          coordinates.y,
          coordinates.z,
          coordinates.face,
          board
        );
      }

      if (cell) {
        let currentType = cell.player;
        delete cell.player;
        pattern_list.push([cell, currentType]);

        if (currentType === prevType && currentType !== "") {
          count++;
        } else {
          count = 1;
          prevType = currentType;
        }

        if (count === length) {
          let coordinates_front =
            Xaxis_check_list[
              (adjustedIndex - length + Xaxis_check_list.length) %
                Xaxis_check_list.length
            ];
          let coordinates_back =
            Xaxis_check_list[(adjustedIndex + 1) % Xaxis_check_list.length];
          let targetCells_front = {
            x: x,
            y: coordinates_front.y,
            z: coordinates_front.z,
            face: coordinates_front.face,
            player: prevType,
            nearby: {
              front: nearbyOpponent(
                x,
                coordinates_front.y,
                coordinates_front.z,
                coordinates_front.face,
                prevType,
                board
              ),
              back: nearbyOpponent(
                x,
                coordinates_back.y,
                coordinates_back.z,
                coordinates_back.face,
                prevType,
                board
              ),
            },
          };
          let targetCells_back = {
            x: x,
            y: coordinates_back.y,
            z: coordinates_back.z,
            face: coordinates_back.face,
            player: prevType,
            nearby: {
              front: nearbyOpponent(
                x,
                coordinates_front.y,
                coordinates_front.z,
                coordinates_front.face,
                prevType,
                board
              ),
              back: nearbyOpponent(
                x,
                coordinates_back.y,
                coordinates_back.z,
                coordinates_back.face,
                prevType,
                board
              ),
            },
          };
          targetCells_list.push(targetCells_front);
          targetCells_list.push(targetCells_back);
          count = count - 1;
        }
      } else {
        // 重置計數器
        count = 0;
        prevType = null;
      }
    }

    // 空一格相鄰
    oneSpaceCheck(length, targetCells_list, pattern_list);
  }
  /* console.log("X軸最終輸出：");
  targetCells_list.forEach((item) => {
    console.log(item);
  }); */
  return targetCells_list;
}

// 檢查Y軸相鄰
function YaxisCheck(length, board = []) {
  let targetCells_list = [];

  for (let y = 0; y < 4; y++) {
    let count = 0;
    let prevType = null;
    let pattern_list = [];

    for (let i = 0; i < Yaxis_check_list.length + length - 1; i++) {
      let adjustedIndex = i % Yaxis_check_list.length;
      let coordinates = Yaxis_check_list[adjustedIndex];
      let cell = null;

      if (board.length === 0) {
        cell = getCell(coordinates.x, y, coordinates.z, coordinates.face);
      } else {
        cell = getBoardCell(
          coordinates.x,
          y,
          coordinates.z,
          coordinates.face,
          board
        );
      }

      if (cell) {
        let currentType = cell.player;
        delete cell.player;
        pattern_list.push([cell, currentType]);

        if (currentType === prevType && currentType !== "") {
          count++;
        } else {
          count = 1;
          prevType = currentType;
        }

        if (count === length) {
          let coordinates_front =
            Yaxis_check_list[
              (adjustedIndex - length + Yaxis_check_list.length) %
                Yaxis_check_list.length
            ];
          let coordinates_back =
            Yaxis_check_list[(adjustedIndex + 1) % Yaxis_check_list.length];
          let targetCells_front = {
            x: coordinates_front.x,
            y: y,
            z: coordinates_front.z,
            face: coordinates_front.face,
            player: prevType,
            nearby: {
              front: nearbyOpponent(
                coordinates_front.x,
                y,
                coordinates_front.z,
                coordinates_front.face,
                prevType,
                board
              ),
              back: nearbyOpponent(
                coordinates_back.x,
                y,
                coordinates_back.z,
                coordinates_back.face,
                prevType,
                board
              ),
            },
          };
          let targetCells_back = {
            x: coordinates_back.x,
            y: y,
            z: coordinates_back.z,
            face: coordinates_back.face,
            player: prevType,
            nearby: {
              front: nearbyOpponent(
                coordinates_front.x,
                y,
                coordinates_front.z,
                coordinates_front.face,
                prevType,
                board
              ),
              back: nearbyOpponent(
                coordinates_back.x,
                y,
                coordinates_back.z,
                coordinates_back.face,
                prevType,
                board
              ),
            },
          };
          targetCells_list.push(targetCells_front);
          targetCells_list.push(targetCells_back);
          count = count - 1;
        }
      } else {
        // 重置計數器
        count = 0;
        prevType = null;
      }
    }

    // 空一格相鄰
    oneSpaceCheck(length, targetCells_list, pattern_list);
  }
  /* console.log("Y軸最終輸出：");
  targetCells_list.forEach((item) => {
    console.log(item);
  }); */
  return targetCells_list;
}

// 檢查Z軸相鄰
function ZaxisCheck(length, board = []) {
  let targetCells_list = [];

  for (let z = 0; z < 4; z++) {
    let count = 0;
    let prevType = null;
    let pattern_list = [];

    for (let i = 0; i < Zaxis_check_list.length + length - 1; i++) {
      let adjustedIndex = i % Zaxis_check_list.length;
      let coordinates = Zaxis_check_list[adjustedIndex];
      let cell = null;

      if (board.length === 0) {
        cell = getCell(coordinates.x, coordinates.y, z, coordinates.face);
      } else {
        cell = getBoardCell(
          coordinates.x,
          coordinates.y,
          z,
          coordinates.face,
          board
        );
      }
      if (cell) {
        let currentType = cell.player;
        delete cell.player;
        pattern_list.push([cell, currentType]);

        if (currentType === prevType && currentType !== "") {
          count++;
        } else {
          count = 1;
          prevType = currentType;
        }

        if (count === length) {
          let coordinates_front =
            Zaxis_check_list[
              (adjustedIndex - length + Zaxis_check_list.length) %
                Zaxis_check_list.length
            ];
          let coordinates_back =
            Zaxis_check_list[(adjustedIndex + 1) % Zaxis_check_list.length];
          let targetCells_front = {
            x: coordinates_front.x,
            y: coordinates_front.y,
            z: z,
            face: coordinates_front.face,
            player: prevType,
            nearby: {
              front: nearbyOpponent(
                coordinates_front.x,
                coordinates_front.y,
                z,
                coordinates_front.face,
                prevType,
                board
              ),
              back: nearbyOpponent(
                coordinates_back.x,
                coordinates_back.y,
                z,
                coordinates_back.face,
                prevType,
                board
              ),
            },
          };
          let targetCells_back = {
            x: coordinates_back.x,
            y: coordinates_back.y,
            z: z,
            face: coordinates_back.face,
            player: prevType,
            nearby: {
              front: nearbyOpponent(
                coordinates_front.x,
                coordinates_front.y,
                z,
                coordinates_front.face,
                prevType,
                board
              ),
              back: nearbyOpponent(
                coordinates_back.x,
                coordinates_back.y,
                z,
                coordinates_back.face,
                prevType,
                board
              ),
            },
          };
          targetCells_list.push(targetCells_front);
          targetCells_list.push(targetCells_back);
          count = count - 1;
        }
      } else {
        // 重置計數器
        count = 0;
        prevType = null;
      }
    }

    // 空一格相鄰
    oneSpaceCheck(length, targetCells_list, pattern_list);
  }
  /* console.log("Z軸最終輸出：");
  targetCells_list.forEach((item) => {
    console.log(item);
  }); */
  return targetCells_list;
}

// 檢查對角相鄰
function diagonalCheck(length, board = []) {
  let targetCells_list = [];

  for (let n = 0; n < 12; n++) {
    let count = 0;
    let prevType = null;
    let pattern_list = [];
    let listName = `diagonal_check_list${n}`;
    let diagonal_check_list = eval(listName);

    for (let i = 0; i < diagonal_check_list.length + length - 1; i++) {
      let adjustedIndex = i % diagonal_check_list.length;
      let coordinates = diagonal_check_list[adjustedIndex];
      let cell = null;

      if (board.length === 0) {
        cell = getCell(
          coordinates.x,
          coordinates.y,
          coordinates.z,
          coordinates.face
        );
      } else {
        cell = getBoardCell(
          coordinates.x,
          coordinates.y,
          coordinates.z,
          coordinates.face,
          board
        );
      }

      if (cell) {
        let currentType = cell.player;
        delete cell.player;
        pattern_list.push([cell, currentType]);

        if (currentType === prevType && currentType !== "") {
          count++;
        } else {
          count = 1;
          prevType = currentType;
        }

        if (count === length) {
          let coordinates_front =
            diagonal_check_list[
              (adjustedIndex - length + diagonal_check_list.length) %
                diagonal_check_list.length
            ];
          let coordinates_back =
            diagonal_check_list[
              (adjustedIndex + 1) % diagonal_check_list.length
            ];
          let targetCells_front = {
            x: coordinates_front.x,
            y: coordinates_front.y,
            z: coordinates_front.z,
            face: coordinates_front.face,
            player: prevType,
            nearby: {
              front: nearbyOpponent(
                coordinates_front.x,
                coordinates_front.y,
                coordinates_front.z,
                coordinates_front.face,
                prevType,
                board
              ),
              back: nearbyOpponent(
                coordinates_back.x,
                coordinates_back.y,
                coordinates_back.z,
                coordinates_back.face,
                prevType,
                board
              ),
            },
          };
          let targetCells_back = {
            x: coordinates_back.x,
            y: coordinates_back.y,
            z: coordinates_back.z,
            face: coordinates_back.face,
            player: prevType,
            nearby: {
              front: nearbyOpponent(
                coordinates_front.x,
                coordinates_front.y,
                coordinates_front.z,
                coordinates_front.face,
                prevType,
                board
              ),
              back: nearbyOpponent(
                coordinates_back.x,
                coordinates_back.y,
                coordinates_back.z,
                coordinates_back.face,
                prevType,
                board
              ),
            },
          };
          targetCells_list.push(targetCells_front);
          targetCells_list.push(targetCells_back);
          count = count - 1;
        }
      } else {
        // 重置計數器
        count = 0;
        prevType = null;
      }
    }

    // 空一格相鄰
    oneSpaceCheck(length, targetCells_list, pattern_list);
  }
  /* console.log("對角最終輸出：");
  targetCells_list.forEach((item) => {
    console.log(item);
  }); */
  return targetCells_list;
}

// 檢查水平、垂直、對角相鄰
function statusCheck(length, board = []) {
  let Xaxis = [];
  let Yaxis = [];
  let Zaxis = [];
  let diagonal = [];
  let result = [];
  Xaxis = XaxisCheck(length, board);
  Yaxis = YaxisCheck(length, board);
  Zaxis = ZaxisCheck(length, board);
  diagonal = diagonalCheck(length, board);
  result = [...Xaxis, ...Yaxis, ...Zaxis, ...diagonal];

  /* console.log("最終輸出：");
  result.forEach((item) => {
    console.log(item);
  }); */
  return result;
}

// 檢查周圍相鄰
function surroundingCheck(x, y, z, face, board) {
  const faces = ["front", "back", "left", "right", "top", "bottom"];
  let maybe = [];
  for (let i = 0; i < faces.length; i++) {
    for (let nx = -1; nx < 2; nx++) {
      for (let ny = -1; ny < 2; ny++) {
        for (let nz = -1; nz < 2; nz++) {
          let obj = { x: x + nx, y: y + ny, z: z + nz, face: faces[i] };
          if (
            // 排除輸入座標
            (x === obj.x && y === obj.y && z === obj.z && face === obj.face) ||
            // 若座標不位於邊界，排除其餘面
            (x !== 0 && x !== 3 && y !== 0 && y !== 3 && face !== obj.face) ||
            (z !== 0 && z !== 3 && y !== 0 && y !== 3 && face !== obj.face) ||
            (x !== 0 && x !== 3 && z !== 0 && z !== 3 && face !== obj.face) ||
            // 排除座標面的相對面
            (face === "front" && obj.face === "back") ||
            (face === "back" && obj.face === "front") ||
            (face === "left" && obj.face === "right") ||
            (face === "right" && obj.face === "left") ||
            (face === "top" && obj.face === "bottom") ||
            (face === "bottom" && obj.face === "top") ||
            // 排除非座標面且不與座標面相鄰
            (face === "front" && obj.face !== "front" && obj.x !== x) ||
            (face === "back" && obj.face !== "back" && obj.x !== x) ||
            (face === "left" && obj.face !== "left" && obj.y !== y) ||
            (face === "right" && obj.face !== "right" && obj.y !== y) ||
            (face === "top" && obj.face !== "top" && obj.z !== z) ||
            (face === "bottom" && obj.face !== "bottom" && obj.z !== z) ||
            // 排除與座標面垂直且不與座標相鄰
            ((face === "front" || face === "back") &&
              (y === 0 || y === 3) &&
              z !== 0 &&
              z !== 3 &&
              (obj.face === "top" || obj.face === "bottom")) ||
            ((face === "front" || face === "back") &&
              (z === 0 || z === 3) &&
              y !== 0 &&
              y !== 3 &&
              (obj.face === "left" || obj.face === "right")) ||
            ((face === "left" || face === "right") &&
              (x === 0 || x === 3) &&
              z !== 0 &&
              z !== 3 &&
              (obj.face === "top" || obj.face === "bottom")) ||
            ((face === "left" || face === "right") &&
              (z === 0 || z === 3) &&
              x !== 0 &&
              x !== 3 &&
              (obj.face === "front" || obj.face === "back")) ||
            ((face === "top" || face === "bottom") &&
              (x === 0 || x === 3) &&
              y !== 0 &&
              y !== 3 &&
              (obj.face === "left" || obj.face === "right")) ||
            ((face === "top" || face === "bottom") &&
              (y === 0 || y === 3) &&
              x !== 0 &&
              x !== 3 &&
              (obj.face === "front" || obj.face === "back"))
          ) {
            continue;
          } else {
            maybe.push(obj);
          }
        }
      }
    }
  }

  function objectsAreEqual(obj1, obj2) {
    return (
      obj1.x === obj2.x &&
      obj1.y === obj2.y &&
      obj1.z === obj2.z &&
      obj1.face === obj2.face
    );
  }

  function findSameObjects(maybe, board) {
    return maybe.filter((maybeObj) =>
      board.some((boardObj) => objectsAreEqual(maybeObj, boardObj))
    );
  }

  let surrounding = findSameObjects(maybe, board);
  return surrounding;
}
