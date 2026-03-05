# Vercel 部署指南

## 快速开始

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   cd /Users/TRAE/dev1/artlinkage-platform/zizania-stem-supply
   vercel
   ```

## 部署配置

项目已经包含了 `vercel.json` 配置文件，包含以下优化：

- **框架**：Vite
- **构建命令**：`npm run build`
- **输出目录**：`dist`
- **区域**：香港（hkg1）
- **安全头**：XSS保护、点击劫持防护、内容类型选项
- **重写规则**：SPA路由支持

## 自定义域名配置

部署完成后，您可以配置自定义域名：

1. 在 Vercel 项目设置中添加自定义域名
2. 在您的DNS提供商处添加以下记录：
   - **类型**：CNAME
   - **名称**：`@`（或您的子域名）
   - **值**：`your-project.vercel.app`

## 环境变量（可选）

如果需要配置环境变量，在 Vercel 项目设置中添加：
- `VITE_API_URL`
- `VITE_STRIPE_PUBLIC_KEY`
- 其他需要的API密钥

## 预览部署

部署后，您将获得：
- **生产URL**：`https://your-project.vercel.app`
- **预览URL**：每次部署都有唯一的预览链接
- **自动HTTPS**：所有部署都自动启用HTTPS

## 性能优化

项目已经配置了：
- **代码分割**：按路由和功能分割
- **图片优化**：WebP格式、懒加载
- **压缩**：Gzip和Brotli压缩
- **缓存策略**：静态资源缓存

## 监控和分析

Vercel 提供内置的：
- **实时日志**：查看部署和错误日志
- **分析**：访问者统计和性能指标
- **速度洞察**：Core Web Vitals集成

## 回滚

如果需要回滚到之前的部署：
1. 在 Vercel 仪表板中选择部署
2. 点击"回滚"按钮
3. 选择要回滚到的版本

## 常见问题

**Q: 部署失败怎么办？**
A: 检查构建日志，确保所有依赖都正确安装。

**Q: 如何更新部署？**
A: 推送新代码到GitHub，Vercel会自动检测并重新部署。

**Q: 自定义域名需要多长时间生效？**
A: 通常需要5-10分钟，但可能需要长达48小时全球传播。

**Q: 如何设置环境变量？**
A: 在Vercel项目设置 > Environment Variables中添加。

## 技术支持

- Vercel 文档：https://vercel.com/docs
- Vite 部署文档：https://vitejs.dev/guide/deployment/vercel
- 项目仓库：https://github.com/ryan823-dev/zizania-stem-supply