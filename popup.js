document.getElementById("copyBtn").addEventListener("click",async() =>{
    try {
        const tabs = await chrome.tabs.query({});
        const urls = tabs.map(tab => tab.url).join("\n");
        await navigator.clipboard.writeText(urls);
        document.getElementById("status").textContent = "コピーしました ;)"
        setTimeout(() => window.close(), 1000);
    }
    catch(e){
        document.getElementById("status").textContent = "コピーに失敗しました :("
        console.error(e);
    }
});
