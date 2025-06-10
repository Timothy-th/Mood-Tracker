const toMale = document.getElementById("toMale");
const toFemale = document.getElementById("toFemale");

//male gender
toMale.addEventListener("click", () => {
  document.querySelector(".male-avatar").style.display = "block";
  document.querySelector(".male").style.display = "block";

  document.querySelector(".female-avatar").style.display = "none";
  document.querySelector(".female").style.display = "none";
});
localStorage.setItem("selectedGender", "male");

//to female
toFemale.addEventListener("click", () => {
  document.querySelector(".female-avatar").style.display = "block";
  document.querySelector(".female").style.display = "block";

  document.querySelector(".male-avatar").style.display = "none";
  document.querySelector(".male").style.display = "none";
});
localStorage.setItem("selectedGender", "female");

//m-hair
document.querySelectorAll(".male .hair .item-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const hairSrc = btn.querySelector("img").src;
    const targetHair = document.querySelector(".male-avatar .avatar-hair");
    targetHair.src = hairSrc;

    document
      .querySelectorAll(".male .hair .item-btn")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

//f-hair
document.querySelectorAll(".female .hair .item-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const hairSrc = btn.querySelector("img").src;
    const targetHair = document.querySelector(".female-avatar .avatar-hair");
    targetHair.src = hairSrc;

    document
      .querySelectorAll(".female .hair .item-btn")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

//m-outfit
document.querySelectorAll(".male .outfit .item-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const outfitSrc = btn.querySelector("img").src;
    const targetOutfit = document.querySelector(".male-avatar .avatar-outfit");
    targetOutfit.src = outfitSrc;

    document
      .querySelectorAll(".male .outfit .item-btn")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

//f-outfit
document.querySelectorAll(".female .outfit .item-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const outfitSrc = btn.querySelector("img").src;
    const targetOutfit = document.querySelector(
      ".female-avatar .avatar-outfit"
    );
    targetOutfit.src = outfitSrc;

    document
      .querySelectorAll(".female .outfit .item-btn")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

//acc
document.querySelectorAll(".accessoryI .item-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const accessorySrc = btn.querySelector("img").src;
    let targetAccessory;
    if (document.querySelector(".male-avatar").style.display !== "none") {
      targetAccessory = document.querySelector(
        ".male-avatar .avatar-accessoryI"
      );
    } else {
      targetAccessory = document.querySelector(
        ".female-avatar .avatar-accessoryI"
      );
    }
    if (targetAccessory) targetAccessory.src = accessorySrc;

    document
      .querySelectorAll(".accessoryI .item-btn")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

//reset
document.getElementById("resetAccessory").addEventListener("click", () => {
  document
    .querySelectorAll(".avatar-accessoryI")
    .forEach((img) => (img.src = ""));

  document
    .querySelectorAll(".accessoryI .item-btn")
    .forEach((btn) => btn.classList.remove("selected"));
});

////
document.addEventListener("DOMContentLoaded", function () {
  const avatarState = {
    gender: null,
    hair: null,
    outfit: null,
    accessoryI: null,
  };

  const resultDiv = document.querySelector(".result");

  function renderAvatar() {
    let baseImg = "";
    let hairImg = "";
    let outfitImg = "";
    let accessoryImg = "";

    if (avatarState.gender === "male") {
      baseImg = `<img class="avatar-base" src="image/male.png" style="position:absolute;z-index:1;width:100%;height:100%;">`;
      if (avatarState.hair)
        hairImg = `<img class="avatar-hair" src="${avatarState.hair}" style="position:absolute;z-index:2;width:100%;height:100%;">`;
      if (avatarState.outfit)
        outfitImg = `<img class="avatar-outfit" src="${avatarState.outfit}" style="position:absolute;z-index:3;width:100%;height:100%;">`;
      if (avatarState.accessoryI)
        accessoryImg = `<img class="avatar-accessoryI" src="${avatarState.accessoryI}" style="position:absolute;z-index:4;width:100%;height:100%;">`;
    } else if (avatarState.gender === "female") {
      baseImg = `<img class="avatar-base" src="image/female.png" style="position:absolute;z-index:1;width:100%;height:100%;">`;
      if (avatarState.hair)
        hairImg = `<img class="avatar-hair" src="${avatarState.hair}" style="position:absolute;z-index:2;width:100%;height:100%;">`;
      if (avatarState.outfit)
        outfitImg = `<img class="avatar-outfit" src="${avatarState.outfit}" style="position:absolute;z-index:3;width:100%;height:100%;">`;
      if (avatarState.accessoryI)
        accessoryImg = `<img class="avatar-accessoryI" src="${avatarState.accessoryI}" style="position:absolute;z-index:4;width:100%;height:100%;">`;
    }

    resultDiv.innerHTML = `
  <div style="position:relative;width:200px;height:300px;">
    ${baseImg}
    ${hairImg}
    ${outfitImg}
    ${accessoryImg}
  </div>
`;
  }

  // Step 1: Gender selection
  document.getElementById("toMale").addEventListener("click", () => {
    avatarState.gender = "male";
    avatarState.hair = null;
    avatarState.outfit = null;
    avatarState.accessoryI = null;
    renderAvatar();
  });

  document.getElementById("toFemale").addEventListener("click", () => {
    avatarState.gender = "female";
    avatarState.hair = null;
    avatarState.outfit = null;
    avatarState.accessoryI = null;
    renderAvatar();
  });

  // Step 2: Hair selection
  document
    .querySelectorAll(".male .hair .item-btn img, .female .hair .item-btn img")
    .forEach((img) => {
      img.addEventListener("click", () => {
        avatarState.hair = img.src;
        renderAvatar();
      });
    });

  // Step 3: Outfit selection
  document
    .querySelectorAll(
      ".male .outfit .item-btn img, .female .outfit .item-btn img"
    )
    .forEach((img) => {
      img.addEventListener("click", () => {
        avatarState.outfit = img.src;
        renderAvatar();
      });
    });

  // Step 4: Accessory I selection
  document.querySelectorAll(".accessoryI .item-btn img").forEach((img) => {
    img.addEventListener("click", () => {
      avatarState.accessoryI = img.src;
      renderAvatar();
    });
  });

  // Optional: Reset button for Accessory I
  document.getElementById("resetAccessory").addEventListener("click", () => {
    avatarState.accessoryI = null;
    renderAvatar();
    document
      .querySelectorAll(".accessoryI .item-btn")
      .forEach((btn) => btn.classList.remove("selected"));
  });

  // Initial render (empty)
  renderAvatar();
});

document.getElementById("confirmAvatarBtn").addEventListener("click", () => {
  const resultDiv = document.querySelector(".result");

  const activeAvatar =
    document.querySelector(".male-avatar[style*='display: block']") ||
    document.querySelector(".female-avatar[style*='display: block']");

  if (activeAvatar) {
    resultDiv.innerHTML = activeAvatar.outerHTML;
    localStorage.setItem("savedAvatar", resultDiv.innerHTML);
    alert("Your avatar has been saved!");
  } else {
    alert("Please customize your avatar first.");
  }
});
