class CompaniesController < ApplicationController

  def index
    @companies = Company.all
    # question 3
    # index.json.jbuilder
  end

end
