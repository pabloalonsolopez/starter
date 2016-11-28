import { Schema, model } from "mongoose"

const TodoSchema = new Schema({
  name: String
})

const Todo = model("Todo", TodoSchema)

export { Todo }