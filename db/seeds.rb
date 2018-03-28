require 'faker'

jazz = Genre.create(name:"jazz")
rb = Genre.create(name:"r&b")
rock = Genre.create(name:"rock")
folk = Genre.create(name:"folk")
electronic = Genre.create(name:"electronic")
country = Genre.create(name:"country")

pinkfloyd = Artist.create(name:"Pink Floyd")
milesdavis = Artist.create(name:"Miles Davis")
fleetfoxes = Artist.create(name: "Fleet Foxes")
novos = Artist.create(name:"Novos Baianos")

trumpet = Instrument.create(name:"trumpet")
saxophone = Instrument.create(name:"saxophone")
guitar = Instrument.create(name:"guitar")
marimba = Instrument.create(name:"marimba")
tuba = Instrument.create(name:"tuba")
apiano = Instrument.create(name:"piano")
epiano = Instrument.create(name:"electric piano")
harp = Instrument.create(name:"harp")
drums = Instrument.create(name:"drums")

instruments = ['Electric Guitar', 'Acoustic Guitar', 'Flute', 'Trumpet', 'Clarinet', 'Cello', 'Harp', 'Xylophone', 'Harmonica', 'Accordion', 'Organ', 'Piano', 'Ukelele', 'Saxophone', 'Drums', 'Violin', 'Bass Guitar', 'Electric Piano', 'Synthesizer', 'Vocals - Lead Singer', 'Vocals - Backup Singer', 'Production', 'Engineer']

genres = ['Rock', 'Pop', 'Alternative', 'New Age', 'Bossa Nova', 'Flamenco', 'Classical', 'Electronic', 'Psychedelic Rock', 'Soul', 'Neo-Soul', 'Klezmer', 'Bluegrass', 'Country', 'R&B', 'Motown', 'Jazz', 'Gypsy Jazz', 'Swing']

instruments.each do |instrument|
  Instrument.create(name: instrument)
end


boroughs = ["Manhattan", "Brooklyn", "Queens", "Staten Island", "Bronx"]



thom = User.create(name: "Thom Yorke", password:"123", borough:"Brooklyn",image_url:"http://cdn3-www.comingsoon.net/assets/uploads/2017/05/Yorke.jpg", age:49,gender:'M',top_song_url:'width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/25800075&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">',song_embed_1:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/414769023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>)',song_embed_2:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/413639913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',  song_embed_3:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407165313&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')

erykah = User.create(name: "Erykah Badu", password:"123", borough:"Queens",image_url:"https://www.fevermagazine.com/wp-content/uploads/2018/01/Erykah-Badu.jpeg", age:48,gender:'F',top_song_url:'width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255800075&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">',song_embed_1:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/414769023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>)',song_embed_2:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/413639913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',  song_embed_3:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407165313&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')

pj = User.create(name: "PJ Harvey", password:"123", borough:"Staten Island",image_url:"https://www.filepicker.io/api/file/DNHHPMNUSuKHTQmk1XnY/convert?cache=true&crop=0%2C0%2C1356%2C678", age:41,gender:'F',top_song_url:'width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255800075&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">',song_embed_1:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/414769023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>)',song_embed_2:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/413639913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',  song_embed_3:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407165313&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')

d = User.create(name: "D'Angelo", password:"123", borough:"Bronx",image_url:"http://www.rap-up.com/app/uploads/2015/01/dangelo-snl.jpg", age:41,gender:'M',top_song_url:'width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255800075&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">',song_embed_1:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/414769023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>)',song_embed_2:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/413639913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',  song_embed_3:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407165313&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')

50.times do
  User.create(name: Faker::Name.name, password: "123", )
end




thom.instruments << guitar << epiano << drums << trumpet
thom.genres << jazz << rb << rock
thom.artists << pinkfloyd << novos

erykah.instruments << apiano << epiano << marimba << saxophone
erykah.genres << rb << electronic << country
erykah.artists << fleetfoxes << pinkfloyd

pj.instruments << tuba << guitar << trumpet << saxophone
pj.genres << country << rock << folk
pj.artists << novos << pinkfloyd << milesdavis

d.instruments << apiano << trumpet << drums << tuba << guitar
d.genres << rock << rb << electronic
d.artists << pinkfloyd << milesdavis

bool=true
UserInstrument.all.each do |ui|
  if bool == true
    ui.update(:seeking => true)
    bool = !bool
  elsif bool == false
    ui.update(:seeking => false)
    bool = !bool
  end
end


Message.create(recipient_id:1,sender_id:2, message:"Message 1 to thom from erykah")
Message.create(recipient_id:2,sender_id:1, message:"Message 2 to erkyah from thom")
Message.create(recipient_id:1,sender_id:2, message:"Message 3 to thom from erykah")
Message.create(recipient_id:2,sender_id:1, message:"Message 4 to erykah from thom")

Message.create(recipient_id:1,sender_id:3, message:"Message 1 to thom from pj")
Message.create(recipient_id:3,sender_id:1, message:"Message 2 to erkyah from thom")
Message.create(recipient_id:1,sender_id:3, message:"Message 3 to thom from pj")
Message.create(recipient_id:3,sender_id:1, message:"Message 4 to pj from thom")

Message.create(recipient_id:2,sender_id:2, message:"This is message one")
Message.create(recipient_id:2,sender_id:3, message:"This is message two")
Message.create(recipient_id:2,sender_id:4, message:"This is message three")

Message.create(recipient_id:3,sender_id:2, message:"This is message one")
Message.create(recipient_id:3,sender_id:3, message:"This is message two")
Message.create(recipient_id:3,sender_id:4, message:"This is message three")

Message.create(recipient_id:4,sender_id:2, message:"This is message one")
Message.create(recipient_id:4,sender_id:3, message:"This is message two")
Message.create(recipient_id:4,sender_id:4, message:"This is message three")
