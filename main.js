// Canceling Plans Excuse Generator — builds a random excuse to cancel plans.

// Excuse word lists (formerly excuse-components.json).
const intros = [
  'Sorry I can’t come,',
  'Please forgive my absence,',
  'This is going to sound crazy but',
  'Get this:',
  'I can’t go because',
  'I know you’re going to hate me but',
  'I was minding my own business and — boom! —',
  'I feel terrible but',
  'I regretfully cannot attend,',
  'This is going to sound like an excuse but',
];

const scapegoats = [
  'my nephew',
  'the ghost of Hitler',
  'the Pope',
  'my ex',
  'a high school marching band',
  'Dan Rather',
  'a sad clown',
  'the kid from Air Bud',
  'a professional cricket team',
  'my Tinder date',
];

const delays = [
  'just shit the bed',
  'died in front of me',
  'won’t stop telling me knock knock jokes',
  'is having a nervous breakdown',
  'gave me syphilis',
  'poured lemonade in my gas tank',
  'stabbed me',
  'found my box of human teeth',
  'stole my bicycle',
  'posted my nudes on Instagram',
];

// Pick a random element from an array (replaces lodash.sample).
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Keep the last word from wrapping alone (replaces the `widont` package):
// swap the space before the final word for a non-breaking space.
const widont = (str) => str.replace(/\s+(\S+)\s*$/, '&nbsp;$1');

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
