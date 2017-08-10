class WelcomeController < ApplicationController
  def index
    @your_int = 123
    @your_array = [1,2]
    @your_hash = {'a' => 1, 'b' => 2}
    @all_articles = Article.all
    @first_comments = @all_articles.first.comments
    @first_article = Article.first
    # name_to_code = countries.map{ |c| [c.name,c.code] }.to_h



    # p '@first_comments are ' + @first_comments.inspect 
    # gon.your_int = @first_article.comments.count
    gon.your_obj = @first_article.as_json(:include => [:comments])
    # gon.your_list = @first_comments
    # gon.your_other_int = 345 + gon.your_int
    # gon.your_array = @your_array
    # gon.your_array << gon.your_int
    # gon.your_hash = @your_hash
  end
end
