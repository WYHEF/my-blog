---
title: 'TypeScript 学习笔记'
description: '记录 TypeScript 学习过程中的重点知识和最佳实践。'
pubDate: 2024-01-25
updatedDate: 2024-01-28
category: 'notes'
tags: ['TypeScript', '学习笔记', '前端']
---

## 为什么学习 TypeScript

TypeScript 是 JavaScript 的超集，添加了静态类型系统。使用 TypeScript 可以：

- 🔍 在编译时发现错误
- 📝 提供更好的代码提示
- 🛡️ 增强代码可维护性
- 📚 作为文档使用

## 基础类型

### 原始类型

```typescript
// 字符串
let name: string = "张三";

// 数字
let age: number = 25;

// 布尔值
let isStudent: boolean = true;

// null 和 undefined
let n: null = null;
let u: undefined = undefined;
```

### 数组和元组

```typescript
// 数组
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// 元组
let tuple: [string, number] = ["hello", 42];
```

### 对象类型

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // 可选属性
  readonly createdAt: Date; // 只读属性
}

const user: User = {
  id: 1,
  name: "张三",
  createdAt: new Date()
};
```

## 高级类型

### 联合类型

```typescript
type Status = "pending" | "success" | "error";

function handleStatus(status: Status) {
  switch (status) {
    case "pending":
      console.log("处理中...");
      break;
    case "success":
      console.log("成功！");
      break;
    case "error":
      console.log("错误！");
      break;
  }
}
```

### 泛型

```typescript
// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 泛型接口
interface Response<T> {
  data: T;
  status: number;
  message: string;
}

// 使用
const userResponse: Response<User> = {
  data: user,
  status: 200,
  message: "成功"
};
```

### 类型守卫

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function process(value: string | number) {
  if (isString(value)) {
    // 这里 TypeScript 知道 value 是 string
    console.log(value.toUpperCase());
  } else {
    // 这里 TypeScript 知道 value 是 number
    console.log(value.toFixed(2));
  }
}
```

## 实用工具类型

TypeScript 提供了许多内置的工具类型：

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial - 将所有属性变为可选
type PartialTodo = Partial<Todo>;

// Required - 将所有属性变为必需
type RequiredTodo = Required<Todo>;

// Readonly - 将所有属性变为只读
type ReadonlyTodo = Readonly<Todo>;

// Pick - 选择部分属性
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit - 排除部分属性
type TodoInfo = Omit<Todo, "completed">;
```

## 最佳实践

1. **使用严格模式**

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

2. **避免使用 any**

```typescript
// ❌ 不好
function process(data: any) {
  return data;
}

// ✅ 更好
function process<T>(data: T): T {
  return data;
}
```

3. **使用类型推断**

```typescript
// ❌ 冗余
const numbers: number[] = [1, 2, 3];

// ✅ 简洁
const numbers = [1, 2, 3]; // TypeScript 自动推断为 number[]
```

4. **合理使用接口和类型别名**

```typescript
// 对象形状使用 interface
interface User {
  name: string;
  age: number;
}

// 联合类型使用 type
type Status = "active" | "inactive";
```

## 总结

TypeScript 提供了强大的类型系统，能够显著提升代码质量和开发效率。虽然学习曲线稍陡，但投入时间学习是非常值得的。

持续学习，持续进步！

