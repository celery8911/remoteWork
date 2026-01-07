# 设置指南

## 前置要求

- GitHub 仓库（当前仓库）
- OpenAI API Key（用于 Codex）
- Claude Code 客户端（已安装）

## 步骤 1: 配置 GitHub Secrets

1. 打开 GitHub 仓库页面
2. 进入 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**
4. 添加密钥：
   - Name: `OPENAI_API_KEY`
   - Value: `你的 OpenAI API Key`

## 步骤 2: 启用 GitHub Actions

1. 进入仓库的 **Actions** 标签页
2. 如果提示启用 workflows，点击 **Enable workflows**
3. 确认 "Codex Worker" workflow 出现在列表中

## 步骤 3: 验证设置

运行测试：

```bash
# 1. 确保 task.md 有 TODO 任务
git add task.md
git commit -m "Add test task"
git push

# 2. 观察 GitHub Actions
# 访问 Actions 标签页，应该看到 "Codex Worker" 开始运行

# 3. 等待 Codex 创建 PR
# PR 会自动创建，标签为 "codex-submission"
```

## 步骤 4: 使用 Claude Code 审查

当 Codex 创建 PR 后，在 Claude Code 客户端输入：

```
检查最新的 codex-submission PR 并审查代码
```

## 目录结构

```
remoteWork/
├── .github/
│   └── workflows/
│       └── codex-worker.yml      # Codex 自动化脚本
├── .ai/
│   └── codex.prompt.md          # Codex 工作指令
├── problems/                     # Codex 输出目录
│   ├── 001-two-sum/
│   └── 002-add-two-numbers/
├── task.md                       # 任务清单（核心）
├── WORKFLOW.md                   # 工作流程说明
└── SETUP.md                      # 本文件
```

## 常见问题

### Q: Codex workflow 没有触发？
检查：
- task.md 是否已推送到 main 分支
- GitHub Actions 是否已启用
- OPENAI_API_KEY 是否正确配置

### Q: Codex 创建的 PR 为空？
可能原因：
- codex.prompt.md 指令不够清晰
- API key 权限不足
- 查看 Actions 日志获取详细错误

### Q: 如何调试？
1. 查看 GitHub Actions 运行日志
2. 在 PR 中查看 Codex 的输出
3. 手动触发 workflow：Actions → Codex Worker → Run workflow

## 下一步

查看 [WORKFLOW.md](WORKFLOW.md) 了解完整的工作流程和提示词模板。
