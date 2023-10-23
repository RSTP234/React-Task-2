import React from "react";
import "./styles.css";

function Calculator() {
  let exp = "";
  let express = (e) => {
    exp = exp + e.target.value;
    document.getElementById("expression").innerHTML = exp;
    document.getElementById("result").innerHTML = "";
  };

  function evaluate() {
    if (exp.length === 0) {
      document.getElementById("result").innerHTML = 0;
    } else {
      document.getElementById("result").innerHTML = eval(exp);
      exp = "";
    }
  }

  function backspace() {
    exp = exp.slice(0, exp.length - 1);
    document.getElementById("expression").innerHTML = exp;
    document.getElementById("result").innerHTML = "";
  }

  return (
    <body>
      <div id="calci">
        <div className="Comps" id="screen">
          <div id="expression"></div>
          <div id="result"></div>
        </div>
        <div className="Comps">
          <table id="table1">
            <tr>
              <td>
                <button value={"7"} onClick={express}>
                  7
                </button>
              </td>
              <td>
                <button value={"8"} onClick={express}>
                  8
                </button>
              </td>
              <td>
                <button value={"9"} onClick={express}>
                  9
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button value={"4"} onClick={express}>
                  4
                </button>
              </td>
              <td>
                <button value={"5"} onClick={express}>
                  5
                </button>
              </td>
              <td>
                <button value={"6"} onClick={express}>
                  6
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button value={"1"} onClick={express}>
                  1
                </button>
              </td>
              <td>
                <button value={"2"} onClick={express}>
                  2
                </button>
              </td>
              <td>
                <button value={"3"} onClick={express}>
                  3
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button value={"0"} onClick={express}>
                  0
                </button>
              </td>
              <td>
                <button value={"."} onClick={express}>
                  .
                </button>
              </td>
              <td>
                <button onClick={evaluate}>=</button>
              </td>
            </tr>
          </table>
          <table id="table2">
            <tr>
              <button className="symbols" onClick={backspace}>
                ⌫
              </button>
            </tr>
            <tr>
              <button className="symbols" value={"/ "} onClick={express}>
                /
              </button>
            </tr>
            <tr>
              <button className="symbols" value={"*"} onClick={express}>
                x
              </button>
            </tr>
            <tr>
              <button className="symbols" value={"-"} onClick={express}>
                -
              </button>
            </tr>
            <tr>
              <button className="symbols" value={"+"} onClick={express}>
                +
              </button>
            </tr>
          </table>
        </div>
      </div>
    </body>
  );
}

export default Calculator;
