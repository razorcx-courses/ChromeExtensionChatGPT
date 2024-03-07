// Options script
document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("save");
  saveButton.addEventListener("click", () => {
    const optionValue = document.getElementById("option").value;
    chrome.storage.sync.set({ option: optionValue }, function () {
      console.log("Option saved");
    });
  });
});
