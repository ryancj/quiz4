class Company < ActiveRecord::Base
  has_many :products, dependent: :nullify

  def index
    @companies = Company.all
  end
end
