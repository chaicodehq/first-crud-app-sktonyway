import { Todo } from "../models/todo.model.js";

/**
 * TODO: Create a new todo
 * - Extract data from req.body
 * - Create todo in database
 * - Return 201 with created todo
 */
export async function createTodo(req, res, next) {
  try {
    // Your code here
    const { title, completed, priority, tags, dueDate } = req.body;
    const todo = await Todo.create(req.body)
    return res.status(201).json(todo)
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: List todos with pagination and filters
 * - Support query params: page, limit, completed, priority, search
 * - Default: page=1, limit=10
 * - Return: { data: [...], meta: { total, page, limit, pages } }
 */
export async function listTodos(req, res, next) {
  try {
    // Your code here
    const { page, limit, completed, priority, search } = req.params;

  } catch (error) {
    next(error);
  }
}

/**
 * TODO: Get single todo by ID
 * - Return 404 if not found
 */
export async function getTodo(req, res, next) {
  try {
    // Your code here
    let id = req.params.id;
    const todo = await Todo.findById(id);
    if (!todo) { return res.status(404).json({ error: { message: "Not found" } }) }
    return res.status(200).json(todo)
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: Update todo by ID
 * - Use findByIdAndUpdate with { new: true, runValidators: true }
 * - Return 404 if not found
 */
export async function updateTodo(req, res, next) {
  try {
    // Your code here
    const id = req.params.id;
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    if (!todo) { return res.status(404).json({ error: { message: "Not found" } }) }
    return res.status(200).json(todo)
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: Toggle completed status
 * - Find todo, flip completed, save
 * - Return 404 if not found
 */
export async function toggleTodo(req, res, next) {
  try {
    // Your code here
    const id = req.params.id;
    const todo = await Todo.findById(id)
    if (!todo) { return res.status(404).json({ error: { message: "Not found" } }) }

    todo.completed = !todo.completed
    await todo.save()
    res.status(200).json(todo)
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: Delete todo by ID
 * - Return 204 (no content) on success
 * - Return 404 if not found
 */
export async function deleteTodo(req, res, next) {
  try {
    // Your code here
    const id = req.params.id;
    const todo = await Todo.findByIdAndDelete(id)
    if (!todo) { return res.status(404).json({ error: { message: "Not found" } }) }
    return res.status(204).send()
  } catch (error) {
    next(error);
  }
}
