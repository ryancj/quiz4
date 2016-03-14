

json.companies do
  json.array! @companies do |company|
    json.name company.name
    json.products company.products.map(&:name)
  end
end
