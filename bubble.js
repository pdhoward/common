
// factory function 
exports.Bubble = () => {
  return { 
  _id: null,
  userId: "",
  network: {
    _id: null,
    isPrivate: false,
    isAvailable: false
  },
  meter: 0,
  state: {
    turn: 1,
    context: 'welcome'
  },   
  intent: null,
  intentArray: [],
  callback: null,
  message: null,
  history: [],
  reply: [],
  seq: null,
  slot: [],
  timeStamp: null,
  space:[],
  system: []
 }
}