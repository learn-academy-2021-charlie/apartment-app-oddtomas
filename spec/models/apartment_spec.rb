
require 'rails_helper'

RSpec.describe Apartment, type: :model do
  let(:user) { User.create email: 'thomas@test.com', password: 'test123', password_confirmation: 'test123' }

  it 'should have a valid street' do
    apartment = Apartment.create city: 'Los Angeles', state: 'CA', manager: 'Tyson Fury', email: 'gk@gmail.com', price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no', user_id: user.id
    expect(apartment.errors[:street]).to include "can't be blank"
  end
  it 'should have a valid city' do
    apartment = Apartment.create street: '221B Baker Street', state: 'CA', manager: 'Tyson Fury', email: 'gk@gmail.com', price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no', user_id: user.id
    expect(apartment.errors[:city]).to include "can't be blank"
  end
  it 'should have a valid state' do
    apartment = Apartment.create street: '221B Baker Street', city: 'Los Angeles', manager: 'Tyson Fury', email: 'gk@gmail.com', price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no', user_id: user.id
    expect(apartment.errors[:state]).to include "can't be blank"
  end
  it 'should have a valid manager' do
    apartment = Apartment.create street: '221B Baker Street', city: 'Los Angeles', state: 'CA', email: 'gk@gmail.com', price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no', user_id: user.id
    expect(apartment.errors[:manager]).to include "can't be blank"
  end
  it 'should have a valid email' do
    apartment = Apartment.create street: '221B Baker Street', city: 'Los Angeles', state: 'CA', manager: 'Tyson Fury', price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no', user_id: user.id
    expect(apartment.errors[:email]).to include "can't be blank"
  end
  it 'should have a valid price' do
    apartment = Apartment.create street: '221B Baker Street', city: 'Los Angeles', state: 'CA', manager: 'Tyson Fury', email: 'gk@gmail.com', bedrooms: 2, bathrooms: 2, pets: 'no', user_id: user.id
    expect(apartment.errors[:price]).to include "can't be blank"
  end
  it 'should have a valid bedrooms' do
    apartment = Apartment.create street: '221B Baker Street', city: 'Los Angeles', state: 'CA', manager: 'Tyson Fury', email: 'gk@gmail.com', price: '1000', bathrooms: 2, pets: 'no', user_id: user.id
    expect(apartment.errors[:bedrooms]).to include "can't be blank"
  end
  it 'should have a valid bathrooms' do
    apartment = Apartment.create street: '221B Baker Street', city: 'Los Angeles', state: 'CA', manager: 'Tyson Fury', email: 'gk@gmail.com', price: '1000', bedrooms: 2, pets: 'no', user_id: user.id
    expect(apartment.errors[:bathrooms]).to include "can't be blank"
  end
  it 'should have a valid pets' do
    apartment = Apartment.create street: '221B Baker Street', city: 'Los Angeles', state: 'CA', manager: 'Tyson Fury', email: 'gk@gmail.com', price: '1000', bedrooms: 2, bathrooms: 2, user_id: user.id
    expect(apartment.errors[:pets]).to include "can't be blank"
  end
  it 'should have a valid user' do
    apartment = Apartment.create street: '221B Baker Street', city: 'Los Angeles', state: 'CA', manager: 'Tyson Fury', email: 'gk@gmail.com',price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no'
    expect(apartment.errors[:user]).to include "must exist"
  end
end