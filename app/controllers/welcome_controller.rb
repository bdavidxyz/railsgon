class WelcomeController < ApplicationController
  def index
    @grocery_list = [{'id' => 0, 'text' => 'Vegetables'}, {'id' => 1, 'text' => 'Cheese'}, {'id' => 2, 'text' => 'Whatever'}, ]
    @display_light = false
  end
end
