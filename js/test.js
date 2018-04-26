'use strict';

(function(){
	//это мы запрашиваем с сервера и выдаётся один из случайных объектов
	var content = 
	[
	{
		testCont: 'Петя и Маша были в гостях у Насти. Они вышли все вместе в сад и сели на траву. Настя взяла хлеба и масла. Они вместе ели, а после пели песни.',
		word: 29,
		question: 'Вопрос : Что ели дети?',
		posAns: ['хлеб с маслом', 'хлеб с колбасой', 'сосиски в тесте'],
		answer: 'хлеб с маслом'
	},
	{
		testCont:'Кот Мурзик был озорной. Однажды он сидел на дереве. Рядом села ворона. Мурзик прыгнул ей на спину. Он вцепился когтями в перья и замер. Ворона испугалась. Она полетела над дорожкой. Кот не удержался и упал. Ему повезло. Он провалился в пушистый снег.',
		word: 42,
		question: 'Вопрос : Как звали кота?',
		posAns: ['Мурзик', 'Пушистик', 'Мурка'],
		answer: 'Мурзик'
	},
	{
		testCont:'Пришла весна, потекла вода. Дети взяли дощечки, сделали лодочку, пустили лодочку по воде. Лодочка плыла, а дети бежали за нею, кричали и ничего впереди себя не видали, и в лужу упали.',
		word: 31,
		question: 'Вопрос : Какое время года описывается?',
		posAns: ['Лето', 'Весна', 'Осень'],
		answer: 'Весна'
	}
	]
	function randomName(min, max) {
		var rand = Math.random()*(max-min)+min;
		return Math.round(rand);
	};
	var startBtn = 'Готов';
	var redyBtn = 'Прочитал';
	var finishBtn = 'Улучшить результат';
	var random = randomName(0, 2);
	var text = document.querySelector('.test-content');
	var timer = document.querySelector('.timer');
	var timerStart;
	var btn = document.querySelector('.test-read');
	var quest = document.querySelector('.questions');
	var questItem = quest.querySelectorAll('.questions-item');
	btn.textContent = startBtn;
	function onTimer() {
		if (btn.firstChild.nodeValue == startBtn) {
			text.textContent = content[random].testCont;
			timer.classList.add('show');
			var timerVal = 1;
			timerStart = setInterval(function() {
				timer.textContent = timerVal++;
			}, 1000);
			btn.textContent = redyBtn;

		} else if (btn.firstChild.nodeValue == redyBtn){
			clearInterval(timerStart);
			text.textContent = content[random].question;
			text.style = 'text-align:center';
			quest.classList.add('show');
			btn.classList.add('hidden');
			for (var i = 0; i <content[random].posAns.length; i++) {
				questItem[i].textContent = content[random].posAns[i];
			}
		} else {
			location.reload();
		}
	}
	btn.addEventListener('click', onTimer);
	quest.addEventListener('click', function(e) {
		if (e.target.innerHTML === content[random].answer) {
			alert('Отлично');
			var res = Math.round(content[random].word*60/timer.innerHTML);
			var str;
			if (res%10 == 1&&res!==11) {
				str = 'слово';
			}if (res%10 == 2||res%10 == 3||res%10 == 4) {
				str = 'слова';
			}else {

				str = 'слов';
			}
			text.textContent = 'Отлично! Твой результат '+ res +' '+ str  +' в минуту.'
			btn.classList.remove('hidden');
			btn.textContent = finishBtn;
			quest.classList.remove('show');

		} else {
			alert('Попробуй ещё раз');
		}

	});

})();