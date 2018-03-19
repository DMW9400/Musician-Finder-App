
jazz = Genre.create(name:"jazz     ")
rb = Genre.create(name:"r&b     ")
rock = Genre.create(name:"rock     ")
folk = Genre.create(name:"folk     ")
electronic = Genre.create(name:"electronic     ")
country = Genre.create(name:"country     ")

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

thom = User.create(name: "Thom Yorke", borough:"Brooklyn",image_url:"http://cdn3-www.comingsoon.net/assets/uploads/2017/05/Yorke.jpg", age:49,gender:'M',top_song_url:'width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255800075&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">',song_embed_1:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/414769023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>)',song_embed_2:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/413639913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',  song_embed_3:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407165313&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')

erykah = User.create(name: "Erykah Badu", borough:"Queens",image_url:"https://www.fevermagazine.com/wp-content/uploads/2018/01/Erykah-Badu.jpeg", age:48,gender:'F',top_song_url:'width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255800075&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">',song_embed_1:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/414769023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>)',song_embed_2:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/413639913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',  song_embed_3:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407165313&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')

pj = User.create(name: "PJ Harvey", borough:"Staten Island",image_url:"https://www.filepicker.io/api/file/DNHHPMNUSuKHTQmk1XnY/convert?cache=true&crop=0%2C0%2C1356%2C678", age:41,gender:'F',top_song_url:'width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255800075&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">',song_embed_1:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/414769023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>)',song_embed_2:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/413639913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',  song_embed_3:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407165313&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')

d = User.create(name: "D'Angelo", borough:"Bronx",image_url:"http://www.rap-up.com/app/uploads/2015/01/dangelo-snl.jpg", age:41,gender:'M',top_song_url:'width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255800075&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">',song_embed_1:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/414769023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>)',song_embed_2:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/413639913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',  song_embed_3:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407165313&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>')

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


UserInstrument.all[0].update(:seeking => true)
UserInstrument.all[1].update(:seeking => false)
UserInstrument.all[2].update(:seeking => true)
UserInstrument.all[3].update(:seeking => false)
UserInstrument.all[4].update(:seeking => true)
UserInstrument.all[5].update(:seeking => false)
UserInstrument.all[6].update(:seeking => true)
UserInstrument.all[7].update(:seeking => false)
UserInstrument.all[8].update(:seeking => true)
UserInstrument.all[9].update(:seeking => false)
UserInstrument.all[10].update(:seeking => true)
UserInstrument.all[11].update(:seeking => false)
UserInstrument.all[12].update(:seeking => true)
UserInstrument.all[13].update(:seeking => false)
UserInstrument.all[14].update(:seeking => true)
UserInstrument.all[15].update(:seeking => false)
UserInstrument.all[16].update(:seeking => true)

    # relevant_user_instrument.update(:seeking => false)
