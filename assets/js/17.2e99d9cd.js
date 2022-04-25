(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{471:function(t,e,a){"use strict";a.r(e);var n=a(29),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("[TOC]")]),t._v(" "),a("h1",{attrs:{id:"服务治理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务治理"}},[t._v("#")]),t._v(" 服务治理")]),t._v(" "),a("p",[t._v("SpringCloud为服务治理提供了一层抽象接口，所以在SpringCloud应用中可以支持多种不同的服务治理框架："),a("code",[t._v("Netflix Eureka")]),t._v(" "),a("code",[t._v("Consul")]),t._v(" "),a("code",[t._v("Zookeeper")]),t._v("。在SpringCloud服务治理抽象层的作用下，可以无缝切换服务治理实现，而不影响服务注册、服务发现、服务调用等逻辑。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Feature")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Eureka")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Consul")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Zookeeper")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("服务健康检查")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可配支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务状态，内存，硬盘等")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("多数据中心")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("—")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("支持")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("kv 存储服务")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("—")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("支持")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("一致性")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("—")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("raft")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cap")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ap")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cp")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("使用接口(多语言能力)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("http（sidecar）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("支持 http 和 dns")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("watch支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("支持 long polling/大部分增量")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("全量/支持long polling")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("自身监控")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("metrics")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("metrics")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("安全")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("—")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("acl/https")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("编程语言")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Java")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("go")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Java")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Spring Cloud集成")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("已支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("已支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("已支持")])])])]),t._v(" "),a("h2",{attrs:{id:"springcloud-eureka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-eureka"}},[t._v("#")]),t._v(" SpringCloud Eureka")]),t._v(" "),a("p",[t._v("SpringCloud Eureka 是 SpringCloud Netflix项目下的服务治理模块，此子项目主要提供的模块："),a("code",[t._v("服务发现（Eureka）")]),t._v(" "),a("code",[t._v("断路器（Hystrix）")]),t._v(" "),a("code",[t._v("智能路由（Zuul）")]),t._v(" "),a("code",[t._v("负载均衡（Ribbon）")])]),t._v(" "),a("h3",{attrs:{id:"服务注册中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务注册中心"}},[t._v("#")]),t._v(" 服务注册中心")]),t._v(" "),a("p",[t._v("创建SpringBoot项目，在pom.xml引入依赖"),a("font",{attrs:{color:"red"}},[t._v("（需要注意SpringCloud版本和Springboot版本对应）")])],1),t._v(" "),a("div",{staticClass:"language-pom extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  <parent>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-parent</artifactId>\n      <version>2.5.4</version>\n      <relativePath/> \x3c!-- lookup parent from repository --\x3e\n  </parent>\n\n  <dependencies>\n      <dependency>\n          <groupId>org.springframework.cloud</groupId>\n          <artifactId>spring-cloud-starter-consul-discovery</artifactId>\n      </dependency>\n  </dependencies>\n  <dependencyManagement>\n      <dependencies>\n          <dependency>\n              <groupId>org.springframework.cloud</groupId>\n              <artifactId>spring-cloud-dependencies</artifactId>\n              <version>2020.0.3</version>\n              <type>pom</type>\n              <scope>import</scope>\n          </dependency>\n      </dependencies>\n  </dependencyManagement>\n")])])]),a("p",[t._v("通过"),a("code",[t._v("@EnableEurekaServer")]),t._v("注解启动一个服务注册中心")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableEurekaServer")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EurekaServerApplication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EurekaServerApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在默认配置下Eureka服务中心会将自己作为客户端进行注册，所以需要禁用它的客户端注册行为，在"),a("code",[t._v("application.yml")]),t._v("配置文件中进行配置")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1001    //应用端口\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" eureka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("register-with-eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetch-registry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable-self-preservation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" false //关闭自我保护\n")])])]),a("p",[t._v("启动项目后，访问 "),a("a",{attrs:{href:"http://127.0.0.1:1001",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:1001"),a("OutboundLink")],1),t._v(",可以看到下面画面")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ciallo-1257179806.cos.ap-shanghai.myqcloud.com/EurekaServer.jpg",alt:"reader"}})]),t._v(" "),a("h3",{attrs:{id:"创建服务提供者-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务提供者-provider"}},[t._v("#")]),t._v(" 创建服务提供者（Provider）")]),t._v(" "),a("p",[t._v("创建一个SpringBoot项目，也可以在上个服务中心项目中添加module,在"),a("code",[t._v("pom.xml")]),t._v("中添加以下依赖")]),t._v(" "),a("div",{staticClass:"language-pom.xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.5.4</version>\n        <relativePath/> \x3c!-- lookup parent from repository --\x3e\n    </parent>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n        </dependency>\n    </dependencies>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>2020.0.3</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n")])])]),a("p",[t._v("创建Controller")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DCController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscoveryClient")]),t._v(" discoveryClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//SpringCloud提供的抽象借口，依赖此接口可以随意更换服务治理实现而不修改代码")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" services "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Services: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" discoveryClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getServices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在应用主类上添加"),a("code",[t._v("@EnableEurekaClient")]),t._v("注解")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableEurekaClient")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EurekaClientApplication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EurekaClientApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("做完这些后，还需要配置"),a("code",[t._v("application.yml")]),t._v("文件")]),t._v(" "),a("div",{staticClass:"language-application.yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("spring:\n  application:\n    name: eureka-client\n\nserver:\n  port: 8001\neureka:\n  client:\n    service-url:\n      defaultZone: http://127.0.0.1:1001/eureka/\n\n")])])]),a("p",[t._v("启动该项目后，在此进入 "),a("a",{attrs:{href:"http://127.0.0.1:1001",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:1001"),a("OutboundLink")],1),t._v("，可以看到创建的服务成功进行了注册\n"),a("img",{attrs:{src:"https://ciallo-1257179806.cos.ap-shanghai.myqcloud.com/EurekaClient-register.jpg",alt:"Reader"}})]),t._v(" "),a("h3",{attrs:{id:"eureka的自我保护机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eureka的自我保护机制"}},[t._v("#")]),t._v(" eureka的自我保护机制")]),t._v(" "),a("blockquote",[a("p",[t._v("当Eureka Server在短时间内丢失过多客户端时，将进入自我保护模式，进入该模式后，Eureka Server将不再删除服务注册表中的数据")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("expectedNumberOfRenewsPerMin")]),t._v(" 期望最大每分钟续租次数")]),t._v(" "),a("li",[a("code",[t._v("numberOfRenewsPerMinThreshold")]),t._v(" 期望最小每分钟续租次数")])]),t._v(" "),a("p",[t._v("当每分钟心跳书小于 "),a("code",[t._v("numberOfRenewsPerMinThreshold")]),t._v("(期望最小每分钟续租次数)时，将出发自我保护机制，不再自动过期续租")]),t._v(" "),a("div",{staticStyle:{color:"#33B5E5"}},[t._v("\n`expectedNumberOfRenewsPerMin` = 当前注册的应用实例数 x 2\n`numberOfRenewsPerMinThreshold` = `expectedNumberOfRenewsPerMin` * 续租百分比( `eureka.renewalPercentThreshold` )\n")]),t._v(" "),a("p",[t._v("在eureka-server"),a("code",[t._v("初始化")]),t._v("、"),a("code",[t._v("定时重置")]),t._v("、"),a("code",[t._v("应用实例注册")]),t._v("、"),a("code",[t._v("应用实例下线")]),t._v("时重新计算"),a("code",[t._v("expectedNumberOfRenewsPerMin")]),t._v("，"),a("code",[t._v("numberOfRenewsPerMinThreshold")])]),t._v(" "),a("p",[t._v("定时重置由"),a("code",[t._v("eureka.renewalThresholdUpdateIntervalMs")]),t._v("配置，默认15分钟")]),t._v(" "),a("h2",{attrs:{id:"springcloud-consul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-consul"}},[t._v("#")]),t._v(" SpringCloud Consul")]),t._v(" "),a("blockquote",[a("p",[t._v("Spring Cloud Consul 项目是针对 Consul 的服务治理实现。Consul 是一个分布式高可用的系统，它包含多个组件，但是作为一个整体，在微服务架构中，为我们的基础设施提供服务发现和服务配置的工具。")])]),t._v(" "),a("h3",{attrs:{id:"安装consul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装consul"}},[t._v("#")]),t._v(" 安装Consul")]),t._v(" "),a("p",[t._v("在官网下载："),a("a",{attrs:{href:"https://www.consul.io/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://ciallo-1257179806.cos.ap-shanghai.myqcloud.com/ConsulDownload.jpg",alt:"Reader"}})]),t._v(" "),a("p",[t._v("解压后，得到"),a("code",[t._v("consul.exe")]),t._v("程序，在当前路径下打开命令行窗口\n使用"),a("code",[t._v("consul agent -dev")]),t._v("启动consul")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ciallo-1257179806.cos.ap-shanghai.myqcloud.com/Consul.jpg",alt:"Reader"}})]),t._v(" "),a("h3",{attrs:{id:"修改服务提供者-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改服务提供者-provider"}},[t._v("#")]),t._v(" 修改服务提供者（Provider）")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("pom.xml")]),t._v("添加依赖，并移除Eureka Client依赖")]),t._v(" "),a("div",{staticClass:"language-pom.xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-consul-discovery</artifactId>\n        <version>3.0.3</version>\n    </dependency>\n")])])]),a("p",[t._v("添加配置"),a("code",[t._v("application.yml")]),t._v(",不需要移除 eureka 的配置")]),t._v(" "),a("div",{staticClass:"language-application.yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("spring:\n  application:\n    name: eureka-client\n  cloud:\n    consul:\n      host: localhost\n      port: 8500\nserver:\n  port: 8001\neureka:\n  client:\n    service-url:\n      defaultZone: http://127.0.0.1:1001/eureka/\n")])])]),a("p",[t._v("移除主类中"),a("code",[t._v("@EnableEurekaClient")]),t._v("注解即可，得益于SpringCloud对服务治理的抽象层，该项目已经完成转换Consul作为服务治理的实现。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ciallo-1257179806.cos.ap-shanghai.myqcloud.com/ConsulServer.jpg",alt:"Reader"}})]),t._v(" "),a("h2",{attrs:{id:"zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[t._v("#")]),t._v(" Zookeeper")]),t._v(" "),a("p",[t._v("添加pom")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\x3c!-- https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-zookeeper-discovery --\x3e\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-zookeeper-discovery</artifactId>\n        </dependency>\n")])])]),a("p",[t._v("yml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server:\n  port: 8003\n\nspring:\n  application:\n    name: cloud-payment-service\n  datasource:\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    url: jdbc:mysql://localhost:3306/iot?characterEncoding=utf-8&serverTimezone=GMT%2B8\n    username: root\n    password: 123456\n  cloud:\n    zookeeper:\n      connect-string: localhost:2181\n\nmybatis:\n  mapper-locations: classpath:mapper/*.xml\n  type-aliases-package: com.nanami.common.entities\n  configuration:\n    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl\n\n\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"附录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),a("h3",{attrs:{id:"注册中心原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册中心原理"}},[t._v("#")]),t._v(" 注册中心原理")]),t._v(" "),a("p",[t._v("在使用注册中心时，存在三种角色：服务提供者(provider)、服务消费者(consumer)、注册中心(registry)。")]),t._v(" "),a("ul",[a("li",[t._v("provider在启动时，向register注册自己为一个服务，同时，定期向register发送心跳，保持存活。关闭时，向register取消注册")]),t._v(" "),a("li",[t._v("consumer在启动时，向register订阅使用到的服务，并在内存中缓存服务的实例列表。后续，consumer向对应服务的provider发起调用时，从内存中该服务的实例列表中选取一个进行远程调用，关闭时取消订阅")]),t._v(" "),a("li",[t._v("register在一定时间内没有收到provider的心跳，从服务的实例列表中移除provider。服务的实例列表发生变化时，通知订阅该服务的consumer刷新本地缓存。\neureka注册中心没有通知功能，而是让client定期轮询，以更新本地缓存")])])])}),[],!1,null,null,null);e.default=s.exports}}]);