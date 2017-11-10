// import axios from '../../static/scripts/axios.min.js';
//
// var msg2 = new SpeechSynthesisUtterance();
// msg2.lang = 'ko-KR';
// // annyang api
// if (annyang) {
//   // set a language (will be changed to korean-> ko)
//   annyang.setLanguage('ko');
//   // Let's define a command.
//   var commands = {
//     '안녕 :words': function(words) {
//       msg2.text = "안녕하세요 무엇을 도와드릴까요?"
//       speechSynthesis.speak(msg2);
//     },
//     // '안녕하세요': function() {halo('안녕하세요');}
//     ':bus_number (번) 버스 *sentence': function(bus_number, sentence) {
//       // reserve intent
//       if(sentence.includes("탈래")||sentence.includes("예약")||sentence.includes("탑승")){
//         axios.post('/api/reserve_Bus', {
//             contents: {
//               bus_num: bus_number
//             }
//           })
//           .then(response => {
//             console.log('response: ' + response);
//             var result = response.data.result;
//             console.log('result: ' + result);
//             console.log('received plainNo: ' + response.data.plainNo);
//             // for (var i = 0; i < this.busList.length; i++) {
//             //   if (this.busList[i].id == bus_num) {
//             //     this.busList[i].plainNo1 = response.data.plainNo;
//             //     this.busList[i].isBoarding = true;
//             //     console.log(' reserve success,,' + this.busList[i].isBoarding);
//             //   }
//             // }
//             msg.text = "예약 되었습니다."
//             speechSynthesis.speak(msg);
//             console.log("sppeechSynthesis");
//           })
//           .catch(e => {
//
//           })
//         msg2.text = "예약 되었습니다."
//         speechSynthesis.speak(msg2);
//
//       }
//       // cancel intent
//       else if(sentence.includes("취소")){
//         msg2.text = "예약 취소되었습니다."
//         speechSynthesis.speak(msg2);
//       }
//       alert(bus_number+", " + sentence);
//     }
//   };
//
//   // Add our commands to annyang
//   annyang.addCommands(commands);
//
//   // Start listening.
//   annyang.start({
//     autoRestart: true,
//     continuous: false
//   });
//
//   // capture the full text spoken by the user
//   annyang.addCallback('result', function(phrases) {
//     console.log("I think the user said: ", phrases[0]);
//     console.log("But then again, it could be any of the following: ", phrases);
//   });
//
// } else if (!annyang) {
//   console.log("Speech Recognition is not supported");
//   alert('Speech Recognition is not supported in this browser');
// }
