var spawn = require('child_process').exec;

hexo.on('new', function(data){
  spawn('start  "D:\software\tools\markdown\setup\MarkdownPad2.exe" ' + data.path);
});