class TodosController < ApplicationController
  def create
    @todo = Todo.create!(todo_params)
  end

  def index
    @todos = Todo.all
  end

  def show
    @todo = Todo.find(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])
    @Todo.update(todo_params)
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.delete
  end

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
