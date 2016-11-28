import { Router, Request, Response, NextFunction } from "express"
import { model } from "mongoose"

const TodosRouter: Router = Router()

const Todo = model("Todo")

TodosRouter.get("/", function(request: Request, response: Response, next: NextFunction) {
  Todo.find(function(err, todos) {
    if (err) return next(err)
    response.json(todos)
  })
})

TodosRouter.post("/", function(request: Request, response: Response, next: NextFunction) {
  Todo.create(request.body, function(err, todo) {
    if (err) return next(err)
    response.json(todo)
  })
})

TodosRouter.get("/:id", function(request: Request, response: Response, next: NextFunction) {
  Todo.findById(request.params.id, function(err, todo) {
    if (err) return next(err)
    response.json(todo)
  })
})

TodosRouter.put("/:id", function(request: Request, response: Response, next: NextFunction) {
  Todo.findByIdAndUpdate(request.params.id, request.body, { new: true }, function(err, todo) {
    if (err) return next(err)
    response.json()
  })
})

TodosRouter.delete("/:id", function(request: Request, response: Response, next: NextFunction) {
  Todo.findByIdAndRemove(request.params.id, function(err, todo) {
    if (err) return next(err)
    response.json()
  })
})

export { TodosRouter }