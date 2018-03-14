# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

matt = User.create(name:"Matt",image_url:"google.com",age:26,gender:'M',top_song_url:"autechre.com")
molly = User.create(name:"Molly",image_url:"google.com",age:26,gender:'F',top_song_url:"thehollies.com")
scott = User.create(name:"Scott",image_url:"google.com",age:28,gender:'M',top_song_url:"spoon.com")
melei = User.create(name:"Melei",image_url:"google.com",age:26,gender:'F',top_song_url:"boysage.com")

jazz = Genre.create(name:"jazz")
rb = Genre.create(name:"r&b")
rock = Genre.create(name:"rock")
folk = Genre.create(name:"folk")

pinkfloyd = Artist.create(name:"Pink Floyd")
milesdavis = Artist.create(name:"Miles Davis")
fleetfoxes = Artist.create(name: "Fleet Foxes")
novos = Artist.create(name:"Novos Baianos")

trumpet = Instrument.create(name:"trumpet")
saxophone = Instrument.create(name:"saxophone")
guitar = Instrument.create(name:"guitar")
marimba = Instrument.create(name:"marimba")


matt.genres << jazz << folk
molly.genres << folk << rb
scott.genres << rock
melei.genres <<  jazz << rb << folk << rock

matt.artists << milesdavis << fleetfoxes
molly.artists << novos << pinkfloyd
scott.artists << fleetfoxes
melei.artists <<  pinkfloyd << milesdavis << novos << fleetfoxes

matt.instruments << saxophone << guitar
molly.instruments << guitar << marimba
scott.instruments << trumpet
melei.instruments << marimba << saxophone
