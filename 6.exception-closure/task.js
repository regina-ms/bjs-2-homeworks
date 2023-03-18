'use strict'

function parseCount(value) {
    try{
      if(isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
      } else {
        return Number.parseFloat(value);
      }
    } catch(error) {
      
    }
  }

function validateCount(valueToPars) {
  try{
    parseCount(valueToPars);
  } catch (error) {
    return error;
  }
  return parseCount(valueToPars);
}
