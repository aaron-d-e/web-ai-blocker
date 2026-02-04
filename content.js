function hideElements() {
  // Examples: hide by selector, class, etc.
  document.querySelectorAll("#llm-snippet").forEach(el => {
    if (!el) return
    chrome.storage.local.get(["blockerEnabled"]).then((result) => {
      if (result.blockerEnabled !== false) {
        el.style.display = "none";
      }
    });
  })
}
hideElements();
