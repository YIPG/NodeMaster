// node myFile.js

const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

myFIle.runContents()

function shouldContinue() {
  // 1: キューに溜まっているsetTimeout, setInterval, setImmidiateはあるかどうかチェック
  // 2: OS系タスクは？(サーバーのポート接続とか)
  // 3: 長時間処理が必要なオペレーションは？（fsモジュールとか）
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  )
}

// 一つのTickで全体コードが実行される
while (shouldContinue()) {
  // 1: NodeはまずpendingTimersになにかないか確認する
  // 2: 次にpendingOSTasksとpendingOperationsになにかないか確認する
  // 3:
}

// ターミナルに戻る
