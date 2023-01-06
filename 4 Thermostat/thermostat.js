class Thermostat {
    constructor() {
      this.temperature = 20;
      this.powerSavingMode = true;
    }
  
    getTemperature() {
      return this.temperature;
    }
  
    getPowerSavingMode() {
      return this.powerSavingMode;
    }
  
    up() {
      let maxTemperature = this.powerSavingMode === true ? 25 : 32;
      if (this.temperature < maxTemperature) {
        this.temperature += 1;
      }
    }
  
    down() {
      if (this.temperature > 10) {
        this.temperature -= 1;
      }
    }
  
    setPowerSavingMode(mode) {
      this.powerSavingMode = mode;
    }
  
    reset() {
      this.temperature = 20;
    }
  
    currentEnergyUsage() {
      if (this.temperature < 18) {
        return "Low";
      } else if (this.temperature <= 25) {
        return "Medium";
      } else {
        return "High";
      }
    }
  }
  
  module.exports = Thermostat;