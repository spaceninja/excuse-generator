import './style.css';
import { intros, scapegoats, delays } from './excuse-components.json';
import sample from 'lodash.sample';
import widont from 'widont';

const intro = sample(intros);
const scapegoat = sample(scapegoats);
const delay = sample(delays);

const sentence = `“${intro} ${scapegoat} ${delay}.”`;

const encExcuse = encodeURIComponent(`${sentence}`);
const encUrl = encodeURIComponent('https://excuses.oscorp.net/');

const tweet = `https://twitter.com/intent/tweet?text=${encExcuse}&url=${encUrl}`;
const share = `https://www.facebook.com/sharer/sharer.php?quote=${encExcuse}&u=${encUrl}&display=popup`;

document.getElementById('excuse').innerHTML = widont(sentence);
document.getElementById('twitter').setAttribute('href', tweet);
document.getElementById('facebook').setAttribute('href', share);
