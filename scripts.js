const aiWorker = new Worker("ai.js");
const aiStatus = { player: null, opponent: null, difficulty: null };
let cube = document.querySelector(".cube");
let isHandlePvpClickAdded = false;
let isHandlePveClickAdded = false;
let isDragging = false;
let isGameActive = false;
let isPVE = false;
let isSuggesterActive = false;
let isAiPlaying = false;
let isXPlayer = true;
let isBlackWin = false;
let isPlayerWin = false;
let isDraw = false;
let lastHand = [];
let startX, startY;
let currentX = 0,
  currentY = 0;
let startTime = 0;
let endTime = 0;

// 選擇遊戲狀態呈現方式
function removeStatusDiv() {
  let screenWidth = document.documentElement.clientWidth;
  let statusDiv1 = document.querySelector("body > .status");
  let statusDiv2 = document.querySelector("body .controls > .status");
  if (screenWidth > 768) {
    statusDiv1.remove();
  } else {
    statusDiv2.remove();
  }
}

// 建立九宮格
function createGrid(face) {
  for (let i = 0; i < 16; i++) {
    let cell = document.createElement("div");
    face.appendChild(cell);
  }
}

// 建立棋盤座標
function assignCoordinates() {
  const faces = ["front", "back", "left", "right", "top", "bottom"];

  faces.forEach((face) => {
    const cells = document.querySelectorAll(`.${face} div`);

    cells.forEach((cell, index) => {
      const coordinates = { x: 0, y: 0, z: 0, face: face };

      switch (face) {
        case "front":
          coordinates.x = 3;
          coordinates.y = index % 4;
          coordinates.z = Math.floor(index / 4);
          break;
        case "back":
          coordinates.x = 0;
          coordinates.y = Math.abs((index % 4) - 3);
          coordinates.z = Math.floor(index / 4);
          break;
        case "left":
          coordinates.x = index % 4;
          coordinates.y = 0;
          coordinates.z = Math.floor(index / 4);
          break;
        case "right":
          coordinates.x = Math.abs((index % 4) - 3);
          coordinates.y = 3;
          coordinates.z = Math.floor(index / 4);
          break;
        case "top":
          coordinates.x = Math.floor(index / 4);
          coordinates.y = index % 4;
          coordinates.z = 0;
          break;
        case "bottom":
          coordinates.x = Math.abs(Math.floor(index / 4 - 3));
          coordinates.y = index % 4;
          coordinates.z = 3;
          break;
        default:
          break;
      }

      cell.dataset.coordinates = JSON.stringify(coordinates);
    });
  });
}

// 當滑鼠或觸控按下時觸發的事件
function handleStart(e) {
  isDragging = true;
  startTime = Date.now();
  startX = e.clientX || e.touches[0].clientX;
  startY = e.clientY || e.touches[0].clientY;
  cube.style.transition = "none";
}

// 當滑鼠或觸控移動時觸發的事件
function handleMove(e) {
  if (!isDragging) return;
  let screenWidth = document.documentElement.clientWidth;
  let dragSensitivity;

  let clientX = e.clientX || e.touches[0].clientX;
  let clientY = e.clientY || e.touches[0].clientY;

  let deltaX = clientX - startX;
  let deltaY = clientY - startY;

  if (screenWidth > 1024) {
    dragSensitivity = 0.3;
  } else if (screenWidth > 480) {
    dragSensitivity = 0.5;
  } else {
    dragSensitivity = 0.8;
  }

  currentX += deltaX * dragSensitivity;
  currentY -= deltaY * dragSensitivity;

  cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;

  startX = clientX;
  startY = clientY;
}

// 當滑鼠或觸控放開時觸發的事件
function handleEnd() {
  isDragging = false;
  endTime = Date.now();
  cube.style.transition = "transform 0.3s";
}

// 觸控cube拖曳事件
function handleTouchStart() {
  document.body.classList.add("no-scroll");
}
function handleTouchEnd() {
  document.body.classList.remove("no-scroll");
}

// 初始化Worker棋盤
function initializeAiBoard(worker) {
  let message = { type: "board", data: null };
  let board = generateBoardList(true);
  let workerName = null;
  if (worker === aiWorker) {
    workerName = "aiWorker";
  } else {
    workerName = "suggesterWorker";
  }
  message.data = board;
  console.log(`發送給 ${workerName} 的消息: `, message);
  worker.postMessage(message);
}

// 初始化Worker狀態
function initializeAiStatus(worker, status) {
  let message = { type: "status", data: null };
  let workerName = null;
  if (worker === aiWorker) {
    workerName = "aiWorker";
  } else {
    workerName = "suggesterWorker";
  }
  message.data = status;
  console.log(`發送給 ${workerName} 的消息: `, message);
  worker.postMessage(message);
}

// 處理勝利條件
function checkWin() {
  let availableMoves = [];
  let cells = document.querySelectorAll(".face div");
  cells.forEach(function (div) {
    if (div.textContent === "") {
      availableMoves.push(JSON.parse(div.dataset.coordinates));
    }
  });
  let five = statusCheck(5);
  if (five.length !== 0) {
    endgamePainter(true);
    winPiecesPainter();
    isGameActive = false;
    if (isPVE) {
      if (five[0].player === aiStatus.opponent) {
        isPlayerWin = true;
      }
    } else {
      if (five[0].player === "X") {
        isBlackWin = true;
      }
    }
  } else if (availableMoves.length === 0) {
    endgamePainter(true);
    isGameActive = false;
    isDraw = true;
  }
}

// 渲染遊戲狀態
function gameStateRenderor() {
  const dashboard = document.querySelector(".dashboard");
  const five = statusCheck(5);
  if (isPVE) {
    if (!isGameActive) {
      if (isDraw) {
        dashboard.textContent = "遊戲結束：雙方和局";
      } else if (isPlayerWin && five.length !== 0) {
        dashboard.textContent = "遊戲結束：玩家獲勝！";
      } else if (isPlayerWin && five.length === 0) {
        dashboard.textContent = "遊戲結束：電腦認輸！";
      } else {
        dashboard.textContent = "遊戲結束：電腦獲勝！";
      }
    } else {
      if (isAiPlaying) {
        dashboard.textContent = "電腦正在走棋...";
      } else {
        dashboard.textContent = "玩家正在走棋...";
      }
    }
  } else {
    if (!isGameActive) {
      if (isDraw) {
        dashboard.textContent = "遊戲結束：雙方和局";
      } else if (isBlackWin) {
        dashboard.textContent = "遊戲結束：黑方獲勝！";
      } else {
        dashboard.textContent = "遊戲結束：白方獲勝！";
      }
    } else {
      if (isXPlayer) {
        dashboard.textContent = "黑方正在走棋...";
      } else {
        dashboard.textContent = "白方正在走棋...";
      }
    }
  }
}

// 自動旋轉
function autoRotate(face) {
  const rotate = { x: null, y: null };
  let cube = document.querySelector(".cube");
  switch (face) {
    case "front":
      rotate.x = 0;
      rotate.y = 0;
      break;
    case "back":
      rotate.x = 0;
      rotate.y = 180;
      break;
    case "left":
      rotate.x = 0;
      rotate.y = 90;
      break;
    case "right":
      rotate.x = 0;
      rotate.y = -90;
      break;
    case "top":
      rotate.x = -90;
      rotate.y = 0;
      break;
    case "bottom":
      rotate.x = 90;
      rotate.y = 0;
      break;
  }
  if (getSettingValue("auto-rotate") === "on") {
    currentX = rotate.y;
    currentY = rotate.x;
    cube.style.transform = `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`;
  }
}

// 最後手棋子上色
function lastMovePainter(cell) {
  let cells = document.querySelectorAll(".face div");
  cells.forEach(function (div) {
    div.style.color = "";
  });
  if (getSettingValue("labeling-last-move") === "on") {
    cell.style.color = "#ea0000";
  }
}

// 儀表板終局上色
function endgamePainter(active = false) {
  let cell = document.querySelector(".dashboard");
  if (active === true) {
    cell.classList.add("endgame");
  } else {
    cell.classList.remove("endgame");
  }
}

// 定位五連棋各自座標
function findCoordinatesInRange(targetCells_list, check_list) {
  let result = [];
  for (let i = 0; i < targetCells_list.length; i++) {
    for (let j = i + 1; j < targetCells_list.length; j++) {
      let index1 = check_list.findIndex(
        (check_obj) =>
          check_obj.x === targetCells_list[i].x &&
          check_obj.y === targetCells_list[i].y &&
          check_obj.z === targetCells_list[i].z &&
          check_obj.face === targetCells_list[i].face
      );
      let index2 = check_list.findIndex(
        (check_obj) =>
          check_obj.x === targetCells_list[j].x &&
          check_obj.y === targetCells_list[j].y &&
          check_obj.z === targetCells_list[j].z &&
          check_obj.face === targetCells_list[j].face
      );
      if (
        index1 !== -1 &&
        index2 !== -1 &&
        targetCells_list[i].player === targetCells_list[j].player
      ) {
        let directDistance = Math.abs(index2 - index1);
        let wrapAroundDistance = check_list.length - directDistance;
        let maxIndex, minIndex;
        if (index1 < index2) {
          minIndex = index1;
          maxIndex = index2;
        } else {
          minIndex = index2;
          maxIndex = index1;
        }

        function processCoordinates(
          startIndex,
          endIndex,
          checkList,
          targetPlayer,
          intermediateCoordinates
        ) {
          let currentIndex = startIndex;
          while (currentIndex !== endIndex) {
            let obj = checkList[currentIndex];
            let cell = getCell(obj.x, obj.y, obj.z, obj.face);
            if (cell.player === targetPlayer) {
              intermediateCoordinates.push(checkList[currentIndex]);
            }
            currentIndex = (currentIndex + 1) % checkList.length;
          }
          if (intermediateCoordinates.length === 5) {
            result.push(...intermediateCoordinates);
          }
        }
        if (directDistance === 6) {
          let intermediateCoordinates = [];
          let startIndex = (minIndex + 1) % check_list.length;
          let endIndex = maxIndex;
          processCoordinates(
            startIndex,
            endIndex,
            check_list,
            targetCells_list[i].player,
            intermediateCoordinates
          );
        }
        if (wrapAroundDistance === 6) {
          let intermediateCoordinates = [];
          let startIndex = (maxIndex + 1) % check_list.length;
          let endIndex = minIndex;
          processCoordinates(
            startIndex,
            endIndex,
            check_list,
            targetCells_list[i].player,
            intermediateCoordinates
          );
        }
      }
    }
  }
  return result;
}

// 五連棋座標上色
function winPiecesPainter() {
  let targetCells_list = statusCheck(5);
  let result = [];
  const axisLists = [
    { name: "X", list: Xaxis_check_list },
    { name: "Y", list: Yaxis_check_list },
    { name: "Z", list: Zaxis_check_list },
  ];
  axisLists.forEach(({ name, list }) => {
    for (let i = 0; i < 4; i++) {
      let check_list = [];
      list.forEach((obj) => {
        let newObj = {
          x: name === "X" ? i : obj.x,
          y: name === "Y" ? i : obj.y,
          z: name === "Z" ? i : obj.z,
          face: obj.face,
        };
        check_list.push(newObj);
      });
      let output = findCoordinatesInRange(targetCells_list, check_list);
      if (output.length !== 0) {
        result.push(...output);
      }
    }
  });
  for (let n = 0; n < 12; n++) {
    let listName = `diagonal_check_list${n}`;
    let diagonal_check_list = eval(listName);
    let check_list = [];
    diagonal_check_list.forEach((obj) => {
      let newObj = { x: obj.x, y: obj.y, z: obj.z, face: obj.face };
      check_list.push(newObj);
    });
    let output = findCoordinatesInRange(targetCells_list, check_list);
    if (output.length !== 0) {
      result.push(...output);
    }
  }
  result.forEach((obj) => {
    const cell = document.querySelector(
      `.face.${obj.face} div[data-coordinates='{"x":${obj.x},"y":${obj.y},"z":${obj.z},"face":"${obj.face}"}']`
    );
    if (cell) {
      cell.classList.add("win");
    }
  });
}

// 清除建議棋步
function removeSuggestion() {
  const cells = document.querySelectorAll(".face div");
  cells.forEach(function (cell) {
    if (cell.classList.contains("suggest")) {
      cell.classList.remove("suggest");
    }
  });
}

// 紀錄上一手
function recordLastHand(coordinates) {
  lastHand.push(coordinates);
}

// 處理PVP點擊事件
function handlePvpClick(e) {
  let cell = e.target;
  let duration = endTime - startTime;
  let data = cell.dataset.coordinates;
  let obj = JSON.parse(data);
  if (!isGameActive) return;
  if (isSuggesterActive) return;
  if (isDragging) return;
  if (cell.textContent !== "") return;
  if (duration > 150) return;
  recordLastHand(obj);
  lastMovePainter(cell);
  removeSuggestion();
  cell.textContent = isXPlayer ? "X" : "O";
  isXPlayer = !isXPlayer;
  setTimeout(checkWin, 10);
  setTimeout(gameStateRenderor, 10);
}

// 處理PVE點擊事件
function handlePveClick(e) {
  let cell = e.target;
  let duration = endTime - startTime;
  let data = cell.dataset.coordinates;
  let obj = JSON.parse(data);
  let message = { type: "coordinates", data: obj };
  if (!isGameActive) return;
  if (isSuggesterActive) return;
  if (isAiPlaying) return;
  if (isDragging) return;
  if (cell.textContent !== "") return;
  if (duration > 150) return;
  recordLastHand(obj);
  lastMovePainter(cell);
  removeSuggestion();
  cell.textContent = aiStatus.opponent;
  setTimeout(checkWin, 10);
  setTimeout(gameStateRenderor, 10);
  isAiPlaying = true;
  console.log("發送給 aiWorker 的消息: ", message);
  aiWorker.postMessage(message);
}

// 獲取設定值
function getSettingValue(className) {
  const radios = document.querySelectorAll(`input[name="${className}"]`);
  let selectedValue = null;
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
  return selectedValue;
}

// 設定電腦難度
function aiStatusSetup() {
  let difficulty = getSettingValue("ai-difficulty");
  let order = getSettingValue("player-order");
  if (order === "startO") {
    aiStatus.player = "O";
    aiStatus.opponent = "X";
  } else {
    aiStatus.player = "X";
    aiStatus.opponent = "O";
  }
  aiStatus.difficulty = difficulty;
}

// 設定遊戲模式
function gameModeSetup() {
  let gameMode = getSettingValue("game-mode");
  let dashboard = document.querySelector(".dashboard");
  if (gameMode === "pvp") {
    dashboard.textContent = "黑方正在走棋...";
    document.querySelectorAll(".face div").forEach((cell) => {
      if (isHandlePveClickAdded) {
        cell.removeEventListener("click", handlePveClick);
      }
      if (!isHandlePvpClickAdded) {
        cell.addEventListener("click", handlePvpClick);
      }
    });
    isHandlePveClickAdded = false;
    isHandlePvpClickAdded = true;
  } else {
    isPVE = true;
    aiStatusSetup();
    initializeAiBoard(aiWorker);
    initializeAiStatus(aiWorker, aiStatus);
    if (aiStatus.player === "X") {
      const frontCells = document.querySelectorAll(".face.front div");
      const randomIndex = Math.floor(Math.random() * frontCells.length);
      let cell = frontCells[randomIndex];
      let obj = JSON.parse(cell.dataset.coordinates);
      let message = { type: "firstmove", data: obj };
      console.log("發送給 aiWorker 的消息: ", message);
      aiWorker.postMessage(message);
      recordLastHand(obj);
      lastMovePainter(cell);
      cell.textContent = aiStatus.player;
      autoRotate("front");
    }
    dashboard.textContent = "玩家正在走棋...";
    document.querySelectorAll(".face div").forEach((cell) => {
      if (isHandlePvpClickAdded) {
        cell.removeEventListener("click", handlePvpClick);
      }
      if (!isHandlePveClickAdded) {
        cell.addEventListener("click", handlePveClick);
      }
    });
    isHandlePvpClickAdded = false;
    isHandlePveClickAdded = true;
  }
}

// 處理來自Worker的消息
aiWorker.onmessage = function (e) {
  console.log("從 aiWorker 收到的消息: ", e.data);
  const { type, data } = e.data;
  if (type === "coordinates") {
    const cell = document.querySelector(
      `.face.${data.face} div[data-coordinates='{"x":${data.x},"y":${data.y},"z":${data.z},"face":"${data.face}"}']`
    );
    recordLastHand(data);
    lastMovePainter(cell);
    cell.textContent = aiStatus.player;
    autoRotate(data.face);
  } else if (type === "endgame") {
    endgamePainter(true);
    isGameActive = false;
    if (data === "draw") {
      isDraw = true;
    } else {
      isPlayerWin = true;
    }
  }
  isAiPlaying = false;
  setTimeout(checkWin, 10);
  setTimeout(gameStateRenderor, 10);
};

// 處理Worker錯誤
aiWorker.onerror = function (e) {
  console.error("aiWorker 發生錯誤: ", e.message);
};

// 為每個面建立棋盤格
document.querySelectorAll(".face").forEach((face) => {
  createGrid(face);
});

// 添加滑鼠事件
cube.addEventListener("mousedown", handleStart, { passive: true });
document.addEventListener("mousemove", handleMove, { passive: true });
document.addEventListener("mouseup", handleEnd, { passive: true });

// 添加觸控事件
cube.addEventListener("touchstart", handleStart, { passive: true });
cube.addEventListener("touchstart", handleTouchStart, { passive: true });
document.addEventListener("touchmove", handleMove, { passive: true });
document.addEventListener("touchend", handleEnd, { passive: true });
document.addEventListener("touchend", handleTouchEnd, { passive: true });

// 遊戲操作提示
cube.addEventListener(
  "click",
  () => {
    if (isHandlePveClickAdded || isHandlePvpClickAdded) return;
    alert(
      "請確認「棋局設定」中的所有參數無誤後，再點擊「對弈選項」中的「開始棋局」按鈕以開始落子。詳情請參閱網頁下方的「遊戲規則」條目。"
    );
  },
  { once: true }
);

// 開始棋局
document.getElementById("start").addEventListener("click", () => {
  if (isGameActive) return;
  if (isAiPlaying) return;
  const reset = document.getElementById("reset");
  reset.click();
  isGameActive = true;
  gameModeSetup();
});

// 悔棋一手
document.getElementById("rollback").addEventListener("click", () => {
  if (!isGameActive) return;
  if (lastHand.length < 3) return;
  if (isAiPlaying) return;
  let lastThreeHands = lastHand.slice(-3);
  let [last3Hand, last2Hand, last1Hand] = lastThreeHands;
  if (isPVE) {
    let message1 = { type: "rollback", data: last1Hand };
    let message2 = { type: "rollback", data: last2Hand };
    console.log("發送給 aiWorker 的消息: ", message1);
    console.log("發送給 aiWorker 的消息: ", message2);
    aiWorker.postMessage(message1);
    aiWorker.postMessage(message2);
  }
  const cell1 = document.querySelector(
    `.face.${last1Hand.face} div[data-coordinates='{"x":${last1Hand.x},"y":${last1Hand.y},"z":${last1Hand.z},"face":"${last1Hand.face}"}']`
  );
  const cell2 = document.querySelector(
    `.face.${last2Hand.face} div[data-coordinates='{"x":${last2Hand.x},"y":${last2Hand.y},"z":${last2Hand.z},"face":"${last2Hand.face}"}']`
  );
  const cell3 = document.querySelector(
    `.face.${last3Hand.face} div[data-coordinates='{"x":${last3Hand.x},"y":${last3Hand.y},"z":${last3Hand.z},"face":"${last3Hand.face}"}']`
  );
  cell1.textContent = "";
  cell2.textContent = "";
  lastMovePainter(cell3);
  removeSuggestion();
  lastHand.length = lastHand.length - 2;
});

// 建議棋步
document.getElementById("suggestion").addEventListener("click", () => {
  if (isSuggesterActive) return;
  if (!isGameActive) return;
  if (lastHand.length === 0) return;
  if (isAiPlaying) return;
  isSuggesterActive = true;
  const suggesterWorker = new Worker("ai.js");
  const suggesterStatus = { player: null, opponent: null, difficulty: null };
  const dashboard = document.querySelector(".dashboard");
  const obj = lastHand.slice(-1)[0];
  const rollback = { type: "rollback", data: obj };
  const coordinates = { type: "coordinates", data: obj };
  let player = null;
  if (isPVE) {
    suggesterStatus.player = aiStatus.opponent;
    suggesterStatus.opponent = aiStatus.player;
    suggesterStatus.difficulty = getSettingValue("ai-difficulty");
  } else {
    suggesterStatus.player = isXPlayer ? "X" : "O";
    suggesterStatus.opponent = isXPlayer ? "O" : "X";
    suggesterStatus.difficulty = getSettingValue("ai-difficulty");
  }
  if (isPVE) {
    player = "玩家";
  } else if (isXPlayer) {
    player = "黑方";
  } else {
    player = "白方";
  }
  dashboard.textContent = "計算最佳棋步中...";
  initializeAiBoard(suggesterWorker);
  initializeAiStatus(suggesterWorker, suggesterStatus);
  console.log("發送給 suggesterWorker 的消息: ", rollback);
  suggesterWorker.postMessage(rollback);
  console.log("發送給 suggesterWorker 的消息: ", coordinates);
  suggesterWorker.postMessage(coordinates);
  suggesterWorker.onmessage = function (e) {
    console.log("從 suggesterWorker 收到的消息: ", e.data);
    const { type, data } = e.data;
    if (type === "coordinates") {
      const cell = document.querySelector(
        `.face.${data.face} div[data-coordinates='{"x":${data.x},"y":${data.y},"z":${data.z},"face":"${data.face}"}']`
      );
      cell.classList.add("suggest");
      cell.setAttribute("data-content", `${suggesterStatus.player}`);
      autoRotate(data.face);
      dashboard.textContent = `已找到${player}的最佳棋步！`;
    } else {
      dashboard.textContent = `找不到${player}的最佳棋步！`;
    }
    suggesterWorker.terminate();
    isSuggesterActive = false;
  };
});

// 重置棋局
document.getElementById("reset").addEventListener("click", () => {
  if (isSuggesterActive) return;
  if (isAiPlaying) return;
  document.querySelectorAll(".face div").forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("win");
    if (isHandlePvpClickAdded) {
      cell.removeEventListener("click", handlePvpClick);
    }
    if (isHandlePveClickAdded) {
      cell.removeEventListener("click", handlePveClick);
    }
  });
  isHandlePvpClickAdded = false;
  isHandlePveClickAdded = false;
  isGameActive = false;
  isPVE = false;
  isSuggesterActive = false;
  isAiPlaying = false;
  isXPlayer = true;
  isBlackWin = false;
  isPlayerWin = false;
  isDraw = false;
  lastHand = [];
  endgamePainter();
  removeSuggestion();
  let dashboard = document.querySelector(".dashboard");
  dashboard.textContent = "尚未開始棋局";
});

removeStatusDiv();
assignCoordinates();
