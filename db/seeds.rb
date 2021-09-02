# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = [
  {
    email: 'thomas@test.com',
    password: 'testing123',
    password_confirmation: 'testing123'
  }
]

users.each do |attribute|
  User.create attribute
end

apartments = [
  {
    street: '123 Sycamore lane',
    city: 'Los Angeles',
    state: 'CA',
    manager: 'Tyson Fury',
    email: 'tyson@testing.com',
    price: '100,000',
    bedrooms: 20,
    bathrooms: 1,
    pets: 'all pets welcome'
  },
  {
    street: '454 W River Dr',
    city: 'Pennsauken',
    state: 'NJ',
    manager: 'Method Man',
    email: 'method@testing.com',
    price: '1000',
    bedrooms: 2,
    bathrooms: 3,
    pets: 'na'
  }
]

first_user = User.where(email: 'thomas@test.com').first

apartments.each do |attribute|
  first_user.apartments.create attribute
end