### 介绍

当.vue文件里面不写`<script>`或者`<style>`标签时，能够自动检测并且装载js文件或css(less/sass)文件到.vue文件中

### 注意事项

该loader必须在vue-loader之前执行

### 未来版本功能设计

#### v0.2.1
1. 支持配置js和css的文件目录，不限于同目录下
2. 支持根据文件名规则进行自动装载，不限于同名文件

### 已发布版本功能概览

#### v0.1.3
1. 修复解释错误的问题

#### v0.1.2
1. 添加README.md文件

#### v0.1.1
1. 初始版本，当.vue文件里面不写`<script>`或者`<style>`标签时，能够自动检测并且装载同目录下同名的js文件或css(less/sass)文件到.vue文件中