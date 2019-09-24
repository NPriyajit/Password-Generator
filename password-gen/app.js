function init() {
  const generate = document.querySelector(".btn");
  const arrow = document.querySelector(".fa");
  const randpass = document.querySelector("#randpass");
  generate.addEventListener("click", () => {
    var pass = generateRand(); //~ Generating random password
    randpass.innerHTML = `<span id="randpasstxt">${pass}</span> is your random password, scroll down to make your suitable password.`;
    arrow.style.display = "initial";
    randpass.style.opacity = "1";
    const randtxt = document.querySelector("#randpasstxt");
    const copy = document.querySelector("#copy");
    randtxt.addEventListener("mouseover", function () {

      copy.style.opacity = 1;
      copy.innerHTML = "copy";
    });
    copy.addEventListener("click", function () {
      CopyToClipboard(randtxt.innerHTML);
      randpass.style.opacity = "0";
      copy.style.opacity = "0";
    });
  });
}

function CopyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

function generateRand() {
  const symbols = "~!@#$%^&*-_/?";
  var string1 = Math.random()
    .toString(36)
    .slice(-3)
    .toUpperCase();
  var string2 = Math.random()
    .toString(36)
    .slice(-4);
  var symb = symbols[Math.floor(Math.random() * 11 + 1)];
  var num = Math.floor(Math.random() * 1000 + 1);
  var pass1 = string1.concat(string2, symb, num);
  var pass = pass1
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  return pass;
}

function reset() {
  const text = document.querySelector("#passtext");
  const cap = document.querySelector("#passcap");
  const num = document.querySelector("#passnum");
  const symb = document.querySelector("#passsymbols");
  const passtxt = document.querySelector(".passwordtxt");
  const pass = document.querySelector(".passtext");
  passtxt.style.display = "none";
  pass.innerHTML = "";
  document.querySelector(".messages").innerHTML = "";
  text.value = "";
  cap.value = "";
  num.value = "";
  symb.value = "";
  document.querySelector(".fatext").style.color = "red";
  document.querySelector(".facap").style.color = "red";
  document.querySelector(".fanum").style.color = "red";
  document.querySelector(".fasymb").style.color = "red";
  document.querySelector(".submit").innerHTML = "Copy";

  if (text.style.border == "2px solid tomato") {
    text.style.border = "1px solid #c5c5c5";
    symb.style.border = "1px solid #c5c5c5";
    num.style.border = "1px solid #c5c5c5";
    cap.style.border = "1px solid #c5c5c5";
  }
}

function select() {
  const text = document.querySelector("#passtext");
  const cap = document.querySelector("#passcap");
  const num = document.querySelector("#passnum");
  const symb = document.querySelector("#passsymbols");
  const passtxt = document.querySelector(".passtext");
  const placetxt = "Enter Letters";
  const placecap = "Enter Capital Letters";
  const placenum = "Enter Digits";
  const placedig = "Enter Symbols";
  const copy = document.querySelector(".submit");
  const passw = document.querySelector(".passwordtxt");
  text.setAttribute("placeholder", placetxt);
  cap.setAttribute("placeholder", placecap);
  num.setAttribute("placeholder", placenum);
  symb.setAttribute("placeholder", placedig);
  passw.style.display = "initial";
  text.addEventListener("input", function () {
    passw.style.display = "initial";
    x = /^[a-z]*$/g.test(text.value);
    if (x && !(text.value == "")) {
      document.querySelector(".fatext").style.color = "green";
      document.querySelector(".messages").innerHTML = "";
      passtxt.innerHTML = text.value;
    } else {
      document.querySelector(".fatext").style.color = "red";
      document.querySelector(".messages").innerHTML =
        "Error! Only small letters";
    }
  });
  cap.addEventListener("input", function () {
    x = /^[A-Z]*$/g.test(cap.value);
    if (x && !(cap.value == "")) {
      document.querySelector(".facap").style.color = "green";
      document.querySelector(".messages").innerHTML = "";
      passtxt.innerHTML = text.value.concat(cap.value);
    } else {
      document.querySelector(".facap").style.color = "red";
      document.querySelector(".messages").innerHTML =
        "Error! Only Capital letters";
    }
  });
  num.addEventListener("input", function () {
    x = num.value;
    if (!isNaN(x) && !(x == "")) {
      document.querySelector(".fanum").style.color = "green";
      document.querySelector(".messages").innerHTML = "";
      passtxt.innerHTML = text.value.concat(cap.value, num.value);
    } else {
      document.querySelector(".fanum").style.color = "red";
      document.querySelector(".messages").innerHTML = "Error! Only Numbers.";
    }
  });
  symb.addEventListener("input", function () {
    x = /[~`!#$%\^&*+=\-\[\]\\',/{}|\\":<>\?@]/g.test(symb.value);
    if (x && !(symb.value == "")) {
      document.querySelector(".fasymb").style.color = "green";
      document.querySelector(".messages").innerHTML = "";
      passtxt.innerHTML = text.value.concat(cap.value, num.value, symb.value);
    } else {
      document.querySelector(".fasymb").style.color = "red";
      document.querySelector(".messages").innerHTML = "Error! Only Symbols.";
    }
  });
  copy.addEventListener("click", function () {
    if (
      !(
        symb.value == "" &&
        num.value == "" &&
        cap.value == "" &&
        text.value == ""
      )
    ) {
      CopyToClipboard(passtxt.innerHTML);
      copy.innerHTML = "Copied";
    } else {
      text.focus();
      text.style.border = "2px solid tomato";
      symb.style.border = "2px solid tomato";
      num.style.border = "2px solid tomato";
      cap.style.border = "2px solid tomato";
      setTimeout(() => {
        text.style.border = "1px solid #c5c5c5";
        symb.style.border = "1px solid #c5c5c5";
        num.style.border = "1px solid #c5c5c5";
        cap.style.border = "1px solid #c5c5c5";
      }, 5000);
    }
  });
}

function main() {
  const passwr = document.querySelector(".passwordtxt");
  const len = document.querySelector("#passlen");
  const text = document.querySelector("#passtext");
  const cap = document.querySelector("#passcap");
  const num = document.querySelector("#passnum");
  const symb = document.querySelector("#passsymbols");
  const passtxt = document.querySelector(".passtext");

  const copy = document.querySelector(".submit");
  if (len.value == "-Any Length-") {
    select();
  }
  len.addEventListener("change", function () {
    n = len.value / 4;
    reset();
    text.setAttribute("placeholder", `Enter [a-z] of length : ${n}`);
    cap.setAttribute("placeholder", `Enter [A-Z] of length : ${n}`);
    num.setAttribute("placeholder", `Enter [1-9] of length : ${n}`);
    symb.setAttribute("placeholder", `Enter [#-@] of length : ${n}`);
    passwr.style.display = "initial";
    if (len.value == "-Any Length-") {
      return select();
    }
    text.addEventListener("input", function () {
      x = /^[a-z]*$/g.test(text.value);
      if (x && !(text.value == "") && text.value.length <= n) {
        document.querySelector(".fatext").style.color = "green";
        document.querySelector(".messages").innerHTML = "";
        passtxt.innerHTML = text.value;
      } else {
        document.querySelector(".fatext").style.color = "red";
        document.querySelector(
          ".messages"
        ).innerHTML = `Error! Only small letters and length must be between ${n}.`;
      }
    });
    cap.addEventListener("input", function () {
      x = /^[A-Z]*$/g.test(cap.value);
      if (x && !(cap.value == "") && cap.value.length <= n) {
        document.querySelector(".facap").style.color = "green";
        document.querySelector(".messages").innerHTML = "";
        passtxt.innerHTML = text.value.concat(cap.value);
      } else {
        document.querySelector(".facap").style.color = "red";
        document.querySelector(
          ".messages"
        ).innerHTML = `Error! Only CAPITAL letters and length must be between ${n}.`;
      }
    });
    num.addEventListener("input", function () {
      x = num.value;
      if (!isNaN(x) && !(x == "") && num.value.length <= n) {
        document.querySelector(".fanum").style.color = "green";
        document.querySelector(".messages").innerHTML = "";
        passtxt.innerHTML = text.value.concat(cap.value, num.value);
      } else {
        document.querySelector(".fanum").style.color = "red";
        document.querySelector(
          ".messages"
        ).innerHTML = `Error! Only Numbers  and length must be between ${n}.`;
      }
    });
    symb.addEventListener("input", function () {
      x = /[~`!#$%\^&*+=\-\[\]\\',/{}|\\":<>\?@]/g.test(symb.value);
      if (x && !(symb.value == "") && symb.value.length <= n) {
        document.querySelector(".fasymb").style.color = "green";
        document.querySelector(".messages").innerHTML = "";
        passtxt.innerHTML = text.value.concat(cap.value, num.value, symb.value);
      } else {
        document.querySelector(".fasymb").style.color = "red";
        document.querySelector(
          ".messages"
        ).innerHTML = `Error! Only Symbols and length must be between ${n}.`;
      }
    });
    copy.addEventListener("click", function () {
      if (
        !(
          symb.value == "" &&
          num.value == "" &&
          cap.value == "" &&
          text.value == ""
        )
      ) {
        CopyToClipboard(passtxt.innerHTML);
        copy.innerHTML = "Copied";
      } else {
        text.focus();
        text.style.border = "2px solid tomato";
        symb.style.border = "2px solid tomato";
        num.style.border = "2px solid tomato";
        cap.style.border = "2px solid tomato";
      }
    });
  });
}

const resbtn = document.querySelector(".reset");

resbtn.addEventListener("click", reset);

function mode() {
  const mode = document.querySelector("#mode");
  mode.addEventListener("click", function () {
    mode.setAttribute("title", "Color Mode");
    document.querySelector("header").style.background =
      "linear-gradient(57deg, #3b3e3d, #171c1e)";
    document.querySelector(".generator").style.background =
      "linear-gradient(57deg, #171c1e, #3b3e3d)";
    const btn = document.querySelector(".home > .btn");
    btn.style.background =
      " linear-gradient(57deg, #171c1e, #3b3e3d)";
    btn.addEventListener("mouseenter", () => {
      btn.style.background =
        " linear-gradient(57deg, #3b3e3d, #171c1e)";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.background =
        " linear-gradient(57deg, #171c1e, #3b3e3d)";
    });
    mode.classList.remove("fa-toggle-off");
    mode.classList.add("fa-toggle-on");

    mode.setAttribute("id", "dark");

    dark();
  });
}

function dark() {
  const dark = document.querySelector("#dark");
  dark.addEventListener("click", function () {
    dark.setAttribute("title", "Dark Mode");
    document.querySelector("header").style.background =
      "linear-gradient(57deg, #1c8256, #178bb5)";
    document.querySelector(".generator").style.background =
      "linear-gradient(57deg, #178bb5, #1c8256)";
    const btn = document.querySelector(".home > .btn");
    btn.style.background =
      " linear-gradient(57deg, #4bc69f, #178bb5)";
    btn.addEventListener("mouseenter", () => {
      btn.style.background =
        " linear-gradient(57deg, #178bb5, #4bc69f)";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.background =
        " linear-gradient(57deg, #4bc69f, #178bb5)";
    });
    dark.classList.remove("fa-toggle-on");
    dark.classList.add("fa-toggle-off");
    dark.setAttribute("id", "mode");
    mode();
  });
}

var date = new Date();
document.querySelector(".yyyy").innerHTML = date.getFullYear();




mode();
main();
init();