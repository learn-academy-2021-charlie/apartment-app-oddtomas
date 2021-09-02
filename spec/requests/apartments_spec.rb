require 'rails_helper'

  RSpec.describe "Apartments", type: :request do
    let(:user) do
      User.create email: 'thomas@test.com', password: 'test123', password_confirmation: 'test123'
    end
  
    describe "GET /index" do
      it 'gets all the apartments' do
        Apartment.create street: '123 Sycamore lane', city: 'Los Angeles', state: 'CA', manager: 'Tyson Fury', email: 'tyson@testing.com', price: '100,000', bedrooms: 20, bathrooms: 1, pets: 'all pets welcome', user_id: user.id
  
        get '/apartments'
  
        apartments = JSON.parse(response.body)
        expect(apartments.length).to eq 1
        expect(response).to have_http_status(200)
  
      apartment = apartments.first
      expect(apartment['street']).to eq '123 Sycamore lane'
      expect(apartment['city']).to eq 'Los Angeles'
      expect(apartment['state']).to eq 'CA'
      expect(apartment['manager']).to eq 'Tyson Fury'
      expect(apartment['email']).to eq 'tyson@testing.com'
      expect(apartment['price']).to eq '100,000'
      expect(apartment['bedrooms']).to eq 20
      expect(apartment['bathrooms']).to eq 1
      expect(apartment['pets']).to eq 'all pets welcome'
      end
    end

end


