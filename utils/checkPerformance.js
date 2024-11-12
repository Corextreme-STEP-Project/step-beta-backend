export const checkPerformance = (indicator) => {
    if (indicator.actualValue >= indicator.targetValue) {
      indicator.achieved = true;
    } else {
      indicator.achieved = false;
    }
    return indicator;
  };
  