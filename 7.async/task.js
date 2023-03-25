class AlarmClock {
  constructor(alarmCollection, intervalId) {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(timeToStatrt, func){
    if(!timeToStatrt || !func) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
      if (this.alarmCollection.find(item => item.time === timeToStatrt)){
      console.warn('Уже присутствует звонок на это же время');
    }
  
   let obj =  {
        callback: func,
        time: timeToStatrt,
        canCall: true,
    }

    this.alarmCollection.push(Object.create(obj));
  }

  removeClock(time){
    let clocksToRemove = this.alarmCollection.filter(item => item.time === time);
    for(let item of clocksToRemove){
      if(this.alarmCollection.includes(item)){
        this.alarmCollection.splice(this.alarmCollection.indexOf(item), 1)
      }
    }
  }

  getCurrentFormattedTime(){
    return new Date().toLocaleTimeString().slice(0,-3);
  }

  start(){
    if(this.intervalId) {
      return;
    }

    this.intervalId = setInterval(this.alarmCollection.forEach(item => {
      if(item.time === this.getCurrentFormattedTime() && item.canCall === true) {
        item.canCall = false;
        item.callback();
      }
    }), 1000)
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls(){
    this.alarmCollection.forEach(item => item.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}