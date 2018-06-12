var cards = [
	[ 1, ['images/matuKasu1.png', 'images/matuKasu2.png', 'images/matuHuda.png', 'images/matuTuru.png'] ],
	[ 2, ['images/kiriKasu1.png', 'images/kiriKasu2.png', 'images/kiriKasu3.png', 'images/kiriHouou.png'] ],
	[ 3, ['images/sakuraKasu1.png', 'images/sakuraKasu2.png', 'images/sakuraHuda.png', 'images/sakuraMaku.png'] ],
	[ 4, ['images/hujiKasu1.png', 'images/hujiKasu2.png', 'images/hujiHuda.png', 'images/hujiHototogisu.png'] ],
	[ 5, ['images/ayameKasu1.png', 'images/ayameKasu2.png', 'images/ayameHuda.png', 'images/ayameYatuhasi.png'] ],
	[ 6, ['images/botanKasu1.png', 'images/botanKasu2.png', 'images/botanHuda.png', 'images/botanTyou.png'] ],
	[ 7, ['images/hagiKasu1.png', 'images/hagiKasu2.png', 'images/hagiHuda.png', 'images/hagiInosisi.png'] ],
	[ 8, ['images/susukiKasu1.png', 'images/susukiKasu2.png', 'images/susukiKari.png', 'images/susukiTuki.png'] ],
	[ 9, ['images/kikuKasu1.png', 'images/kikuKasu2.png', 'images/kikuHuda.png', 'images/kikuSakazuki.png'] ],
	[ 10, ['images/momijiKasu1.png', 'images/momijiKasu2.png', 'images/momijiHuda.png', 'images/momijiSika.png'] ],
	[ 11, ['images/yanagiKasu.png', 'images/yanagiHuda.png', 'images/yanagiOno.png', 'images/yanagiTubame.png'] ],
	[ 12, ['images/kiriKasu1.png', 'images/kiriKasu2.png', 'images/kiriKasu3.png', 'images/kiriHouou.png'] ],
];

//JSONの連想配列
var c = {
	'Jan': {
		'name': 'matu',
		'card1': {
			'name': 'matuKasu1', 
			'type': 1
		},
		'card2': {
			'name': 'matuKasu1', 
			'type': 1
		},
		'card3': {
			'name': 'matuKasu1', 
			'type': 1
		},
		'card4': {
			'name': 'matuKasu1', 
			'type': 1
		},
	},
}

//JSONの連想配列
c = {
	'Jan': {
		'name': 'matu',
		'card1': {
			'name': 'matuKasu1', 
			'type': 1
		},
		'card2': {
			'name': 'matuKasu1', 
			'type': 1
		},
		'card3': {
			'name': 'matuKasu1', 
			'type': 1
		},
		'card4': {
			'name': 'matuKasu1', 
			'type': 1
		},
	},
}

// JSON human のデータ
human = {
  'superSonico': {
    'name': 'sonico',
    'favoriteSong': 'SUPERORBITAL',
    'battleStyle': {
      'type': 'support',
      'isUsedFlag': 'false',
    }
  }
  'sawadaTunayosi': {
    'name': 'tuna',
    'favoriteSong': 'null',
    'battleStyle': {
      'type': 'contact',
      'isUsedFlag': 'false',
    }
  }
  ':q': {
    'name': 'sonico',
    'favoriteSong': 'SUPERORBITAL',
    'battleStyle': {
      'type': 'support',
      'isUsedFlag': 'false',
    }
  }
}

/* ロード時 */
window.onload = function() {
	//カードをセット	
	e = new Array(8);
	for(var cNum = 0; cNum < e.length; cNum++) {
		e[cNum] = document.createElement('img');
		var mRan = Math.floor(Math.random() * 12);
		var cRan = Math.floor(Math.random() * 4);
		e[cNum].id = cards[mRan][1][cRan]; // 月ごとに種類分け
		e[cNum].src = cards[mRan][1][cRan];	// 画像を指定
	}
	for(var key in e) {
		(function(key_) {
			e[key_].addEventListener('click', function() {
				 document.getElementById('fMy').appendChild(e[key_]);
				 var month = ['matu', 'kiri'];
				 var c = e[key_].src;
				 for(var m in month) {
				 	var matchMonth = c.indexOf(month[m]);
				 	if(matchMonth !== -1) {
				 	 	console.log('ok');
					}else{
						console.log('no');
					}
				}
				// childNodes で順番を表示
				var a = document.getElementById('fMy').childNodes;
				for(var i = 0; i < a.length; i++) {
					var matchMonth = c.indexOf(a[i+1]);
					if(matchMonth !== -1) {
						console.log('ok');
					}else{
						console.log('no');
					}
				}
			}, false);
			document.getElementById('fYou').appendChild(e[key_]);
		}(key));
	}
	
	return;
};
