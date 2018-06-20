class TodosController < ApplicationController
  def create
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
