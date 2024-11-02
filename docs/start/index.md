# 准备
入门知识
## 认识json
JSON 命名空间对象包含用于解析 JavaScript 对象表示法（JSON）和将值转换为 JSON 字符串的静态方法。

#### 描述
与大多数全局对象不同， 不是一个构造函数。不能将它与 new 运算符 一起使用，也不能将 对象作为函数调用。JSON` 的所有属性和方法都是静态的（就像 Math 对象一样）。JSONJSON

#### JavaScript 与 JSON 的区别
JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 null。它基于 JavaScript 语法，但与之不同：大部分 JavaScript 不是 JSON。例如：

#### 对象和数组
属性名称必须是双引号括起来的字符串；禁止出现尾随逗号。

#### 数值
禁止出现前导零。小数点后必须至少有一位数字。不支持 和 。NaNInfinity

#### 示例
任何 JSON 文本都是有效的 JavaScript 表达式，但仅限于 JSON 超集修订之后。在修订之前，U+2028 行分隔符和 U+2029 段分隔符允许在 JSON 的字符串字面量和属性键中使用；但在 JavaScript 字符串字面量中使用同样的分隔符会导致 SyntaxError。

其他区别包括只允许双引号字符串，不支持 undefined 或注释。对于希望使用基于 JSON 的更人性化配置格式的用户，有 Babel 编译器使用的 JSON5，以及更常用的 YAML。

在 JavaScript 对象字面量与 JSON 中，相同的文本可能代表不同的值。如需了解更多信息，请参阅对象字面量语法与 JSON 的对比。

无关紧要的空白符可以出现在任何地方，但不包括在 （数字不得包含空白）或 （字符串中的相应字符会被解释为空白，否则会导致错误）中。制表符（U+0009）、回车符（U+000D）、换行符（U+000A）和空格（U+0020）字符是唯一有效的空白字符。JSONNumberJSONString

JSON的结构非常简单，它由两种基本结构组成：

对象（Object）：一个对象是一个无序的键值对集合。在JavaScript中，对象是使用花括号{}来定义的，键值对之间使用逗号分隔，键和值之间使用冒号分隔。例如：

```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

数组（Array）：一个数组是一个有序的值列表。在JavaScript中，数组是使用方括号[]来定义的，值之间使用逗号分隔。例如：

```json
[
  "apple",
  "banana",
  "orange"
]
```

JSON的键必须是字符串，而值可以是字符串、数字、布尔值、对象或数组。此外，JSON不支持注释，因此在JSON文件中不应该包含任何注释。

JSON的优点包括：

- 易于阅读和编写。
- 易于机器解析和生成。
- 跨平台和跨语言，因为它是基于文本的，并且大多数编程语言都支持JSON的解析和生成。

JSON的缺点包括：

- 不支持注释。
- 不支持二进制数据。
- 不支持日期和时间。

JSON广泛用于Web应用程序中，特别是在AJAX技术中，用于在客户端和服务器之间传输数据。它也被用于配置文件、日志文件、数据存储等领域。


## 工具选择
在编写《我的世界》的JSON文件时，有许多工具可供选择，这些工具可以帮助你更轻松地创建、编辑和验证JSON文件。以下是一些常用的工具：
#### 电脑

文本编辑器：如[Notepad++](https://notepad-plus-plus.org/downloads/)、[Sublime Text](https://www.sublimetext.com/)、[Visual Studio Code](https://code.visualstudio.com/)等，这些编辑器提供了语法高亮、自动补全等功能，有助于编写JSON文件。

在线JSON编辑器：如[JSON Editor Online](https://jsoneditoronline.org/)、[Code Beautify JSON Editor](https://codebeautify.org/online-json-editor)等，这些工具允许你在浏览器中直接编辑JSON文件，并且通常提供了实时预览和格式化功能。

命令行工具：如jq，这是一个强大的命令行JSON处理器，可以用于解析、过滤、转换和验证JSON文件。

集成开发环境（IDE）：如[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[Eclipse](https://www.eclipse.org/downloads/)等，这些IDE提供了丰富的功能，包括JSON编辑、代码提示、调试等。

JSON Schema验证工具：如[Ajv](https://ajv.js.org/)、[JSON Schema Validator](https://www.jsonschemavalidator.net/)等，这些工具可以帮助你验证JSON文件是否符合特定的JSON Schema。

###### 选择哪种工具取决于你的具体需求和偏好。如果你是初学者，建议从文本编辑器或在线JSON编辑器开始，这些工具通常比较容易上手
#### 手机
在手机上编写和编辑JSON文件可能不如在电脑上那么方便，但仍然有一些工具可以帮助你完成这项任务。以下是一些适用于手机的JSON编辑工具：

文本编辑器应用：许多手机都预装了简单的文本编辑器应用，如Android上的"文件管理器"或iOS上的"文件"应用。你可以使用这些应用来打开和编辑JSON文件。虽然它们可能没有高级功能，但对于基本的编辑任务来说已经足够了。

代码编辑器应用：有一些专为移动设备设计的代码编辑器应用，它们提供了更高级的功能，如语法高亮、代码格式化和自动完成。一些流行的代码编辑器应用包括：

Android: QuickEdit、Jota+、Dcoder
iOS: Textastic、Coda、Working Copy
在线JSON编辑器：如果你有网络连接，可以使用在线JSON编辑器。这些工具允许你在浏览器中直接编辑JSON文件，并且通常提供了实时预览和格式化功能。一些流行的在线JSON编辑器包括：

JSON Editor Online
Code Beautify JSON Editor
JSONLint
云存储服务：许多云存储服务，如Google Drive、Dropbox、OneDrive等，都提供了文件编辑功能。你可以将JSON文件上传到这些服务中，然后在手机上使用它们的应用程序进行编辑。

JSON查看器应用：如果你只需要查看JSON文件而不需要编辑它们，可以使用JSON查看器应用。这些应用通常提供了友好的用户界面，用于浏览和搜索JSON数据。一些流行的JSON查看器应用包括：

JSON Viewer
JSON Explorer
JSON Editor
请根据你的具体需求和手机操作系统选择合适的工具。如果你需要频繁地编辑JSON文件，可能需要考虑使用更专业的代码编辑器应用或在线工具。


