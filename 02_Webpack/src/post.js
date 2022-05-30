export default class Post{//чтобы не прописывать в нужном порядке в HTML экспортируем класс
   constructor(title){
      this.title = title;
      this.date = new Date()
   }

   toString(){//метод, преобразующий объект в строку
      return JSON.stringify({
         title:this.title,
         date:this.date.toJSON()

      }

      )
   }
}