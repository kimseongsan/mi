let aimedisonRootElement = document.createElement("div");
aimedisonRootElement.setAttribute("id", "aimedisonRootElement");

document.getElementById("container").appendChild(aimedisonRootElement);

document.getElementById("aimedisonRootElement").style.display = "none";

let aidmedisonChannelElement = document.createElement("iframe");

aidmedisonChannelElement.setAttribute("id", "aidmedisonchannelelement");

aidmedisonChannelElement.setAttribute(
  "src",
  "https://calm-dodol-81d26b.netlify.app/chatbotaimedison.html"
);

window.usecafe24api = CAFE24API;
// console.log(document.getElementById("aidmedisonchannelelement").contentWindow);

CAFE24API.init("fmfikBkfGp15VkMg8bsWPN");

let cafe24userId;
let cafe24APIinfoObj = {
  cafe24shopId: "",
  cafe24userId: "",
  cafe24userClass: {},
  aimedisonMessagesInEach: {},
};

document
  .getElementById("aimedisonRootElement")
  .appendChild(aidmedisonChannelElement);

setTimeout(() => {
  //   console.log(CAFE24API.MALL_ID);
  cafe24APIinfoObj.cafe24shopId = CAFE24API.MALL_ID;
  CAFE24API.getCustomerIDInfo(function (err, res) {
    console.log(err);
    console.log(res);
    cafe24APIinfoObj.cafe24userId = res;
  });
  CAFE24API.getCustomerInfo(function (err, res) {
    console.log(err);
    console.log(res);
    cafe24APIinfoObj.cafe24userClass = res;
  });

  document.getElementById("aimedisonRootElement").style.position = "fixed";
  document.getElementById("aimedisonRootElement").style.bottom = "40px";

  document.getElementById("aimedisonRootElement").style.right = 0;
  document.getElementById("aidmedisonchannelelement").style.border = "none";
}, 20);

// document
//   .getElementById("aimedisonRootElement")
//   .appendChild(aidmedisonChannelElement);

function dsafknjafsjksdfkksd() {
  setTimeout(() => {
    if (
      cafe24APIinfoObj.cafe24userClass.customer &&
      cafe24APIinfoObj.cafe24userId.id
    ) {
      aidmedisonChannelElement.removeEventListener(
        "load",
        dsafknjafsjksdfkksd,
        false
      );

      console.log("중요한 디버깅: cafe24APIinfoObj.cafe24userId");
      // console.log(cafe24APIinfoObj);
      console.log(cafe24APIinfoObj.cafe24userId);
      document
        .getElementById("aidmedisonchannelelement")
        .contentWindow.postMessage(cafe24APIinfoObj, "*");
    }
  }, 125);
}

aidmedisonChannelElement.addEventListener("load", dsafknjafsjksdfkksd, false);

document.getElementById("aimedisonRootElement").style.minHeight = "175px";
document.getElementById("aimedisonRootElement").style.minWidth = "330px";
aidmedisonChannelElement.style.minHeight = "650px";

aidmedisonChannelElement.style.minWidth = "435px";
aimedisonRootElement.style.right = 0;
aidmedisonChannelElement.style.maxWidth = "435px";

function anvhduuddnshsue(event) {
  console.log(event.data);
  window.removeEventListener("message", anvhduuddnshsue, false);

  document.getElementById("aimedisonRootElement").style.display = event.data;

  if (event.data === "none") {
    document.getElementById("aimedisonRootElement").remove();
  } else {
    if (cafe24APIinfoObj.cafe24userId) {
      if (
        cafe24APIinfoObj.cafe24userId.id.guest_id === null &&
        cafe24APIinfoObj.cafe24userId.id.member_id
      ) {
        // document.getElementById("aimedisonRootElement").style.display = "";
        document.getElementById("aimedisonRootElement").style.zIndex = 9999;

        if (window.innerWidth < 850) {
          document.getElementById("aidmedisonchannelelement").style.minWidth =
            "417px";
          document.getElementById("aidmedisonchannelelement").style.maxWidth =
            "422px";
          document.getElementById("aidmedisonchannelelement").style.minHeight =
            "635px";
          if (window.innerWidth < 460) {
            document.getElementById("aidmedisonchannelelement").style.minWidth =
              "397px";
            document.getElementById("aidmedisonchannelelement").style.maxWidth =
              "412px";
            document.getElementById(
              "aidmedisonchannelelement"
            ).style.minHeight = "600px";
            document.getElementById(
              "aidmedisonchannelelement"
            ).style.maxHeight = "635px";
            if (window.innerWidth < 437) {
              document.getElementById(
                "aidmedisonchannelelement"
              ).style.minWidth = "385px";
              document.getElementById(
                "aidmedisonchannelelement"
              ).style.maxWidth = "397px";
              document.getElementById(
                "aidmedisonchannelelement"
              ).style.minHeight = "595px";
              document.getElementById(
                "aidmedisonchannelelement"
              ).style.maxHeight = "600px";
              if (window.innerWidth < 425) {
                document.getElementById(
                  "aidmedisonchannelelement"
                ).style.minWidth = "365px";
                document.getElementById(
                  "aidmedisonchannelelement"
                ).style.maxWidth = "385px";
                document.getElementById(
                  "aidmedisonchannelelement"
                ).style.minHeight = "575px";
                document.getElementById(
                  "aidmedisonchannelelement"
                ).style.maxHeight = "600px";
              }
            }
          }
        }
      }
    }
  }
}

window.addEventListener("message", anvhduuddnshsue, false);