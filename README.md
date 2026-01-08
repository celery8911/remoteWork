# LeetCode AI 自动化练习系统

Codex (云端) 自动完成算法题 → Claude Code (本地) 审查代码 → 循环迭代

## 快速开始

### 1. 配置 Secrets
GitHub 仓库 Settings → Secrets → Actions 添加：
- `OPENAI_API_KEY`: OpenAI API Key
- `PAT_TOKEN`: GitHub Personal Access Token (可选)

### 2. 启用 Actions
Actions 标签页 → Enable workflows

### 3. 启用 PR 创建权限
Settings → Actions → General → Workflow permissions:
- ✅ Read and write permissions
- ✅ Allow GitHub Actions to create and approve pull requests

## 工作流程

```
更新 task.md (TODO) → push → Codex 创建 PR → Claude Code 审查 → 合并 + 添加新任务
```

**自动运行：**
1. 更新 [task.md](task.md) 添加 TODO 任务
2. `git push` 触发 GitHub Actions
3. Codex 自动实现代码并创建 PR

**Claude Code 审查：**
新会话中输入：
```
按照 .ai/CLAUDE.md 指引，监控并审查 Codex 的工作
```

## 目录结构

```
.ai/
  ├── codex.prompt.md    # Codex 执行指令
  └── CLAUDE.md          # Claude Code 审查指引
.github/workflows/
  └── codex-worker.yml   # 自动化触发
problems/                # 代码实现目录
task.md                  # 任务清单（核心）
```

## 故障排查

**Actions 未触发？**
- 检查 task.md 已推送到 main
- 检查 Secrets 配置正确

**PR 创建失败？**
- 确认启用了 PR 创建权限
- 检查 Actions 日志

**手动触发：**
Actions → Codex Worker → Run workflow
