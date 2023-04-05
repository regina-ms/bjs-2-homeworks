//Задача № 1
    function cachingDecoratorNew(func) {
        let cache = [];
        const maxCacheValuesCount = 5;
        return (...args) => {
            let hash = md5(args); 
            let objectInCache = cache.find(item => hash in item);
            if(objectInCache) {
                return "Из кэша: " + objectInCache[hash];
            }
            
            let result = func(...args);
            let obj = {};
            obj[hash] = result; 
            cache.push(obj);
           
            if(cache.length > maxCacheValuesCount) {
                cache.splice(0,1);
            }
            return "Вычисляем: " + result;
        }
    }
    

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
  
    function wrapper(...args) {
      wrapper.allCount++;
  
      if(timeoutId) {
        clearTimeout(timeoutId);
      } else if(!timeoutId && !wrapper.count){
        func(...args);
          clearTimeout(timeoutId);
          wrapper.count++;
          
      }
      
      timeoutId = setTimeout(()=> {
          func(...args);
          clearTimeout(timeoutId);
          wrapper.count++;
      }, delay);
  
    }
    
    return wrapper;
}
