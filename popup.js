// ポップアップの DOM が完全に読み込まれたら実行
document.addEventListener("DOMContentLoaded", () => {
    // 現在開いているすべてのタブ情報を取得
    chrome.tabs.query({}, tabs => {
    // 各タブの URL を抽出し、改行で結合
    const urls = tabs.map(tab => tab.url).join("\n");
    // クリップボードに書き込む
    navigator.clipboard.writeText(urls).then(() => {
        // 成功時の表示
        const status = document.getElementById("status");
        status.textContent = "コピーしました！";
        // 1秒後にポップアップを自動で閉じる
        setTimeout(() => window.close(), 1000);
        }).catch(err => {
        // 書き込み失敗時の表示
        console.error("Clipboard write failed:", err);
        const status = document.getElementById("status");
        status.textContent = "コピーに失敗しました";
        });
    });
});
