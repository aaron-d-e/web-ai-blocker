const toggle = document.getElementById("toggle");

chrome.storage.local.get("blockerEnabled").then((result) => {
  const enabled = result["blockerEnabled"] !== false; // default on
  toggle.checked = enabled;
  chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: enabled ? ["ruleset_1"] : [],
    disableRulesetIds: enabled ? [] : ["ruleset_1"],
  });
});

toggle.addEventListener("change", async (e) => {
  const enabled = e.target.checked;
  await chrome.storage.local.set({ "blockerEnabled": enabled });
  await chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: enabled ? ["ruleset_1"] : [],
    disableRulesetIds: enabled ? [] : ["ruleset_1"],
  });
});


