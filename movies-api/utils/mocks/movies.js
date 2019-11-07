const moviesMock = [
    {
        "id":"76299a88-58c2-4a0b-89b2-94b7063e5743",
        "title":"Amer",
        "year":2003,
        "cover":"http://dummyimage.com/131x250.png/dddddd/000000",
        "description":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "duration":35,
        "contentRating":"PG",
        "source":"https://nydailynews.com/morbi/sem/mauris/laoreet/ut/rhoncus/aliquet.png?lorem=sit&integer=amet&tincidunt=eros&ante=suspendisse&vel=accumsan&ipsum=tortor&praesent=quis&blandit=turpis&lacinia=sed&erat=ante&vestibulum=vivamus&sed=tortor&magna=duis&at=mattis&nunc=egestas&commodo=metus&placerat=aenean&praesent=fermentum&blandit=donec&nam=ut&nulla=mauris&integer=eget&pede=massa&justo=tempor&lacinia=convallis&eget=nulla&tincidunt=neque&eget=libero&tempus=convallis&vel=eget&pede=eleifend&morbi=luctus&porttitor=ultricies&lorem=eu&id=nibh&ligula=quisque&suspendisse=id&ornare=justo&consequat=sit&lectus=amet&in=sapien&est=dignissim&risus=vestibulum&auctor=vestibulum&sed=ante&tristique=ipsum&in=primis&tempus=in&sit=faucibus&amet=orci&sem=luctus&fusce=et&consequat=ultrices&nulla=posuere&nisl=cubilia&nunc=curae&nisl=nulla&duis=dapibus&bibendum=dolor&felis=vel&sed=est&interdum=donec&venenatis=odio&turpis=justo&enim=sollicitudin&blandit=ut&mi=suscipit&in=a&porttitor=feugiat",
        "tags":["Action|Crime|Drama","Drama"]
    },
    {
        "id":"b0011496-8d3c-4eb1-9d01-729a3ec19762",
        "title":"Monster, The",
        "year":2012,
        "cover":"http://dummyimage.com/193x232.png/cc0000/ffffff",
        "description":"Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "duration":33,
        "contentRating":"PG-13",
        "source":"https://hhs.gov/pede/justo.js?ligula=tempus&sit=vivamus&amet=in&eleifend=felis&pede=eu&libero=sapien&quis=cursus&orci=vestibulum&nullam=proin&molestie=eu&nibh=mi&in=nulla&lectus=ac&pellentesque=enim&at=in&nulla=tempor&suspendisse=turpis&potenti=nec&cras=euismod&in=scelerisque&purus=quam&eu=turpis&magna=adipiscing&vulputate=lorem&luctus=vitae&cum=mattis&sociis=nibh&natoque=ligula&penatibus=nec&et=sem&magnis=duis&dis=aliquam&parturient=convallis&montes=nunc&nascetur=proin&ridiculus=at&mus=turpis&vivamus=a&vestibulum=pede&sagittis=posuere&sapien=nonummy&cum=integer&sociis=non&natoque=velit&penatibus=donec&et=diam&magnis=neque&dis=vestibulum&parturient=eget&montes=vulputate&nascetur=ut&ridiculus=ultrices",
        "tags":["Drama|War"]
    },
    {
        "id":"f1a7ea4c-25dd-4e98-bd21-5bc1a6028aa3",
        "title":"I Know Where I'm Going!",
        "year":1968,
        "cover":"http://dummyimage.com/231x223.png/cc0000/ffffff",
        "description":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "duration":24,
        "contentRating":"PG-13",
        "source":"http://fc2.com/id/ligula/suspendisse/ornare/consequat.jpg?at=odio&velit=odio&eu=elementum&est=eu&congue=interdum&elementum=eu&in=tincidunt&hac=in&habitasse=leo&platea=maecenas&dictumst=pulvinar&morbi=lobortis&vestibulum=est&velit=phasellus&id=sit&pretium=amet&iaculis=erat&diam=nulla&erat=tempus&fermentum=vivamus&justo=in&nec=felis&condimentum=eu&neque=sapien&sapien=cursus&placerat=vestibulum&ante=proin&nulla=eu&justo=mi&aliquam=nulla&quis=ac&turpis=enim&eget=in&elit=tempor&sodales=turpis&scelerisque=nec&mauris=euismod&sit=scelerisque&amet=quam&eros=turpis&suspendisse=adipiscing&accumsan=lorem&tortor=vitae&quis=mattis&turpis=nibh&sed=ligula&ante=nec&vivamus=sem&tortor=duis&duis=aliquam&mattis=convallis&egestas=nunc&metus=proin&aenean=at&fermentum=turpis&donec=a&ut=pede&mauris=posuere&eget=nonummy&massa=integer&tempor=non&convallis=velit&nulla=donec",
        "tags":["Comedy","Crime|Drama","Comedy|Romance","Western","Comedy"]
    },
    {
        "id":"f1dc3921-740a-4d7d-9de7-492776d59138",
        "title":"John Doe: Vigilante",
        "year":2009,
        "cover":"http://dummyimage.com/126x223.jpg/5fa2dd/ffffff",
        "description":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "duration":75,
        "contentRating":"G",
        "source":"http://nih.gov/turpis/integer.js?et=varius&eros=ut&vestibulum=blandit&ac=non&est=interdum&lacinia=in&nisi=ante&venenatis=vestibulum&tristique=ante&fusce=ipsum&congue=primis&diam=in&id=faucibus&ornare=orci&imperdiet=luctus&sapien=et&urna=ultrices&pretium=posuere&nisl=cubilia&ut=curae&volutpat=duis&sapien=faucibus&arcu=accumsan&sed=odio&augue=curabitur&aliquam=convallis&erat=duis&volutpat=consequat&in=dui&congue=nec&etiam=nisi&justo=volutpat&etiam=eleifend&pretium=donec&iaculis=ut&justo=dolor&in=morbi&hac=vel&habitasse=lectus&platea=in&dictumst=quam&etiam=fringilla&faucibus=rhoncus&cursus=mauris&urna=enim&ut=leo&tellus=rhoncus&nulla=sed&ut=vestibulum&erat=sit&id=amet&mauris=cursus&vulputate=id&elementum=turpis&nullam=integer&varius=aliquet&nulla=massa&facilisi=id&cras=lobortis&non=convallis&velit=tortor&nec=risus&nisi=dapibus&vulputate=augue&nonummy=vel&maecenas=accumsan&tincidunt=tellus&lacus=nisi&at=eu&velit=orci&vivamus=mauris&vel=lacinia&nulla=sapien&eget=quis&eros=libero&elementum=nullam&pellentesque=sit&quisque=amet&porta=turpis&volutpat=elementum&erat=ligula&quisque=vehicula&erat=consequat&eros=morbi&viverra=a&eget=ipsum&congue=integer&eget=a&semper=nibh&rutrum=in&nulla=quis&nunc=justo&purus=maecenas&phasellus=rhoncus&in=aliquam&felis=lacus",
        "tags":["Drama"]
    },
    {
        "id":"ff72e7c4-d55b-476a-9e91-ed5f1c1b631a",
        "title":"Whistling in the Dark",
        "year":2003,
        "cover":"http://dummyimage.com/184x193.jpg/dddddd/000000",
        "description":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "duration":51,"contentRating":"G","source":"http://123-reg.co.uk/ut/mauris/eget/massa/tempor.xml?odio=justo&porttitor=pellentesque&id=viverra&consequat=pede&in=ac&consequat=diam&ut=cras&nulla=pellentesque&sed=volutpat&accumsan=dui&felis=maecenas&ut=tristique&at=est&dolor=et&quis=tempus&odio=semper&consequat=est&varius=quam&integer=pharetra&ac=magna&leo=ac&pellentesque=consequat&ultrices=metus&mattis=sapien&odio=ut&donec=nunc&vitae=vestibulum&nisi=ante&nam=ipsum&ultrices=primis&libero=in&non=faucibus&mattis=orci&pulvinar=luctus&nulla=et&pede=ultrices&ullamcorper=posuere&augue=cubilia&a=curae&suscipit=mauris&nulla=viverra&elit=diam&ac=vitae&nulla=quam&sed=suspendisse&vel=potenti&enim=nullam&sit=porttitor&amet=lacus&nunc=at&viverra=turpis&dapibus=donec&nulla=posuere&suscipit=metus",
        "tags":["Drama","Comedy|War","Drama|Romance"]
    },
    {
        "id":"221e91ef-ca26-49d2-9c2d-b17d0eb90021",
        "title":"Conspiracy, The",
        "year":1998,
        "cover":"http://dummyimage.com/209x202.png/ff4444/ffffff","description":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "duration":28,
        "contentRating":"G",
        "source":"http://columbia.edu/posuere/metus/vitae/ipsum.png?lobortis=at&convallis=nulla&tortor=suspendisse&risus=potenti&dapibus=cras&augue=in&vel=purus&accumsan=eu&tellus=magna&nisi=vulputate&eu=luctus&orci=cum&mauris=sociis&lacinia=natoque&sapien=penatibus&quis=et&libero=magnis&nullam=dis&sit=parturient&amet=montes&turpis=nascetur&elementum=ridiculus&ligula=mus&vehicula=vivamus&consequat=vestibulum&morbi=sagittis&a=sapien&ipsum=cum&integer=sociis&a=natoque&nibh=penatibus&in=et&quis=magnis&justo=dis&maecenas=parturient&rhoncus=montes&aliquam=nascetur&lacus=ridiculus&morbi=mus&quis=etiam&tortor=vel&id=augue&nulla=vestibulum&ultrices=rutrum&aliquet=rutrum&maecenas=neque&leo=aenean&odio=auctor&condimentum=gravida&id=sem&luctus=praesent&nec=id&molestie=massa&sed=id&justo=nisl&pellentesque=venenatis&viverra=lacinia&pede=aenean&ac=sit&diam=amet&cras=justo&pellentesque=morbi&volutpat=ut&dui=odio&maecenas=cras&tristique=mi&est=pede",
        "tags":["Comedy"]
    },
    {
        "id":"d3627c74-1d3c-49be-a91e-456ae5f62598",
        "title":"Amandla! A Revolution in Four Part Harmony",
        "year":1993,
        "cover":"http://dummyimage.com/227x132.png/dddddd/000000",
        "description":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "duration":53,
        "contentRating":"PG-13",
        "source":"https://blog.com/vulputate/elementum/nullam/varius/nulla/facilisi.xml?enim=dictumst&leo=etiam&rhoncus=faucibus&sed=cursus&vestibulum=urna&sit=ut&amet=tellus&cursus=nulla&id=ut&turpis=erat&integer=id&aliquet=mauris&massa=vulputate&id=elementum&lobortis=nullam&convallis=varius&tortor=nulla&risus=facilisi&dapibus=cras&augue=non&vel=velit&accumsan=nec&tellus=nisi&nisi=vulputate&eu=nonummy&orci=maecenas&mauris=tincidunt&lacinia=lacus&sapien=at&quis=velit&libero=vivamus&nullam=vel&sit=nulla&amet=eget&turpis=eros&elementum=elementum&ligula=pellentesque&vehicula=quisque&consequat=porta&morbi=volutpat&a=erat&ipsum=quisque&integer=erat&a=eros&nibh=viverra&in=eget&quis=congue&justo=eget&maecenas=semper&rhoncus=rutrum&aliquam=nulla&lacus=nunc&morbi=purus&quis=phasellus&tortor=in&id=felis&nulla=donec&ultrices=semper&aliquet=sapien&maecenas=a&leo=libero&odio=nam&condimentum=dui&id=proin&luctus=leo&nec=odio&molestie=porttitor&sed=id&justo=consequat&pellentesque=in&viverra=consequat&pede=ut&ac=nulla&diam=sed&cras=accumsan&pellentesque=felis&volutpat=ut&dui=at&maecenas=dolor&tristique=quis&est=odio&et=consequat&tempus=varius&semper=integer&est=ac&quam=leo&pharetra=pellentesque&magna=ultrices&ac=mattis&consequat=odio",
        "tags":["Drama|Thriller"]
    },
    {
        "id":"3905f5b5-2398-47da-b60a-807cfece4206",
        "title":"When the Last Sword is Drawn (Mibu gishi den)",
        "year":1991,
        "cover":"http://dummyimage.com/160x191.bmp/cc0000/ffffff",
        "description":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "duration":22,
        "contentRating":"NC-17",
        "source":"http://miitbeian.gov.cn/metus/sapien/ut/nunc/vestibulum/ante/ipsum.js?porttitor=eget&id=semper&consequat=rutrum&in=nulla&consequat=nunc&ut=purus&nulla=phasellus&sed=in&accumsan=felis&felis=donec&ut=semper&at=sapien&dolor=a&quis=libero&odio=nam&consequat=dui&varius=proin&integer=leo&ac=odio&leo=porttitor&pellentesque=id&ultrices=consequat&mattis=in&odio=consequat&donec=ut&vitae=nulla&nisi=sed&nam=accumsan&ultrices=felis&libero=ut&non=at&mattis=dolor&pulvinar=quis&nulla=odio&pede=consequat&ullamcorper=varius&augue=integer&a=ac&suscipit=leo&nulla=pellentesque&elit=ultrices&ac=mattis&nulla=odio&sed=donec&vel=vitae&enim=nisi&sit=nam&amet=ultrices&nunc=libero&viverra=non&dapibus=mattis&nulla=pulvinar&suscipit=nulla&ligula=pede&in=ullamcorper&lacus=augue&curabitur=a&at=suscipit&ipsum=nulla&ac=elit&tellus=ac&semper=nulla&interdum=sed&mauris=vel&ullamcorper=enim&purus=sit&sit=amet&amet=nunc&nulla=viverra&quisque=dapibus",
        "tags":["Comedy|Drama","Drama"]
    },
    {
        "id":"849563c8-3428-4906-b3a4-bc92fb3a1fa6",
        "title":"Boy on a Dolphin",
        "year":2004,
        "cover":"http://dummyimage.com/172x132.jpg/5fa2dd/ffffff",
        "description":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "duration":67,
        "contentRating":"PG-13",
        "source":"http://bloomberg.com/duis/at/velit/eu/est/congue/elementum.aspx?nullam=orci&molestie=eget&nibh=orci&in=vehicula&lectus=condimentum&pellentesque=curabitur&at=in&nulla=libero&suspendisse=ut&potenti=massa&cras=volutpat&in=convallis&purus=morbi&eu=odio&magna=odio&vulputate=elementum&luctus=eu&cum=interdum&sociis=eu&natoque=tincidunt&penatibus=in&et=leo&magnis=maecenas&dis=pulvinar&parturient=lobortis&montes=est&nascetur=phasellus&ridiculus=sit&mus=amet&vivamus=erat&vestibulum=nulla&sagittis=tempus&sapien=vivamus&cum=in&sociis=felis&natoque=eu&penatibus=sapien&et=cursus&magnis=vestibulum&dis=proin&parturient=eu&montes=mi&nascetur=nulla&ridiculus=ac&mus=enim&etiam=in&vel=tempor&augue=turpis&vestibulum=nec&rutrum=euismod&rutrum=scelerisque&neque=quam&aenean=turpis&auctor=adipiscing&gravida=lorem&sem=vitae&praesent=mattis&id=nibh&massa=ligula&id=nec&nisl=sem&venenatis=duis&lacinia=aliquam&aenean=convallis&sit=nunc&amet=proin&justo=at&morbi=turpis&ut=a&odio=pede&cras=posuere&mi=nonummy&pede=integer&malesuada=non&in=velit&imperdiet=donec&et=diam",
        "tags":["Drama","Horror|Thriller","Adventure|Animation|Children","Drama","Comedy|Horror"]
    },
    {  
        "id":"b07aae9f-1f04-4378-bdb8-33bcbeebb3f5",
        "title":"Open Hearts (Elsker dig for evigt)",
        "year":2006,"cover":"http://dummyimage.com/181x203.png/cc0000/ffffff",
        "description":"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "duration":24,
        "contentRating":"PG-13",
        "source":"https://godaddy.com/donec/odio/justo/sollicitudin/ut/suscipit.html?consequat=sed&in=vel&consequat=enim&ut=sit&nulla=amet&sed=nunc&accumsan=viverra&felis=dapibus&ut=nulla&at=suscipit&dolor=ligula&quis=in",
        "tags":["Comedy|Musical","Comedy|Drama","Drama|Mystery|Thriller","Adventure|Animation|Children|Comedy|Fantasy"]
    }
];

module.exports = {
    moviesMock
}