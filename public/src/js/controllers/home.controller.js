(function () {
  angular.module('player')
    .controller('HomeController', HomeController);

  function HomeController () {
    var vm = this;

    vm.songs = [];

    vm.songs.push({
      name : 'Dive (Deluxe Version)',
      artist : 'Tycho',
      coverArt : 'http://cdn.shopify.com/s/files/1/0060/3652/products/Tycho-Dive-Cover_grande_1024x1024.jpeg?v=1386980102'
    });

    vm.songs.push({
      name : 'Radioactive',
      artist : 'Imagine Dragons',
      coverArt : 'https://38.media.tumblr.com/tumblr_mgxu8htbYx1qdpd9g_1358708607_cover.jpg'
    });

    vm.songs.push({
      name : 'Breakn\' A Sweat',
      artist : 'Skrillex',
      coverArt : 'http://a2.mzstatic.com/us/r30/Music/v4/58/e2/b8/58e2b819-e3d3-ffe2-3b6a-096425899f76/cover326x326.jpeg'
    });

    vm.songs.push({
      name : 'Coexist',
      artist : 'The xx',
      coverArt : 'http://www.yuppee.com/wp-content/uploads/2012/08/the_xx_coexist-300x300.jpg'
    });

    vm.songs.push({
      name : 'Seven Lions - EP',
      artist : 'Seven Lions',
      coverArt : 'http://img2-ak.lst.fm/i/u/300x300/17ca8225f8914ff08088140748b2d55a.jpg'
    });

    vm.songs.push({
      name : '18 Months',
      artist : 'Calvin Harris',
      coverArt : 'https://upload.wikimedia.org/wikipedia/pt/2/2a/Calvin_Harris_-_18_Months_cover.jpg'
    });

    vm.songs.push({
      name : 'Superheroes',
      artist : 'The Script',
      coverArt : 'http://vicstemumblog.com/wp-content/uploads/2014/08/The-Script-No-Sound-Without-Silence-2014-1200x1200-300x300.png'
    });

    vm.songs.push({
      name : 'Crystallize',
      artist : 'Lindsey Stirling',
      coverArt : 'https://upload.wikimedia.org/wikipedia/pt/5/52/Lindsey_Stirling_-_Lindsey_Stirling.jpg',
      status: 'playing'
    });

    vm.songs.push({
      name : 'The Diary of Jane',
      artist : 'Breaking Benjamin',
      coverArt : 'http://rymimg.com/lk/f/l/27210da0b765985df7cf442bd008adce/1898707.jpg'
    });

    vm.songs.push({
      name : 'Magic',
      artist : 'Coldplay',
      coverArt : 'http://movethatjukebox.com/wp-content/uploads/Coldplay_-_Ghost_Stories.png'
    });

    vm.songs.push({
      name : 'Powerless',
      artist : 'Linkin Park',
      coverArt : 'http://lyrics.songonlyrics.net/wp-content/uploads/2012/06/Living-Things-2012-Linkin-Park.jpg'
    });

    vm.songs.push({
      name : 'Too Close',
      artist : 'Alex Clare',
      coverArt : 'http://musictrajectory.com/wp-content/uploads/2012/08/alex-clare-too-close-ep-single-album-cover.jpg'
    });

    vm.songs.push({
      name : 'Go With The Flow',
      artist : 'Queens of the Stone Age',
      coverArt : 'https://upload.wikimedia.org/wikipedia/en/0/01/Queens_of_the_Stone_Age_-_Songs_for_the_Deaf.png'
    });

    vm.songs.push({
      name : 'Derezzed',
      artist : 'Daft Punk',
      coverArt : 'http://ffhdbrhd7sg2o09k.zippykid.netdna-cdn.com/wp-content/uploads/2011/01/troncover-300x300.jpg'
    });

    vm.songs.push({
      name : 'He\'s a Pirate',
      artist : 'Klaus Badelt',
      coverArt : 'http://img2-ak.lst.fm/i/u/300x300/485e096943934797a7e6c3ddf11b8adf.jpg'
    });

    vm.songs.push({
      name : 'Viva La Vida',
      artist : 'Coldplay',
      coverArt : 'http://s3.amazonaws.com/rapgenius/VivaLaVida.jpg'
    });

    vm.songs.push({
      name : 'Stairway to Heaven',
      artist : 'Led Zeppelin',
      coverArt : 'http://images.gibson.com/Lifestyle/English/aaFeaturesImages2010/Led-Zeppelin/Led-Zeppelin_IV_cover.jpg'
    });

    vm.songs.push({
      name : 'Supermassive Black Hole',
      artist : 'Muse',
      coverArt : 'http://3.bp.blogspot.com/-MtDNTo0yNqo/TeRRbFwzi_I/AAAAAAAACRw/KXmAKESOyG8/s320/blackholes_album.jpg'
    });

    vm.songs.push({
      name : 'Money For Nothing',
      artist : 'Dire Straits',
      coverArt : 'https://reinaldokramer.files.wordpress.com/2011/01/brothers_in_arms.jpg'
    });

    vm.songs.push({
      name : 'Get Lucky',
      artist : 'Daft Punk',
      coverArt : 'http://www.wikinoticia.com/images2//s3.cucharasonica.com/files/2013/04/Get-Lucky-Daft-Punk--300x300.jpg'
    });
  }

})();
