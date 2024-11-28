const calculateNumber = (type, a, b) => {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
  
    let results;
  
    switch (type) {
      case 'SUM':
          results = roundedA + roundedB;
          break;
      
      case 'SUBTRACT':
          results = roundedA - roundedB;
          break;
      
      case 'DIVIDE':
          if (roundedB === 0) return 'Error';
          results = roundedA / roundedB;
          break;
      
      default:
          return 'Error'
    }
  
    return Object.is(results, -0) ? 0 : results;
}

module.exports = calculateNumber;
