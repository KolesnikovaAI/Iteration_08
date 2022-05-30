const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');//с помощью этого плагина автоматически собирается html и динамически меняются привязанные js файлы
//const template  = require('webpack');

module.exports = {//должны экспортировать объект
   mode: 'development',
   entry: {//точка входа, откуда надо начинать. сначала должен быть запущен файл Post, а потом index
   //точек входа может быть несколько, тогда entry это объект
      main: './src/index.js',
      analytics: './src/analytics.js',
   },
   output:{//куда складывать результат работы имя и путь
      filename:'[name].bundle.js',//паттерн, будет 2 файла вместо name main и analytics соответственно
      //вместо bundle можно прописать [contenthash]. Все паттерны можно посмотреть в документации webpack
      path: path.resolve(__dirname, 'dist')//вернет строку __dirname возвращает родительскую директорию 
      //path.resolve добавляет 'dist' родительской директории
   },
   plugins: [//массив, список плагинов
      new HTMLWebpackPlugin({
         title: 'Webpack',//содержимое тэга title в html
         template: './src/index.html'//путь на html файл со всем содержимым
      }

      )
   ]
}