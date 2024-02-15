# 本地调试 npm 包

使用 `npm link` 命令将本地的 npm 包链接到项目中进行调试，无需发布到 npm 仓库。

> 注意: `npm link` 命令链接的其实是一个软链接

## 命令

进入到项目的根目录，然后执行以下命令：

```bash
# 注册 npm 包到全局 (可以在全局的 node_modules 中找到)
npm link

# 链接到本地 （可以在当前项目 node_modules 中找到）
npm link <package-name>
```

断开引入的 npm 包链接:

```bash
# 断开注册到全局的 npm 包链接
npm link
# 断开链接到本地的 npm 包链接
npm unlink <package-name>
```

## 查看 npm 包链接

```bash
# 查看全局链接的 npm 包
npm ls -g --depth=0

# 查看本地链接的 npm 包
npm ls --depth=0
```

## 参考

- [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link)