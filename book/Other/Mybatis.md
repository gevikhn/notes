# Mybatis

* `#{ }` & `${ }`

  * #{ }是占位符， ${ }是拼接字符串
  * #{ }可以防止SQL注入
  * #{ }会自动添加单引号
  * 传入表名、order by 的字段名必须用${} 
