import React from 'react';
import { Button, Alert, Badge } from 'react-bootstrap'

function App() {
  var max_less = [0, 0, 0, 0, 0]
  var scores = []
  
  const get_Lessens_Score = () => {
    var lessens = document.querySelectorAll(".lessen_input")
    var button_get_value = document.getElementById("btn_submit")
    //get value
    // var lessens = document.querySelectorAll(".lessen_input")

    //check max lessen value
    
    // var show_person = document.getElementById("show_person_number")
    if (scores.length === 30) {
      for (let i = 0; i < 30; i++) {
        if (scores[i][1] === max_less[0] & scores[i][2] === max_less[1] & scores[i][3] === max_less[2] & scores[i][4] === max_less[3] & scores[i][5] === max_less[4]) {
          console.log(scores[i][0])
          alert("بالاترین نمرات را دانشجویی به شماره دانشجویی" + scores[i][0] +" گرفته است")
        }
      }
    } else {
      var student = []
      for (var i = 0; i < 6; i++) {
         debugger
        var convert_lessen = parseInt(lessens[i].value)
        if (i===0 & convert_lessen.toString().length != 2 ) {
          alert("شماره دانشجویی می بایست شامل 10 عدد باشد")
          return 0
        }
        if (i>0 & convert_lessen>20 | convert_lessen<0 | lessens[i].value == "") {
          alert("لطفا نمره ای در بازه 0~20 را برای درس "+ i +" وارد کنید")
          return 0
        }
        student.push(parseInt(convert_lessen))
        if (i != 0 & convert_lessen > max_less[i - 1]) max_less[i - 1] = convert_lessen
        }
        scores.push(student)
        button_get_value.innerText = "Add student "+parseInt(scores.length +1)
        if (scores.length === 30) {
          button_get_value.innerHTML = "show final max score"
        }
      }

      for (let i = 0; i < 6; i++) {
        lessens[i].value=""
        
      }
      console.log(scores);
    
  }
  return (
    <form action='#' onSubmit={event => event.preventDefault()} className="box_obj">
      <Alert className='' id='Close'>
        <p> Please write your information and click <kbd className="bg-success">Add Person</kbd></p>
      </Alert>
      <br />
      <Badge pill bg='light' className='p-2 display-3' ><span className='text-dark'>Ali Parsamanesh (get score) 👀</span></Badge>
      <br />
      <div >
        <div id='div_text_style'>

          <input id='input_text_style' className="lessen_input" type="text"  placeholder="please type student cod" />
          <span className="span_text_style bottom"></span>
          <span className="span_text_style right"></span>
          <span className="span_text_style top"></span>
          <span className="span_text_style left"></span>
        </div>
      </div>
      <div >
        <div id='div_text_style'>
          <input id='input_text_style' className="lessen_input" type="text" placeholder="lessen 1" />
          <span className="span_text_style bottom"></span>
          <span className="span_text_style right"></span>
          <span className="span_text_style top"></span>
          <span className="span_text_style left"></span>
        </div>
      </div>
      <div >
        <div id='div_text_style'>
          <input id='input_text_style' className="lessen_input" type="text" placeholder="lessen 2" />
          <span className="span_text_style bottom"></span>
          <span className="span_text_style right"></span>
          <span className="span_text_style top"></span>
          <span className="span_text_style left"></span>
        </div>
      </div>
      <div >
        <div id='div_text_style'>
          <input id='input_text_style' className="lessen_input" type="text" placeholder="lessen 3" />
          <span className="span_text_style bottom"></span>
          <span className="span_text_style right"></span>
          <span className="span_text_style top"></span>
          <span className="span_text_style left"></span>
        </div>
      </div>
      <div >
        <div id='div_text_style'>
          <input id='input_text_style' className="lessen_input" type="text" placeholder="lessen 4" />
          <span className="span_text_style bottom"></span>
          <span className="span_text_style right"></span>
          <span className="span_text_style top"></span>
          <span className="span_text_style left"></span>
        </div>
      </div>
      <div >
        <div id='div_text_style'>
          <input id='input_text_style' className="lessen_input" type="text" placeholder="lessen 5" />
          <span className="span_text_style bottom"></span>
          <span className="span_text_style right"></span>
          <span className="span_text_style top"></span>
          <span className="span_text_style left"></span>
        </div>
      </div>
      <br />
      <Button type='submit' id='btn_submit' onClick={()=>get_Lessens_Score()} className=" mb-5 mt-2 get_value">Add student 1</Button>
      <br />

    </form>

  );
}

export default App;
