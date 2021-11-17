import locations from '../consts/locations';
import davis from '../consts/davis';


export function getListTooltips (location) {
  if (
    locations[`${location}`] &&
    locations[`${location}`].tooltips &&
    locations[`${location}`].tooltips.length &&
    locations[`${location}`].tooltips.length > 0
  ) {
    return locations[`${location}`].tooltips;
  }
  return [];
}

export function getListTransitions (location) {
  if (
    locations[`${location}`] &&
    locations[`${location}`].transitions &&
    locations[`${location}`].transitions.length &&
    locations[`${location}`].transitions.length > 0
  ) {
    return locations[`${location}`].transitions;
  }
  return [];
}



////////////

export function getListTooltipsDavis (da) {
    if (
      davis[`${da}`] &&
      davis[`${da}`].tooltips &&
      davis[`${da}`].tooltips.length &&
      davis[`${da}`].tooltips.length > 0
    ) {
      return davis[`${da}`].tooltips;
    }
    return [];
  }
  
  export function getListTransitionsDavis (da) {
    if (
      davis[`${da}`] &&
      davis[`${da}`].transitions &&
      davis[`${da}`].transitions.length &&
      davis[`${da}`].transitions.length > 0
    ) {
      return davis[`${da}`].transitions;
    }
    return [];
  }