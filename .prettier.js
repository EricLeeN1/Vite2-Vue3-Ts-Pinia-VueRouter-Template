module.exports = {
  useTabs: false, // 使用tab缩进
  printWidth: 100, // 换行长度，默认80
  tabWidth: 2, // 缩进大小
  jsxSingleQuote: true,
  bracketSameLine: true, // 设置为true时,将多行元素的 > 放在最后一行的末尾，而不是单独放在下一行
  singleQuote: true, // 字符串使用单引号
  semi: true, // 每行末尾自动添加分号
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: "always",
  trailingComma: "none", // 在多行逗号分隔的句法结构中尽可能打印尾随逗号。
  bracketSpacing: true, // 在对象中的括号之间打印空格。
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
};
