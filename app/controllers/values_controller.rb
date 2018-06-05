class ValuesController < ApplicationController

  @values = []
  NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  OPS = ['+', '-']

  def create
    val = params[:val]
    #no values yet and val not a number
    if @values.length == 0 && !NUMS.include?(val)
      render json: ['error, must start with a num'], status: 400
    elsif @values.length == 0 && NUMS.include?(val)
      @values << val
    elsif NUMS.include?(@values[-1]) && !OPS.include?(val)
      render json: ['error, two numbers in a row'], status: 400
    elsif OPS.include?(@values[-1]) && !NUMS.include?(@values[-1])
      render json: ['error, two operations in a row'], status: 400
    elsif !OPS.include?(@values[-1]) && !NUMS.include?(val)
      render json: ['error, invalid input'], status: 400
    else
      @values << val
      render json: @values
    end
  end

  private
  def val_params
    params.require(:values).permit(:val)
  end

end
