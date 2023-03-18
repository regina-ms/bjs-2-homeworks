'use strict'

function parseCount(value) {
  try{
    if(isNaN(Number.parseFloat(value))) {
      throw new Error("Невалидное значение");
    }
  } catch(error) {
    return error;
  }
  
  return Number.parseFloat(value);
}

function validateCount(valueToPars) {
  try{
    parseCount(valueToPars);
  } catch (error) {
    return error;
  }
  return parseCount(valueToPars);
}
