//считаем клики по документу
function createAnalytics(){
   let counter = 0;
   const listener = () => counter++;//функция-счётчик кликов
   const isDestroyed = false//флаг, для метода удаления события
   document.addEventListener('click', listener);

   return{
      destroy(){//при вызове этого метода аналитика прекращает свое действие
         document.removeEventListener('click', listener);
         isDestroyed = true
      },
      getClicks(){//при вызове метода получаем количество кликов
         if (isDestroyed){
            return 'Analytics is destroed'
         }
         return counter
      }
   }
}
window.analytics = createAnalytics();