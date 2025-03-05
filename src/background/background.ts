chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed")
  chrome.notifications.create({
    title: "Extension installed",
    message: "hhhh",
    type: "basic",
    iconUrl: '',
  })
})
