# 自动化工作流程说明

## 架构概览

```
task.md 更新 → Codex (云端) → 创建 PR → Claude Code (本地客户端) → 审查并更新 task.md
```

## Codex（自动运行）

当你更新 [task.md](task.md) 并推送到 GitHub 后：
1. GitHub Actions 自动检测到 `task.md` 的变化
2. Codex 读取所有 `Status: TODO` 的任务
3. 在 `problems/` 目录下实现代码
4. 自动创建 PR，标签为 `codex-submission`

## Claude Code（手动触发）

当你看到 Codex 创建的 PR 后，在 Claude Code 客户端使用以下提示词：

### 📋 基础审查提示词

```
检查最新的 codex-submission PR，审查代码质量：
1. 读取 PR 中的所有代码变更
2. 验证是否满足 task.md 中的要求
3. 检查代码质量（时间复杂度、空间复杂度、代码风格）
4. 如果通过：合并 PR 并更新 task.md 中对应任务为 DONE
5. 如果不通过：在 PR 中添加评论说明问题，关闭 PR
```

### 🔍 严格审查提示词

```
严格审查最新的 codex-submission PR：
1. 获取 PR 详情和所有文件变更
2. 对每个文件进行详细审查：
   - 算法正确性
   - 时间复杂度是否符合要求
   - 空间复杂度是否最优
   - 代码可读性和注释质量
   - TypeScript 类型安全
3. 运行测试（如果有）
4. 通过则合并并更新 task.md 状态为 DONE，添加完成时间
5. 不通过则详细说明问题并关闭 PR
```

### ➕ 添加新任务提示词

```
当前任务都已完成，添加新的 LeetCode 任务到 task.md：
1. 添加 3 道新的 LeetCode 题目
2. 难度递进：简单 → 中等 → 困难
3. 每个任务包含：题号、标题、要求、路径
4. Status 设置为 TODO
5. 提交更新
```

## 工作流程示例

### 第一轮
1. **你**: 提交更新后的 [task.md](task.md) (添加 TODO 任务)
2. **Codex**: 自动创建 PR
3. **你**: 在 Claude Code 输入审查提示词
4. **Claude Code**: 审查、合并、更新 task.md

### 第二轮
1. **你**: 在 Claude Code 输入添加新任务的提示词
2. **Claude Code**: 更新 task.md 添加新任务
3. **你**: 提交 task.md
4. **Codex**: 自动创建新的 PR...

## 快捷提示词

保存这些到你的笔记中：

```bash
# 快速审查
"检查并处理最新的 codex PR"

# 添加任务
"添加 3 道新的 LeetCode 题目到 task.md"

# 检查状态
"查看当前所有任务的完成状态"
```
