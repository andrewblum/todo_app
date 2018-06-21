class TodosController < ApplicationController
  def create
    @todo = Todo.new()
    @Todo.save!
  end

  def index
    @todos = Todo.all
  end

  def show
  end

  def update
  end

  def destroy
  end
end
