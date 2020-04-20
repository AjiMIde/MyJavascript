# MVC, MVP, MVVM

* [阮一峰](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

### MVC 

* 从事软件行业开发的从业者，一开始都会首先接触MVC架构，如`Spring` `PHP` `Rails`等
* *Model*为数据处理，*View*为视图逻辑，*Control*为业务逻辑
* *MVC*架构通常表现为一个环形关系，即`view`->`control`->`model`->`view`

### MVP

* *MVP*比较将*C*改成*P*，即*presenter*，关系也呈与*MVC*不同，即为：
* `view`<=>`presenter`<=>`model`，并将大部分逻辑都放于*presenter*

### MVVM

* 这在现在流行的前端框架`vue`, `react`等都有所体现，具体区分为：
* `model`, `view`, `View-Model`, 关系则表象为：`model`->`view-model`<=>`model`

