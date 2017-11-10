<template lang="html">
  <div class="">
    <!-- header -->
    <section class="bus_stop_header">
      <div class="row">
        <div class="bus_container_content">
          <div class="col-sm-6" id="bus_stop_name">서울역버스환승센터</div>
          <div class="col-sm-2" id="bus_stop_id">02-007</div>
          <div class="col-sm-2" id="bus_stop_system">
              저상버스<br/>
              예약시스템
          </div>
          <div class="col-sm-2"><img id="img_disabled" src="../../static/image/disabled_man.png" alt="disabled_man"></div>
        </div>
      </div>
    </section>

    <!--main body-->
    <section class="bus_container">
      <div class="row">
        <div class="col-sm-6" v-for="busitem in busList">
          <div class="bus_container_border_general bus_container_border_blue" >
            <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
              <a :id="busitem.bus_id" class="button"  @click="load_popup('간선', busitem.id, 'main')">{{busitem.id}}</a>
            </div>
            <div class="col-sm-5 bus_container_background_general" :id="busitem.est_time">
              <!-- {{busitem.leftTime}}분 -->
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- popup -->
    <div id="popupMain" class="overlay" >
	     <div class="popup popup_main">
           <div class="col-sm-6 popup_container_border_top popup_container_border_top_main">
             <div class="row popup_container_top_top">
               <div class="col-sm-8">
                 <h2>{{bus_num}}</h2>
               </div>
               <div class="col-sm-4">
                 <h5>
                   {{bus_num}}<br/>
                   청량리행
                 </h5>
               </div>
             </div>
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-6 popup_container_bottom_left">
               <a class="confirm" style="padding-left:7vh; color:black;" @click="load_popup(bus_type, bus_num, 'reserve')">예약</a>
             </div>
             <div class="col-sm-6 popup_container_bottom_right">
               <a class="cancel" style="padding-left:4vh; color:black;" @click="load_popup(bus_type, bus_num, 'cancel' )">예약취소</a>
             </div>
           </div>
	    </div>
    </div>

    <!--Container popupReserve-->
    <div id="popupReserve" class="overlay" >
	     <div class="popup">
           <div class="col-sm-6 popup_container_border_top">
             <div class="row popup_container_top_top">
               <div class="col-sm-8">
                 <h2>{{bus_num}}</h2>
               </div>
               <div class="col-sm-4">
                 <h5>
                   {{bus_num}}<br/>
                   청량리행
                 </h5>
               </div>
             </div>
             <div class="row popup_container_top_bottom">
               <div class="col-sm-12">
                 <h5>
                    저상버스를 예약하시겠습니까?
                 </h5>
               </div>
             </div>
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-6 popup_container_bottom_left">
               <a class="confirm" style="padding-left:10vh; color:black;" @click="reserve_Bus(bus_num, 1)">예</a>
             </div>
             <div class="col-sm-6 popup_container_bottom_right">
               <a class="cancel" style="padding-left:6vh; color:black;" @click="go_Main()">아니오</a>
             </div>
           </div>
	    </div>
    </div>

    <!--Container popupReserved-->
    <div id="popupReserved" class="overlay" >
       <div class="popup">
           <div class="col-sm-6 popup_container_border_top">
             <div class="row popup_container_top_top">
               <div class="col-sm-8">
                 <h2>{{bus_num}}</h2>
               </div>
               <div class="col-sm-4">
                 <h5>
                   {{bus_num}}<br/>
                   청량리행
                 </h5>
               </div>
             </div>
             <div class="row popup_container_top_bottom">
               <div class="col-sm-12">
                 <h5>
                    {{bus_num}}이 이미 예약되었습니다.<br/>
                    다음 버스를 예약하시겠습니까?
                 </h5>
               </div>
             </div>
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-6 popup_container_bottom_left">
               <a class="confirm" style="padding-left:10vh; color:black;" @click="reserve_Bus(bus_num, 2)">예</a>
             </div>
             <div class="col-sm-6 popup_container_bottom_right">
               <a class="cancel" style="padding-left:6vh; color:black;" @click="go_Main(-2)">아니오</a>
             </div>
           </div>
      </div>
    </div>

    <!--Container popupResvationCancellation-->
    <div id="popupCancel" class="overlay" >
       <div class="popup">
           <div class="col-sm-6 popup_container_border_top">
             <div class="row popup_container_top_top">
               <div class="col-sm-8">
                 <h2>{{bus_num}}</h2>
               </div>
               <div class="col-sm-4">
                 <h5>
                   {{bus_num}}<br/>
                   청량리행
                 </h5>
               </div>
             </div>
             <div class="row popup_container_top_bottom">
               <div class="col-sm-12">
                 <h5>
                    {{bus_num}}를 취소하시겠습니까?
                 </h5>
               </div>
             </div>
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-6 popup_container_bottom_left">
               <a class="confirm" style="padding-left:10vh; color:black;" @click="cancel_Bus(bus_num,1)">예</a>
             </div>
             <div class="col-sm-6 popup_container_bottom_right">
               <a class="cancel" style="padding-left:6vh; color:black;" @click="go_Main(-2)">아니오</a>
             </div>
           </div>
      </div>
    </div>

    <!-- confirmation Popup -->
    <div id="popupConfirm" class="overlay" >
       <div class="popup">
           <div class="col-sm-6 popup_container_border_top">
             <div class="row popup_container_top_top">
               <div class="col-sm-8">
                 <h2>{{bus_num}}</h2>
               </div>
               <div class="col-sm-4">
                 <h5>
                   {{bus_num}}<br/>
                   청량리행
                 </h5>
               </div>
             </div>
             <div class="row popup_container_top_bottom">
               <div class="col-sm-12">
                 <h5>
                    {{bus_num}} 예약되었습니다.
                 </h5>
               </div>
             </div>
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-12">
               <a class="confirm" style="color:black; text-align:cneter;" @click="go_Main(-3)">확인</a>
             </div>
           </div>
      </div>
    </div>

    <!--Reservation Canellation Confirm -->
    <div id="popupConfirmCancel" class="overlay" >
       <div class="popup">
           <div class="col-sm-6 popup_container_border_top">
             <div class="row popup_container_top_top">
               <div class="col-sm-8">
                 <h2>{{bus_num}}</h2>
               </div>
               <div class="col-sm-4">
                 <h5>
                   {{bus_num}}<br/>
                   청량리행
                 </h5>
               </div>
             </div>
             <div class="row popup_container_top_bottom">
               <div class="col-sm-12">
                 <h5>
                    {{bus_num}} 예약 취소되었습니다.
                 </h5>
               </div>
             </div>
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-12">
               <a class="confirm" style="color:black; text-align:cneter;" @click="go_Main(-3)">확인</a>
             </div>
           </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from '../../static/scripts/axios.min.js';
var ws = new WebSocket("ws://localhost:8081");
var xmlParser = new DOMParser();
var xml_data = "";
var xml_data_websocket = "";
var xmlDoc = "";
var xmlDoc_websocket = "";
var arrmsg1 = "";
var plainNo1 = "";
var rtNm = "";
var msg = new SpeechSynthesisUtterance();
var xhr = new XMLHttpRequest();
msg.lang = 'ko-KR';
export default {
  data: function() {
    return {
      bus_type: "",
      bus_num: "",
      errors: [],
      toHash: '',
      isReserved: false,
      busList: [{
          id: '151',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_0',
          est_time: 'est_bus_0'
        }, {
          id: '152',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_1',
          est_time: 'est_bus_1'
        },
        {
          id: '162',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_2',
          est_time: 'est_bus_2'
        },
        {
          id: '421',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_3',
          est_time: 'est_bus_3'
        },
        {
          id: '500',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_4',
          est_time: 'est_bus_4'
        },
        {
          id: '501',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_5',
          est_time: 'est_bus_5'
        },
        {
          id: '502',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_6',
          est_time: 'est_bus_6'
        },
        {
          id: '503',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_7',
          est_time: 'est_bus_7'
        },
        {
          id: '504',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_8',
          est_time: 'est_bus_8'
        },
        {
          id: '507',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_9',
          est_time: 'est_bus_9'
        },
        {
          id: '752',
          isBoarding: false,
          plainNo1: '',
          bus_id: 'bus_id_10',
          est_time: 'est_bus_10'
        }
      ]
    }
  },
  methods: {
    init: function() {
      axios.get('/api/init')
        .then(response => {
          var result = response.data.result;
          console.log("init response: " + result);
          for (var i = 0; i < result.length; i++) {
            for (var j = 0; j < this.busList.length; j++) {
              if (result[i].rtNm == this.busList[j].id) {
                console.log("before isBarding: " + this.busList[j].isBoarding);
                console.log("result[i].rtNm: " + result[i].rtNm);
                console.log("this.busList[j].id: " + this.busList[j].id);
                this.busList[j].isBoarding = result[i].isBoarding;
                console.log("after isBarding: " + this.busList[j].isBoarding);
              }
            }
          }
          console.log("init success");
        })
        .catch(e =>
          this.errors.push(e)
        )
    },
    go_Main: function(num) {
      this.$router.go(num);
    },
    go_Confirm: function() {
      window.location.hash = "#popupConfirm";
    },
    go_ConfirmCancel: function() {
      window.location.hash = "#popupConfirmCancel";
    },
    load_popup: function(bus_type, bus_num, popup_type) {
      this.bus_type = bus_type;
      this.bus_num = bus_num;
      switch (popup_type) {
        case 'main':
          this.toHash = "#popupMain";
          break;
        case 'reserve':
          var index = 0;
          for (var i = 0; i < this.busList.length; i++) {
            if (this.busList[i].id == bus_num) {
              index = i;
              console.log("i, " + index);
              console.log("isBoarding?: " + this.busList[index].isBoarding);
            }
          }
          if (!this.busList[index].isBoarding) {
            this.toHash = "#popupReserve";
          } else {
            this.toHash = "#popupReserved";
          }
          break;
        case 'cancel':
          this.toHash = "#popupCancel";
          break;
      }
      window.location.hash = this.toHash;
    },
    cancel_Bus: function(bus_num, p_num) {
      axios.post('/api/cancel_Bus', {
          contents: {
            bus_num: bus_num,
            p_num: p_num
          }
        })
        .then(response => {
          console.log('response: ' + response);
          var result = response.data.result;
          console.log('result: ' + result);
          for (var i = 0; i < this.busList.length; i++) {
            if (this.busList[i].id == bus_num) {
              this.busList[i].isBoarding = false;
              console.log(' cancel success,,' + this.busList[i].isBoarding);
            }
          }
          msg.text = "예약 취소 되었습니다."
          speechSynthesis.speak(msg);
          console.log("sppeechSynthesis");
        })
        .catch(e => {
          this.errors.push(e)
        })
      this.go_ConfirmCancel();
    },
    reserve_Bus: function(bus_num, p_num) {
      axios.post('/api/reserve_Bus', {
          contents: {
            bus_num: bus_num,
            p_num: p_num
          }
        })
        .then(response => {
          console.log('response: ' + response);
          var result = response.data.result;
          console.log('result: ' + result);
          console.log('received plainNo: ' + response.data.plainNo);
          for (var i = 0; i < this.busList.length; i++) {
            if (this.busList[i].id == bus_num) {
              this.busList[i].plainNo1 = response.data.plainNo;
              this.busList[i].isBoarding = true;
              console.log(' reserve success,,' + this.busList[i].isBoarding);
            }
          }
          msg.text = "예약 되었습니다."
          speechSynthesis.speak(msg);
          console.log("sppeechSynthesis");
        })
        .catch(e => {
          this.errors.push(e)
        })
      this.go_Confirm();
    },

  },
  mounted: function() {
    // javascript codes
    // fetch data from server via WebSocket and transform innerHTML
    this.init();

    ws.onmessage = function(message) {
      console.log(message);
      var data = JSON.parse(message.data);
      var xml_data_websocket = data.est_bus_1;
      var xmlDoc_websocket = xmlParser.parseFromString(xml_data_websocket, "text/xml");
      var xml_itemList = xmlDoc_websocket.getElementsByTagName("itemList");
      for (var i = 0; i < xml_itemList.length; i++) {
        arrmsg1 = xmlDoc_websocket.getElementsByTagName("arrmsg1")[i].innerHTML;
        rtNm = xmlDoc_websocket.getElementsByTagName("rtNm")[i].innerHTML;
        if (arrmsg1 == "운행종료") {
          arrmsg1 = "운행종료";
        } else if (arrmsg1 == "곧 도착") {
          arrmsg1 = "곧 도착"
        } else if (arrmsg1 == "출발대기") {
          arrmsg1 = "출발대기";
        } else {
          var idx = arrmsg1.indexOf("분");
          arrmsg1 = arrmsg1.substring(0, idx + 1);
        }

        for (var j = 0; j < 11; j++) {
          var bus_id_idx = "bus_id_" + j;
          var bus_id = document.getElementById(bus_id_idx).innerHTML;
          if (rtNm == bus_id) {
            // console.log("==busid: " + bus_id+"  rtNm  : "+ rtNm);
            var est_bus_num = "est_bus_" + j;
            document.getElementById(est_bus_num).innerHTML = arrmsg1;
          }
        }
      }
      console.log(this.busList);
      // msg.text = "서울역 버스 환승 센터 정류장입니다."
      // speechSynthesis.speak(msg);
    };

    var msg2 = new SpeechSynthesisUtterance();
    msg2.lang = 'ko-KR';
    // annyang api
    if (annyang) {
      // set a language (will be changed to korean-> ko)
      annyang.setLanguage('ko');
      // Let's define a command.
      var commands = {
        '안녕 :words': function(words) {
          msg2.text = "안녕하세요 무엇을 도와드릴까요?"
          speechSynthesis.speak(msg2);
        },
        ':bus_number번 버스 *sentence': function(bus_number, sentence) {
          // reserve intent
          if (sentence.includes("탈래") || sentence.includes("예약") || sentence.includes("탑승")) {
            xhr.open("POST", "/api/reserve_Bus");
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function() { //Call a function when the state changes.
              if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
                console.log(xhr.responseText);
                if(xhr.responseText=="true"){
                  alert("it includes!");
                  msg2.text = "이미 예약된 버스입니다. 다음 버스를 예약하시겠습니까?"
                  speechSynthesis.speak(msg2);
                }else{
                  msg2.text = "예약 되었습니다."
                  speechSynthesis.speak(msg2);
                }
              }
            }
            xhr.send(JSON.stringify({
              contents: {
                bus_num: bus_number,
                p_num: "1"
              }
            }));
          }
          // cancel intent
          else if (sentence.includes("취소")) {
            xhr.open("POST", "/api/cancel_Bus");
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function() { //Call a function when the state changes.
              if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
                console.log(xhr.responseText)
              }
            }
            xhr.send(JSON.stringify({
              contents: {
                bus_num: bus_number,
                p_num: "1"
              }
            }));
            msg2.text = "예약 취소되었습니다."
            speechSynthesis.speak(msg2);

          }
          alert(bus_number + ", " + sentence);
        }
      };

      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening.
      annyang.start({
        autoRestart: true,
        continuous: false
      });

      // capture the full text spoken by the user
      annyang.addCallback('result', function(phrases) {
        console.log("I think the user said: ", phrases[0]);
        console.log("But then again, it could be any of the following: ", phrases);
      });

    } else if (!annyang) {
      console.log("Speech Recognition is not supported");
      alert('Speech Recognition is not supported in this browser');
    }


  }
}
</script>

<style lang="css">
</style>
