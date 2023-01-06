const Thermostat = require("./thermostat.js");

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe("when initialised", () => {
    it("has an initial temperature of 20 degrees", () => {
      expect(thermostat.getTemperature()).toEqual(20);
    });
    it("has power saving mode on", () => {
      expect(thermostat.getPowerSavingMode()).toEqual(true);
    });
  });

  describe("down", () => {
    it("decreases temperatue", () => {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    });
    it("wont drop the temperature below 10 degrees", () => {
      for (let i = 0; i < 30; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toEqual(10);
    });
  });

  describe("setPowerSavingMode", () => {
    it("sets the powerSavingMode to false", () => {
      thermostat.setPowerSavingMode(false);
      expect(thermostat.getPowerSavingMode()).toEqual(false);
    });
    it("sets the powerSavingMode to true", () => {
      thermostat.setPowerSavingMode(false);
      thermostat.setPowerSavingMode(true);
      expect(thermostat.getPowerSavingMode()).toEqual(true);
    });
  });

  describe("reset", () => {
    it("resets the temperature to 20", () => {
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe("up", () => {
    it("increases the temperature", () => {
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(22);
    });
    it("maxes out at 25 when power saving mode is on", () => {
      for (let i = 0; i < 30; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    });
    it("maxes out at 32 when power saving mode is off", () => {
      thermostat.setPowerSavingMode(false);
      for (let i = 0; i < 30; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  describe("currentEnergyUsage", () => {
    it("returns low-usage when < 18 degrees", () => {
      for (let i = 0; i < 5; i++) {
        thermostat.down();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("Low");
    });
    it("returns medium-usage when <= 25 degrees", () => {
      for (let i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("Medium");
    });
    it("returns high-usage when > 25 degrees", () => {
      thermostat.setPowerSavingMode(false);
      for (let i = 0; i < 7; i++) {
        thermostat.up();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("High");
    });
  });
});